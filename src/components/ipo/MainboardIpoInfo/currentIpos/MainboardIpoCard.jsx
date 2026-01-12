import React from "react";

const MainboardIpoCard = () => {
  return (
    <div >
      <div >Mainboard IPOs in India 2026</div>
      <div className="mb-3 overflow-hidden rounded-lg bg-white px-1 py-3 pt-2 shadow-sm lg:px-3 mt-1">
        <div className="mt-2 flex flex-col md:flex-row md:items-start md:gap-4">
          {/* Image */}
          <img
            src="https://www.chittorgarh.net/images/ipo/report_ipo-in-india-list-main-board-sme_82_mainboard.png"
            alt="Mainboard IPOs Watch 2026 | Mainboard IPOs List | New Mainboard IPOs 2026"
            width={300}
            height={150}
            className="mx-auto mb-2 rounded shadow-sm md:mx-0"
          />

          {/* Content */}
          <div className="text-sm text-gray-700">
            <p className="mb-2">
              The upcoming mainboard IPO in India this week and coming week is{" "}
              <a
                href="https://www.chittorgarh.com/ipo/amagi-media-labs-ipo/2549/"
                className="font-medium text-[#216b5e] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amagi Media Labs IPO
              </a>
              .
            </p>

            <p>
              The current mainboard active IPO is{" "}
              <a
                href="https://www.chittorgarh.com/ipo/bharat-coking-coal-ipo/2462/"
                className="font-medium text-[#216b5e] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bharat Coking Coal IPO
              </a>
              .
            </p>

            {/* Status Legend */}
            <div className="mt-4 flex flex-wrap items-center gap-6 px-2">
              <StatusItem color="bg-[#d5ffd8]" label="Issue open" />
              <StatusItem color="bg-[#ffc]" label="Yet to List" />
              <StatusItem color="bg-[#c1f9ff]" label="Listing today" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusItem = ({ color, label }) => (
  <div className="flex items-center">
    <span
      className={`mr-2 h-5 w-5 rounded-full border border-black ${color}`}
    />
    <p className="text-xs font-bold">{label}</p>
  </div>
);

export default MainboardIpoCard;
