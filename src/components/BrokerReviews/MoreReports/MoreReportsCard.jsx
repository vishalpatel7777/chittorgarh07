import React from "react";

const MoreReportsCard = () => {
  return (
    <div
      className="
        mb-4
        overflow-hidden
        rounded-lg
        bg-white
        shadow-sm
        px-1
        py-3
        pt-2
        lg:px-4
      "
    >
      <div className="mt-2 flex flex-col md:flex-row md:items-start">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_report-list_116_48.png"
          alt="Stock Broker Report List"
          width={300}
          height={150}
          className="
            mx-auto
            mb-3
            block
            max-w-full
            rounded
            border-0
            object-contain
            shadow-sm
            md:mx-0
            md:mb-0
            md:mr-4
          "
        />

        {/* Text Content */}
        <div className="text-sm leading-relaxed text-[#1e1e27]">
          <p>
            A list of the reports for the stockbrokers. Find top stock brokers in
            India. Check brokerage fees, charges and read reviews. Compare
            products and services offered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreReportsCard;
