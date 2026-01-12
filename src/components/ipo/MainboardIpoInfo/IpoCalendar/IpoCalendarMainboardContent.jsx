import React from "react";
import { FaSearch, FaTimes, FaCalendarAlt } from "react-icons/fa";

const calendarEvents = [
  {
    date: "26 Mon",
    title: "Holiday - Republic Day",
    link: "/report/india-stock-market-holidays-list-bse-nse/91/",
  },
  {
    date: "16 Fri",
    title: "Amagi Media Labs IPO Closes on Jan 16, 2026",
    link: "https://www.chittorgarh.com/ipo_news/amagi-media-labs-ipo/2549/#14170",
  },
  {
    date: "13 Tue",
    title: "Bharat Coking Coal IPO Closes on Jan 13, 2026",
    link: "https://www.chittorgarh.com/ipo_news/bharat-coking-coal-ipo/2462/#14155",
  },
  {
    date: "13 Tue",
    title: "Amagi Media Labs IPO Opens on Jan 13, 2026",
    link: "https://www.chittorgarh.com/ipo_news/amagi-media-labs-ipo/2549/#14169",
  },
  {
    date: "09 Fri",
    title: "Bharat Coking Coal IPO Opens on Jan 9, 2026",
    link: "https://www.chittorgarh.com/ipo_news/bharat-coking-coal-ipo/2462/#14154",
  },
];

const IpoCalendarMainboardContent = () => {
  return (
    <div className="space-y-5">

      {/* Tabs */}
      <ul className="flex gap-2 border-b">
        <li>
          <button className="border-b-2 border-emerald-600 px-3 py-2 text-sm font-semibold text-emerald-700">
            IPO Calendar
          </button>
        </li>
        <li>
          <a
            href="/calendar/sme-ipo-calendar/2/"
            className="px-3 py-2 text-sm font-semibold text-gray-500 hover:text-emerald-600"
          >
            SME IPO Calendar
          </a>
        </li>
      </ul>

      {/* Intro */}
      <p className="text-sm text-gray-700 leading-relaxed">
        Track the events of primary stock markets (IPO) in India using a simple
        calendar view. The{" "}
        <a
          href="/keyword/ipo-calendar/284/"
          className="font-medium text-emerald-700 hover:underline"
        >
          IPO Calendar
        </a>{" "}
        provides IPO schedules and timelines for current and upcoming IPOs.
        Below is the date-wise IPO activity for{" "}
        <strong>January 2026</strong>.
      </p>

      {/* Search */}
      <div className="flex flex-wrap items-center gap-2">
        <input
          placeholder="Title"
          className="
            w-full sm:w-48
            rounded-md border
            px-3 py-1.5
            text-sm
            focus:outline-none
            focus:ring-1 focus:ring-emerald-400
          "
        />
        <button className="flex items-center gap-1 rounded-md bg-emerald-600 px-3 py-1.5 text-sm text-white">
          <FaSearch /> Search
        </button>
        <button className="flex items-center gap-1 rounded-md bg-red-500 px-3 py-1.5 text-sm text-white">
          <FaTimes /> Clear
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Mainboard IPO Calendar January 2026
        </h2>
        <button
          title="Grid View"
          className="rounded-md border px-3 py-1.5 text-sm text-emerald-700 hover:bg-emerald-50"
        >
          <FaCalendarAlt />
        </button>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between text-sm">
        <a className="rounded-full border px-4 py-1 font-semibold text-emerald-700 hover:bg-emerald-50">
          &lt;&lt; December 2025
        </a>
        <a className="rounded-full border px-4 py-1 font-semibold text-emerald-700 hover:bg-emerald-50">
          February 2026 &gt;&gt;
        </a>
      </div>

      {/* List View Calendar */}
      <div className="space-y-3">
        {calendarEvents.map((event, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-16 rounded bg-gray-100 py-2 text-center text-sm font-bold text-gray-600">
              {event.date}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between rounded border bg-gray-50 px-3 py-2">
                <a
                  href={event.link}
                  className="text-sm text-gray-800 hover:underline"
                >
                  {event.title}
                </a>

                <a
                  title="Add to Google Calendar"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  <img
                    src="https://www.chittorgarh.net/images/google-calendar-icon-20x20.png"
                    width="20"
                    height="20"
                    alt="Add to Google Calendar"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Notes */}
      <div className="text-sm text-gray-700">
        <p className="font-semibold mb-1">Note:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Click on the calendar icon to add events to your Google Calendar.
          </li>
          <li>
            IPO Reports –{" "}
            <a
              href="/report/list-of-ipo-by-year-fund-raised-success-mainboard/85/"
              className="text-emerald-700 hover:underline"
            >
              Year-wise list of IPOs in India
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IpoCalendarMainboardContent;
