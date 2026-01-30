import React, { useState } from "react";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";

const consoleImages = [
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-console-ipo-application-1.png",
    alt: "Zerodha Console IPO Application Demo 1",
  },
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-console-ipo-application-2.png",
    alt: "Zerodha Console IPO Application Demo 2",
  },
  {
    src: "https://www.chittorgarh.net/images/screenshots/zerodha-console-ipo-application-3.png",
    alt: "Zerodha Console IPO Application Demo 3",
  },
];

const mandateImages = [
  "https://www.chittorgarh.net/images/screenshots/zerodha-icici-upi-ipo-mandate-1.jpg",
  "https://www.chittorgarh.net/images/screenshots/zerodha-icici-upi-ipo-mandate-2.jpg",
  "https://www.chittorgarh.net/images/screenshots/zerodha-icici-upi-ipo-mandate-3.jpg",
  "https://www.chittorgarh.net/images/screenshots/zerodha-icici-upi-ipo-mandate-4.jpg",
  "https://www.chittorgarh.net/images/screenshots/zerodha-icici-upi-ipo-mandate-5.jpg",
];

const ZerodhaDemat = () => {
  const [consoleIndex, setConsoleIndex] = useState(0);
  const [mandateIndex, setMandateIndex] = useState(0);

  const prev = (setter, length) =>
    setter((i) => (i === 0 ? length - 1 : i - 1));
  const next = (setter, length) =>
    setter((i) => (i === length - 1 ? 0 : i + 1));

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
          <div className="text-sm leading-[1.8rem] text-[#1e1e27]">
            {/* INTRO */}
            <p>
              <strong>
                Zerodha offers online{" "}
                <a
                  href="/keyword/ipo-application/17/"
                  className="text-[#2163e8] hover:underline"
                >
                  IPO applications
                </a>
              </strong>{" "}
              to its customers. Zerodha customers can apply for IPO using UPI
              (Unified Payment Interface) through the{" "}
              <a
                href="/keyword/zerodha-console/1108/"
                className="text-[#2163e8] hover:underline"
              >
                Zerodha Console
              </a>{" "}
              website.
            </p>

            <p className="mt-2">
              While the process is not as easy as the{" "}
              <a
                href="/keyword/asba-ipo-application/20/"
                className="text-[#2163e8] hover:underline"
              >
                ASBA IPO application
              </a>{" "}
              through a{" "}
              <a
                href="/glossary/3-in-1-account/144/"
                className="text-[#2163e8] hover:underline"
              >
                3-in-1 account
              </a>
              , the Zerodha{" "}
              <a
                href="/keyword/upi-ipo-application/22/"
                className="text-[#2163e8] hover:underline"
              >
                UPI IPO application
              </a>{" "}
              offers a convenient way to apply online.
            </p>

            <p className="mt-2">
              Zerodha launched online IPO application services on Aug 6, 2019.
              Since then, it has become the largest broker by the number of IPO
              applications processed.
            </p>

            <hr className="my-6 border-[#22222f1a]" />

            {/* APPLY SECTION */}
            <h2 className="text-lg font-semibold mb-2">Zerodha IPO Apply</h2>

            <p>
              Applying in IPO through Zerodha is simple and convenient.
              It&apos;s a 3-step process:
            </p>

            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>
                Create{" "}
                <a
                  href="/keyword/ipo-upi-id/200/"
                  className="text-[#2163e8] hover:underline"
                >
                  UPI ID
                </a>{" "}
                on{" "}
                <a
                  href="/keyword/bhim-upi/206/"
                  className="text-[#2163e8] hover:underline"
                >
                  BHIM UPI app
                </a>{" "}
                (one-time).
              </li>
              <li>Apply on Zerodha Console using your UPI ID.</li>
              <li>
                Approve the mandate in{" "}
                <a
                  href="/keyword/bhim-upi/206/"
                  className="text-[#2163e8] hover:underline"
                >
                  BHIM UPI app
                </a>{" "}
                or net-banking using{" "}
                <a
                  href="/keyword/upi-pin/210/"
                  className="text-[#2163e8] hover:underline"
                >
                  UPI PIN
                </a>
                .
              </li>
            </ol>

            <hr className="my-6 border-[#22222f1a]" />

            {/* STEP BY STEP */}
            <h2 className="text-lg font-semibold mb-2">Zerodha IPO Steps</h2>

            <p>
              Zerodha IPO application process (step-by-step guide) is described
              below:
            </p>

            <h3 className="font-semibold mt-4">
              1. UPI ID Creation (One Time)
            </h3>

            <p className="mt-1">
              Zerodha offers IPO applications through UPI as a payment gateway.
              Read{" "}
              <a
                href="/article/upi-payment-option-ipo-application-explained/382/"
                className="text-[#2163e8] hover:underline"
              >
                UPI for IPO Application
              </a>{" "}
              for more details.
            </p>

            <p className="mt-1">
              UPI ID can be created using BHIM UPI App or any bank’s mobile
              banking app such as ICICI or HDFC.
            </p>

            <h3 className="font-semibold mt-4">
              2. Apply in IPO using Zerodha Console
            </h3>

            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                Login to{" "}
                <a
                  href="/keyword/zerodha-kite/1346/"
                  className="text-[#2163e8] hover:underline"
                >
                  Zerodha Kite
                </a>{" "}
                and go to{" "}
                <a
                  href="/keyword/console/1271/"
                  className="text-[#2163e8] hover:underline"
                >
                  Console
                </a>
                .
              </li>
              <li>Navigate to Portfolio → IPOs</li>
              <li>Select the IPO and click Apply</li>
              <li>Enter UPI ID, quantity, and price</li>
              <li>Submit the application</li>
            </ul>
          </div>

          <div className="text-sm leading-[1.8rem] text-[#1e1e27]">
            {/* CONSOLE CAROUSEL */}
            <div className="mt-6 border rounded-lg bg-[#f7f8f9] p-4">
              <img
                src={consoleImages[consoleIndex].src}
                alt={consoleImages[consoleIndex].alt}
                className="mx-auto w-[70%] rounded"
              />

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => prev(setConsoleIndex, consoleImages.length)}
                  className="px-3 py-1 border rounded bg-white"
                >
                  ‹
                </button>
                <button
                  onClick={() => next(setConsoleIndex, consoleImages.length)}
                  className="px-3 py-1 border rounded bg-white"
                >
                  ›
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-3">
                {consoleImages.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === consoleIndex ? "bg-[#2163e8]" : "bg-[#d0d4d9]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* STEP 3 */}
            <h3 className="font-semibold text-base mt-8">
              3. Accept the UPI Mandate
            </h3>

            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                After a few hours (usually by end of day), you will receive a
                mandate request on your UPI app.
              </li>
              <li>Approve the standing instruction (mandate).</li>
            </ul>

            {/* MANDATE CAROUSEL */}
            <div className="mt-6 max-w-sm">
              <div className="border rounded-lg bg-[#f7f8f9] p-3">
                <img
                  src={mandateImages[mandateIndex]}
                  alt={`Zerodha UPI IPO Mandate Demo ${mandateIndex + 1}`}
                  className="mx-auto rounded border"
                />

                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => prev(setMandateIndex, mandateImages.length)}
                    className="px-3 py-1 border rounded bg-white"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => next(setMandateIndex, mandateImages.length)}
                    className="px-3 py-1 border rounded bg-white"
                  >
                    ›
                  </button>
                </div>

                <div className="flex justify-center gap-1 mt-2">
                  {mandateImages.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i === mandateIndex ? "bg-[#2163e8]" : "bg-[#d0d4d9]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <hr className="my-8 border-[#22222f1a]" />
          </div>

          <div className="text-sm leading-[1.8rem] text-[#1e1e27]">
            {/* IPO WITHOUT UPI */}
            <h2 className="text-lg font-semibold mb-2">
              Zerodha IPO without UPI
            </h2>

            <p>
              You can apply for an IPO without UPI using the{" "}
              <strong>ASBA net-banking</strong> facility provided by your bank.
              While applying, you need to enter your Zerodha demat account
              number so that the allotted shares are credited correctly.
            </p>

            <p className="mt-2">
              Detailed IPO application guides for major banks:
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <a
                  href="/article/how-to-buy-ipo-online-in-icici-bank/325/"
                  className="text-[#2163e8]"
                >
                  ICICI Bank IPO Application Guide
                </a>
              </li>
              <li>
                <a
                  href="/article/how-to-buy-ipo-online-in-sbi-bank/344/"
                  className="text-[#2163e8]"
                >
                  SBI IPO Application Guide
                </a>
              </li>
              <li>
                <a
                  href="/article/how-to-apply-ipo-through-hdfc-netbanking/339/"
                  className="text-[#2163e8]"
                >
                  HDFC IPO Application Guide
                </a>
              </li>
              <li>
                <a
                  href="/article/how-to-buy-ipo-online-in-kotak-bank/341/"
                  className="text-[#2163e8]"
                >
                  Kotak Bank IPO Application Guide
                </a>
              </li>
              <li>
                <a
                  href="/article/how-to-buy-ipo-online-in-axis-bank/338/"
                  className="text-[#2163e8]"
                >
                  Axis Bank IPO Application Guide
                </a>
              </li>
            </ul>

            <hr className="my-6 border-[#22222f1a]" />

            {/* DP DETAILS */}
            <h2 className="text-lg font-semibold mb-2">
              Zerodha DP Name for IPO
            </h2>

            <p>
              Zerodha DP name for IPO is{" "}
              <strong>Zerodha Broking Limited</strong>.
            </p>

            <p className="mt-2">
              When applying for IPO using ASBA or offline modes, you must
              manually provide your DP details to ensure shares are credited to
              your demat account.
            </p>

            <p className="mt-2 font-semibold">
              Zerodha DP details for IPO application:
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Depository: CDSL</li>
              <li>DP Name: Zerodha Broking Limited</li>
              <li>DP ID: 12081600</li>
              <li>Client ID / BO ID: 8-digit unique customer ID</li>
              <li>Demat ID: DP ID + Client ID</li>
            </ul>

            <div className="my-4">
              <img
                src="https://www.chittorgarh.net/images/screenshots/zerodha-console-myaccount-demat-dp-name-demat-id.png"
                alt="Zerodha DP details for IPO"
                className="border rounded max-w-full"
              />
            </div>

            <hr className="my-6 border-[#22222f1a]" />

            {/* IPO TIMING */}
            <h2 className="text-lg font-semibold mb-2">Zerodha IPO Timing</h2>

            <p>
              The IPO application window on Zerodha is open from{" "}
              <strong>10:00 AM to 4:30 PM</strong>.
            </p>

            <p className="mt-2">
              You can apply or modify your IPO application anytime during this
              window through Zerodha Console. IPO applications can be cancelled
              between <strong>12:00 PM to 4:30 PM</strong>.
            </p>

            <hr className="my-6 border-[#22222f1a]" />

            {/* IPO CHARGES */}
            <h2 className="text-lg font-semibold mb-2">Zerodha IPO Charges</h2>

            <p>
              Zerodha does <strong>not charge any fees</strong> for applying in
              IPOs. IPO application services are completely free for customers.
            </p>

            <hr className="my-6 border-[#22222f1a]" />

            {/* ALLOTMENT STATUS */}
            <h2 className="text-lg font-semibold mb-2">
              Zerodha IPO Allotment Status
            </h2>

            <p>
              IPO allotment status can be checked on the registrar’s website
              (such as Link Intime or KFin Technologies) once the allotment
              process is completed.
            </p>

            <p className="mt-2">
              Zerodha does not display allotment status directly, but you will
              receive an alert from CDSL when shares are credited to your demat
              account.
            </p>

            <hr className="my-6 border-[#22222f1a]" />

            {/* CONCLUSION */}
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>

            <p>
              Zerodha provides a smooth and cost-free IPO application experience
              through UPI. For users without UPI access, the ASBA net-banking
              route remains a reliable alternative.
            </p>
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

export default ZerodhaDemat;
