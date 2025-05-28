import React from "react";
import "../styles/UpcomingSchedule.css";

const appointments = [
  {
    time: "09:00 AM",
    name: "John Doe",
    purpose: "Routine Check-up",
  },
  {
    time: "10:30 AM",
    name: "Jane Smith",
    purpose: "Dental Cleaning",
  },
  {
    time: "12:00 PM",
    name: "Alice Johnson",
    purpose: "Consultation",
  },
  {
    time: "02:00 PM",
    name: "Mark Davis",
    purpose: "Follow-up Visit",
  },
];

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2>Upcoming Schedule</h2>
      <ul className="schedule-list">
        {appointments.map((item, index) => (
          <li key={index} className="schedule-item">
            <div className="time">{item.time}</div>
            <div className="details">
              <div className="name">{item.name}</div>
              <div className="purpose">{item.purpose}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingSchedule;
