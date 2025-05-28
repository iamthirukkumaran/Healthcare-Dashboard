import React from "react";
import { navLinks } from "../data/navLinks";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Health<span style={{ color: "#4E60FF" }}>care.</span></h2>
      </div>

      <nav className="nav-links">
        {navLinks.map((link, index) => (
          <div key={index} className={`nav-item ${link.active ? "active" : ""}`}>
            <img src={link.icon} alt={link.label} className="nav-icon" />
            <span className="nav-label">{link.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
