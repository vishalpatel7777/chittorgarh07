import React, { useState } from "react";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import { useNavigate } from "react-router-dom";

const ZerodhaComplaints = () => {
  const navigate = useNavigate(); 

  return (
    <div className="mt-6">
      <div className="grid grid-cols-12 gap-4">
        {/* LEFT CONTENT */}
        <div className="col-span-12 md:col-span-9">
          {/* LOGO */}
          <a title="Zerodha Detail" href="/stockbroker/zerodha/18/">
            <img
              loading="lazy"
              src="https://www.chittorgarh.net/images/ipo/zerodha_logo.gif"
              width={228}
              height={56}
              alt="Zerodha Logo"
              className="float-left mr-4 mb-2"
            />
          </a>

          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-gray-700">
              Zerodha is India's leading stockbroker. It is among the largest
              and most reputed brokers offering online flat fee discount
              brokerage services to invest in Equity, Currency, Commodity, IPO,
              Futures &amp; Options, Bonds, Govt. Securities, and Direct Mutual
              Funds. Zerodha charges Rs 0 brokerage for equity delivery trades
              and direct mutual funds. For intraday and Futures, it charges flat
              Rs 20 or 0.03% (whichever is lower) per trade. Further, for
              Options trades, it charges Flat Rs. 20 per executed o...
              <span
                onClick={() => navigate("/broker-reviews/Zerodha")}
                className="inline-block cursor-pointer align-middle"
                title="Zerodha Detail"
              >
                <img
                  loading="lazy"
                  width="76"
                  height="10"
                  alt="Know more about Zerodha"
                  src="https://www.chittorgarh.net/images/more_red.gif"
                  className="inline-block"
                />
              </span>
            </p>

            <p className="text-sm leading-relaxed text-gray-700">
              Zerodha brokerage complaints report provide detail about the
              number of complaints received by the stock exchanges from the
              Zerodha customers. The Zerodha complaints report analyzes the
              Zerodha online complaint data provided by BSE and NSE. This report
              shows the health of the broker.
            </p>

            <p className="text-sm leading-relaxed text-gray-700">
              These complaints are serious grievances against Zerodha broker
              which the broker and customer failed to resolve. The customer then
              filed these legal complaints with the stock exchange.
            </p>

            <p className="text-sm leading-relaxed text-gray-700">
              The Zerodha complaint no. report also provides Zerodha’s number of
              active clients. This shows the growth of the broker year on year.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 md:col-span-3">
          <ZerodhaClientGrowthStatCard
            totalClients="68,52,086"
            growthPercentage="-13.14"
            growthDirection="down"
            infoText="This field shows the number of active customers with the stockbroker in the last month (clients who traded at least once)."
          />

          <OpenZerodhaAccount />
        </div>
      </div>
    </div>
  );
};

export default ZerodhaComplaints;
