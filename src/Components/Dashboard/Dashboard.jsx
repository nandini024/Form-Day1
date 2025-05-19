import React, { useEffect, useState } from "react";
import  "./Dashboard.css"

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("signupData"));
    setData(saved ?? {});
  }, []);

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
      </section>
    </main>
  );
}
