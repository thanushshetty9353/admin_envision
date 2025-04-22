import React from "react";
import events from "../data/events";
import DashboardStats from "../components/DashboardStats";
import EventCategory from "../components/EventCategory";

function Dashboard() {
  const totalEvents = events.length;
  const totalParticipants = events.reduce((acc, curr) => acc + curr.participants, 0);
  const totalAmount = events.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/admin_bg.jpg')" }}
    >
      {/* Black transparent mask */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

      {/* Actual content on top */}
      <div className="relative z-10 p-6 flex flex-col items-center text-center">
        {/* Centered Heading */}
        <h1 className="text-white text-5xl font-extrabold mb-12 mt-4 tracking-wide">
          ENVISION 2K25
        </h1>

        {/* Dashboard Stats */}
        <div className="w-full">
          <DashboardStats
            totalEvents={totalEvents}
            totalParticipants={totalParticipants}
            totalAmount={totalAmount}
          />
          <EventCategory events={events} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
