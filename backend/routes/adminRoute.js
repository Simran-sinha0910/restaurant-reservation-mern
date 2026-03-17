import express from "express";
import { adminListReservations, adminLogin } from "../controller/admin.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/reservations", adminListReservations);

export default router;

