import ErrorHandler from "../middlewares/error.js";
import { issueAdminToken, isValidAdminToken } from "../store/adminStore.js";
import { listDemoReservations } from "../store/demoReservations.js";
import { Reservation } from "../models/reservation.js";

export const adminLogin = (req, res, next) => {
  const { username, password } = req.body || {};
  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  const expectedPass = process.env.ADMIN_PASSWORD || "admin123";

  if (!username || !password) {
    return next(new ErrorHandler("Username and password are required.", 400));
  }
  if (username !== expectedUser || password !== expectedPass) {
    return next(new ErrorHandler("Invalid admin credentials.", 401));
  }

  const token = issueAdminToken();
  return res.status(200).json({
    success: true,
    token,
    message: "Admin login successful.",
  });
};

export const adminListReservations = async (req, res, next) => {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice("Bearer ".length) : null;

  if (!isValidAdminToken(token)) return next(new ErrorHandler("Unauthorized.", 401));

  try {
    // Demo mode: return in-memory reservations
    if (!process.env.MONGO_URI) {
      return res.status(200).json({
        success: true,
        reservations: listDemoReservations(),
      });
    }

    const reservations = await Reservation.find({}).sort({ _id: -1 }).lean();
    return res.status(200).json({ success: true, reservations });
  } catch (err) {
    return next(err);
  }
};

