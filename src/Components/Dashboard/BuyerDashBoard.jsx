import React, { useEffect, useState } from "react";
import  "./Dashboard.css"
import { useNavigate } from "react-router-dom";

export default function BuyerDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("loginMatchedUser"));
    setData(saved);
    console.log(saved);
    console.log(data)
    
  }, []);
const navigate=useNavigate()
const logout=()=>{

  localStorage.removeItem("loginMatchedUser")
  navigate('/login')
}
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <section className="w-full max-w-sm border rounded-lg p-6 shadow-sm bg-white">
        <h2 className="text-xl font-semibold mb-4 text-center">My Details</h2>
        <ul className="space-y-2">
          
          <li>
            <span className="font-medium">Email: </span>
            {data.email || "-"}
          </li>
          <li>
            <span className="font-medium">Location: </span>
            {data.location || "-"}
          </li>
          <li>
            <span className="font-medium">Role: </span>
            {data.role || "-"}
          </li>
        </ul>
        <button type="button" onClick={logout}>Logout</button>
      </section>
    </main>
  );
}
