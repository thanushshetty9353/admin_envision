import React from "react";

function EventCard({ event }) {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-md text-white px-8 py-6 rounded-2xl shadow-lg w-full my-3 border border-white border-opacity-100">
      <div className="flex justify-between items-center text-center">
        {/* Left side - Event name */}
        <h3 className="text-2xl font-bold text-left">{event.name}</h3>

        {/* Right side - Participants & Amount with more space */}
        <div className="flex gap-20 text-right">
          <p className="text-lg font-semibold">Participants: <span className="font-bold">{event.participants}</span></p>
          <p className="text-lg font-semibold">Amount: <span className="font-bold">₹{event.amount}</span></p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
