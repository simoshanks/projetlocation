
import { useState } from "react";
import AdminSidebar from "../composant/AdminSidebar";
import { Outlet } from "react-router-dom";

function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      
      <div
        style={{
          width: sidebarOpen ? "220px" : "0",
          transition: "width 0.3s ease",
          overflow: "hidden",
          position: "fixed",
          height: "100vh",
          backgroundColor: "#8a817c",
          color: "#f4f3ee",
        }}
      >
        {sidebarOpen && <AdminSidebar />}
      </div>

      
      <main
        style={{
          marginLeft: sidebarOpen ? "220px" : "0",
          padding: "20px",
          width: "100%",
          transition: "margin-left 0.3s ease",
        }}
      >
        
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            marginBottom: "20px",
            padding: "8px 12px",
            backgroundColor: "#3b4a6b",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          {sidebarOpen ? "X" : "Meun"}
        </button>

        
        <Outlet />
      </main>
    </div>
  );
}

export default Admin;