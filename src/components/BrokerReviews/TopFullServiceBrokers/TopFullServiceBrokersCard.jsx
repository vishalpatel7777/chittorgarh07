import React from "react";

const TopFullServiceBrokersCard = () => {
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
        shadow-sm
        lg:px-4
      "
    >
      <div className="mt-2 clearfix">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/top-10-full-service-brokers.jpg"
          alt="Top 10 Full-service Brokers in India 2026 (Most Popular)"
          width={150}
          height={133}
          className="
            mx-auto
            mb-2
            block
            rounded
            shadow-sm
            md:float-left
            md:me-4
            md:inline
          "
        />

        {/* Content */}
        <div className="text-[15px] leading-7 text-[#29292e]">
          <p className="mb-3">
            A true list of{" "}
            <strong>top full-service brokers in India 2026</strong> by the number
            of active clients. ICICI Direct is the{" "}
            <strong>top most stock broker</strong> among all the brokers. ICICI
            Bank is followed by discount brokers like HDFC Securities,
            Sharekhan and Kotak Securities.
          </p>

          <p>
            There are over{" "}
            <strong>15 top full-service brokerage firms</strong> who have over 1
            lakh active customers. The below year-wise list helps you find the{" "}
            <strong>top rated full service brokerage firms</strong> in India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopFullServiceBrokersCard;
