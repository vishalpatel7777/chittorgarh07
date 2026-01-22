import React, { useMemo, useState } from "react";
import { ncdCalendarData } from '@data/NCD/NcdCalanderData'
import CommentsSection from '@components/common/comment/CommentsSection';

const NcdCalander = () => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("list"); // list | grid

  const filteredEvents = useMemo(() => {
    return ncdCalendarData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className=" p-4 m-2">
      <h1 className="text-xl font-bold">NCD Calendar India (NCD Issue in January 2026)</h1>
      <div className="space-y-4">
      {/* Intro Card */}
      <div className="rounded-xl bg-white px-2 py-1 shadow-sm md:px-3">
        <p className="p-2 text-sm leading-relaxed">
          <b>NCD Calendar 2026</b> provides the latest updates on{" "}
          <b>Non-Convertible Debentures (NCD)</b> public issues at BSE and NSE.
          Track open dates, close dates, allotment and listing timelines using a
          simple calendar view.
        </p>
        <p className="px-2 pb-2 text-sm">
          NCD public offers are one of the preferred ways to invest in corporate
          bonds. Find details of <b>NCD public issues in January 2026</b>.
        </p>
    

      {/* Search */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <input
          className="w-full rounded-md border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Title"
          maxLength={15}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          <button className="rounded-md bg-green-600 px-3 py-1 text-sm font-semibold text-white">
            Search
          </button>
          <button
            onClick={() => setSearch("")}
            className="rounded-md bg-red-600 px-3 py-1 text-sm font-semibold text-white"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">NCD Issue in January 2026</h2>
        <button
          onClick={() => setView(view === "list" ? "grid" : "list")}
          className="rounded-md border border-green-600 px-2 py-1 text-sm text-green-700"
        >
          {view === "list" ? "Grid View" : "List View"}
        </button>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between gap-2">
        <button className="rounded-full border border-green-600 px-3 py-1 text-xs font-bold text-green-700">
          &lt;&lt; December 2025
        </button>
        <button className="rounded-full border border-green-600 px-3 py-1 text-xs font-bold text-green-700">
          February 2026 &gt;&gt;
        </button>
      </div>

      {/* LIST VIEW */}
      {view === "list" && (
        <div className="space-y-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex gap-2 rounded-md border bg-gray-50 p-2"
            >
              <div className="flex h-12 w-14 items-center justify-center rounded bg-gray-200 font-bold text-gray-700">
                {event.dayLabel}
              </div>

              <div className="flex flex-1 items-center justify-between gap-2">
                <a href={event.link} className="text-sm">
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

      {/* GRID VIEW (simplified calendar shell) */}
      {view === "grid" && (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border text-sm">
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
                  Grid calendar rendering intentionally simplified.  
                  (Events are rendered accurately in List View.)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Comments */}
      <CommentsSection />

      {/* Footer Note */}
      <div className="rounded-md border p-2 text-sm">
        <p>
          <b>Note:</b>
        </p>
        <ul className="list-disc pl-5">
          <li>
            Click on the calendar icon to add an event to your Google Calendar.
          </li>
        </ul>
      </div>
    </div>
    </div>
      </div>
      );
};

export default NcdCalander;
