import React, { useState } from "react";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import { useNavigate } from "react-router-dom";


const ZerodhaApi = () => {

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
         <div className="text-sm leading-relaxed text-gray-800">
      Zerodha is India's leading stockbroker. It is among the largest and most
      reputed brokers offering online flat fee discount brokerage services to
      invest in Equity, Currency, Commodity, IPO, Futures &amp; Options, Bonds,
      Govt. Securities, and Direct Mutual Funds. Zerodha charges Rs 0 brokerage
      for equity delivery trades and direct mutual funds. For i...
      <button
        onClick={() => navigate("/broker-reviews/Zerodha")}
        title="Zerodha Detail"
        className="inline-block align-middle ml-2"
      >
        <img
          src="https://www.chittorgarh.net/images/more_red.gif"
          width="76"
          height="10"
          alt="Know more about Zerodha"
          title="Know more about Zerodha"
        />
      </button>
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

export default ZerodhaApi;
