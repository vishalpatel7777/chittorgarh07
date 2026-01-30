import React from "react";
import ProStocksSideCard from "../Common/ProStocksSideCard";

const ProStocksReviews = () => {
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

          <p className="mb-4">
            ProStocks is a{" "}
            <a
              href="/keyword/sebi/1031/"
              title="SEBI"
              className="font-medium text-[#2163e8] hover:underline"
            >
              SEBI
            </a>{" "}
            registered{" "}
            <a
              href="/keyword/stock-broker/1294/"
              title="Stock Broker"
              className="font-medium text-[#2163e8] hover:underline"
            >
              Stock Broker
            </a>{" "}
            and{" "}
            <a
              href="/keyword/depository/158/"
              title="Depository"
              className="font-medium text-[#2163e8] hover:underline"
            >
              Depository
            </a>{" "}
            Participant. ProStocks is fastest growing{" "}
            <b>
              <a
                href="/keyword/flat-fee/1212/"
                title="Flat Fee"
                className="font-semibold text-[#2163e8] hover:underline"
              >
                flat fee
              </a>{" "}
              <a
                href="/keyword/discount-stock-broker/1237/"
                title="Discount Stock Broker"
                className="font-semibold text-[#2163e8] hover:underline"
              >
                discount stock broker
              </a>
            </b>{" "}
            offering online trading at BSE and NSE. ProStocks is famous for the
            unlimited trading plan. This plan offer{" "}
            <b>
              <mark className="bg-[#fff3cd] px-1">
                unlimited Equity and{" "}
                <a
                  href="/keyword/derivatives/1265/"
                  title="Derivatives"
                  className="font-semibold text-[#2163e8] hover:underline"
                >
                  Derivatives
                </a>{" "}
                Trading at Rs 899 per month
              </mark>
            </b>{" "}
            or unlimited{" "}
            <a
              href="/keyword/currency-derivatives/1268/"
              title="Currency Derivatives"
              className="font-medium text-[#2163e8] hover:underline"
            >
              Currency Derivatives
            </a>{" "}
            for <b>Rs 499 per month</b>. They are the cheapest broker in
            unlimited trading plans. Average share trader save between 60% to
            99% on brokerage through this plan.
          </p>

          <p>
            ProStocks also offer{" "}
            <b>
              <mark className="bg-[#fff3cd] px-1">
                Rs 15 per trade pricing plan
              </mark>
            </b>{" "}
            which is popular among casual investors and traders. ProStocks
            customer pay flat Rs 15{" "}
            <a
              href="/keyword/per-executed-order/1243/"
              title="Per Executed Order"
              className="font-medium text-[#2163e8] hover:underline"
            >
              per executed order
            </a>{" "}
            irrespective to the size of the order in this plan.
          </p>

          <div className="my-4 flex flex-wrap text-[0.9375rem] leading-[1.8rem] text-[#1e1e27]">
            <p className="mb-4">
              ProStocks offers trading in{" "}
              <a
                href="/keyword/equity-delivery/1214/"
                title="Equity Delivery"
                className="font-medium text-[#2163e8] hover:underline"
              >
                equity delivery
              </a>
              ,{" "}
              <a
                href="/keyword/equity-intraday/1228/"
                title="Equity Intraday"
                className="font-medium text-[#2163e8] hover:underline"
              >
                equity intraday
              </a>
              ,{" "}
              <a
                href="/keyword/equity-derivatives/1269/"
                title="Equity Derivatives"
                className="font-medium text-[#2163e8] hover:underline"
              >
                equity derivatives
              </a>{" "}
              (F&amp;O) and{" "}
              <a
                href="/keyword/currency-derivatives/1268/"
                title="Currency Derivatives"
                className="font-medium text-[#2163e8] hover:underline"
              >
                currency derivatives
              </a>{" "}
              (F&amp;O) segments at BSE and NSE. The custom build{" "}
              <a
                href="/keyword/trading-platform/1231/"
                title="Trading Platform"
                className="font-medium text-[#2163e8] hover:underline"
              >
                trading platform
              </a>{" "}
              offers convenient trading though installable trading terminal,
              website and{" "}
              <a
                href="/keyword/mobile-app/1238/"
                title="Mobile App"
                className="font-medium text-[#2163e8] hover:underline"
              >
                mobile app
              </a>
              ; all at free of cost to all the customers. In addition they also
              provide NSE NOW trading platform.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="flex flex-col gap-3">
          <ProStocksSideCard />
        </div>
      </div>

      <p className="mb-4">
        The{" "}
        <b>
          <a
            href="/keyword/2-in-1/1274/"
            title="2-in-1"
            className="font-semibold text-[#2163e8] hover:underline"
          >
            2-in-1
          </a>{" "}
          account
        </b>{" "}
        (Trading + Demat account) by ProStocks makes stock trading convenient
        for investors as all the transactions between trading and demat account
        are seemless.
      </p>

      <p>
        ProStocks offers{" "}
        <b>
          <mark className="bg-[#fff3cd] px-1">
            cheapest{" "}
            <a
              href="/keyword/call-trade/1253/"
              title="Call & Trade"
              className="font-semibold text-[#2163e8] hover:underline"
            >
              call &amp; trade
            </a>
          </mark>
        </b>{" "}
        amount all other{" "}
        <a
          href="/keyword/discount-broker/1213/"
          title="Discount Broker"
          className="font-medium text-[#2163e8] hover:underline"
        >
          discount broker
        </a>
        . ProStocks offers trading through dealer at additional Rs 10 per trade
        in comparison to most other brokers who charge Rs 20 per trade extra for
        Call &amp; Trade.
      </p>
    </div>
  );
};

export default ProStocksReviews;
