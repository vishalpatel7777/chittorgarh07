import React from "react";
import ProStocksSideCard from "../Common/ProStocksSideCard";

const ProStocksBrokerage = () => {
  return (
    <div className="my-3">
      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-4">
        {/* LEFT CONTENT */}
        <div>
          {/* LOGO + FIRST PARAGRAPH (FLOAT BEHAVIOUR) */}
          <img
            src="	https://www.chittorgarh.net/images/ipo/prostocks-logo.png"
            alt="Zerodha Logo"
            width={228}
            height={56}
            className="float-left mr-4 mb-2"
            loading="lazy"
          />

          <div className="space-y-4">
            

            {/* Short Intro Text */}
            <div className="text-sm leading-relaxed text-gray-700">
              ProStocks is a SEBI registered Stock Broker and Depository
              Participant. ProStocks is fastest growing flat fee discount stock
              broker offering online trading at BSE and NSE. ProStocks is famous
              for the unlimited trading plan. This plan offers unlimited Equity
              and Derivatives Trading at Rs 899 per month or unlimited Currency
              Derivatives for Rs 499 per month.{" "}
              <a
                href="/stockbroker/prostocks/38/"
                title="Prostocks Detail"
                className="ml-1 inline-block align-middle"
              >
                <img
                  src="https://www.chittorgarh.net/images/more_red.gif"
                  alt="Know more about Prostocks"
                  title="Know more about Prostocks"
                  className="inline-block"
                  width={76}
                  height={10}
                />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="flex flex-col gap-3">
          <ProStocksSideCard />
        </div>
      </div>
    </div>
  );
};

export default ProStocksBrokerage;
