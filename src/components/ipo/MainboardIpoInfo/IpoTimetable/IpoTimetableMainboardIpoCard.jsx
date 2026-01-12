import React from "react";

const IpoTimetableMainboardIpoCard = () => {
  return (
    <div className="mb-4 rounded-lg bg-white px-2 py-3 pt-2 shadow-sm lg:px-4 overflow-hidden">
      <div className="mt-2 flex flex-col md:flex-row md:items-start md:gap-5">

        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_ipo-list-by-time-table-and-lot-size_118_all.png"
          alt="IPOs Timetable 2026"
          width={300}
          height={150}
          className="
            mx-auto mb-3
            rounded-md shadow-sm
            md:mx-0 md:mb-0
          "
        />

        {/* Content */}
        <div className="text-sm text-gray-700 leading-relaxed">
          <p className="mb-2">
            This report provides a comprehensive overview of the IPOs in{" "}
            <span className="font-semibold">2026</span>, covering key information
            such as IPO timelines and lot size requirements.
          </p>

          <p>
            It serves as a valuable reference for tracking the{" "}
            <a
              href="/keyword/ipo-calendar/284/"
              className="font-medium text-emerald-700 hover:underline"
              title="IPO Calendar"
            >
              IPO calendar
            </a>{" "}
            and planning funds efficiently based on the required IPO bid lot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IpoTimetableMainboardIpoCard;
