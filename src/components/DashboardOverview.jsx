import React from "react";
import "../styles/DashboardOverview.css";
import { MdPeople, MdCalendarToday, MdLocalHospital, MdAttachMoney } from "react-icons/md";

const stats = [
  {
    title: "Patients",
    value: "124",
    icon: <MdPeople />,
  },
  {
    title: "Appointments",
    value: "87",
    icon: <MdCalendarToday />,
  },
  {
    title: "Surgeries",
    value: "12",
    icon: <MdLocalHospital />,
  },
  {
    title: "Revenue",
    value: "$24K",
    icon: <MdAttachMoney />,
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
