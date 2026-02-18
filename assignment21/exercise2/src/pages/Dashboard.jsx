import { Outlet, NavLink } from "react-router-dom";
import "../Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2 className="logo">Admin Panel</h2>

        <NavLink 
          to="users"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Users
        </NavLink>

        <NavLink 
          to="reports"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Reports
        </NavLink>

        <NavLink 
          to="settings"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Settings
        </NavLink>
      </div>

      <div className="content">
        <Outlet />
      </div>

    </div>
  );
}

export default Dashboard;
