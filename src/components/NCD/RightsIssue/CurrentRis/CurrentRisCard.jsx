import React from "react";

const CurrentRisCard = () => {
  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white px-1 py-3 pt-2 shadow-sm lg:px-3">
      <div className="mt-2 clear-both">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_latest-rights-issue-review-list_75.png"
          alt="Rights Issues Open in India 2026"
          width={300}
          height={150}
          className="mx-auto mb-2 block rounded-md shadow-sm md:float-left md:me-4 md:mb-0"
        />

        {/* Content */}
        <div className="text-[0.95rem] leading-relaxed text-gray-800">
          <p>
            Rights Issue is an invitation to the existing shareholders to purchase
            the additional shares of the company within a specific period at a
            discounted price. Unlike IPO, the rights issue is not offered to the
            general public but only to the existing shareholders in proportion of
            their existing holdings.
          </p>

          <p className="mt-3">
            Eligible shareholders can either subscribe fully or partly, let the
            rights lapse, or transfer their rights entitlements to others through
            stock exchange trading — known as the renunciation of rights issue.
          </p>

          <p className="mt-3">
            While rights issues allow shareholders to acquire shares at a price
            lower than the market value, investors should carefully evaluate the
            company’s fundamentals, as unlike bonus shares, rights issues come
            with a cost.
          </p>

          {/* Status Legend */}
          <div className="mt-4 grid grid-cols-3 gap-3 px-2 sm:grid-cols-3 md:grid-cols-3">
            {/* Issue Open */}
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full border border-gray-800 bg-green-500" />
              <p className="text-xs font-semibold">Issue open</p>
            </div>

            {/* Upcoming */}
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full border border-gray-800 bg-yellow-300" />
              <p className="text-xs font-semibold">Upcoming</p>
            </div>

            {/* Record Date */}
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full border border-gray-800 bg-cyan-400" />
              <p className="text-xs font-semibold">Record date available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentRisCard;
