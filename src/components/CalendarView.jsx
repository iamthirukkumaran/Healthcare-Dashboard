import React from "react";
import "../styles/CalendarView.css";

function CalendarView() {
  return (
    <div className="calendar-view">
      <h2 className="calendar-title">Appointment Calendar</h2>
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className={`calendar-day ${i === 14 ? "active" : ""}`}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
