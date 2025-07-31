import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <nav
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#3b4a6b", 
        color: "#f4f3ee",           
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)", 
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
      }}
    >
      <h3 className="mb-4" style={{ borderBottom: "1px solid #f4f3ee", paddingBottom: "10px" }}>
        Admin Menu
      </h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <NavLink
            to="/admin/tablevoiture"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#6fa342" : "#f4f3ee", 
              fontWeight: isActive ? "bold" : "normal",
              padding: "8px 12px",
              borderRadius: "5px",
              backgroundColor: isActive ? "#f4f3ee" : "transparent",
              display: "block",
              transition: "all 0.3s ease",
            })}
          >
            🚗 Gestion des voitures
          </NavLink>
        </li>
        <li className="nav-item mb-3">
          <NavLink
            to="/admin/tableuser"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#6fa342" : "#f4f3ee",
              fontWeight: isActive ? "bold" : "normal",
              padding: "8px 12px",
              borderRadius: "5px",
              backgroundColor: isActive ? "#f4f3ee" : "transparent",
              display: "block",
              transition: "all 0.3s ease",
            })}
          >
            👥 Gestion des utilisateurs
          </NavLink>
        </li>
        <li className="nav-item mb-3">
          <NavLink
            to="/admin/tablereservation"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#6fa342" : "#f4f3ee",
              fontWeight: isActive ? "bold" : "normal",
              padding: "8px 12px",
              borderRadius: "5px",
              backgroundColor: isActive ? "#f4f3ee" : "transparent",
              display: "block",
              transition: "all 0.3s ease",
            })}
          >
            📅 Gestion des réservations
          </NavLink>
        </li>
        <li className="nav-item mb-3">
          <NavLink
            to="/admin/tablemessage"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#6fa342" : "#f4f3ee",
              fontWeight: isActive ? "bold" : "normal",
              padding: "8px 12px",
              borderRadius: "5px",
              backgroundColor: isActive ? "#f4f3ee" : "transparent",
              display: "block",
              transition: "all 0.3s ease",
            })}
          >
            📩 Gestion des messages
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AdminSidebar;