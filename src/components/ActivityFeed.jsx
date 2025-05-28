import React from "react";
import "../styles/ActivityFeed.css";

const activities = [
  {
    time: "10:00 AM",
    description: "Appointment with Dr. James",
  },
  {
    time: "11:30 AM",
    description: "Blood Test Report Reviewed",
  },
  {
    time: "01:00 PM",
    description: "Physiotherapy Session",
  },
];

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3>Recent Activities</h3>
      <ul className="activity-list">
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            <span className="activity-time">{activity.time}</span>
            <span className="activity-desc">{activity.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
