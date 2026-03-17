import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:5000";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);

  const token = useMemo(() => localStorage.getItem("adminToken"), []);

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const run = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE}/api/v1/admin/reservations`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setReservations(res.data.reservations || []);
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed to load reservations");
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [navigate, token]);

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div style={{ minHeight: "100vh", padding: 24, background: "#f9fbf2" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", marginBottom: 16 }}>
          <h1 style={{ margin: 0, color: "#111" }}>Admin Dashboard</h1>
          <button
            onClick={logout}
            style={{
              background: "transparent",
              border: "1px solid #333",
              borderRadius: 999,
              padding: "10px 14px",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Logout
          </button>
        </div>

        <div style={{ background: "white", borderRadius: 16, padding: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
          {loading ? (
            <p style={{ margin: 0 }}>Loading reservations…</p>
          ) : reservations.length === 0 ? (
            <p style={{ margin: 0 }}>No reservations yet.</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ textAlign: "left" }}>
                    <th style={{ padding: 10, borderBottom: "1px solid #eee" }}>Name</th>
                    <th style={{ padding: 10, borderBottom: "1px solid #eee" }}>Email</th>
                    <th style={{ padding: 10, borderBottom: "1px solid #eee" }}>Phone</th>
                    <th style={{ padding: 10, borderBottom: "1px solid #eee" }}>Date</th>
                    <th style={{ padding: 10, borderBottom: "1px solid #eee" }}>Time</th>
                    <th style={{ padding: 10, borderBottom: "1px solid #eee" }}>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((r) => (
                    <tr key={r._id || r.id}>
                      <td style={{ padding: 10, borderBottom: "1px solid #f3f3f3" }}>
                        {r.firstName} {r.lastName}
                      </td>
                      <td style={{ padding: 10, borderBottom: "1px solid #f3f3f3" }}>{r.email}</td>
                      <td style={{ padding: 10, borderBottom: "1px solid #f3f3f3" }}>{r.phone}</td>
                      <td style={{ padding: 10, borderBottom: "1px solid #f3f3f3" }}>{r.date}</td>
                      <td style={{ padding: 10, borderBottom: "1px solid #f3f3f3" }}>{r.time}</td>
                      <td style={{ padding: 10, borderBottom: "1px solid #f3f3f3" }}>
                        {r.createdAt ? new Date(r.createdAt).toLocaleString() : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

