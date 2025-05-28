import React from "react";
import "../styles/Header.css";
import ProfileImage from "../assets/images/profile.png";
const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="left-section">
        <h1 className="title">Healthcare Dashboard</h1>
      </div>
      <div className="right-section">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <img
          src={ProfileImage} 
          alt="Profile"
          className="profile-image"
        />
      </div>
    </header>
  );
};

export default Header;
