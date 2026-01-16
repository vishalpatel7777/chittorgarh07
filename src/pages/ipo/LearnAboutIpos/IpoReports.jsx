import { Outlet, useLocation } from "react-router-dom";
import { ipoReportsTabs } from "@data/ipo/LearnAboutIpos/ipoReportsTabs";
import IpoReportsMainboardCard from '@components/ipo/LearnAboutIpos/IpoReports/IpoReportsMainboardCard';

const IpoReports = () => {

   const location = useLocation();

  // Determine active tab safely
  const activeTab =
    ipoReportsTabs.find(tab =>
      tab.path === ""
        ? location.pathname.endsWith("/ipos/reports")
        : location.pathname.includes(tab.path)
    ) || ipoReportsTabs[0];

  return (
    <section className="px-3 mt-4">
      <h1 className="font-semibold text-2xl mb-3">
        {activeTab.title}
      </h1>
      <IpoReportsMainboardCard />
      <div
        className="
          bg-white
          rounded-[0.7rem]
          shadow-sm
          px-2 md:px-4
          py-3
          mb-4
          overflow-hidden
        "
      >
        {/* This renders IpoReportsTabLayout */}
        <Outlet />

       <div className="flex flex-wrap mt-4">
      <div className="w-full">
        <div className="text-sm text-gray-700 leading-relaxed">
          {/* Heading */}
          <h2 className="text-base font-semibold mb-3">
            SME IPO analysis reports by{" "}
            <a
              href="https://www.ipoplatform.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              IPOPlatform.com
            </a>
          </h2>

          {/* List */}
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a
                href="https://www.ipoplatform.com/search/sector/all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                SME IPOs by Sector
              </a>{" "}
              – Analyse SME IPOs by various sectors, find location, date, etc.
            </li>

            <li>
              <a
                href="https://www.ipoplatform.com/merchant-bankers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                SME Merchant Bankers&apos; Review
              </a>{" "}
              – Detailed review of SME merchant bankers and IPO performance.
            </li>

            <li>
              <a
                href="https://www.ipoplatform.com/anchor-investors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                SME Anchor Investors&apos; Review
              </a>{" "}
              – Review investments and returns of SME anchor investors.
            </li>

            <li>
              <a
                href="https://www.ipoplatform.com/merchant-bankers/compare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Compare SME IPO Merchant Bankers
              </a>{" "}
              – Side-by-side comparison of merchant bankers.
            </li>

            <li>
              <a
                href="https://www.ipoplatform.com/anchor-investors/compare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Compare SME IPO Anchor Investors
              </a>{" "}
              – Compare SME anchor investors performance.
            </li>

            <li>
              <a
                href="https://www.ipoplatform.com/calculators/free-cash-flow-to-equity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Free Cash Flow to Equity calculator
              </a>{" "}
              – Calculate FCFE to comply with NSE Emerge guidelines.
            </li>

            <li>
              <a
                href="https://www.ipoplatform.com/resources/sector-wise-pe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Find sector-wise PE
              </a>{" "}
              – Sector-wise average PE for SME listed companies.
            </li>

            <li>
              <a
                href="https://www.ipoplatform.com/resources/initial-eligibility-assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                SME IPO Eligibility Assessment
              </a>{" "}
              – Check IPO eligibility with this calculator.
            </li>

            <li>
              <a
                href="https://www.ipoplatform.com/resources/migration-from-SME-to-mainboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Criteria for migration of an SME to Mainboard
              </a>{" "}
              – Read eligibility criteria for SME → Mainboard migration.
            </li>

            <li>
              <a
                href="https://www.ipoplatform.com/calculators/business-valuation-issue-size"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                SME IPO issue size calculator
              </a>{" "}
              – Calculate SME IPO issue size.
            </li>

            <li>
              <a
                href="https://www.ipoplatform.com/services/ipo-advisory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Services
              </a>{" "}
              – SME IPO advisory services.
            </li>
          </ul>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default IpoReports;
