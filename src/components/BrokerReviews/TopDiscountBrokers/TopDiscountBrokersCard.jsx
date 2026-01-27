import React from "react";

const TopDiscountBrokersCard = () => {
  return (
    <div
      className="
        mb-4
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
          src="https://www.chittorgarh.net/images/ipo/top-10-discount-stock-brokers-india.jpg"
          alt="Top 10 Discount Brokers in India 2026 (Most Popular)"
          width={300}
          height={173}
          className="
            mx-auto
            mb-2
            block
            rounded
            border-0
            shadow-sm
            md:float-left
            md:me-4
            md:inline
          "
        />

        {/* Content */}
        <div className="text-[15px] leading-[1.8rem] text-[#1e1e27]">
          <p className="mb-3">
            An authentic list of{" "}
            <strong>top discount brokers in India 2026</strong> by the number of
            active clients.{" "}
            <a
              href="/stockbroker/zerodha/18/"
              className="font-medium text-[#2163e8] hover:underline"
            >
              Zerodha
            </a>{" "}
            is the <strong>top most stock broker</strong> among all the brokers.
            Zerodha is followed by discount brokers like{" "}
            <strong>5paisa</strong>, <strong>Upstox</strong> and{" "}
            <strong>SAMCO</strong>.
          </p>

          <p>
            There are{" "}
            <strong>3 top discount brokerage firms</strong> who have over{" "}
            <strong>1 lakh active customers</strong>. The year-wise list of{" "}
            <strong>top 10 discount stock brokers in India</strong> helps you
            find the <strong>big discount brokers</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopDiscountBrokersCard;
