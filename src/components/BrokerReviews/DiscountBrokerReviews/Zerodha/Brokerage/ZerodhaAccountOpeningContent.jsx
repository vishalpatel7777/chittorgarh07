import React from "react";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";

const ZerodhaAccountOpeningContent = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-12 md:col-span-9">
          <a title="Zerodha Detail" href="/stockbroker/zerodha/18/">
            <img
              loading="lazy"
              className="float-left mr-4 mb-2"
              src="https://www.chittorgarh.net/images/ipo/zerodha_logo.gif"
              width="228"
              height="56"
              alt="Zerodha Logo"
            />
          </a>

          <p>
            Zerodha is highly popular and reputed for its low brokerage charges.
            Be it account opening charges, AMC, or brokerage charges, they are
            set in affordable ranges only. Zerodha account opening process is
            <strong> easy, quick, and safe</strong>. You could open a Zerodha
            account online in just a <strong>few minutes</strong>. The account
            opening charges are Rs 0 for trading in Equity, F&amp;O, and
            Currency.
          </p>

          {/* MAIN CONTENT */}
          <div className="mt-3 space-y-4 text-sm text-gray-800 leading-relaxed">
            <p>
              <strong>Zerodha account opening key features</strong>
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Paperless online account opening.</li>
              <li>
                Simple{" "}
                <a
                  title="2-in-1 account"
                  href="/glossary/2-in-1-account/145/"
                  className="text-blue-600 hover:underline"
                >
                  2-in-1 account
                </a>{" "}
                opening (Trading + Demat Account).
              </li>
              <li>Account gets activated on the same day in most cases.</li>
              <li>NRI account is available (paper-based process).</li>
            </ul>
          </div>

          <h2 className="my-3 text-lg font-semibold">
            Zerodha Account Opening Process
          </h2>

          <h3 className="font-semibold">1. Zerodha Account Opening Steps</h3>
        </div>
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

      <div>
        <div className="">
          <p>
            To open an instant online account, visit the{" "}
            <a
              title="Zerodha website"
              href="https://tinyurl.com/broker-zerodha-account-opening"
              className="font-semibold text-blue-600 hover:underline"
            >
              Zerodha website
            </a>{" "}
            and click on the <strong>Signup</strong> button. Register using your
            mobile number and email. Verify them via OTP.
          </p>

          <p>
            Zerodha account opening is a simple 7 steps process. It is
            recommended to keep scanned or digital copies of the Aadhaar Card,
            PAN Card, Cancelled Cheque, and Signature on a blank white paper for
            quick account opening.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li>Enter PAN Number and Date of Birth.</li>
            <li>Choose trading segments and pay Rs 0 account opening fees.</li>
            <li>Enter your Aadhaar Number and verify it via OTP.</li>
            <li>
              Enter additional personal information like your parents' name.
            </li>
            <li>Enter your Bank account details.</li>
            <li>
              Complete the In-person verification by recording a video as per
              the instructions provided.
            </li>
            <li>Digitally sign your application form.</li>
          </ol>

          <p>
            Once your application is submitted, the Zerodha team will verify the
            details, and open your account. After the account opening, your
            account details will be shared including your login credentials via
            an email within 24 hours.
          </p>

          <h3 className="font-semibold">
            2. Zerodha 3-in-1 account opening process
          </h3>

          <p>
            Zerodha offers{" "}
            <a
              title="3-in-1 account"
              href="/glossary/3-in-1-account/144/"
              className="text-blue-600 hover:underline"
            >
              3-in-1 account
            </a>{" "}
            (Trading + Demat + Bank accounts) through its partner bank, IDFC
            FIRST. The 3-in-1 account offers seamless transitions between bank
            and trading accounts. When the customer buys/sells shares, the funds
            are withdrawn or deposited in the bank account automatically. The
            customer does not have to maintain funds in a trading account for
            buying shares. In addition to it, the customer also earns savings
            account interest on the bank account holdings with IDFC First.
          </p>

          <p>
            To open a 3-in-1 account, you need to{" "}
            <strong>open a bank account online with IDFC FIRST Bank</strong>.
            Once your Bank account is open, you can{" "}
            <a
              title="Zerodha website"
              href="https://tinyurl.com/broker-zerodha-account-opening"
              className="text-blue-600 hover:underline"
            >
              open a trading and Demat account with Zerodha
            </a>{" "}
            and link it with your IDFC bank account.
          </p>

          <h3 className="font-semibold">
            3. Zerodha offline account opening form, fees and status
          </h3>

          <p>
            If your Aadhaar number is not linked to your current phone number,
            you have to open Zerodha accounts via the offline process by signing
            the paper forms. Zerodha charges Rs 400 for offline account opening.
          </p>

          <h4 className="font-semibold">
            Zerodha Offline Account Opening Steps
          </h4>

          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Download the PDF Account Opening Form for{" "}
              <a
                title="Zerodha Equity Trading Account Opening Form"
                href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/ZerodhaTD.pdf"
                className="text-blue-600 hover:underline"
              >
                Equity trading
              </a>{" "}
              and{" "}
              <a
                title="Zerodha Commdity Trading Account Opening Form"
                href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/ZerodhaC.pdf"
                className="text-blue-600 hover:underline"
              >
                Commodity Trading
              </a>
              .
            </li>
            <li>Take a printout.</li>
            <li>Fill up the details.</li>
            <li>Sign the form.</li>
            <li>Attach the documents required.</li>
            <li>Courier the forms to the Zerodha office.</li>
          </ol>
        </div>
      </div>

      <div className="my-4 flex flex-wrap">
        <div className="">
          <h2 className="my-3 text-xl font-semibold">
            Zerodha Account opening documents
          </h2>

          <div>
            <h3 className="font-semibold">
              1. Documents Required for Online Account Opening
            </h3>
            <p>A scanned copy is required of the following documents:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="sticky top-0 bg-white">
                  <tr>
                    <th className="border px-3 py-2 text-left">Document</th>
                    <th className="border px-3 py-2 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">
                      <p>Identity Proof</p>
                    </td>
                    <td className="border px-3 py-2">
                      <p>PAN Card</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">
                      <p>Address Proof</p>
                    </td>
                    <td className="border px-3 py-2">
                      <p>
                        Anyone - Driving License, Voter ID, Passport, Aadhar
                        Card, Bank statement, etc.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">
                      <p>Bank Account Details</p>
                    </td>
                    <td className="border px-3 py-2">
                      <p>
                        Canceled cheque with your name printed on it. If not
                        please attach your latest Bank Statement&nbsp;
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">
                      <p>Signature Proof</p>
                    </td>
                    <td className="border px-3 py-2">
                      <p>Signature on an empty white paper</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">
                      <p>Income Proof</p>
                    </td>
                    <td className="border px-3 py-2">
                      <p>
                        Only in the case when the F&amp;O segment is selected.
                      </p>
                      <p>
                        Anyone - Latest salary slip, ITR, Form 16, 6-month bank
                        Statement, etc.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">
              2. Documents Required for Offline Account Opening
            </h3>
            <p>A paper signed copy is required of the following documents:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="sticky top-0 bg-white">
                  <tr>
                    <th className="border px-3 py-2 text-left">Document</th>
                    <th className="border px-3 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">
                      <p>Photographs</p>
                    </td>
                    <td className="border px-3 py-2">
                      <p>One. Paste on the KYC form and sign across it.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">
                      <p>PAN Card</p>
                    </td>
                    <td className="border px-3 py-2">
                      <p>1 copy, self-attested</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">
                      <p>Address Proof</p>
                    </td>
                    <td className="border px-3 py-2">
                      <p>
                        1 copy, self-attested - (Driving License, Voter ID,
                        Passport, Aadhar Card, Bank statement, etc. -
                        <strong>Anyone</strong>)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">
                      <p>Income Proof</p>
                    </td>
                    <td className="border px-3 py-2">
                      <p>
                        1 copy, self-attested - (Latest salary slip, ITR, Form
                        16, 6-month bank Statement, etc. -{" "}
                        <strong>Anyone</strong>)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">
                      <p>Canceled Cheque</p>
                    </td>
                    <td className="border px-3 py-2">
                      <p>
                        The cheque should have your name printed on it, if not
                        please attach your latest Bank Statement&nbsp;
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="my-3 text-xl font-semibold">
            Zerodha Account Opening Time
          </h2>

          <p>
            Zerodha offers an{" "}
            <a
              title="Zerodha website"
              href="https://tinyurl.com/broker-zerodha-account-opening"
              className="text-[#2163e8]"
            >
              online account opening
            </a>
            . Customers can submit the online form at any time. Once the
            application is received, Zerodha takes around 24 hours to verify the
            application and open an account.
          </p>

          <p>
            Zerodha team sends an email with your login credentials once the
            account is opened.
          </p>

          <p>
            For an offline paper application form, Zerodha takes two days to
            process account opening applications.
          </p>

          <h2 className="my-3 text-xl font-semibold">
            Zerodha Account Opening Charges
          </h2>

          <p>
            Zerodha's{" "}
            <strong>
              online account opening charges are Rs 0 for the equity segment{" "}
            </strong>
            and Rs 0 for the equity and commodity segments. Offline account
            opening charges for the trades on Equity, F&amp;O and Currency are
            Rs 400.
          </p>

          <p>
            Zerodha allows customers to{" "}
            <strong>open online and offline accounts</strong> through its
            trading platforms and website. However, NRI, Partnership, Limited
            Liability Partnership, HUF, or Corporate accounts can only be opened
            via an offline process.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse my-0">
              <thead className="sticky top-0 bg-white">
                <tr>
                  <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left">
                    Account Type
                  </th>
                  <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left">
                    Equity
                  </th>
                  <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left">
                    Equity + Commodity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>Individual Account (online)</p>
                  </td>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>Rs 0</p>
                  </td>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>Rs 0</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>Individual Account (offline)</p>
                  </td>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>Rs 400</p>
                  </td>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>Rs 600</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>NRI Account (offline)</p>
                  </td>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>Rs 500</p>
                  </td>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>N/A</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>Partnership, LLP, HUF or Corporate accounts (offline)</p>
                  </td>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>Rs 500</p>
                  </td>
                  <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                    <p>Rs 800</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <h2 className="my-3 text-xl font-semibold">
              Zerodha Account Maintenance Charges
            </h2>

            <p>
              Zerodha AMC Charges are <strong>Rs 300 per year</strong>. Zerodha
              withdraws Rs 75 from customers' trading account quarterly (every
              90 days). Zerodha AMC charges for the NRI account is Rs 500 per
              year.
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse my-0">
                <thead className="sticky top-0 bg-white">
                  <tr>
                    <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left">
                      Transactions
                    </th>
                    <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left">
                      Fees
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                      Trading/Demat AMC
                    </td>
                    <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                      Rs 300 per year (Rs 75 per quarter)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                      NRI Account AMC
                    </td>
                    <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                      Rs 500 per year
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4">Note:</p>

          <ul className="list-disc pl-5">
            <li>
              Zerodha Demat AMC charges are payable by all customers
              irrespective of account utilization.
            </li>
            <li>18% GST is charged in addition to Rs 75 AMC Fees.</li>
            <li>
              It is recommended to close the demat account if it's not in use to
              avoid AMC charges.
            </li>
          </ul>

          <h2 className="my-3 text-xl font-semibold">Conclusion:</h2>

          <p>
            Zerodha account opening process is easy, safe and secure. Zerodha
            accounts can be opened from both{" "}
            <a
              title="Zerodha website"
              href="https://tinyurl.com/broker-zerodha-account-opening"
              className="text-[#2163e8]"
            >
              online
            </a>{" "}
            and offline modes. Zerodha account opening charges are Rs 0 .
            Zerodha takes a max of 24 hours to open an account once the
            application is received.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaAccountOpeningContent;
