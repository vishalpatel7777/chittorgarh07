import React, { useState } from "react";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";

const ZerodhaTradingSoftware = () => {
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

          <section className="mx-auto  px-1 py-1 text-[#1e1e27] leading-[1.8rem]">
            {/* Intro */}
            <p className="mb-3 text-[15px]">
              Zerodha offers a range of trading software and tools to its
              customers. It has also partnered with other companies to provide
              3rd party platforms to its customers. Various platforms and tools
              offered by Zerodha includes:
            </p>

            {/* Main Ordered List */}
            <ol className="list-decimal pl-5 space-y-2 text-[15px]">
              <li>
                <a
                  href="#zerodha-kite-web"
                  className="text-[#2163e8] hover:underline"
                >
                  Kite (Web-based trading platform)
                </a>
              </li>
              <li>
                <a
                  href="#zerodha-kite-mobile"
                  className="text-[#2163e8] hover:underline"
                >
                  Kite Mobile (Mobile Trading App)
                </a>
              </li>
              <li>
                <a
                  href="#zerodha-coin"
                  className="text-[#2163e8] hover:underline"
                >
                  Coin (Mutual Fund Investment)
                </a>
              </li>
              <li>
                <a
                  href="#zerodha-console"
                  className="text-[#2163e8] hover:underline"
                >
                  Console (Back-office)
                </a>
              </li>
              <li>
                <a
                  href="#zerodha-sentinel"
                  className="text-[#2163e8] hover:underline"
                >
                  Sentinel (Live Market Alerts)
                </a>
              </li>

              {/* Partner Products */}
              <li>
                <a
                  href="#zerodha-partner-program"
                  className="text-[#2163e8] hover:underline"
                >
                  Zerodha Partner Products
                </a>

                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>
                    <a
                      href="#zerodha-smallcase"
                      className="text-[#2163e8] hover:underline"
                    >
                      Smallcase (Portfolio Building Tool)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#zerodha-streak"
                      className="text-[#2163e8] hover:underline"
                    >
                      Streak (Algo &amp; Strategy Platform)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#zerodha-sensibull"
                      className="text-[#2163e8] hover:underline"
                    >
                      Sensibull (Options Trading Platform)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#zerodha-goldenpi"
                      className="text-[#2163e8] hover:underline"
                    >
                      GoldenPI (Online platform for bonds &amp; debentures)
                    </a>
                  </li>
                </ol>
              </li>

              {/* Trading Tools */}
              <li>
                <a
                  href="#zerodha-trading-tools"
                  className="text-[#2163e8] hover:underline"
                >
                  Zerodha Trading Tools
                </a>

                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Brokerage Calculator</li>
                  <li>Margin Calculator</li>
                  <li>Black-Scholes Calculator</li>
                  <li>Pi Expert Advisors</li>
                </ol>
              </li>

              <li>
                <a
                  href="#zerodha-commodity-trading-software"
                  className="text-[#2163e8] hover:underline"
                >
                  Zerodha Commodity Trading Software
                </a>
              </li>
            </ol>

            {/* Anchor */}
            <div id="zerodha-kite-web" className="mt-6" />

            {/* Divider */}
            <hr className="my-6 border-t border-[#22222f1a]" />
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

      {/* Section Title */}
      <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
        1. Zerodha Kite Website
      </h2>

      {/* Description */}
      <p className="mb-3 text-[15px]">
        <a
          href="/keyword/zerodha-kite/1346/"
          className="text-[#2163e8] hover:underline"
          title="Zerodha Kite"
        >
          Kite
        </a>{" "}
        is a powerful web-based{" "}
        <a
          href="/keyword/trading-platform/1231/"
          className="text-[#2163e8] hover:underline"
          title="Trading Platform"
        >
          trading platform
        </a>{" "}
        offered by Zerodha. The platform is built in-house by the company and
        offers a fast and reliable trading experience to traders. It has a range
        of new and essential features such as:
      </p>

      {/* Features */}
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>
          Universal search instrument to quickly search across 90,000+ stocks
          and F&amp;O contracts across multiple exchanges instantly.
        </li>
        <li>
          Real-time data widgets to get quotes, live ticks and order alerts,
          etc.
        </li>
        <li>
          Advanced charting capabilities with 100+ indicators, studies, and
          tools and extensive historical data.
        </li>
        <li>Multilingual platform with support for 11 regional languages.</li>
        <li>
          Multiple order types including Limit, Market, Stop-Loss, AMO,{" "}
          <a
            href="/keyword/gtt-order/1351/"
            className="text-[#2163e8] hover:underline"
            title="GTT Order"
          >
            GTT
          </a>{" "}
          and Cover orders.
        </li>
        <li>
          Integration with investment apps like{" "}
          <a
            href="/keyword/smallcase/1355/"
            className="text-[#2163e8] hover:underline"
            title="Smallcase"
          >
            smallcase
          </a>{" "}
          and{" "}
          <a
            href="/keyword/streak/1342/"
            className="text-[#2163e8] hover:underline"
            title="Streak"
          >
            streak
          </a>{" "}
          offered by partners of Zerodha.
        </li>
        <li>Single click fund transfer and withdrawal.</li>
      </ul>

      <section className="mx-auto  px-1 py-1 text-[#1e1e27] leading-[1.8rem]">
        {/* Kite Web Image */}
        <div className="my-4 flex justify-center">
          <img
            src="https://www.chittorgarh.net/images/screenshots/zerodha-kite-features-1.png"
            title="Zerodha Kite"
            alt="Zerodha Kite"
            className="max-w-full rounded border border-[#d0d4d9] p-1 justify-items-start"
          />
        </div>

        {/* Spacer */}
        <div className="h-4" />

        {/* Demo Title */}
        <p className="mb-2 text-[15px] font-semibold">
          Zerodha Kite Demo (Zerodha Kite User Manual)
        </p>

        {/* Demo Description */}
        <p className="mb-2 text-[15px]">
          <a
            href="/trading-platform/zerodha-kite/review/1/"
            title="Zerodha Kite Trading Platform Review"
            className="text-[#2163e8] hover:underline"
          >
            Zerodha Kite
          </a>{" "}
          is an advanced trading platform with a range of features. Traders who
          are new to the platform would need some understanding of the various
          features and functionalities of the platform to use it. Zerodha Kite
          User Manual explains all the features of the Kite platform in a simple
          way.
        </p>

        <p className="mb-4 text-[15px]">
          Zerodha customers can{" "}
          <a
            href="https://kite.trade/docs/kite/"
            title="Learn About Zerodha Kite"
            className="text-[#2163e8] hover:underline"
          >
            learn about Kite platform
          </a>
          .
        </p>

        {/* Anchor */}
        <div id="zerodha-kite-mobile" className="mt-6" />

        {/* Divider */}
        <hr className="my-6 border-t border-[#22222f1a]" />

        {/* Section Title */}
        <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
          2. Kite Mobile (Mobile Trading App)
        </h2>

        {/* Description */}
        <p className="mb-3 text-[15px]">
          <a
            href="/broker/zerodha/mobile-app/18/"
            title="Zerodha Kite Mobile Review"
            className="text-[#2163e8] hover:underline"
          >
            Kite Mobile
          </a>{" "}
          is a <strong>mobile trading app</strong> by Zerodha. It brings
          Zerodha’s flagship trading platform Kite Web on Android and iOS
          smartphones. Zerodha customers can download the mobile app and use it
          to analyze and trade. The app offers many essential trading features
          such as:
        </p>

        {/* Features */}
        <ul className="list-disc pl-5 space-y-1 text-[15px]">
          <li>
            One-tap search for all stocks and contracts across all exchanges
          </li>
          <li>Quick Buy and Sell</li>
          <li>Live market data</li>
          <li>Create multiple MarketWatch</li>
          <li>Live market depths</li>
          <li>Advanced charting features with 100+ indicators and studies</li>
          <li>Historical data</li>
          <li>
            Various order types including AMO, GTT (Good Till Triggered), CO
            (Cover orders)
          </li>
          <li>Fund transfer facility</li>
        </ul>

        {/* Mobile App Image */}
        <div className="my-4 flex ">
          <img
            src="https://www.chittorgarh.net/images/screenshots/zerodha-kite-mobile.png"
            title="Zerodha Kite Mobile"
            alt="Zerodha Kite Mobile"
            className="max rounded  p-1  "
          />
        </div>

        {/* Spacer */}
        <div className="h-4" />

        {/* Download Title */}
        <p className="mb-2 text-[15px] font-semibold">
          Zerodha Mobile Trading Software Download
        </p>

        {/* Download Info */}
        <p className="mb-2 text-[15px]">
          The Zerodha mobile app is available for Google Android and Apple iOS
          smartphones. The Zerodha <strong>trading mobile software</strong> can
          be downloaded for free from:
        </p>

        {/* Download Links */}
        <ul className="list-disc pl-5 space-y-1 text-[15px]">
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
              title="Zerodha Kite Download - Google Play Store"
              className="text-[#2163e8] hover:underline"
            >
              Google Play Store
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
              title="Zerodha Kite Download from iTunes"
              className="text-[#2163e8] hover:underline"
            >
              iTunes App Store
            </a>
          </li>
        </ul>
      </section>

      <section className="mx-auto  px-1 py-1 text-[#1e1e27] leading-[1.8rem]">
        {/* =======================
          3. Zerodha Coin
      ======================= */}
        <div id="zerodha-coin" className="mt-6" />
        <hr className="my-6 border-t border-[#22222f1a]" />

        <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
          3. Zerodha Coin (Mutual Fund Investment)
        </h2>

        <p className="mb-3 text-[15px]">
          Zerodha{" "}
          <a
            href="/keyword/coin/1347/"
            title="Coin"
            className="text-[#2163e8] hover:underline"
          >
            Coin
          </a>{" "}
          is a{" "}
          <strong>
            <a
              href="/keyword/mutual-funds/1292/"
              title="Mutual Funds"
              className="text-[#2163e8] hover:underline"
            >
              mutual fund
            </a>{" "}
            investment platform
          </strong>{" "}
          that lets you invest in various funds online. Investors can{" "}
          <a
            href="/broker/zerodha/mutual-fund/18/"
            title="Zerodha Mutual Funds Review"
            className="text-[#2163e8] hover:underline"
          >
            directly invest in mutual funds
          </a>{" "}
          from the companies at zero commission. Various features of the mutual
          fund platform from Zerodha includes:
        </p>

        <ul className="list-disc pl-5 space-y-1 text-[15px]">
          <li>Free platform for mutual fund investments</li>
          <li>Zero commission charged</li>
          <li>
            Mutual funds are directly credited in your Zerodha Demat account
          </li>
          <li>
            Single reports like the capital gain statement, P&amp;L
            visualizations, etc., for all your investments.
          </li>
          <li>SIP facility, increase or decrease SIP as per your wish</li>
          <li>View and track NAV of the funds.</li>
        </ul>

        <div className="my-4 flex ">
          <img
            src="https://www.chittorgarh.net/images/screenshots/zerodha-coin.png"
            title="Zerodha Coin"
            alt="Zerodha Coin"
            className="max-w-full rounded border border-[#d0d4d9] p-1"
          />
        </div>

        <div className="h-4" />

        <p className="mb-2 text-[15px] font-semibold">Coin Mobile App</p>

        <p className="mb-4 text-[15px]">
          Coin is also available as a mobile app for Zerodha customers. The Coin
          mobile app provides you with convenience to invest in 3000+ mutual
          funds from 34 fund houses directly at zero commission. The app offers
          all the features available in the web-based platform of the Coin.
        </p>

        <p className="mb-2 text-[15px] font-semibold">
          Coin Mobile App Download
        </p>

        <p className="mb-2 text-[15px]">
          The Zerodha Coin mobile app is available for Google Android and Apple
          iOS smartphones. The Coin app can be downloaded for free from:
        </p>

        <ul className="list-disc pl-5 space-y-1 text-[15px]">
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.zerodha.coin&referrer=utm_source%3Dcoin_home"
              title="Zerodha Coin Download - Google Play Store"
              className="text-[#2163e8] hover:underline"
            >
              Google Play Store
            </a>
          </li>
          <li>
            <a
              href="https://itunes.apple.com/in/app/coin-by-zerodha/id1392892554?referrer=utm_source%3Dcoin_home"
              title="Zerodha Coin Download from iTunes"
              className="text-[#2163e8] hover:underline"
            >
              iTunes App Store
            </a>
          </li>
        </ul>

        {/* =======================
          4. Zerodha Console
      ======================= */}
        <div id="zerodha-console" className="mt-6" />
        <hr className="my-6 border-t border-[#22222f1a]" />

        <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
          4. Zerodha Console (Back-office)
        </h2>

        <p className="mb-3 text-[15px]">
          <a
            href="/keyword/console/1271/"
            title="Console"
            className="text-[#2163e8] hover:underline"
          >
            Console
          </a>{" "}
          is the back-office platform of Zerodha. It&apos;s a trade and
          reporting dashboard offering a range of features to Zerodha customers
          such as:
        </p>

        <ul className="list-disc pl-5 space-y-1 text-[15px]">
          <li>Facility to place withdrawal requests</li>
          <li>
            Monitor credits and debits in your trading account through your
            account statement
          </li>
          <li>
            View your portfolio – stock positions and mutual fund investments
          </li>
          <li>Access to multiple reports including trade book, P&amp;L etc.</li>
          <li>Download contract notes and margin statements</li>
          <li>Access analytics tools such as tradebook and P&amp;L heatmap</li>
        </ul>

        {/* =======================
          5. Zerodha Sentinel
      ======================= */}
        <div id="zerodha-sentinel" className="mt-6" />
        <hr className="my-6 border-t border-[#22222f1a]" />

        <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
          5. Sentinel (Price Alerts Tool)
        </h2>

        <p className="mb-4 text-[15px]">
          Sentinel is a cloud-based, machine-independent tool for setting up
          price alerts on stocks and contracts. The tool allows traders to set
          up price alerts that can be triggered for any time and even when your
          computer is off.
        </p>

        <p className="mb-2 text-[15px] font-semibold">
          Zerodha Sentinel Features
        </p>

        <ul className="list-disc pl-5 space-y-1 text-[15px]">
          <li>Set alerts for 80,000+ instruments across exchanges.</li>
          <li>Create advanced alerts that combine multiple triggers.</li>
          <li>
            Get alerts on Google Chrome browser, Kite web platform and via
            email.
          </li>
          <li>View history of all your triggered alerts.</li>
          <li>Available for zerodha non-clients also.</li>
          <li>Free 30 trigger alerts based on a single data-point</li>
          <li>
            Supports multiple types of data points including today&apos;s Open,
            High, Low, Close, Volume, Percentage of Change, Open Interest, Total
            Bids, Total Asks, etc.
          </li>
        </ul>

        <div className="my-4 flex">
          <img
            src="https://www.chittorgarh.net/images/screenshots/zerodha-sentinel1.png"
            title="Zerodha Sentinel"
            alt="Zerodha Sentinel"
            className="max-w-full rounded border border-[#d0d4d9] p-1"
          />
        </div>

        <div className="my-4 flex ">
          <img
            src="https://www.chittorgarh.net/images/screenshots/zerodha-sentinel2.png"
            title="Zerodha Sentinel"
            alt="Zerodha Sentinel"
            className="max-w-full rounded border border-[#d0d4d9] p-1"
          />
        </div>
      </section>

      <section className="mx-auto  px-1 py-1 text-[#1e1e27] leading-[1.8rem]">
        {/* =======================
          6. Partner Products
      ======================= */}
        <div id="zerodha-partner-program" className="mt-6" />
        <hr className="my-6 border-t border-[#22222f1a]" />

        <h2 className="mb-4 text-[20px] font-semibold text-[#22222f]">
          6. Partner Products Offered by Zerodha
        </h2>

        {/* =======================
          1. Smallcase
      ======================= */}
        <div id="zerodha-smallcase" className="mt-4" />
        <h3 className="mb-2 text-[17.5px] font-semibold text-[#22222f]">
          1. Zerodha Smallcase
        </h3>

        <p className="mb-3 text-[15px]">
          A{" "}
          <a
            href="/keyword/smallcase/1355/"
            title="Smallcase"
            className="text-[#2163e8] hover:underline"
          >
            smallcase
          </a>{" "}
          is a portfolio or collection of stocks and ETFs built around a single
          idea, strategy or theme. A smallcase includes between 2 to 50
          instruments. It allows you to invest in all the stocks included in a
          specific smallcase, monitor and manage it with one click. The product
          can be integrated with your Kite platform and operated using your
          Zerodha account.
        </p>

        <p className="mb-2 text-[15px] font-semibold">
          Zerodha Smallcase Features
        </p>

        <ul className="list-disc pl-5 space-y-1 text-[15px]">
          <li>55+ different smallcases to choose from</li>
          <li>
            4 smallcase types including thematic, model-based, sector trackers
            and beta
          </li>
          <li>
            Smallcases for investors with all risk types including conservative,
            moderate and aggressive
          </li>
          <li>View and monitor your investments anytime, anywhere</li>
          <li>SIP facility</li>
          <li>No lock-in periods unlike some mutual funds</li>
        </ul>

        <div className="my-4 flex ">
          <img
            src="https://www.chittorgarh.net/images/screenshots/zerodha-smallcase.png"
            title="Zerodha Smallcase"
            alt="Zerodha Smallcase"
            className="max-w-full rounded border border-[#d0d4d9] p-1"
          />
        </div>

        <p className="mb-2 text-[15px] font-semibold">
          Zerodha Smallcase Pricing
        </p>

        <p className="mb-6 text-[15px]">
          One-time fee of Rs 100 per smallcase (no additional fees for investing
          more in the same smallcase). There&apos;s no fee for Weather Investing
          and Smart Beta smallcases. All other orders have a fee of Rs 50.
          Standard brokerage charge is also applicable.
        </p>

        {/* =======================
          2. Streak
      ======================= */}
        <div id="zerodha-streak" className="mt-6" />
        <hr className="my-6 border-t border-[#22222f1a]" />

        <h3 className="mb-2 text-[17.5px] font-semibold text-[#22222f]">
          2. Zerodha Streak Algo Trading
        </h3>

        <p className="mb-3 text-[15px]">
          It is a cloud-based platform for retail traders to create trading
          algorithms without coding, backtest them on historical data and deploy
          them live in the market. Some of the major features of the Zerodha{" "}
          <a
            href="/keyword/streak/1342/"
            title="Streak"
            className="text-[#2163e8] hover:underline"
          >
            streak
          </a>{" "}
          algo trading platform includes:
        </p>

        <ul className="list-disc pl-5 space-y-1 text-[15px]">
          <li>
            Write your strategies in English and the platform does the coding
          </li>
          <li>Create strategies leveraging 60+ indicators</li>
          <li>
            Backtest all your strategies with up to 5 years on any instrument
          </li>
          <li>Deploy multiple strategies with one click</li>
          <li>Get notifications and track live positions</li>
        </ul>

        <p className="mt-4 mb-2 text-[15px] font-semibold">
          Zerodha Streak Free Trial
        </p>

        <p className="mb-4 text-[15px]">
          Zerodha Streak Free Trial is available for a 7 day period. During the
          free trial period, you can do 20 backtests and 2 live deployments of
          strategies at a time.
        </p>

        <p className="mb-2 text-[15px] font-semibold">
          Zerodha Streak Pricing &amp; Charges
        </p>

        <p className="mb-6 text-[15px]">
          Customers have to pay a monthly fee depending on the chosen plan.
          There are 3 plans available Basic, Premium and Ultimate at a monthly
          fee of Rs 500, Rs 900 and Rs 1400.
        </p>

        {/* =======================
          3. Sensibull
      ======================= */}
        <div id="zerodha-sensibull" className="mt-6" />
        <hr className="my-6 border-t border-[#22222f1a]" />

        <h3 className="mb-2 text-[17.5px] font-semibold text-[#22222f]">
          3. Zerodha Sensibull (Options Trading Platform)
        </h3>

        <p className="mb-3 text-[15px]">
          <a
            href="/keyword/sensibull/1341/"
            title="Sensibull"
            className="text-[#2163e8] hover:underline"
          >
            Sensibull
          </a>{" "}
          is an{" "}
          <a
            href="/keyword/options/1217/"
            title="Options"
            className="text-[#2163e8] hover:underline"
          >
            options
          </a>{" "}
          trading platform. The platform is available for customers of several
          stock broking companies including Axis Direct, Kotak Securities,
          Edelweiss, ICICI Direct, Upstox and Karvy stock broking etc.
        </p>

        <p className="mb-3 text-[15px]">
          The{" "}
          <a
            href="/options-trading-platform/sensibull/review/15/"
            title="Zerodha Sensibull Review"
            className="text-[#2163e8] hover:underline"
          >
            Sensibull platform
          </a>{" "}
          suggests strategies based on your market view and helps you select the
          right option contracts with return potential and risks involved.
        </p>

        <ul className="list-disc pl-5 space-y-1 text-[15px]">
          <li>Compare suggested option strategies</li>
          <li>Options strategy builder</li>
          <li>Analyze your trades and positions</li>
          <li>Enhanced option chain</li>
          <li>Events calendar</li>
          <li>Options analyzer</li>
          <li>Direct order placement</li>
          <li>Advanced strategy filters</li>
          <li>
            <a
              href="/keyword/futures/1218/"
              className="text-[#2163e8] hover:underline"
            >
              Futures
            </a>{" "}
            and{" "}
            <a
              href="/keyword/options/1217/"
              className="text-[#2163e8] hover:underline"
            >
              Options
            </a>{" "}
            contract screeners
          </li>
          <li>Simulation trading</li>
        </ul>

        <p className="mt-4 mb-2 text-[15px] font-semibold">
          Zerodha Sensibull Demo (User Manual)
        </p>

        <p className="mb-4 text-[15px]">
          Sensibull requires learning to master its features.{" "}
          <a
            href="https://sensibull.com/docs/index.html"
            title="Learn Zerodha Sensibull"
            className="text-[#2163e8] hover:underline"
          >
            Click here
          </a>{" "}
          to learn Sensibull.
        </p>

        <p className="mb-2 text-[15px] font-semibold">
          Zerodha Sensibull Pricing (Charges)
        </p>

        <p className="mb-6 text-[15px]">
          There are 3 subscription plans for Zerodha Sensibull: Free, Lite and
          Pro. The Lite and Pro versions are available at Rs 800 and Rs 1300 per
          month.
        </p>

        {/* =======================
          4. GoldenPI
      ======================= */}
        <div id="zerodha-goldenpi" className="mt-6" />
        <hr className="my-6 border-t border-[#22222f1a]" />

        <h3 className="mb-2 text-[17.5px] font-semibold text-[#22222f]">
          4. Zerodha GoldenPI
        </h3>

        <p className="mb-3 text-[15px]">
          GoldenPi is India&apos;s first free online platform for{" "}
          <strong>
            <a
              href="/keyword/bonds/1064/"
              className="text-[#2163e8] hover:underline"
            >
              bonds
            </a>{" "}
            and{" "}
            <a
              href="/keyword/debentures/1068/"
              className="text-[#2163e8] hover:underline"
            >
              debentures
            </a>
          </strong>
          . The platform manages the entire investment process and transfers
          units directly to your{" "}
          <a
            href="/keyword/demat-account/40/"
            className="text-[#2163e8] hover:underline"
          >
            Demat account
          </a>
          .
        </p>

        <ol className="list-decimal pl-5 space-y-1 text-[15px]">
          <li>Zero commission investments</li>
          <li>Access to bonds worth 3000+ Crores</li>
          <li>Invest starting from Rs 10,000</li>
          <li>Real-time interest updates</li>
          <li>Goal-based investment process</li>
          <li>24x7 personal assistance</li>
          <li>Demat account opening support</li>
        </ol>

        <p className="mt-4 mb-2 text-[15px] font-semibold">
          Zerodha GoldenPI Pricing (Charges)
        </p>

        <p className="text-[15px]">
          GoldenPi doesn&apos;t charge any fees or commission for investments in
          bonds and debentures.
        </p>
      </section>

      <section className="mx-auto px-1 py-1 text-[#1e1e27] leading-[1.8rem]">
        {/* =======================
          7. Zerodha Trading Tools
      ======================= */}
        <div id="zerodha-trading-tools" className="mt-6" />
        <hr className="my-6 border-t border-[#22222f1a]" />

        <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
          7. Zerodha Trading Tools
        </h2>

        <p className="mb-3 text-[15px]">
          Zerodha also provides a range of online trading calculators to its
          customers. The online trading calculators are useful in quickly
          calculating brokerage fees and margin etc. Trading tools offered by
          Zerodha includes:
        </p>

        <ol className="list-decimal pl-5 space-y-2 text-[15px]">
          <li>
            <strong>Brokerage Calculator:</strong> It helps you in calculating
            profit from a trade by giving you a complete breakdown of brokerage
            fees and various other charges and taxes.
          </li>
          <li>
            <strong>Margin Calculator:</strong> It helps you calculate the
            various margin required like Span, exposure, and total margin etc.,
            to help you know the amount of margin needs to be maintained in a
            trade.
          </li>
          <li>
            <strong>Black-Scholes Calculator:</strong> Designed for Options
            Traders, the calculator uses the popular Black-Scholes model to
            calculate the premium and various Option Greeks that have an
            influence on the pricing of an Options contract.
          </li>
          <li>
            <strong>Pi Expert Advisors:</strong> It allows you to code your
            technical analysis strategy without coding, backtest it to check its
            past performance and take it live on Pi Expert Advisors. It then
            generates real-time Buy/Sell signals.
          </li>
        </ol>

        {/* =======================
          8. Commodity Trading
      ======================= */}
        <div id="zerodha-commodity-trading-software" className="mt-6" />
        <hr className="my-6 border-t border-[#22222f1a]" />

        <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
          8. Zerodha Commodity Trading Software
        </h2>

        <p className="mb-3 text-[15px]">
          Zerodha is a leading online discount broker offering{" "}
          <a
            href="/keyword/commodity/1223/"
            title="Commodity"
            className="text-[#2163e8] hover:underline"
          >
            commodity
          </a>{" "}
          trading services at MCX and NCDEX. Zerodha trading platform for
          commodity includes:
        </p>

        <ol className="list-decimal pl-5 space-y-1 text-[15px]">
          <li>Kite (Trading Website)</li>
          <li>Kite Mobile App (Mobile Trading App)</li>
        </ol>

        <p className="mt-3 mb-6 text-[15px]">
          Zerodha commodity trading software download is available on its
          website. Steps to download the Kite Mobile App have been explained
          above.
        </p>

        {/* =======================
          About Zerodha (Closing)
      ======================= */}
        <hr className="my-6 border-t border-[#22222f1a]" />

        <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
          About Zerodha
        </h2>

        <p className="mb-3 text-[15px]">
          Incorporated in 2010, Zerodha is a Bengaluru based{" "}
          <strong>online discount broker</strong>. The company offers online
          stock broking services in equity,{" "}
          <a
            href="/keyword/currency/1222/"
            title="Currency"
            className="text-[#2163e8] hover:underline"
          >
            currency
          </a>
          , and commodities across NSE, BSE, and MCX.
        </p>

        <p className="mb-3 text-[15px]">
          Zerodha is the largest stock broker in India by active clients.
          Zerodha is popular among the trading community for its low brokerage
          fee and highly advanced trading tools. It charges{" "}
          <strong>zero brokerage fee</strong> for{" "}
          <a
            href="/keyword/equity-delivery/1214/"
            title="Equity Delivery"
            className="text-[#2163e8] hover:underline"
          >
            equity delivery
          </a>{" "}
          trades and <strong>Flat Rs 20</strong> per executed order for{" "}
          <a
            href="/keyword/intraday/1216/"
            title="Intraday"
            className="text-[#2163e8] hover:underline"
          >
            intraday
          </a>{" "}
          and F&amp;O trades across equity, commodity, and currency.
        </p>

        <p className="mb-3 text-[15px]">
          Zerodha offers a range of trading platforms and tools for traders to
          analyze and trade. It leverages new technologies to power its trading
          platforms and is known for introducing new trading features.
        </p>

        <p className="text-[15px]">
          Zerodha is a member of{" "}
          <strong>Central Depository Services Limited (CDSL)</strong> and offers
          depository services such as demat account opening and other related
          services. It also offers online investment services in Mutual Funds
          and Fixed Income Bonds.
        </p>
      </section>
    </div>
  );
};

export default ZerodhaTradingSoftware;
