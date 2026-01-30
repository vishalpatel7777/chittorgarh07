import React, { useState } from "react";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";

const ZerodhaIsItSafe = () => {
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

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Zerodha is among the most trusted{" "}
              <a
                href="/keyword/stockbroker/1211/"
                title="Stockbroker"
                className="text-blue-600 hover:underline"
              >
                stockbroker
              </a>{" "}
              in India for many reasons including{" "}
              <strong>open and transparent business practices</strong>,{" "}
              <strong>clear vision</strong> of the founders,{" "}
              <strong>no major violations</strong> reported so far,{" "}
              <strong>continue investment in technology</strong> and{" "}
              <strong>zero debt</strong> company from day 1.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Zerodha is a leading stockbroker in India with over&nbsp;1.25
              crore&nbsp;customers (As of May 2024).&nbsp;&nbsp;Zerodha is in
              the retail stock broking business since 2010. They are audited by
              exchanges and SEBI regularly. As of May&nbsp;2024, none of the
              regulatory agencies have reported any major violations of
              regulations by Zerodha.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Several rumors came about Zerodha on social media in the last few
              years but none of them stand true.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Zerodha is a genuine and trusted stockbroker.&nbsp;Zerodha Kite
              provides data safety, and the app doesn't share user data with
              other companies or organisations.
            </p>

            <p className="font-semibold">&nbsp;</p>
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

      <div className="space-y-6 mt-2">
        <hr />

        <h2 className="section-title text-xl font-semibold">About Zerodha</h2>

        <p className="text-gray-700">
          The following are key facts you should know about Zerodha.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>India's leading stock broker.</li>
          <li>
            Pioneer of online{" "}
            <a
              href="/keyword/discount-broker/1213/"
              title="Discount Broker"
              className="text-blue-600 hover:underline"
            >
              discount broker
            </a>
            age model in India.
          </li>
          <li>Started operations on the 15th of August, 2010.</li>
          <li>
            One of the largest stock broker in India in terms of customers,
            retail order volumes, etc.
          </li>
          <li>Debt-free company.</li>
          <li>
            In-house build{" "}
            <a
              href="/keyword/trading-platform/1231/"
              title="Trading Platform"
              className="text-blue-600 hover:underline"
            >
              trading platform
            </a>{" "}
            Kite.
          </li>
        </ul>

        <hr />

        <h2 className="section-title text-xl font-semibold">
          Why Zerodha is safer than other brokers?
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Debt Free Company</strong>
            <p className="mt-1">
              Zerodha is a zero-debt company. In the corporate world, most
              financial irregularities have debt as the main catalyst. Zerodha
              has always been zero-debt right from the beginning. There is no
              borrowing of any kind.
            </p>
          </li>

          <li>
            <strong>No client securities in the pooled account</strong>
            <p className="mt-1">
              Zerodha doesn't keep client securities in a pooled account.
            </p>
          </li>

          <li>
            <strong>Simple Pricing Model</strong>
            <p className="mt-1">
              Zerodha has one single brokerage rates for all its customers. It
              doesn't matter if you are an{" "}
              <a
                href="/keyword/hni/113/"
                title="HNI"
                className="text-blue-600 hover:underline"
              >
                HNI
              </a>{" "}
              or an investor. No one gets special treatment at Zerodha. Having a
              single rate for all customers reduces the operational risks
              significantly.
            </p>
          </li>

          <li>
            <strong>No Advisory Services</strong>
            <p className="mt-1">
              Zerodha never advises or sell any product promising returns. The
              only thing they do as a business is to offer execution platforms
              for someone who has the intent to buy/sell. No conflict of
              interest.
            </p>
          </li>

          <li>
            <strong>No Proprietary Trading</strong>
            <p className="mt-1">
              Many stockbrokers in the past have been alleged of doing
              proprietary trading from the funds kept in customers' accounts. To
              allay concerns of customers of the company using their money for
              prop trading, as per a{" "}
              <a
                href="https://zerodha.com/z-connect/general/on-conspiracy-theories-about-zerodha"
                title="Zerodha Blog"
                className="text-blue-600 hover:underline"
              >
                blog
              </a>{" "}
              written by Zerodha founder Nithin Kamath, the company has stopped
              proprietary from September 2019.
            </p>
          </li>

          <li>
            <strong>No Credit Risk</strong>
            <p className="mt-1">
              There is no credit risk as less than 5% of Zerodha's own capital
              is lent to customers in any form. Zerodha's own funds in the
              business is greater than 25% of all client funds put together.
              Zerodha is profitable as a business and have enough reserves to
              sustain, even if there was an extended downturn in the economy.
            </p>
          </li>

          <li>
            <strong>Lowest Complaints to Active Clients Ratio</strong>
            <p className="mt-1">
              Zerodha's ratio of{" "}
              <a
                href="/report/broker_complaints_exchange_wise_yearly_nse/38/"
                title="Zerodha Broker Complaints"
                className="text-blue-600 hover:underline"
              >
                complaints to active clients
              </a>{" "}
              is among the least on the exchange.
            </p>
          </li>

          <li>
            <strong>Million+ Happy Customers</strong>
            <p className="mt-1">
              Zerodha has lakhs of customers trading for over 10 years. Zerodha
              is the largest stock broker in India.
            </p>
          </li>
        </ol>

        <hr />

        <h2 className="section-title text-xl font-semibold">
          Zerodha Memberships
        </h2>

        <p className="text-gray-700">
          Zerodha is registered with{" "}
          <a
            href="/keyword/sebi/1031/"
            title="SEBI"
            className="text-blue-600 hover:underline"
          >
            SEBI
          </a>{" "}
          and a member of leading{" "}
          <a
            href="/keyword/stock-exchanges/97/"
            title="Stock Exchanges"
            className="text-blue-600 hover:underline"
          >
            stock exchanges
          </a>{" "}
          like NSE, BSE, and MCX. All stockbrokers offering trading services in
          India must register with SEBI and follow various guidelines.
        </p>

        <p className="text-gray-700">
          Zerodha is also a DP (Depository Participant) with CDSL, one of the
          two Central{" "}
          <a
            href="/keyword/depositories/157/"
            title="Depositories"
            className="text-blue-600 hover:underline"
          >
            Depositories
          </a>{" "}
          in India that manages{" "}
          <a
            href="/keyword/demat-account/40/"
            title="Demat Account"
            className="text-blue-600 hover:underline"
          >
            demat accounts
          </a>
          .
        </p>

        <p className="text-gray-700">
          As per SEBI regulations, all stock brokers need to acquire{" "}
          <a
            href="/article/power-of-attorney-for-demat-account-explained-faq/310/"
            title="Demat Power of Attorney Explained"
            className="text-blue-600 hover:underline"
          >
            PoA (Power of Attorney)
          </a>
          .
        </p>

        <p className="text-gray-700">
          Zerodha's various membership details are as follows:
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            Zerodha Broking Ltd.: Member of NSE &amp; BSE - SEBI Registration
            no.: INZ000031633
          </li>
          <li>
            Depository services: SEBI Registration No.: IN-DP-431-2019; DP ID:
            12081600 (Zerodha Securities Pvt. Ltd.)
          </li>
          <li>
            <a
              href="/keyword/commodity/1223/"
              title="Commodity"
              className="text-blue-600 hover:underline"
            >
              Commodity
            </a>{" "}
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 - SEBI
            Registration no.: INZ000038238
          </li>
        </ul>

        <hr />

        <h2 className="section-title text-xl font-semibold">Conclusion</h2>

        <p className="text-gray-700">
          Zerodha has all the right credentials to be a safe, reliable and
          trustworthy stockbroker In India. The company is a legitimate
          stockbroker with all required certifications and memberships. Many
          leading companies have partnered with Zerodha which adds to its
          credibility. The company has won many awards in various platforms.
          Recently, it has also applied for mutual fund license which speaks for
          its expansion plans. In short, you're as safe with Zerodha as with any
          leading stockbroker in India.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="section-title text-lg font-semibold">Must Read:</h3>

        <ul className="list-disc pl-6">
          <li>
            <a
              href="/article/trading-and-demat-account-safety-guidelines-india/2/"
              title="Trading and Demat Account Safety Guidelines"
              className="text-blue-600 hover:underline"
            >
              10 Steps to safeguard trading and Demat account
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ZerodhaIsItSafe;
