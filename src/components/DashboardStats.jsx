import React from "react";

function DashboardStats({ totalEvents, totalParticipants, totalAmount }) {
  return (
    <div className="flex justify-between gap-6 my-6 px-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-md text-white p-6 rounded-2xl shadow-lg w-[30%] text-center border border-white border-opacity-100">
        <h2 className="text-2xl font-semibold">Total Events</h2>
        <p className="text-3xl font-bold mt-2">{totalEvents}</p>
      </div>
      <div className="bg-white bg-opacity-20 backdrop-blur-md text-white p-6 rounded-2xl shadow-lg w-[30%] text-center border border-white border-opacity-100">
        <h2 className="text-2xl font-semibold">Total Participants</h2>
        <p className="text-3xl font-bold mt-2">{totalParticipants}</p>
      </div>
      <div className="bg-white bg-opacity-20 backdrop-blur-md text-white p-6 rounded-2xl shadow-lg w-[30%] text-center border border-white border-opacity-100">
        <h2 className="text-2xl font-semibold">Total Amount</h2>
        <p className="text-3xl font-bold mt-2">₹{totalAmount}</p>
      </div>
    </div>
  );
}

export default DashboardStats;
