import React from "react";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";

const ZerodhaBrokerIntro = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* LEFT CONTENT */}
        <div className="col-span-12 md:col-span-9">
          {/* LOGO */}
          <a title="Zerodha Detail" href="/stockbroker/zerodha/18/">
            <img
              loading="lazy"
              className="float-left mr-4 mb-2"
              width="228"
              height="56"
              alt="Zerodha Logo"
              src="https://www.chittorgarh.net/images/ipo/zerodha_logo.gif"
            />
          </a>

          {/* INTRO PARAGRAPHS */}
          <p>
            Zerodha offers 3 mobile apps-{" "}
            <a href="/keyword/zerodha-kite/1346/" title="Zerodha Kite">
              Zerodha Kite
            </a>
            , Zerodha{" "}
            <a href="/keyword/coin/1347/" title="Coin">
              Coin
            </a>{" "}
            and Zerodha{" "}
            <a href="/keyword/varsity/1348/" title="Varsity">
              Varsity
            </a>{" "}
            to its customers. Zerodha Kite is a trading app that allows
            customers to trade from anywhere. Zerodha Coin App is designed to
            facilitate online{" "}
            <a href="/keyword/mutual-funds/1292/" title="Mutual Funds">
              mutual fund
            </a>{" "}
            investments and Zerodha Varsity provides stock market education to
            customers.
          </p>

          <p>
            Technology is one of the key USPs of Zerodha. The company has
            invested significantly in providing advanced proprietary trading
            platforms. Zerodha also provides its customers access to many 3rd
            party trading software.
          </p>

          {/* SECTION */}
          <h2 className="section-title font-bold text-xl">
            Kite, Zerodha's home grown trading platform
          </h2>

          <p>
            Kite is an intuitive, lightweight and powerful trading application
            offered by Zerodha. Build in-house, Kite is the simplest trading app
            available in India stock market.
          </p>

          <p>
            With a full market watch, extensive charts with 100+ indicators and
            advance order type (
            <a href="/keyword/cover-order/1366/" title="Cover order">
              cover order
            </a>{" "}
            and GTT order), Kite is loaded with features required by advance
            trader.
          </p>

          <p>Key feature of Kite Platform:</p>

          <ul className="list-disc pl-5">
            <li>
              Multilingual Trading - Kite is available in 11 regional languages
            </li>

            <li>
              Kite web has a responsive design which makes it work nicely on a
              mobile web browser.
            </li>

            <li>Fund transfer and withdrawal in a single click.</li>

            <li>
              <strong>Product types</strong> offered
              <ul className="list-disc pl-5">
                <li>
                  <strong>
                    <a
                      href="/keyword/cash-and-carry-cnc/1255/"
                      title="Cash-and-carry (CNC)"
                    >
                      CNC
                    </a>{" "}
                    (Cash &amp; Carry)
                  </strong>{" "}
                  -{" "}
                  <a
                    href="/keyword/equity-delivery/1214/"
                    title="Equity Delivery"
                  >
                    Delivery
                  </a>{" "}
                  based equity trades
                </li>

                <li>
                  <strong>MIS (Margin Intraday Square off)</strong> - Intraday
                  trades in the equity and F&amp;O
                </li>

                <li>
                  <strong>NRML (Normal F&amp;O trades)</strong> -
                  Intraday/overnight F&amp;O trades without additional leverage
                </li>

                <li>
                  <strong>
                    <a href="/keyword/cover-order/1366/" title="Cover order">
                      Cover order
                    </a>
                    s
                  </strong>{" "}
                  - Intraday{" "}
                  <a href="/keyword/market-order/1325/" title="Market Order">
                    market order
                  </a>
                  s (NSE, NSE F&amp;O, Currency, and{" "}
                  <a href="/keyword/mcx/1304/" title="MCX">
                    MCX
                  </a>
                  ) with a predetermined stop-loss order.
                </li>

                <li>
                  <strong>
                    <a href="/keyword/gtt-order/1351/" title="GTT Order">
                      GTT order
                    </a>
                    s
                  </strong>{" "}
                  - Orders for{" "}
                  <a
                    href="/keyword/equity-delivery/1214/"
                    title="Equity Delivery"
                  >
                    Equity Delivery
                  </a>{" "}
                  trades and Bank Nifty and Nifty F&amp;O that remain active
                  till triggered.
                </li>

                <li>
                  <strong>
                    <a href="/keyword/amo/1365/" title="AMO">
                      AMO
                    </a>{" "}
                    (After Market Orders)
                  </strong>{" "}
                  - Orders for the next trading day the previous day itself.
                </li>
              </ul>
            </li>

            <li>
              <strong>Order types</strong> offered
              <ul className="list-disc pl-5">
                <li>
                  <strong>
                    <a href="/keyword/limit-order/1324/" title="Limit Order">
                      Limit order
                    </a>
                  </strong>{" "}
                  - buy or sell order at a predetermined price
                </li>

                <li>
                  <strong>
                    <a href="/keyword/market-order/1325/" title="Market Order">
                      Market order
                    </a>
                  </strong>{" "}
                  - buy or sell order at the best available price
                </li>

                <li>
                  <strong>Stoploss or trigger (SL and SL-M) order</strong> -
                  Stoploss if placing a predetermined loss booking order at a
                  trigger price.
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="section-title font-bold text-xl">
            Kite Android (Zerodha&apos;s Mobile Trading Software)
          </h2>

          <p>
            Kite Android App is the Mobile Trading App designed as part of Kite
            trading platform. The Android App is very intuitive, powerful and
            fast. The app allows its online customers to trade on-the-go using a
            smartphone.
          </p>

          <p>
            Zerodha customer can trade in{" "}
            <a href="/keyword/equity-trading/1277/" title="Equity Trading">
              equity
            </a>
            ,{" "}
            <a href="/keyword/derivatives/1265/" title="Derivatives">
              derivatives
            </a>
            ,{" "}
            <a href="/keyword/currency/1222/" title="Currency">
              currency
            </a>{" "}
            derivatives and{" "}
            <a href="/keyword/commodity/1223/" title="Commodity">
              commodity
            </a>{" "}
            through this Zerodha mobile trading app.
          </p>

          <p>
            The Kite Android App is available for free of charge to all its
            online customers.
          </p>

          <h2 className="section-title font-bold text-xl">
            Zerodha App - Supported Platform / Devices
          </h2>

          <p>
            The mobile app of Zerodha is available for android and iOS
            smartphone devices.
          </p>

          <ol className="list-decimal pl-5">
            <li>
              <strong>Zerodha App for Android Phone</strong>
              <br />
              <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en">
                Zerodha app for Android phones is available at Android Play
                Store for download.
              </a>
            </li>

            <li>
              <strong>Zerodha Trading App for iPhone</strong>
              <br />
              <a href="https://apps.apple.com/in/app/kite-zerodha/id1449453802">
                Zerodha app for iOS (Apple iPhone) is available at iTunes store
                for download.
              </a>
            </li>
          </ol>
                <div>
  <h2 className="text-xl font-semibold my-4">
    Zerodha Kite Mobile App Demo
  </h2>

  <p className="mb-4 text-sm leading-relaxed text-gray-800">
    Zerodha Kite Mobile App offers a range of essential and advanced features to
    traders. The app is suited for all types of traders. A Zerodha Kite demo can
    help you understand the various features of the app and use it optimally.{" "}
    <a
      rel="nofollow"
      href="https://www.youtube.com/watch?v=tey4ZOQGntE"
      className="text-blue-600 hover:underline ml-1"
    >
      Watch this video to know about Kite 3.0 mobile app features.
    </a>
  </p>

  {/* Horizontal scroll carousel */}
  <div className="overflow-x-auto">
    <div className="flex gap-4 snap-x snap-mandatory">
      {[
        {
          title: "Zerodha Mobile App Kite Demo 1",
          src: "https://www.chittorgarh.net/images/screenshots/zerodha-mobile-trading-app-kite-demo-1.jpg",
        },
        {
          title: "Zerodha Mobile App Kite Demo 2",
          src: "https://www.chittorgarh.net/images/screenshots/zerodha-mobile-trading-app-kite-demo-2.jpg",
        },
        {
          title: "Zerodha Mobile App Kite Demo 3",
          src: "https://www.chittorgarh.net/images/screenshots/zerodha-mobile-trading-app-kite-demo-3.jpg",
        },
        {
          title: "Zerodha Mobile App Kite Demo 4",
          src: "https://www.chittorgarh.net/images/screenshots/zerodha-mobile-trading-app-kite-demo-4.jpg",
        },
        {
          title: "Zerodha Mobile App Kite Demo 5",
          src: "https://www.chittorgarh.net/images/screenshots/zerodha-mobile-trading-app-kite-demo-5.jpg",
        },
      ].map((img, idx) => (
        <div
          key={idx}
          className="min-w-full snap-center flex justify-center"
        >
          <a href={img.src} title={img.title}>
            <img
              src={img.src}
              alt={img.title}
              loading="lazy"
              className="max-w-[70%] mx-auto rounded shadow"
            />
          </a>
        </div>
      ))}
    </div>
  </div>

  <h2 className="text-xl font-semibold my-4">
    10 Features of Zerodha&apos;s Kite Mobile App
  </h2>

  <p className="mb-3 text-sm text-gray-800">
    Kite mobile trading app offers all features of Kite Web. Key features of the
    Zerodha app include:
  </p>

  <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-800">
    <li>
      Online Trading on Mobile Phones, Tablets and iPad
      <ol className="list-decimal pl-5 mt-2 space-y-1">
        <li>
          <a
            href="/keyword/equity-delivery/1214/"
            title="Equity Delivery"
            className="text-blue-600 hover:underline"
          >
            Equity Delivery
          </a>{" "}
          Trading
        </li>
        <li>
          Equity{" "}
          <a
            href="/keyword/intraday-trading/1225/"
            title="Intraday Trading"
            className="text-blue-600 hover:underline"
          >
            Intraday Trading
          </a>
        </li>
        <li>
          <a
            href="/keyword/equity-derivatives/1269/"
            title="Equity Derivatives"
            className="text-blue-600 hover:underline"
          >
            Equity Derivatives
          </a>{" "}
          Trading (F&amp;O)
        </li>
        <li>
          <a
            href="/keyword/currency-derivatives/1268/"
            title="Currency Derivatives"
            className="text-blue-600 hover:underline"
          >
            Currency Derivatives
          </a>{" "}
          Trading (F&amp;O)
        </li>
        <li>
          <a
            href="/keyword/commodity/1223/"
            title="Commodity"
            className="text-blue-600 hover:underline"
          >
            Commodity
          </a>{" "}
          Derivatives Trading (F&amp;O)
        </li>
      </ol>
    </li>

    <li>
      Advance orders available –{" "}
      <a
        href="/keyword/cover-order/1366/"
        className="text-blue-600 hover:underline"
      >
        Cover order
      </a>
      ,{" "}
      <a
        href="/keyword/gtt-order/1351/"
        className="text-blue-600 hover:underline"
      >
        GTT order
      </a>{" "}
      and{" "}
      <a href="/keyword/amo/1365/" className="text-blue-600 hover:underline">
        AMO
      </a>{" "}
      order.
    </li>

    <li>Market Watch with streaming quotes</li>
    <li>5 Market watch list with 20 scripts in each one of them.</li>
    <li>Access to level 3 data, or 20 market depth.</li>
    <li>Years of charts with 100+ indicators</li>
    <li>Live market depth (5 bids &amp; offers)</li>
    <li>
      Online fund transfer and withdrawal for Equity &amp; Commodity account
    </li>
    <li>View available account balance, used margin, exposure margin</li>
    <li>Manage portfolio by holdings &amp; positions in separate tabs</li>
  </ol>

  <p className="mt-4 text-sm text-gray-800">
    Founded in Aug 2010, Zerodha is the largest stock brokering company in India.
    Zerodha offers low cost brokerage for trading in Equity, Equity F&amp;O,
    Commodity and Currency F&amp;O segments at BSE, NSE and MCX. Zerodha, the{" "}
    <a
      href="/keyword/discount-stock-broker/1237/"
      className="text-blue-600 hover:underline"
    >
      discount stock broker
    </a>{" "}
    also offers{" "}
    <a
      href="/keyword/depository/158/"
      className="text-blue-600 hover:underline"
    >
      depository
    </a>{" "}
    services and mutual funds.
  </p>

  <p className="mt-2 text-sm text-gray-800">
    Zerodha is the most innovative stock broker of the current time. By investing
    a huge amount of money in technology, Zerodha is trying to make trading and
    investing convenient, safe, fast and extremely cheap.
  </p>

  <p className="mt-2 text-sm text-gray-800">
    Zerodha has developed an in-house{" "}
    <a
      href="/keyword/trading-platform/1231/"
      className="text-blue-600 hover:underline"
    >
      trading platform
    </a>
    , trading tools, back office, partner portals, discussion forums, technical
    analysis tools and API for integrating its trading platform to other
    application developers.
  </p>

  <p className="mt-2 text-sm text-gray-800">
    Zerodha is among very few brokers who took the challenge to build tools from
    scratch to cater to the need of high-frequency traders, algo traders, retail
    seasonal stock market investor and beginners.
  </p>

  <p className="mt-2 text-sm text-gray-800">
    Zerodha doesn&apos;t charge any brokerage for equity &amp; mutual fund
    investments. Zerodha charges flat Rs 20 per trade for intraday, F&amp;O,
    currency, and commodity trades across NSE, BSE and MCX.
  </p>

  <p className="mt-4 font-semibold text-sm">
    Facts about Zerodha (as of Jan 01, 2023)
  </p>

  <ul className="list-disc pl-5 text-sm text-gray-800">
    <li>
      <b>Number of active customers</b>: 66 Lakh
    </li>
    <li>
      <b>Depository Participant of</b>: CDSL
    </li>
    <li>
      <b>Member of stock exchanges</b>: BSE, NSE, MCX
    </li>
    <li>
      <b>Trading market share at BSE and NSE</b>: over 19% of retail trading
    </li>
  </ul>
</div>
    
          
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 md:col-span-3">
          <ZerodhaClientGrowthStatCard
            totalClients="68,52,086"
            growthPercentage="-13.14"
            growthDirection="down"
            infoText="This field shows the number of active customers with the stockbroker in the last month (clients who traded at least once). The box on the right shows the growth in the number of clients in comparison to the last financial year."
          />
          <OpenZerodhaAccount />
        </div>
      </div>
    </div>
  );
};

export default ZerodhaBrokerIntro;
