// @components/ipo/IpoCalendar/SubComponents/SmeIpos.jsx

import React from "react";
import { ipoCalendarData } from "@data/ipo/MainboardIpoInfo/IpoCalendar/IpoCalendarData";

export const SmeIpos = () => {
  const { title, description, events } = ipoCalendarData.sme;

  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-700 leading-relaxed">
        {description}
      </p>

      <h2 className="text-lg font-semibold text-gray-900">
        {title}
      </h2>

      <div className="space-y-3">
        {events.map((event, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-20 rounded bg-gray-100 py-2 text-center text-sm font-bold text-gray-600">
              {event.date}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between rounded border bg-gray-50 px-3 py-2">
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                  {event.title}
                </span>

                <img
                  src="https://www.chittorgarh.net/images/google-calendar-icon-20x20.png"
                  width="20"
                  height="20"
                  alt="Add to Google Calendar"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

