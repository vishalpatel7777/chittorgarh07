import React, { useMemo, useState } from "react";
import { RightIssueCalendar as CalendarData } from '@data/NCD/RightIssueCalendar'
import CommentsSection from "@components/common/comment/CommentsSection";

const RightIssueCalendar = () => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("list"); // list | grid

  const filteredEvents = useMemo(() => {
    return CalendarData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
   <div className="p-23">
      <h1 className="text-xl font-bold mb-2">Rights Issue Calendar January 2026</h1>
     <div className="card shadow-sm rounded-[0.7rem] py-1 px-1 md:px-3 mb-3 bg-[var(--base)]">

      {/* Intro Text */}
      <div className="text-sm leading-relaxed space-y-2">
        <p>
          Rights Issue calendar January 2026 is a simple calendar view for the
          latest updates on the rights issue offering by the companies.
        </p>
        <p>
          The calendar gives the details on timelines for active and upcoming
          rights issue and also stores the data on past issues from 2026.
        </p>
        <p>View the rights issue schedule in January 2026.</p>
      </div>

      {/* Search */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <input
          className="w-full md:w-auto flex-1 rounded border border-[var(--border-color)] px-3 py-1 text-sm"
          placeholder="Title"
          maxLength={15}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2">
          <button className="bg-[var(--bs-success)] text-white px-3 py-1 text-sm rounded">
            Search
          </button>
          <button
            onClick={() => setSearch("")}
            className="bg-[var(--bs-danger)] text-white px-3 py-1 text-sm rounded"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mt-4 mb-3">
        <h2 className="text-lg font-bold">Rights Issue in January 2026</h2>
        <button
          onClick={() => setView(view === "list" ? "grid" : "list")}
          className="border border-[var(--bs-success)] text-[var(--bs-success)] px-2 py-1 text-sm rounded"
        >
          {view === "list" ? "Grid View" : "List View"}
        </button>
      </div>

      {/* Month Navigation */}
      <div className="flex justify-between items-center gap-2 my-2">
        <button className="border border-[var(--bs-success)] rounded-full px-3 py-1 text-xs font-bold">
          &lt;&lt; December 2025
        </button>
        <button className="border border-[var(--bs-success)] rounded-full px-3 py-1 text-xs font-bold">
          February 2026 &gt;&gt;
        </button>
      </div>

      {/* GRID VIEW (structure ready) */}
      {view === "grid" && (
        <div className="overflow-x-auto mt-3">
          <table className="min-w-full border border-[var(--border-color)] text-sm">
            <thead className="bg-[var(--stripes)]">
              <tr>
                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map((day) => (
                  <th key={day} className="border px-2 py-1 text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500">
                  Grid view layout prepared.  
                  (Rendering events dynamically comes next.)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* LIST VIEW */}
      {view === "list" && (
        <div className="mt-2 space-y-3">
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex gap-2">
              <div className="w-[60px] text-center font-bold rounded bg-[#e9ecef] text-[#495057] py-2">
                {event.dayLabel}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center border rounded px-3 py-2 bg-[var(--stripes)]">
                  <a href={event.link} className="text-sm">
                    {event.title}
                  </a>
                  <a href={event.googleCal} title="Add to Google Calendar">
                    <img
                      src="https://www.chittorgarh.net/images/google-calendar-icon-20x20.png"
                      width={20}
                      height={20}
                      alt="Add to Google Calendar"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Comments */}
      <div className="mt-4">
        <CommentsSection />
      </div>

      {/* Footer Note */}
      <div className="mt-3 text-sm">
        <p>
          <b>Note:</b>
        </p>
        <ul className="list-disc pl-5">
          <li>
            Click on the calendar icon to add event to your Google Calendar.
          </li>
        </ul>
      </div>
    </div>
   </div>
  );
};

export default RightIssueCalendar;
