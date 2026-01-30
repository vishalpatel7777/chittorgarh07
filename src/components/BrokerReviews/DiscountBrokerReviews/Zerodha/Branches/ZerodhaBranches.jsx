import React, { useState } from "react";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";

const ZerodhaBranches = () => {
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

          <section className="mx-auto max-w-[calc(100%-96px)] px-6 py-6 text-[#1e1e27] leading-[1.8rem]">
            {/* Intro */}
            <p className="mb-3 text-[15px]">
              Zerodha is an online stock broker. But it has a local presence in
              some of the cities in India through sales offices, offline
              partners, and online partners.
            </p>

            {/* Ordered List */}
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong className="block mb-1 font-semibold text-[#22222f]">
                  Zerodha Sales Offices
                </strong>
                <p className="text-[15px]">
                  Zerodha has sales offices across large cities in India. The
                  offices are relatively small in size with less than 10
                  employees. The primary function of these offices is sales.
                  These offices do not provide customer service and trading
                  desk. Zerodha is planning to cut-down these offices in future
                  to focus on its online business.
                </p>
              </li>

              <li>
                <strong className="block mb-1 font-semibold text-[#22222f]">
                  Zerodha Partner Offices (Franchise)
                </strong>
                <p className="text-[15px]">
                  Similar to traditional Sub Broker, Zerodha has{" "}
                  <a
                    href="/article/zerodha-partner-program-review-refer-and-earn/462/"
                    className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
                    title="Zerodha Partner Program Explained"
                  >
                    partners
                  </a>{" "}
                  (registered as Authorized Persons or AP) who have offices
                  across most cities in India. These partners do sales,
                  marketing, local customer support, and also provides a trading
                  desk (dealer terminal) to customers who are tagged to them.
                  They also provides Call &amp; Trade services at an extra cost
                  of Rs 50 per executed order.
                </p>
              </li>

              <li>
                <strong className="block mb-1 font-semibold text-[#22222f]">
                  Zerodha Online Marketing Partner
                </strong>
                <p className="text-[15px]">
                  Zerodha has 100&apos;s of online partners whose primary role
                  to bring customers to Zerodha. These online partners do not
                  offer customer service. They also do not have a trading desk.
                </p>
              </li>
            </ol>

            {/* Divider */}
            <hr className="my-6 border-t border-[#22222f1a]" />

            {/* Section Title */}
            <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
              Zerodha Branches / Branch Locator / Franchisee
            </h2>

            {/* Description */}
            <p className="mb-2 text-[15px]">
              To find the Zerodha branch office in your neighborhood; visit the{" "}
              <strong>Contact</strong> section located under the{" "}
              <strong>Support</strong> section at the footer of the Zerodha
              website.
            </p>

            <p className="mb-2 text-[15px]">
              In the Zerodha branch locator, you can find{" "}
              <strong>Zerodha Branches</strong> by selecting state and city.
              Zerodha addresses are also available on the same page.
            </p>

            <p className="mb-2 text-[15px]">
              You can use the branch finder facility for locating the address of
              Zerodha offices in your city:
            </p>

            {/* City List */}
            <ul className="list-disc pl-5 space-y-1 text-[15px]">
              <li>Zerodha office in Delhi</li>
              <li>Zerodha office in Mumbai</li>
              <li>Zerodha branches in Kerala</li>
              <li>Zerodha branches in Delhi</li>
              <li>Zerodha branch in Pune</li>
              <li>Zerodha office in Bangalore</li>
              <li>Zerodha branches in Hyderabad, Andhra Pradesh</li>
              <li>Zerodha Mumbai, Maharashtra</li>
              <li>Zerodha branches in Thane</li>
            </ul>
          </section>


          
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

      <section className="mx-auto  px-3 py-6 text-[#1e1e27] leading-[1.8rem]">
      {/* Image */}
      <div className="my-4 flex justify-center">
        <img
          src="https://www.chittorgarh.net/images/screenshots/zerodha-branch-locator.jpg"
          title="Zerodha Branch Locator"
          alt="Zerodha Branch Locator"
          className="max-w-full rounded border border-[#d0d4d9] p-1 shadow-sm"
        />
      </div>

      {/* Divider */}
      <hr className="my-6 border-t border-[#22222f1a]" />

      {/* Section Title */}
      <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
        About Zerodha
      </h2>

      {/* Content */}
      <p className="mb-2 text-[15px]">
        Incorporated in 2010, Zerodha is Bangalore India based{" "}
        <strong>financial service firm</strong> offering{" "}
        <strong>online brokerage services to retail customers</strong> in India.
        Zerodha is a{" "}
        <a
          href="/article/discount-brokers-a-detailed-overview/469/"
          className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
          title="discount stock broker"
        >
          discount stock broker
        </a>{" "}
        offering ultra-low{" "}
        <a
          href="/keyword/brokerage/1215/"
          className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
          title="Brokerage"
        >
          brokerage
        </a>{" "}
        fees to customers for trading in{" "}
        <a
          href="/keyword/equity-trading/1277/"
          className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
          title="Equity Trading"
        >
          Equity
        </a>
        ,{" "}
        <a
          href="/keyword/derivatives/1265/"
          className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
          title="Derivatives"
        >
          Derivatives
        </a>
        ,{" "}
        <a
          href="/keyword/commodities/1311/"
          className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
          title="Commodities"
        >
          Commodities
        </a>{" "}
        and{" "}
        <a
          href="/keyword/currency/1222/"
          className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
          title="Currency"
        >
          Currency
        </a>{" "}
        at BSE, NSE and MCX exchanges.
      </p>

      <p className="mb-2 text-[15px]">
        Zerodha offers <strong>up to 80% discount in brokerage</strong> in
        comparison to traditional brick-and-mortar brokers by offering online
        trading to the customer who can trade by themselves with minimum help
        from the stock broker.
      </p>

      <p className="mb-2 text-[15px]">
        Zerodha also provides add-on services including online{" "}
        <a
          href="/keyword/depository/158/"
          className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
          title="Depository"
        >
          depository
        </a>{" "}
        services (<strong>
          <a
            href="/keyword/demat-account/40/"
            className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
            title="Demat Account"
          >
            demat account
          </a>
        </strong>) and <strong>mutual funds</strong>.
      </p>

      <p className="mb-2 text-[15px]">
        Unlike traditional brokers, Zerodha <strong>doesn&apos;t offer</strong>{" "}
        many services including a{" "}
        <a
          href="/glossary/3-in-1-account/144/"
          className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
          title="3-in-1 account"
        >
          3-in-1 account
        </a>
        , IPO, tips, recommendations, research reports, fixed deposits, loans,
        insurances, portfolio management services (PMS), investor advisory etc.
      </p>

      <p className="mb-2 text-[15px]">
        Zerodha is popular for <strong>flat Rs 20 per trade</strong> brokerage
        plan. This <strong>Zerodha pricing</strong> offer trades in any segment
        and at any exchange for the exact same price of a maximum Rs 20 per
        trade.
      </p>

      <p className="mb-2 text-[15px]">
        Zerodha offers trading via online, mobile, telephone or through its
        franchise offices.
      </p>

      {/* Facts */}
      <p className="mt-4 mb-2 font-medium text-[15px]">
        Facts about Zerodha (as of July 2023)
      </p>

      <ul className="list-disc pl-5 space-y-1 text-[15px]">
        <li>Number of Zerodha Customer: 64+ Lakhs (Active)</li>
        <li>Number of Zerodha Branch and Partner Offices: 120+</li>
        <li>Number of cities where Zerodha has a presence: 75+</li>
        <li>Leading retail broker in India by active client base.</li>
        <li>Debt-free company.</li>
        <li>Pioneer of online discount brokerage model in India.</li>
        <li>In-house advanced trading platforms.</li>
        <li>India&apos;s first market API launched for retail customers.</li>
        <li>
          Zero Brokerage fees for{" "}
          <a
            href="/keyword/equity-delivery/1214/"
            className="text-[#2163e8] hover:text-[#1a4fba] underline-offset-2 hover:underline"
            title="Equity Delivery"
          >
            Equity delivery
          </a>{" "}
          and mutual funds.
        </li>
      </ul>
    </section>

    </div>
  );
};

export default ZerodhaBranches;
