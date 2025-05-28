import React from "react";
import "../styles/SimpleAppointmentCard.css";
import drprofile from "../assets/images/white-girl.jpg"

function SimpleAppointmentCard() {
  return (
    <div className="appointment-card">
      <div className="appointment-header">
        <h3>Upcoming Appointment</h3>
        <span className="appointment-status">Confirmed</span>
      </div>
      <div className="appointment-details">
        <div className="appointment-doctor">
          <img
            src={drprofile}
            alt="Doctor"
            className="doctor-avatar"
          />
          <div>
            <h4>Dr. Anjali Rao</h4>
            <p>Cardiologist</p>
          </div>
        </div>
        <div className="appointment-info">
          <p>Date: <strong>June 10, 2025</strong></p>
          <p>Time: <strong>10:00 AM</strong></p>
          <p>Location: <strong>Room 402</strong></p>
        </div>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
