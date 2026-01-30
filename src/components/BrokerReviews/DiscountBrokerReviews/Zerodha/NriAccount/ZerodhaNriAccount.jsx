import React, { useState } from "react";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";

const ZerodhaNriAccount = () => {
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

          <section className="mx-auto px-1 py-1 text-[#1e1e27] leading-[1.8rem]">
            <p className="mb-3 text-[15px]">
              Zerodha is a leading stock broker in India. The Bengaluru based
              stock broker offers online discount broking services to both
              resident and non-resident Indians (NRIs). Zerodha offers 2-in-1
              accounts to NRIs which includes a trading and a demat account
              linked to each other.
            </p>

            {/* =======================
          Zerodha NRI Trading Account
      ======================= */}
            <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
              Zerodha NRI Trading Account
            </h2>

            <p className="mb-3 text-[15px]">
              Incorporated in 2010, Zerodha is the largest stock broker in
              India. Zerodha NRI services include:
            </p>

            <ol className="list-decimal pl-5 space-y-1 text-[15px]">
              <li>
                <strong>
                  Zerodha{" "}
                  <a
                    href="/keyword/nri-trading-account/266/"
                    className="text-[#2163e8] hover:underline"
                    title="NRI Trading Account"
                  >
                    NRI Trading Account
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  Zerodha{" "}
                  <a
                    href="/keyword/nri-demat-account/265/"
                    className="text-[#2163e8] hover:underline"
                    title="NRI Demat Account"
                  >
                    NRI Demat Account
                  </a>
                </strong>
              </li>
            </ol>

            <p className="mt-3 mb-3 text-[15px]">
              The trading account allows a customer to buy and sell securities
              across BSE &amp; NSE.
            </p>

            <p className="mb-3 text-[15px]">
              The demat account holds the securities in electronic format. In
              India, equity shares,{" "}
              <a
                href="/keyword/mutual-funds/1292/"
                className="text-[#2163e8] hover:underline"
              >
                mutual funds
              </a>
              ,{" "}
              <a
                href="/keyword/etfs/1275/"
                className="text-[#2163e8] hover:underline"
              >
                ETFs
              </a>
              ,{" "}
              <a
                href="/keyword/ncds-non-convertible-debentures/6/"
                className="text-[#2163e8] hover:underline"
              >
                NCDs
              </a>{" "}
              etc. are held in the demat account. These accounts are managed by
              government mandated central{" "}
              <a
                href="/keyword/depositories/157/"
                className="text-[#2163e8] hover:underline"
              >
                depositories
              </a>{" "}
              CDSL and NSDL.
            </p>

            <p className="mb-3 text-[15px]">
              Zerodha offers stock trading and investment services to NRIs in
              partnership with third-party companies including:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-[15px]">
              <li>
                <strong>
                  <a
                    href="/keyword/nri-bank-account/47/"
                    className="text-[#2163e8] hover:underline"
                  >
                    NRI Bank Account
                  </a>
                </strong>{" "}
                – HDFC Bank, IndusInd Bank, IDFC FIRST Bank and Axis Bank
              </li>
              <li>
                <strong>Custodial Account</strong> – Orbis Financial Corporation
                Limited
              </li>
              <li>
                <strong>Demat Account</strong> – Central Depository Services
                Limited (
                <a
                  href="/keyword/cdsl/1262/"
                  className="text-[#2163e8] hover:underline"
                >
                  CDSL
                </a>
                )
              </li>
            </ul>

            <p className="mt-3 mb-3 text-[15px]">
              Note: The custodial account (
              <a
                href="/glossary/custodial-participant-code-cp-code/130/"
                className="text-[#2163e8] hover:underline"
              >
                CP Code
              </a>
              ) is required for trading in{" "}
              <a
                href="/keyword/equity-derivatives/1269/"
                className="text-[#2163e8] hover:underline"
              >
                equity derivatives
              </a>{" "}
              (F&amp;O) segment.
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

      <div>
                    <p className="mb-2 text-[15px]">Zerodha brokerage charges are:</p>

            <ul className="list-disc pl-5 space-y-1 text-[15px]">
              <li>
                Non-PIS Account: 0.5% or ₹50 per executed order (whichever is
                lower).
              </li>
              <li>
                PIS Account: 0.5% or ₹200 per executed order (whichever is
                lower).
              </li>
            </ul>

            <p className="mt-3 mb-3 text-[15px]">
              NRI can trade only in delivery-based stocks and derivatives. No{" "}
              <a
                href="/keyword/intraday-trading/1225/"
                className="text-[#2163e8] hover:underline"
              >
                intraday trading
              </a>{" "}
              on stocks is allowed.{" "}
              <a
                href="/keyword/currency/1222/"
                className="text-[#2163e8] hover:underline"
              >
                Currency
              </a>{" "}
              and{" "}
              <a
                href="/keyword/commodities/1311/"
                className="text-[#2163e8] hover:underline"
              >
                commodities
              </a>{" "}
              trading is also not allowed.
            </p>

            <p className="mb-6 text-[15px]">
              Zerodha does not offer Mutual Fund investment to NRIs through its{" "}
              <strong>
                <a
                  href="/keyword/coin/1347/"
                  className="text-[#2163e8] hover:underline"
                >
                  Coin
                </a>
              </strong>{" "}
              platform.
            </p>

            {/* =======================
          NRI Trading Process
      ======================= */}
            <hr className="my-6 border-t border-[#22222f1a]" />

            <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
              Zerodha NRI Trading Process
            </h2>

            <ol className="list-decimal pl-5 space-y-4 text-[15px]">
              <li>
                <strong>Fund Allocation</strong>
                <p className="mt-1">
                  Transfer funds from NRE/NRO bank account to your PIS Bank
                  Account. The bank informs Zerodha about the allocated funds.
                </p>
              </li>
              <li>
                <strong>Place Order</strong>
                <p className="mt-1">
                  Use trading software like{" "}
                  <a
                    href="/keyword/zerodha-kite/1346/"
                    className="text-[#2163e8] hover:underline"
                  >
                    Zerodha Kite
                  </a>{" "}
                  mobile app or website to place buy/sell orders.
                </p>
              </li>
              <li>
                <strong>Fund Settlement</strong>
                <p className="mt-1">
                  Zerodha sends contract notes to the bank. Funds are debited or
                  credited accordingly based on buy or sell transactions.
                </p>
              </li>
              <li>
                <strong>Stocks Settlement</strong>
                <p className="mt-1">
                  Zerodha credits the stocks to the NRI demat account.
                </p>
              </li>
            </ol>

            <p className="mt-3 text-[15px]">
              In case of sell, the stocks are debited from the NRI demat account
              and delivered to the buyer.
            </p>
      </div>
    </div>
  );
};

export default ZerodhaNriAccount;
