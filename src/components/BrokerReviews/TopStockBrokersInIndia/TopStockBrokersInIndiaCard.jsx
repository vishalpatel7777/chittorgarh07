import React from "react";

const TopStockBrokersInIndiaCard = () => {
  return (
    <div
      className="
        mb-3
        overflow-hidden
        rounded-[0.7rem]
        bg-white
        px-1
        py-3
        pt-2
        shadow-[0_0.125rem_0.25rem_rgba(83,88,93,0.15)]
        lg:px-4
      "
    >
      <div className="clearfix mt-2 flex flex-col md:flex-row md:items-start">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/top-20-stock-brokers-in-india.jpg"
          alt="Top Share Brokers in India 2026 (Top 20 Stock Brokers)"
          width={300}
          height={135}
          className="
            mx-auto
            mb-2
            block
            rounded
            border-0
            shadow-[0_0.125rem_0.25rem_rgba(83,88,93,0.15)]
            md:mx-0
            md:mr-4
            md:inline
          "
        />

        {/* Content */}
        <div className="text-[0.9375rem] leading-[1.8rem] text-[#1e1e27]">
          <p className="mb-2">
            A real list of{" "}
            <strong>top stock brokers in India 2026</strong> by number of active
            clients in 2026. Groww is the{" "}
            <strong>top stock broker</strong> among all brokers in India. Groww
            is followed by Zerodha, Angel One, Upstox, and ICICIdirect.
          </p>

          <p>
            There are 20 top stock brokers who have more than 1 lakh active
            clients. The list of{" "}
            <strong>top stock brokers in India</strong>, ranked by year, also
            provides information about the current number of active clients with
            the brokers. Here is the ranking of{" "}
            <strong>top online brokers 2026</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopStockBrokersInIndiaCard;
