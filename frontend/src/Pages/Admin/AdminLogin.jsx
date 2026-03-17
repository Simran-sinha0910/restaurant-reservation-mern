import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:5000";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE}/api/v1/admin/login`, {
        username,
        password,
      });
      localStorage.setItem("adminToken", res.data.token);
      toast.success("Logged in!");
      navigate("/admin");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#fff8f3" }}>
      <form
        onSubmit={onSubmit}
        style={{
          width: "min(520px, 92vw)",
          background: "white",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ margin: 0, marginBottom: 8, color: "#e25822" }}>Admin Login</h1>
        <p style={{ marginTop: 0, marginBottom: 18, color: "#555" }}>
          Use the admin username and password to view reservations.
        </p>

        <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter admin username"
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid #ddd",
            marginBottom: 12,
            fontSize: 16,
          }}
          required
        />

        <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid #ddd",
            marginBottom: 16,
            fontSize: 16,
          }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            background: "#e25822",
            color: "white",
            border: "none",
            borderRadius: 999,
            padding: "12px 14px",
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Login
        </button>

        <p style={{ marginTop: 14, marginBottom: 0, fontSize: 13, color: "#666" }}>
          Default credentials: <span style={{ fontWeight: 700 }}>admin / admin123</span>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;

