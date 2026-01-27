import React from "react";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";

const ZerodhaAccountChargesAndFAQ = () => {
  return (
    <div className="mt-6">
      {/* TOP GRID */}
      <div className="grid grid-cols-12 gap-4">
        {/* LEFT + MIDDLE CONTENT */}
        <div className="col-span-12 md:col-span-9">
          {/* LOGO */}
          <a title="Zerodha Detail" href="/stockbroker/zerodha/18/">
            <img
              loading="lazy"
              src="https://www.chittorgarh.net/images/ipo/zerodha_logo.gif"
              width="228"
              height="56"
              alt="Zerodha Logo"
              className="float-left mr-4 mb-2"
            />
          </a>

         

          {/* ACCOUNT OPENING CHARGES TABLE */}
          <h2 className="text-lg font-semibold  mb-2">
            Zerodha Account Opening Charges 2026
          </h2>

          <p className="text-sm mb-3">
            Zerodha account opening charges are Rs 0 for a trading account and Rs 0
            for Demat account. Zerodha charge Rs 300 AMC for Demat account.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-white sticky top-0">
                <tr>
                  <th className="border px-3 py-2 text-left">Transaction</th>
                  <th className="border px-3 py-2 text-left">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">
                    Trading Account Opening Charges
                  </td>
                  <td className="border px-3 py-2">Rs 0</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Account AMC Charges</td>
                  <td className="border px-3 py-2">Rs 0 (Free)</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">
                    Demat Account Opening Charges
                  </td>
                  <td className="border px-3 py-2">Rs 0</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Demat AMC (Yearly)</td>
                  <td className="border px-3 py-2">Rs 300</td>
                </tr>
              </tbody>
            </table>
          </div>
           {/* INTRO */}
          <p className="text-sm text-gray-800 leading-relaxed">
            Zerodha is a Bangalore-based{" "}
            <a
              href="/keyword/discount-stock-broker/1237/"
              className="text-blue-600 hover:underline"
            >
              discount stock broker
            </a>
            . Zerodha offers <strong>online stock and other securities trading</strong>{" "}
            to retail customers. Since its inception in Aug 2010, Zerodha has grown
            significantly over the years.
          </p>

          {/* FAQ SECTION */}
          <h3 className="font-semibold mt-6">
            Commonly asked questions before opening an account with Zerodha
          </h3>

          <ul className="list-disc pl-5 space-y-3 mt-3 text-sm">
            <li>
              <strong>Is Zerodha safe?</strong>
              <p>
                Yes, Zerodha is a{" "}
                <a
                  href="/broker/zerodha/is-safe-or-not/18/"
                  className="text-blue-600 hover:underline"
                >
                  safe, reliable and trustworthy broker.
                </a>
              </p>
            </li>

            <li>
              <strong>Does Zerodha offer commodity trading?</strong>
              <p>Yes</p>
            </li>

            <li>
              <strong>How much brokerage does Zerodha charge?</strong>
              <p>Rs 20 per trade flat</p>
            </li>

            <li>
              <strong>Do I have to keep a minimum balance?</strong>
              <p>No</p>
            </li>

            <li>
              <strong>Is there a fixed monthly charge?</strong>
              <p>No</p>
            </li>

            <li>
              <strong>Do I have to pay for software?</strong>
              <p>
                No, all trading software and tools are free. However, partner
                products may be chargeable.
              </p>
            </li>

            <li>
              <strong>How much are demat transaction charges?</strong>
              <p>Rs 13.5 per script per day on sell transaction.</p>
            </li>

            <li>
              <strong>Does Zerodha have branches?</strong>
              <p>
                Zerodha is an online broker with over 120+ partner offices across
                India.
              </p>
            </li>

            <li>
              <strong>Why is Zerodha brokerage so low?</strong>
              <p>They use the latest technology and keep operational costs low.</p>
            </li>
          </ul>

          <p className="mt-4 text-sm">
            Find{" "}
            <a
              href="/article/20_reasons_to_trade_with_zerodha_discount_broker/62/"
              className="text-blue-600 hover:underline"
            >
              20 reasons why you should open an account with Zerodha
            </a>
            .
          </p>

          <hr className="my-6" />

            <div className="mt-6 text-[0.9375rem] leading-[1.8rem] text-[#1e1e27]">

      {/* SECTION: Open Zerodha Account */}
      <h2 className="text-xl font-semibold mb-2">
        Open Zerodha Account Online / Offline
      </h2>

      <p>
        To trade (in stock,{" "}
        <a href="/keyword/commodity/1223/" className="text-[#2163e8]">
          commodity
        </a>{" "}
        or{" "}
        <a href="/keyword/currency/1222/" className="text-[#2163e8]">
          currency
        </a>
        ) or to invest (in stocks,{" "}
        <a href="/keyword/mutual-funds/1292/" className="text-[#2163e8]">
          mutual funds
        </a>
        ) with Zerodha, a customer has to open a trading account and a demat
        account. The demat account is not mandatory for customers planning to
        trade only in derivatives.
      </p>

      <p className="mt-2">Zerodha offers 3 types of accounts:</p>

      <ul className="list-disc pl-5 space-y-1">
        <li>
          <a href="/keyword/trading-account/1364/" className="text-[#2163e8]">
            Trading account
          </a>{" "}
          for equity and currency derivatives.
        </li>
        <li>
          <a href="/keyword/demat-account/40/" className="text-[#2163e8]">
            Demat account
          </a>{" "}
          to take delivery of stocks.
        </li>
        <li>
          <a href="/keyword/commodity/1223/" className="text-[#2163e8]">
            Commodity
          </a>{" "}
          account to trade commodity futures on MCX.
        </li>
      </ul>

      <p className="mt-2">
        Zerodha also offers{" "}
        <a href="/keyword/2-in-1-account/1363/" className="text-[#2163e8]">
          2-in-1 account
        </a>{" "}
        which offers smooth automatic transactions between these two accounts.
      </p>

      <p>
        One customer account has access to all the segments but each segment has
        to be enabled separately at the time of account opening or later.
      </p>

      <hr className="my-6 border-[#22222f1a]" />

      {/* ONLINE ACCOUNT STEPS */}
      <h3 className="text-lg font-semibold mb-2">
        Open Zerodha Account Online (Step-by-Step)
      </h3>

      <p>
        Zerodha offers an online paperless account opening to all customers. An
        individual can open a 2-in-1 account (trading + demat account). Follow
        the steps below:
      </p>

      <ol className="list-decimal pl-5 space-y-1 mt-2">
        <li>
          Visit{" "}
          <a
            href="https://tinyurl.com/broker-zerodha-account-opening"
            className="text-[#2163e8]"
          >
            Zerodha.com
          </a>
          .
        </li>
        <li>Click on the "Signup" button.</li>
        <li>Enter your mobile number.</li>
        <li>Confirm the OTP received.</li>
        <li>Enter personal details and continue.</li>
        <li>Enter PAN and Date of Birth.</li>
        <li>Pay via UPI, Netbanking, Debit or Credit card.</li>
        <li>Login to Digilocker using Aadhaar.</li>
        <li>Allow Aadhaar data access via OTP.</li>
        <li>Update profile details.</li>
        <li>Link bank account (IFSC or UPI).</li>
        <li>Complete IPV video verification.</li>
        <li>Upload documents.</li>
        <li>e-Sign for Equity.</li>
        <li>Click Sign Now.</li>
        <li>Verify Aadhaar OTP.</li>
        <li>Registration completes.</li>
        <li>Receive login details via email.</li>
        <li>Account opening process ends.</li>
      </ol>

      {/* DOCUMENTS */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Zerodha Account Opening Documents (Online)
      </h2>

      <ul className="list-disc pl-5 space-y-3">
        <li>
          <strong>Mobile number & email ID</strong>
          <p>Used for OTP verification and communication.</p>
        </li>
        <li>
          <strong>PAN Card</strong>
          <p>Mandatory as per SEBI guidelines.</p>
        </li>
        <li>
          <strong>Address Proof</strong>
          <p>Verified via Digilocker Aadhaar.</p>
        </li>
        <li>
          <strong>Bank Details</strong>
          <p>Required for fund transfer and payouts.</p>
        </li>
        <li>
          <strong>Background Information</strong>
          <p>Collected for regulatory compliance.</p>
        </li>
        <li>
          <strong>Nominee Details</strong>
          <p>For authorised representation.</p>
        </li>
        <li>
          <strong>Signature Proof</strong>
          <p>Used for authentication.</p>
        </li>
        <li>
          <strong>Income Proof</strong>
          <p>Optional unless trading in F&O.</p>
        </li>
      </ul>

      <hr className="my-6 border-[#22222f1a]" />

      {/* AGE LIMIT */}
      <h2 className="text-xl font-semibold mb-2">
        Zerodha Account Opening Age Limit
      </h2>

      <ul className="list-disc pl-5">
        <li>18+ years with regular PAN card.</li>
        <li>Minor PAN must be converted to regular PAN.</li>
      </ul>

      <hr className="my-6 border-[#22222f1a]" />

      {/* TIME */}
      <h2 className="text-xl font-semibold mb-2">
        Zerodha Account Opening Time
      </h2>

      <p>Account opens within 72 hours after successful KYC.</p>
      <p>Delay may occur if KYC is incomplete.</p>

      <hr className="my-6 border-[#22222f1a]" />

      {/* CLOSURE */}
      <h2 className="text-xl font-semibold mb-2">
        Zerodha Account Closure
      </h2>

      <ol className="list-decimal pl-5 space-y-1">
        <li>Login to Console.Zerodha.com</li>
        <li>Select Account tab</li>
        <li>Go to Segments → Account Closure</li>
        <li>Enter closure reason</li>
        <li>Proceed with e-signature</li>
        <li>Authorize NSDL</li>
        <li>Verify Aadhaar OTP</li>
      </ol>

      <p className="mt-2">
        Account closure completes within 72 business hours.
      </p>

      <hr className="my-6 border-[#22222f1a]" />

      {/* FAQ */}
      <h2 className="text-xl font-semibold mb-2">FAQs</h2>

      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>What are Zerodha account opening charges?</strong>
          <p>Rs 0 online. Demat AMC is Rs 300/year.</p>
        </li>
        <li>
          <strong>Is it safe to open Zerodha account online?</strong>
          <p>Yes. Zerodha is SEBI registered.</p>
        </li>
        <li>
          <strong>Can Zerodha account be opened on Sunday?</strong>
          <p>Yes.</p>
        </li>
        <li>
          <strong>How much time does account opening take?</strong>
          <p>Up to 72 hours.</p>
        </li>
        <li>
          <strong>Can I link a new bank account?</strong>
          <p>Yes. One primary and two secondary bank accounts allowed.</p>
        </li>
      </ol>
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

export default ZerodhaAccountChargesAndFAQ;
