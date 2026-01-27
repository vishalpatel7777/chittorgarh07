import React from "react";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";

const ZerodhaBrokerOverview = () => {
  return (
    <div className="my-3">
      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-4">
        {/* LEFT CONTENT */}
        <div>
          {/* LOGO + FIRST PARAGRAPH (FLOAT BEHAVIOUR) */}
          <img
            src="https://www.chittorgarh.net/images/ipo/zerodha_logo.gif"
            alt="Zerodha Logo"
            width={228}
            height={56}
            className="float-left mr-4 mb-2"
            loading="lazy"
          />

          <p className="text-sm leading-relaxed text-gray-800">
            Zerodha is India's leading{" "}
            <a
              href="/keyword/stockbroker/1211/"
              className="text-blue-600 hover:underline"
            >
              stockbroker
            </a>
            . It is among the largest and most reputed brokers offering online{" "}
            <a
              href="/article/flat_fee_stock_trading_broker_in_india/5/"
              className="font-semibold text-blue-600 hover:underline"
            >
              flat fee discount brokerage
            </a>{" "}
            services to invest in Equity, Currency, Commodity, IPO, Futures &amp;
            Options, Bonds, Govt. Securities, and Direct Mutual Funds.
          </p>

          {/* IMPORTANT: CLEAR FLOAT */}
          <div className="clear-both" />

          {/* REST OF CONTENT (NORMAL FLOW) */}
          <div className="mt-4 space-y-4 text-sm text-gray-800">
            <p>
              Zerodha charges{" "}
              <strong>₹0 brokerage for equity delivery trades</strong> and direct
              mutual funds. For intraday and Futures, it charges{" "}
              <strong>flat ₹20</strong> or 0.03% (whichever is lower) per trade.
              For Options, it charges flat ₹20 per executed order.
            </p>

            <p>
              Zerodha is the <strong>best stock broker</strong> at this time.
              They offer an excellent online trading platform, low brokerage
              fees, and are regarded as one of the most transparent brokers in
              India.
            </p>

            <p className="font-semibold">Key strengths of Zerodha:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>The largest stockbroker by active clients and volume</li>
              <li>One of the safest and most reliable brokers</li>
              <li>Advanced online trading tools</li>
              <li>Zero brokerage on Equity Delivery & Mutual Funds</li>
              <li>Maximum brokerage capped at ₹20 per trade</li>
              <li>Up to 20× leverage on intraday trading</li>
              <li>Zero-commission Direct Mutual Funds</li>
              <li>
                Suitable for beginners, active traders, passive investors, and
                algo traders
              </li>
            </ul>

            <p>
              Zerodha is the most technologically advanced stock broker in India.
              Its platforms include <strong>Zerodha Kite</strong>, Coin,
              Varsity, Trading Q&amp;A, Smallcase, Streak, Sensibull, GoldenPi,
              and Ditto.
            </p>

            <p className="font-semibold">Why Zerodha is safe:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Very low complaints-to-clients ratio</li>
              <li>Zero-debt company</li>
              <li>No pooled client securities</li>
              <li>No proprietary trading with client funds</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="flex flex-col gap-3">
          <ZerodhaClientGrowthStatCard
            totalClients="68,52,086"
            growthPercentage="-13.14"
            growthDirection="down"
            infoText="This field shows the number of active customers with the stockbroker in the last month (clients who traded at least once). The box on the right shows the growth compared to the last financial year."
          />

          <OpenZerodhaAccount />
        </div>
      </div>
    </div>
  );
};

export default ZerodhaBrokerOverview;
