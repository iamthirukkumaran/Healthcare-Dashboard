import React from "react";
import "../styles/DashboardMainContent.css";

function DashboardMainContent() {
  return (
    <section className="dashboard-main">
      <div className="welcome-message">
        <h1>Welcome back, Dr. Smith</h1>
        <p>Here’s what’s happening with your patients today.</p>
      </div>
    </section>
  );
}

export default DashboardMainContent;
