import React from "react";

const UpcomingMainboardIpoCard = () => {
  return (
    <div className="mb-3">
      {/* Title (optional but matches your example style) */}
      <h2 className="text-xl font-semibold mb-2">
        Upcoming IPOs in India | NSE &amp; BSE DRHP Tracker
      </h2>

      {/* Card */}
      <div
        className="
          bg-white
          rounded-lg
          shadow-sm
          overflow-hidden
          px-1 py-3 pt-2
          lg:px-3
        "
      >
        <div className="mt-2 flex flex-col md:flex-row md:items-start md:gap-4">
          
          {/* Image */}
          <img
            src="https://www.chittorgarh.net/images/ipo/report_upcoming-ipos-drhp-filed_158_all.png"
            alt="Upcoming IPOs in India | NSE & BSE DRHP Filing Tracker"
            width={300}
            height={150}
            className="
              mx-auto mb-2
              rounded
              shadow-sm
              md:mx-0
              md:mb-0
              md:shrink-0
            "
          />

          {/* Content */}
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="mb-3">
              Explore the upcoming IPOs in India, featuring companies that have
              filed their Draft Red Herring Prospectus (DRHP) with SEBI or stock
              exchanges. Track the current status of each IPO — whether filed,
              under review, or approved.
            </p>

            <p>
              Once submitted, DRHPs typically undergo a 30-day review process at
              each stage, though timelines may vary depending on document
              completeness and regulatory compliance. This report helps
              investors monitor the evolving IPO pipeline and stay informed
              about future Mainboard IPOs in India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMainboardIpoCard;
