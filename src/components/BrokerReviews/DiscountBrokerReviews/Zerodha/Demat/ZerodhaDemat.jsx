import React , {useState} from "react";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";


const images = [
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-account-opening-demo-1.png",
    alt: "Zerodha Account Opening Demo 1",
  },
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-account-opening-demo-2.png",
    alt: "Zerodha Account Opening Demo 2",
  },
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-account-opening-demo-3.png",
    alt: "Zerodha Account Opening Demo 3",
  },
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-account-opening-demo-4.png",
    alt: "Zerodha Account Opening Demo 4",
  },
];


const ZerodhaDemat = () => {

   const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

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

          {/* INTRO */}
          <p>
            Zerodha{" "}
            <span
              data-index="2433"
              data-component="keyword-popup"
              data-record-id="40"
              data-slug="demat-account"
              data-bs-initialized="true"
            >
              <a
                href="/keyword/demat-account/40/"
                title="Demat Account"
                className="text-[#2163e8]"
              >
                demat account
              </a>
            </span>{" "}
            is one of the services offered by the company. The service is part
            of its{" "}
            <a
              href="/glossary/2-in-1-account/145/"
              title="2-in-1 accounts"
              className="text-[#2163e8]"
            >
              2-in-1 accounts
            </a>{" "}
            that offers the customer an integrated trading account and demat
            account for seamless transactions.
          </p>

          <br />

          <p>
            Zerodha is a{" "}
            <span
              data-index="5811"
              data-component="keyword-popup"
              data-record-id="158"
              data-slug="depository"
              data-bs-initialized="true"
            >
              <a
                href="/keyword/depository/158/"
                title="Depository"
                className="text-[#2163e8]"
              >
                depository
              </a>
            </span>{" "}
            participant (DP) with Central Depository Services Limited (
            <span
              data-index="6461"
              data-component="keyword-popup"
              data-record-id="1262"
              data-slug="cdsl"
              data-bs-initialized="true"
            >
              <a
                href="/keyword/cdsl/1262/"
                title="CDSL"
                className="text-[#2163e8]"
              >
                CDSL
              </a>
            </span>
            ).
          </p>
          <div className="text-sm leading-[1.8rem] text-[#1e1e27]">
            {/* KEY FEATURES */}
            <h2 className="text-lg font-semibold mb-2">
              Zerodha Demat Account Key Features
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Easy online access to shares,{" "}
                <span
                  data-index="7018"
                  data-component="keyword-popup"
                  data-record-id="1064"
                  data-slug="bonds"
                  data-bs-initialized="true"
                >
                  <a href="/keyword/bonds/1064/" className="text-[#2163e8]">
                    bonds
                  </a>
                </span>
                , F&amp;O,{" "}
                <span
                  data-index="9895"
                  data-component="keyword-popup"
                  data-record-id="1292"
                  data-slug="mutual-funds"
                  data-bs-initialized="true"
                >
                  <a
                    href="/keyword/mutual-funds/1292/"
                    className="text-[#2163e8]"
                  >
                    mutual funds
                  </a>
                </span>
                , etc.
              </li>

              <li>
                The{" "}
                <span
                  data-index="8787"
                  data-component="keyword-popup"
                  data-record-id="1363"
                  data-slug="2-in-1-account"
                  data-bs-initialized="true"
                >
                  <a
                    href="/keyword/2-in-1-account/1363/"
                    className="text-[#2163e8]"
                  >
                    2-in-1 account
                  </a>
                </span>{" "}
                offers seamless transactions between trading and demat accounts.
              </li>

              <li>
                Dividends are credited automatically to the linked bank account.
              </li>

              <li>
                Low debit transaction charges for stock and{" "}
                <span
                  data-index="3627"
                  data-component="keyword-popup"
                  data-record-id="1292"
                  data-slug="mutual-funds"
                  data-bs-initialized="true"
                >
                  <a
                    href="/keyword/mutual-funds/1292/"
                    className="text-[#2163e8]"
                  >
                    mutual funds
                  </a>
                </span>
                .
              </li>
            </ul>

            <hr className="my-6 border-[#22222f1a]" />

            {/* AMC CHARGES */}
            <h2 className="text-lg font-semibold mb-2">
              Zerodha AMC Charges (Demat Account)
            </h2>

            <p>
              Zerodha charges Rs 300 per annum as annual maintenance charge (
              <span
                data-index="2724"
                data-component="keyword-popup"
                data-record-id="1242"
                data-slug="amc-account-maintenance-charges"
                data-bs-initialized="true"
              >
                <a
                  href="/keyword/amc-account-maintenance-charges/1242/"
                  className="text-[#2163e8]"
                >
                  AMC
                </a>
              </span>
              ) for the demat account. The fee is automatically debited
              quarterly from the balance of the trading account.
            </p>

            {/* AMC TABLE */}
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse text-sm">
                <thead className="sticky top-0 bg-white">
                  <tr>
                    <th className="border-b px-3 py-2 text-left font-semibold">
                      Type of Account
                    </th>
                    <th className="border-b px-3 py-2 text-left font-semibold">
                      Zerodha AMC
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="hover:bg-[#f7f8f9]">
                    <td className="px-3 py-2">
                      Individual,{" "}
                      <span
                        data-index="5850"
                        data-component="keyword-popup"
                        data-record-id="1229"
                        data-slug="hufs"
                        data-bs-initialized="true"
                      >
                        <a
                          href="/keyword/hufs/1229/"
                          className="text-[#2163e8]"
                        >
                          HUF
                        </a>
                      </span>
                      , and{" "}
                      <span
                        data-index="9101"
                        data-component="keyword-popup"
                        data-record-id="1197"
                        data-slug="partnership-firm"
                        data-bs-initialized="true"
                      >
                        <a
                          href="/keyword/partnership-firm/1197/"
                          className="text-[#2163e8]"
                        >
                          partnership firm
                        </a>
                      </span>
                      s
                    </td>
                    <td className="px-3 py-2">Rs 300</td>
                  </tr>

                  <tr className="hover:bg-[#f7f8f9]">
                    <td className="px-3 py-2">
                      Non-Resident Indians (
                      <span
                        data-index="5580"
                        data-component="keyword-popup"
                        data-record-id="260"
                        data-slug="nri"
                        data-bs-initialized="true"
                      >
                        <a href="/keyword/nri/260/" className="text-[#2163e8]">
                          NRI
                        </a>
                      </span>
                      )
                    </td>
                    <td className="px-3 py-2">Rs 500</td>
                  </tr>

                  <tr className="hover:bg-[#f7f8f9]">
                    <td className="px-3 py-2">
                      Corporates, i.e. LLPs and private &amp; public companies.
                    </td>
                    <td className="px-3 py-2">Rs 1000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="my-6 border-[#22222f1a]" />

            {/* DP ID */}
            <h2 className="text-lg font-semibold mb-2">
              Zerodha DP ID (How to get Zerodha demat account number?)
            </h2>

            <p>
              <strong>Zerodha DP id is 12081600.</strong> To know more detail
              about your Zerodha demat account, log in to{" "}
              <span
                data-index="9638"
                data-component="keyword-popup"
                data-record-id="1108"
                data-slug="zerodha-console"
                data-bs-initialized="true"
              >
                <a
                  href="/keyword/zerodha-console/1108/"
                  className="text-[#2163e8]"
                >
                  Zerodha Console
                </a>
              </span>{" "}
              &gt;&gt; My Profile &gt;&gt; Demat.
            </p>

            <p className="mt-2">
              Zerodha demat account number is a <strong>16 digit number</strong>
              . It is a combination of Zerodha{" "}
              <span
                data-index="7839"
                data-component="keyword-popup"
                data-record-id="1262"
                data-slug="cdsl"
                data-bs-initialized="true"
              >
                <a href="/keyword/cdsl/1262/" className="text-[#2163e8]">
                  CDSL
                </a>
              </span>{" "}
              DP ID and your Client ID. Both are of 8 digits each.
            </p>

            <hr className="my-6 border-[#22222f1a]" />

            {/* DP CHARGES */}
            <h2 className="text-lg font-semibold mb-2">
              Zerodha DP Debit Transaction Charges (Zerodha DP Charges)
            </h2>

            <p>
              Zerodha{" "}
              <span
                data-index="1416"
                data-component="keyword-popup"
                data-record-id="1254"
                data-slug="dp-charges"
                data-bs-initialized="true"
              >
                <a href="/keyword/dp-charges/1254/" className="text-[#2163e8]">
                  DP charges
                </a>
              </span>{" "}
              is Rs 13.5 per scrip debited from the demat account when you sell
              your stocks.
            </p>

            <p className="mt-2">
              For Mutual Funds, Zerodha charges a CDSL Fee of Rs 5.5 per mutual
              fund debited from demat on redemption.
            </p>

            <hr className="my-6 border-[#22222f1a]" />
          </div>


 <div className="text-sm leading-[1.8rem] text-[#1e1e27]">

      {/* TITLE */}
      <h2 className="text-lg font-semibold mb-2">
        Open Zerodha Demat Account
      </h2>

      <p>
        To trade with Zerodha, you need to{" "}
        <a
          href="https://tinyurl.com/broker-zerodha-account-opening"
          className="text-[#2163e8]"
        >
          open a trading and Demat account
        </a>
        . Zerodha offers online as well as offline account opening to its
        customers. If your Aadhaar is linked to your mobile number, you can
        instantly open an account online.
      </p>

      <p className="font-semibold mt-3">
        Steps to open Zerodha account online
      </p>

      <ol className="list-decimal pl-5 space-y-2 mt-2">
        <li>
          Go to{" "}
          <a
            href="https://tinyurl.com/broker-zerodha-account-opening"
            className="text-[#2163e8]"
          >
            Zerodha.com
          </a>{" "}
          and click <strong>Sign Up Now</strong>.
        </li>
        <li>
          <strong>Verify mobile number and email</strong> using OTP.
        </li>
        <li>
          <strong>Enter PAN</strong> and Date of Birth.
        </li>
        <li>
          Pay <strong>account opening fees</strong> via UPI / Net Banking.
        </li>
        <li>
          Connect to <strong>DigiLocker</strong>.
        </li>
        <li>
          Allow access and <strong>share Aadhaar</strong>.
        </li>
        <li>Verify Aadhaar details.</li>
        <li>
          Enter personal, bank, tax and background details.
        </li>
        <li>Write OTP on white paper for IPV.</li>
        <li>Allow webcam access and capture IPV.</li>
        <li>Upload documents and e-sign.</li>
        <li>
          Click <strong>E-sign Equity</strong> (NSDL).
        </li>
        <li>Verify email using security code.</li>
        <li>
          Review form and click <strong>Sign Now</strong>.
        </li>
        <li>Enter Aadhaar OTP on NSDL.</li>
      </ol>

      <p className="mt-3">
        The broker will notify you once the account is ready to trade.
      </p>

      {/* CAROUSEL */}
      <p className="font-semibold mt-6">
        Zerodha Demat Account Opening Demo
      </p>

      <div className="relative mt-4 bg-[#f7f8f9] rounded border p-4">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="mx-auto w-[70%] rounded"
        />

        {/* CONTROLS */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full w-8 h-8 flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full w-8 h-8 flex items-center justify-center"
        >
          ›
        </button>

        {/* INDICATORS */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-[#2163e8]" : "bg-[#d0d4d9]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* OFFLINE */}
      <p className="mt-5">
        If Aadhaar is not linked with your mobile number, you can open an account
        offline.
      </p>

      <p className="font-semibold mt-2">
        Steps to open Zerodha account offline
      </p>

      <ol className="list-decimal pl-5 space-y-2">
        <li>
          Fill{" "}
          <a
            href="https://tinyurl.com/broker-zerodha-account-opening"
            className="bg-[#d6293e] text-white px-2 py-1 rounded text-xs"
          >
            Account Opening Enquiry Form
          </a>
          .
        </li>
        <li>You’ll get a call within 24 hours.</li>
        <li>Request or download the form.</li>
        <li>Print and fill required details.</li>
        <li>Sign and courier to Zerodha Head Office.</li>
      </ol>

      <hr className="my-6 border-[#22222f1a]" />

      {/* DOCUMENTS */}
      <h2 className="text-lg font-semibold mb-2">
        Zerodha Demat Account Opening Documents
      </h2>

      <ol className="list-decimal pl-5 space-y-1">
        <li>PAN card</li>
        <li>Aadhaar (online)</li>
        <li>Cancelled cheque / Bank statement</li>
        <li>Signature proof</li>
        <li>
          Income proof (required for Futures & Options)
        </li>
      </ol>

      <hr className="my-6 border-[#22222f1a]" />

      {/* OPENING TIME */}
      <h2 className="text-lg font-semibold mb-2">
        Zerodha Demat Account Opening Time
      </h2>

      <p>
        Online account opening takes only a few minutes after verification.
      </p>
      <p>
        Offline account opening takes up to two working days.
      </p>

      <hr className="my-6 border-[#22222f1a]" />

      {/* CHARGES TABLE */}
      <h2 className="text-lg font-semibold mb-2">
        Zerodha Demat Account Opening Charges
      </h2>

      <div className="overflow-x-auto mt-3">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="border-b px-3 py-2 text-left">Service</th>
              <th className="border-b px-3 py-2 text-left">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#f7f8f9]">
              <td className="px-3 py-2">Demat Account Opening Fee</td>
              <td className="px-3 py-2">Rs 0</td>
            </tr>
            <tr className="hover:bg-[#f7f8f9]">
              <td className="px-3 py-2">
                Demat Account Annual Charges (AMC)
              </td>
              <td className="px-3 py-2">Rs 300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>



          {/* OFFICES LIST */}
          <ol className="mt-3 list-decimal space-y-4 pl-5 text-sm leading-[1.8rem]">
            <li>
              <strong>Zerodha Sales Offices</strong>
              <p>
                Zerodha has sales offices across large cities in India. The
                offices are relatively small in size with less than 10
                employees. The primary function of these offices is sales. These
                offices do not provide customer service and trading desk.
                Zerodha is planning to cut-down these offices in future to focus
                on its online business.
              </p>
            </li>

            <li>
              <strong>Zerodha Partner Offices (Franchise)</strong>
              <p>
                Similar to traditonal Sub Broker, Zerodha has{" "}
                <a
                  href="/article/zerodha-partner-program-review-refer-and-earn/462/"
                  className="text-[#2163e8]"
                >
                  partners
                </a>{" "}
                (registered as Authorized Persons or AP) who have offices across
                most cities in India. These partners do sales, marketing, local
                customer support, and also provides a trading desk (dealer
                terminal) to customers who are tagged to them. They also
                provides Call & Trade services at an extra cost of Rs 50 per
                executed order.
              </p>
            </li>

            <li>
              <strong>Zerodha Online Marketing Partner</strong>
              <p>
                Zerodha has 100&apos;s of online partners whose primary role to
                bring customers to Zerodha. These online partners do not offer
                customer service. They also do not have a trading desk.
              </p>
            </li>
          </ol>

          <hr className="my-6 border-[#22222f1a]" />

          
          {/* ABOUT */}
          <h2 className="text-lg font-semibold mb-2">About Zerodha</h2>

          <p className="text-sm leading-[1.8rem]">
            Incorporated in 2010, Zerodha is Bangalore India based{" "}
            <strong>financial service firm</strong> offering{" "}
            <strong>online brokerage services to retail customers</strong> in
            India. Zerodha is a{" "}
            <a
              href="/article/discount-brokers-a-detailed-overview/469/"
              className="text-[#2163e8]"
            >
              discount stock broker
            </a>{" "}
            offering ultra-low brokerage fees.
          </p>

          <p className="text-sm leading-[1.8rem] mt-2">
            Zerodha offers up to 80% discount in brokerage in comparison to
            traditional brokers by offering online trading.
          </p>

          <p className="text-sm leading-[1.8rem] mt-2">
            Zerodha also provides add-on services including online depository
            services (demat account) and mutual funds.
          </p>

          <p className="text-sm leading-[1.8rem] mt-2">
            Zerodha is popular for flat Rs 20 per trade brokerage plan.
          </p>

          <p className="text-sm mt-2">Facts about Zerodha (as of July 2023)</p>

          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
            <li>Number of Zerodha Customer: 64+ Lakhs (Active)</li>
            <li>Number of Zerodha Branch and Partner Offices: 120+</li>
            <li>Number of cities where Zerodha has a presence: 75+</li>
            <li>Leading retail broker in India by active client base.</li>
            <li>Debt-free company.</li>
            <li>Pioneer of online discount brokerage model in India.</li>
            <li>In-house advanced trading platforms.</li>
            <li>
              India&apos;s first market API launched for retail customers.
            </li>
            <li>Zero Brokerage fees for Equity delivery and mutual funds.</li>
          </ul>
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

export default ZerodhaDemat;
