import React, { useState, useRef } from "react";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import ZerodhaExclusiveOffer from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaExclusiveOffer";

const images = [
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-coin-mobile-app-review-1.webp",
    alt: "Zerodha Coin App Demo 1",
  },
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-coin-mobile-app-review-2.webp",
    alt: "Zerodha Coin App Demo 2",
  },
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-coin-mobile-app-review-3.webp",
    alt: "Zerodha Coin App Demo 3",
  },
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-coin-mobile-app-review-4.webp",
    alt: "Zerodha Coin App Demo 4",
  },
];

const ZerodhaMutualFund = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

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

          <section className="mx-auto px-1">
            <p className="mb-4 text-[15px] leading-[1.8rem] text-[#1e1e27]">
              Zerodha offers{" "}
              <a
                href="/keyword/direct-mutual-funds/1272/"
                className="text-[#2163e8] hover:underline"
                title="Direct Mutual Funds"
              >
                Direct Mutual Funds
              </a>{" "}
              through the Zerodha{" "}
              <a
                href="/keyword/coin/1347/"
                className="text-[#2163e8] hover:underline"
                title="Coin"
              >
                Coin
              </a>{" "}
              platform. Customers can use the Coin website or mobile app to
              invest in mutual funds. Zerodha does not charge any commission for
              investing in mutual funds.
            </p>

            <p className="text-[15px] leading-[1.8rem] text-[#1e1e27]">
              Zerodha launched the Coin platform for direct mutual fund
              investment in April 2017. By investing in direct mutual fund
              schemes, investors can save significantly on commissions compared
              to regular mutual funds. Zerodha also allows customised SIP plans.
              Zerodha Coin is completely free, with no account opening,
              subscription, or brokerage fees. The platform offers mutual funds
              from more than 40 asset management companies.
            </p>
          </section>

          <section className="mx-auto px-1 my-4">
            <hr className="mb-4 border-[#dfe0e5]" />

            <h2 className="mb-3 text-xl font-semibold text-[#22222f]">
              Zerodha Mutual Fund Charges
            </h2>

            <p className="mb-4 text-[15px] leading-[1.8rem] text-[#1e1e27]">
              Zerodha offers{" "}
              <strong>brokerage-free mutual fund investment</strong>. They do
              not take any commission from customers or asset management
              companies (AMCs).
            </p>

            <p className="mb-4 text-[15px] leading-[1.8rem] text-[#1e1e27]">
              Zerodha provides access to direct mutual funds. This results in an
              additional earning of approximately{" "}
              <strong>1% to 1.5% per year</strong>, as AMCs pass on the savings
              from not paying broker commissions directly to investors.
            </p>

            <p className="mb-4 text-[15px] leading-[1.8rem] text-[#1e1e27]">
              Most mutual fund distributors earn a commission of around{" "}
              <strong>1% to 1.5% annually</strong> from AMCs. In the case of
              direct mutual funds, this commission is eliminated and passed on
              to investors, resulting in higher long-term returns.
            </p>

            <p className="text-[15px] leading-[1.8rem] text-[#1e1e27]">
              There are no separate Zerodha Coin charges for SIP investments.
            </p>
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

      <section className="mx-auto px-1 my-1">
        {/* Zerodha Coin Charges */}
        <h3 className="mb-3 text-lg font-semibold text-[#22222f]">
          Zerodha Coin Charges
        </h3>

        <p className="mb-4 text-[15px] leading-[1.8rem] text-[#1e1e27]">
          Zerodha offers Mutual Funds completely free of cost. Below is the
          detailed breakdown of Zerodha Coin charges:
        </p>

        <div className="overflow-x-auto border border-[#dfe0e5] rounded-xl">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-[#f7f8f9]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[#22222f] border-b border-[#dfe0e5]">
                  Head
                </th>
                <th className="px-4 py-3 text-left font-semibold text-[#22222f] border-b border-[#dfe0e5]">
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Zerodha Coin Account Opening Charges", "Zero"],
                ["Zerodha Mutual Fund AMC Fees", "Zero"],
                ["Zerodha Mutual Fund Brokerage", "Zero"],
                ["Zerodha Mutual Fund Commission", "Zero"],
                ["Zerodha Mutual Fund DP Charges", "Zero"],
                ["Other Charges", "No Hidden Charges"],
              ].map(([label, value], index) => (
                <tr
                  key={index}
                  className="hover:bg-[#f7f8f9] transition-colors"
                >
                  <td className="px-4 py-3 border-b border-[#dfe0e5] text-[#1e1e27]">
                    {label}
                  </td>
                  <td className="px-4 py-3 border-b border-[#dfe0e5] text-[#1e1e27]">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Account Opening */}
        <hr className="my-6 border-[#dfe0e5]" />

        <h2 className="mb-3 text-xl font-semibold text-[#22222f]">
          Zerodha Mutual Fund Account Opening
        </h2>

        <p className="mb-4 text-[15px] leading-[1.8rem] text-[#1e1e27]">
          When you open a trading account with Zerodha, access to the Mutual
          Fund investment platform Coin is automatically activated.
        </p>

        <p className="mb-4 text-[15px] leading-[1.8rem] text-[#1e1e27]">
          After account activation, you can access Coin via its website or
          mobile application using the same login credentials as Zerodha Kite.
          Once logged in, you can start investing in any direct mutual fund
          offered by asset management companies.
        </p>

        {/* Coin Platform Features */}
        <hr className="my-6 border-[#dfe0e5]" />

        <h2 className="mb-3 text-xl font-semibold text-[#22222f]">
          Zerodha Coin (Mutual Fund Investment Platform)
        </h2>

        <p className="mb-4 text-[15px] leading-[1.8rem] text-[#1e1e27]">
          Zerodha Coin helps investors choose and manage mutual funds based on
          their financial goals and risk appetite. Key features include:
        </p>

        <ul className="pl-6 space-y-2 list-disc text-[15px] leading-[1.8rem] text-[#1e1e27]">
          <li>Invest, modify, or pause SIPs anytime without hassle</li>
          <li>Simple navigation across fund categories and schemes</li>
          <li>Track holdings sector-wise or by underlying asset weightage</li>
          <li>Invest in ELSS funds to save tax under Section 80C</li>
          <li>Instant mutual fund payments through UPI</li>
          <li>eMandate support for automated SIP payments</li>
          <li>Hold mutual funds securely in your Zerodha Demat Account</li>
          <li>
            Access short educational videos explained by respective fund
            managers
          </li>
        </ul>
      </section>

      <section className="mx-auto px-1 my-1 text-[#1e1e27]">
        <h3 className="mb-3 text-lg font-semibold text-[#22222f]">
          Zerodha Coin SIP
        </h3>

        <p className="mb-4 text-[15px] leading-[1.8rem]">
          A Systematic Investment Plan (SIP) is a disciplined and scientific way
          to invest in mutual fund schemes at regular intervals. Through
          e-Mandate, investors can get a pre-decided amount automatically
          deducted from their account on each interval (monthly, quarterly,
          etc).
        </p>

        <div className="my-6 flex ">
          <img
            src="https://www.chittorgarh.net/images/screenshots/zerodha-coin-sip-demo-1.png"
            alt="Zerodha Coin SIP"
            loading="lazy"
            className="max-w-full rounded-lg border border-[#dfe0e5]"
          />
        </div>

        <h3 className="mb-3 text-lg font-semibold text-[#22222f]">
          Steps to start investing in SIP Zerodha
        </h3>

        <p className="mb-4 text-[15px] leading-[1.8rem]">
          Starting a SIP with Zerodha is simple and easy. Here are steps to
          start a SIP on Zerodha Coin:
        </p>

        <ul className="mb-4 list-disc pl-6 space-y-2 text-[15px] leading-[1.8rem]">
          <li>Login to Zerodha Coin website or mobile app</li>
          <li>
            On the Coin Dashboard, use the search bar and enter the name of AMC
            or any Mutual Fund
          </li>
          <li>
            You will see direct mutual fund, click on the &apos;Direct SIP&apos;
            option
          </li>
          <li>Choose the initial investment amount</li>
          <li>
            Choose the frequency of the mutual fund SIP as weekly, 15 days,
            monthly and quarterly.
          </li>
          <li>
            Choose the installment amount to deduct on the interval for SIPs.
          </li>
          <li>
            If you want a particular number of installments or a particular
            installment amount to deduct, choose it.
          </li>
          <li>Click on &apos;Start SIP&apos; and confirm the order.</li>
        </ul>

        <p className="mb-2 text-[15px] font-semibold">Note:</p>

        <ol className="mb-6 list-decimal pl-6 space-y-2 text-[15px] leading-[1.8rem]">
          <li>
            To initiate automatic payments for Coin SIP installments, register
            for the eMandate feature on Console. You need to add a debit card or
            net banking details for automatically fund transfer.
          </li>
          <li>
            All SIP orders are sent to the exchange at 1:30 PM on trading days.
            Orders placed after the 1:30 PM cut off time will be sent for
            execution on the next trading day.
          </li>
          <li>
            The mutual fund units will be credited in your demat account T+1 day
            (1 trading day). For orders placed on Monday before the cut off time
            (1:30 PM) the units will be allotted to you by Tuesday at the end of
            the day.
          </li>
        </ol>

        <h3 className="mb-3 text-lg font-semibold text-[#22222f]">
          Steps to stop SIP in Zerodha Coin
        </h3>

        <p className="mb-4 text-[15px] leading-[1.8rem]">
          If for some reason, you want to stop your SIP on Coin, you can do it
          online. To stop a SIP on Zerodha Coin, you need to take the following
          steps-
        </p>

        <ul className="mb-6 list-disc pl-6 space-y-2 text-[15px] leading-[1.8rem]">
          <li>Login to Coin and visit the dashboard</li>
          <li>
            Click on the &apos;SIP &amp; Conditional&apos; tab to open all the
            SIPs you have placed
          </li>
          <li>Click on the &apos;Delete&apos; icon for the particular SIP</li>
          <li>It will open a pop-up</li>
          <li>Click on &apos;Delete SIP&apos; on the pop-up</li>
        </ul>

        <h3 className="mb-3 text-lg font-semibold text-[#22222f]">
          Zerodha Coin App Review
        </h3>

        <p className="text-[15px] leading-[1.8rem]">
          Zerodha offers Coin mobile app free for iPhone and Android Smartphone
          users. The app allows investment in mutual funds of 40 fund houses.
          More than 1 lakh customers have subscribed to Coin. More than 4,000
          subscribers have rated the app and the average rating is 4.5 on Google
          Play Store. The mobile app offers you all the features to buy/sell
          mutual funds and keep a tab on the performance.
        </p>
      </section>

      <section className="mx-auto px-1 my-1 text-[#1e1e27]">
        {/* Image Carousel */}
        <div className="relative my-6">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black"
          >
            ◀
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-10 snap-x snap-mandatory"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="flex shrink-0 snap-center justify-center w-full"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-[260px] md:w-[300px] lg:w-[340px] h-auto rounded-lg border border-[#dfe0e5]"
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black"
          >
            ▶
          </button>
        </div>

        {/* Download Section */}
        <h3 className="mb-3 text-lg font-semibold text-[#22222f]">
          How to download Zerodha Coin App?
        </h3>

        <p className="mb-3 text-[15px] leading-[1.8rem]">
          Here are the steps to download Coin by Zerodha mobile app:
        </p>

        <ul className="mb-4 list-disc pl-6 space-y-2 text-[15px] leading-[1.8rem]">
          <li>Visit the App Store on your smartphone</li>
          <li>
            Type &apos;Coin by Zerodha&apos; in the search bar and press
            &apos;Enter&apos;
          </li>
          <li>Click on the first option available</li>
          <li>Click on the Install button to download the application</li>
        </ul>

        <p className="mb-6 text-[15px] leading-[1.8rem]">
          After installing Coin Zerodha, log in with trading ID and password.
        </p>

        {/* Supported Platforms */}
        <h3 className="mb-3 text-lg font-semibold text-[#22222f]">
          Coin Zerodha App- Supported Platform/ Devices
        </h3>

        <p className="mb-4 text-[15px] leading-[1.8rem]">
          The mobile app of Zerodha is available for Android and iPhone users.
        </p>

        <h4 className="mb-2 font-semibold">
          1. Coin Zerodha for Android Phone
        </h4>
        <p className="mb-4 text-[15px] leading-[1.8rem]">
          Zerodha app for android users is available in the Google play store.
          You can install the app following the process mentioned above and
          login with your account credentials. You can then start investing in
          direct mutual funds of your choice with Coin.
        </p>

        <h4 className="mb-2 font-semibold">2. Coin Zerodha for iPhone</h4>
        <p className="mb-6 text-[15px] leading-[1.8rem]">
          Zerodha Coin is available to download for iPhone users in the iTunes
          store. They can install the app and login with a login ID and password
          to access the Coin dashboard and buy mutual funds of their choice.
        </p>

        {/* Advantages */}
        <h3 className="mb-3 text-lg font-semibold text-[#22222f]">
          Zerodha Coin Advantages
        </h3>

        <ul className="mb-6 list-disc pl-6 space-y-2 text-[15px] leading-[1.8rem]">
          <li>A dedicated direct mutual fund investment platform</li>
          <li>Invest in direct mutual funds of 40+ AMCs</li>
          <li>Free with Zero commission, brokerage and charges</li>
          <li>SIP or lumpsum investment mode available</li>
          <li>Get higher returns by investing in direct mutual funds</li>
          <li>
            Start, pause or stop SIPs online anytime and whenever you want
          </li>
          <li>View your stocks and mutual fund on a single portfolio</li>
          <li>Purchase or redeem fund based on NAV level set by you</li>
          <li>
            A consolidated statement including visualizations, P&amp;L, and
            more.
          </li>
          <li>
            Access multiple direct mutual funds from different AMCs in a single
            account
          </li>
          <li>Available for Android and iPhone users</li>
        </ul>

        {/* Disadvantages */}
        <h3 className="mb-3 text-lg font-semibold text-[#22222f]">
          Zerodha Coin Disadvantages
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-[1.8rem]">
          <li>No research tips and advisory services available.</li>
          <li>
            You need to open a Demat account first for using the Coin platform
          </li>
        </ul>
      </section>

      <div className="space-y-8">
        <hr className="border-gray-200" />

        <h2 className="text-xl font-semibold text-gray-900">
          Zerodha Mutual Fund Customer Care
        </h2>

        <p className="text-gray-700 leading-relaxed">
          You can raise a ticket for any query for Coin customer support. To
          generate a ticket, customers have to first login to the Kite trading
          platform.
        </p>

        <p className="text-gray-700 leading-relaxed">
          You can also contact Zerodha Executive on{" "}
          <span className="font-medium">+91 80 4718 1888</span> during the
          working hours for any issue.
        </p>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-semibold text-gray-900">
          Top Mutual Funds with Zerodha Coin
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Zerodha has partnered with 40 Asset Management Companies (AMCs) to
          offer mutual funds. Each AMC has different schemes under various
          segments such as Liquid Fund, Equity Fund, Short/Long Term Income
          Fund, Nifty Index Fund, Overnight Fund, ELSS, etc. Based on financial
          needs, time horizon and risk parameters, investors can choose any
          scheme.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Coin from Zerodha offers the direct mutual fund where it doesn't
          charge any commission from the investors.
        </p>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-semibold text-gray-900">
          Zerodha Mutual Fund Companies
        </h2>

        <ol className="list-decimal pl-6 space-y-1 text-gray-700">
          <li>Bharti Investment Mutual Funds</li>
          <li>Axis Mutual Funds</li>
          <li>SBI Mutual Funds</li>
          <li>Bank of Baroda Mutual Funds</li>
          <li>Aditya Birla Mutual Fund</li>
          <li>BNP Paribas Mutual Fund</li>
          <li>Canara Robeco Mutual Fund</li>
          <li>DSP Mutual Fund</li>
          <li>Edelweiss Mutual Fund</li>
          <li>Essel Mutual Fund</li>
          <li>Franklin Templeton Mutual Fund</li>
          <li>HDFC Mutual Fund</li>
          <li>HSBC Mutual Fund</li>
          <li>ICICI Prudential Mutual Fund</li>
          <li>IDBI Mutual Fund</li>
          <li>IDFC Mutual Fund</li>
          <li>IIFL Mutual Fund</li>
          <li>Indiabulls Mutual Fund</li>
          <li>Invesco Mutual Fund</li>
          <li>UTI Mutual Fund</li>
          <li>JM Financial Mutual Fund</li>
          <li>Kotak Mutual Fund</li>
          <li>L&amp;T Mutual Fund</li>
          <li>LIC Nomura Mutual Fund</li>
          <li>Mahindra Mutual Fund</li>
          <li>Mirae Asset Mutual Fund</li>
          <li>Motilal Oswal Mutual Fund</li>
          <li>Nippon India Mutual Fund</li>
          <li>PGIM India Mutual Fund</li>
          <li>PPFAS Mutual Fund</li>
          <li>Principal Mutual Fund</li>
          <li>Quant Mutual Fund</li>
          <li>Quantum Mutual Fund</li>
          <li>Shriram Mutual Fund</li>
          <li>Sundaram Mutual Fund</li>
          <li>TATA Mutual Fund</li>
          <li>Taurus Mutual Fund</li>
          <li>Union Mutual Fund</li>
          <li>UTI Mutual Fund</li>
          <li>Yes Mutual Fund</li>
        </ol>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>

        <p className="text-gray-700 leading-relaxed">
          Coin Zerodha App is a good direct mutual fund platform for the
          investors to save a significant amount of money on commissions charged
          by other mutual fund distributors for regular mutual fund schemes.
          Plus, it offers free account opening and zero brokerage. Zerodha Coin
          gives you access to mutual funds from 40+ AMCs to help you invest as
          per your financial goals and preferences. Investors who want to invest
          systematically in a mutual fund can also choose Zerodha Coin SIP. You
          can hold the Mutual Funds in your Zerodha Demat Account.
        </p>

        <hr className="border-gray-200" />

        <h2 className="text-xl font-semibold text-gray-900">About Zerodha</h2>

        <p className="text-gray-700 leading-relaxed">
          Zerodha is the largest discount broker in India in a number of
          customers. Founded in 2010, it is a stock broking firm that heavily
          leverages technology to offers its online services. The company is the
          fastest growing and one of the cheapest brokers in India.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Zerodha allows trading across Equity, Derivatives, Commodity,
          Currency, IPOs, Bonds, Government Securities and Mutual Funds. It has
          a membership with NSE, BSE, MCX, and CDSL.
        </p>
      </div>
      <ZerodhaExclusiveOffer />
    </div>
  );
};

export default ZerodhaMutualFund;
