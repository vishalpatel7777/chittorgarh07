import React, { useMemo, useState } from "react";
import { ncdCalendarData } from "@data/NCD/NcdCalanderData";
import CommentsSection from "@components/common/comment/CommentsSection";

const BuybackCalendar = () => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("list"); // list | grid

  const filteredEvents = useMemo(() => {
    return ncdCalendarData.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
   <div className="p-10">
      {/* H1 */}
      <h1 className="text-xl font-bold mb-3">
        Buyback Calendar January 2026
      </h1>
     <div className="bg-white rounded-lg shadow-sm mb-4 px-2 md:px-4 py-2">


      {/* Intro */}
      <div className="text-sm leading-relaxed mb-3 space-y-2">
        <p>
          Buyback calendar January 2026 is a simple calendar view of the latest
          buyback offers by the companies.
        </p>
        <p>
          The calendar gives the details on timelines for active and upcoming
          buyback and stores the data on past offers from 2026.
        </p>
        <p>View the buyback offers schedule in January 2026.</p>
      </div>

      {/* Search */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <input
          type="text"
          maxLength={15}
          placeholder="Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-sm px-2 py-1 border border-gray-300 rounded w-full md:w-64"
        />
        <button className="bg-[#0cbc87] text-white text-sm px-3 py-1 rounded flex items-center gap-1">
          🔍 Search
        </button>
        <button
          onClick={() => setSearch("")}
          className="bg-[#d6293e] text-white text-sm px-3 py-1 rounded flex items-center gap-1"
        >
          ✖ Clear
        </button>
      </div>

      {/* Header + View Toggle */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">
          Buyback offers in January 2026
        </h2>

        <button
          onClick={() => setView(view === "list" ? "grid" : "list")}
          title={view === "list" ? "Grid View" : "List View"}
          className="border border-[#0cbc87] text-[#0cbc87] rounded px-3 py-1 text-sm"
        >
          {view === "list" ? "📅 Grid View" : "📋 List View"}
        </button>
      </div>

      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-3">
        <button className="border border-[#0cbc87] text-[#0cbc87] rounded-full px-3 py-1 text-xs font-semibold">
          &lt;&lt; December 2025
        </button>

        <button className="border border-[#0cbc87] text-[#0cbc87] rounded-full px-3 py-1 text-xs font-semibold">
          February 2026 &gt;&gt;
        </button>
      </div>

      {/* GRID VIEW */}
      {view === "grid" && (
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map(day => (
                  <th
                    key={day}
                    className="border px-2 py-1 text-center font-semibold"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500">
                  Grid calendar rendering intentionally simplified.  
                  Events are fully shown in List View.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* LIST VIEW */}
      {view === "list" && (
        <div className="space-y-3 mb-4">
          {filteredEvents.map(event => (
            <div key={event.id} className="flex gap-3">
              <div className="bg-gray-200 text-gray-700 font-bold rounded px-3 py-2 text-sm">
                {event.dayLabel}
              </div>

              <div className="flex-1 bg-gray-100 border rounded px-3 py-2 flex justify-between items-center">
                <a href={event.link} className="text-sm hover:underline">
                  {event.title}
                </a>
                <a href={event.googleCal} title="Add to Google Calendar">
                  <img
                    src="https://www.chittorgarh.net/images/google-calendar-icon-20x20.png"
                    alt="Add to Google Calendar"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Comments */}
      <CommentsSection />

      {/* Note */}
      <div className="border rounded p-2 text-sm mt-3">
        <p className="font-semibold mb-1">Note:</p>
        <ul className="list-disc pl-5">
          <li>
            Click on the calendar icon to add the event to your Google Calendar.
          </li>
        </ul>
      </div>
    </div>
   </div>
  );
};

export default BuybackCalendar;
