import React from "react";

const IpoSubscriptionInfoCard = ({ type }) => {
  const isMainboard = type === "mainboard";

  const config = {
    mainboard: {
      title: "Live IPO Subscription Status from BSE and NSE: 2026",
      image:
        "https://www.chittorgarh.net/images/ipo/report_ipo-subscription-status-live-bidding-data-bse-nse_21.png",
      description: (
        <>
          <p>
            This report provides live IPO subscription data with details on
            total issue size, category-wise demand (QIB, NII, Retail, Employee,
            Others), and total applications received.
          </p>
          <p className="mt-2">
            Track real-time bidding progress across investor categories and
            monitor overall subscription trends for ongoing IPOs.
          </p>
        </>
      ),
    },
    sme: {
      title:
        "SME IPO Subscription Status (BSE SME & NSE Emerge) - 2026",
      image:
        "https://www.chittorgarh.net/images/ipo/report_sme-ipo-subscription-status-live-bidding-bse-nse_22.png",
      description: (
        <>
          <p>
            This report provides live SME IPO subscription data with details on
            total issue size, category-wise demand (QIB, NII, Retail, Employee)
            and total applications received.
          </p>
          <p className="mt-2">
            Track real-time bidding progress across investor categories and
            monitor overall subscription trends for ongoing SME IPOs.
          </p>
        </>
      ),
    },
  };

  const data = config[isMainboard ? "mainboard" : "sme"];

  return (
    <>
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
        {data.title}
      </h1>

      {/* Card */}
      <div className="
        bg-white
        rounded-lg
        shadow-sm
        px-2 lg:px-4
        py-3
        mb-4
        overflow-hidden
      ">
        <div className="flex flex-col md:flex-row md:items-start md:gap-4 mt-2">
          {/* Image */}
          <img
            src={data.image}
            alt={data.title}
            width={300}
            height={150}
            className="mx-auto mb-3 rounded shadow-sm md:mx-0"
          />

          {/* Content */}
          <div className="text-sm text-gray-700">
            {data.description}

            {/* Status legend */}
            <div className="mt-4 flex flex-wrap gap-6">
              <Legend color="bg-green-200" label="Issue open" />
              <Legend color="bg-yellow-200" label="Yet to List" />
              <Legend color="bg-cyan-200" label="Listing today" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span
      className={`w-5 h-5 rounded-full border border-black ${color}`}
    />
    <span className="text-xs font-semibold">{label}</span>
  </div>
);

export default IpoSubscriptionInfoCard;


