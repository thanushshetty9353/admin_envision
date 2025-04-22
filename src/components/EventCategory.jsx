import React, { useState } from "react";
import EventCard from "./EventCard";

function EventCategory({ events }) {
  const [category, setCategory] = useState("Mega");
  const categories = ["Mega", "Technical", "Non-Technical"];

  const filteredEvents = events.filter((e) => e.category === category);

  return (
    <div>
      <div className="flex justify-center my-4 gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              category === cat
                ? "bg-yellow-500 text-black bg-opacity-70 backdrop-blur-md border border-white border-opacity-100"
                : "bg-white bg-opacity-20 backdrop-blur-md text-white"
            }`}
          >
            {cat} Events
          </button>
        ))}
      </div>
      <div>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventCategory;
