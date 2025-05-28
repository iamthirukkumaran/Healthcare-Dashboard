import React from "react";
import "../styles/DashboardOverview.css";

const stats = [
  {
    title: "Patients",
    value: "124",
    icon: "🧑‍⚕️",
  },
  {
    title: "Appointments",
    value: "87",
    icon: "📅",
  },
  {
    title: "Surgeries",
    value: "12",
    icon: "🔪",
  },
  {
    title: "Revenue",
    value: "$24K",
    icon: "💰",
  },
];

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      {stats.map((stat, index) => (
        <div key={index} className="overview-card">
          <span className="overview-icon">{stat.icon}</span>
          <div className="overview-info">
            <p className="overview-title">{stat.title}</p>
            <h3 className="overview-value">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardOverview;
