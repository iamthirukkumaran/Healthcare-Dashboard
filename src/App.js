import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";
import ActivityFeed from "./components/ActivityFeed";
import AnatomySection from "./components/AnatomySection";
import CalendarView from "./components/CalendarView";
import DashboardOverview from "./components/DashboardOverview";
import HealthStatusCard from "./components/HealthStatusCard";
import SimpleAppointmentCard from "./components/SimpleAppointmentCard";
import ReportsSection from "./components/ReportsSection";
import UpcomingSchedule from "./components/UpcomingSchedule";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container" style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div className="main-content" style={{ flex: 1, marginLeft: "250px", padding: "20px", backgroundColor: "#f7f9fc" }}>
        <Header />
        <DashboardMainContent />
        <DashboardOverview />
        <HealthStatusCard />
        <CalendarView />
        <SimpleAppointmentCard />
        <UpcomingSchedule />
        <AnatomySection />
        <ReportsSection />
        <ActivityFeed />
      </div>
    </div>
  );
}

export default App;