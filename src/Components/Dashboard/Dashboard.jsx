import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("loginMatchedUser")) || {};
    setData(saved);
  }, []);

  const logout = () => {
    localStorage.removeItem("loginMatchedUser");
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      {/* Logout button aligned right */}
      <div className="logout-container">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Details card */}
      <div className="dashboard-container">
        <h2>My Details</h2>
        <ul>
          <li>
            <strong>Email:</strong> {data.email || "-"}
          </li>
          <li>
            <strong>Location:</strong> {data.location || "-"}
          </li>
          <li>
            <strong>Role:</strong> {data.role || "-"}
          </li>
        </ul>
      </div>
    </div>
  );
}
