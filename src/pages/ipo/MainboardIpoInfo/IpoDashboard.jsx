import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { mainboardIpoSummary } from "@data/ipo/MainboardIpoInfo/Ipo_Dashboard/index";
import { smeIpoSummary } from "@data/ipo/MainboardIpoInfo/Ipo_Dashboard/index";

import { TABLE_CONFIGS } from "@data/ipo/MainboardIpoInfo/Ipo_Dashboard/tableConfigs";
import IpoTableCard from "@components/common/IpoTableCard";
import SummaryCard from "@components/common/SummaryCard";

import {
  mainboardIpos,
  ipoReviews,
  ipoSubscriptionsLive,
  ipoPerformanceTracker,
  mainboardBasisOfAllotment,
  mainboardIpoEventCalendar,
} from "@data/ipo/MainboardIpoInfo/Ipo_Dashboard";

import {
  smeIpos,
  smeIpoReviews,
  smeIpoSubscriptions,
  ipoPricePerformance,
  smeBasisOfAllotment,
  smeIpoEventCalendar,
} from "@data/ipo/MainboardIpoInfo/Ipo_Dashboard/index";

import SmeIpoDocuments from "@components/ipo/MainboardIpoInfo/IpoDashboard/Sme/SmeIpoDocuments";
import { smeIpoDocuments } from "@data/ipo/MainboardIpoInfo/Ipo_Dashboard/index";

import { mainboardIpoDocuments } from "@data/ipo/MainboardIpoInfo/Ipo_Dashboard/index";
import MainboardIpoDocuments from "@components/ipo/MainboardIpoInfo/IpoDashboard/MainBoard/MainboardIpoDocuments";

import api from "@/lib/api";

const DATA_MAP = {
  mainboard: {
    ipos: mainboardIpos,
    reviews: ipoReviews,
    subscription: ipoSubscriptionsLive,
    performance: ipoPerformanceTracker,
    basisOfAllotment: mainboardBasisOfAllotment,
    eventCalendar: mainboardIpoEventCalendar,
  },
  sme: {
    ipos: smeIpos,
    reviews: smeIpoReviews,
    subscription: smeIpoSubscriptions,
    performance: ipoPricePerformance,
    basisOfAllotment: smeBasisOfAllotment,
    eventCalendar: smeIpoEventCalendar,
  },
};
const IpoDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //api stuff
  const [mainboardIpoApiData, setMainboardIpoApiData] = useState([]);
  const [loadingIpos, setLoadingIpos] = useState(false);

  const TOP_TABLE_IDS = ["ipos", "reviews", "subscription", "performance"];
  const BOTTOM_TABLE_IDS = ["basisOfAllotment", "eventCalendar"];

  const SUMMARY_MAP = {
    mainboard: mainboardIpoSummary,
    sme: smeIpoSummary,
  };
  const activeTab = location.pathname.startsWith("/sme-ipos")
    ? "sme"
    : "mainboard";

  const summary = SUMMARY_MAP[activeTab];

  // useeffect for api
  useEffect(() => {
    if (activeTab !== "mainboard") return;

    const fetchMainboardIpos = async () => {
      try {
        setLoadingIpos(true);

        const response = await api.get("/ipos/mainboard");

        // assuming backend returns { success, data }
        setMainboardIpoApiData(response.data.data);
      } catch (error) {
        console.error("Failed to fetch mainboard IPOs", error);
      } finally {
        setLoadingIpos(false);
      }
    };

    fetchMainboardIpos();
  }, [activeTab]);

  // with his api : gazi's api😶
  // useEffect(() => {
  //   if (activeTab !== "mainboard") return;

  //   const fetchMainboardIpos = async () => {
  //     try {
  //       setLoadingIpos(true);

  //       const response = await api.get("https://sebi-api.onrender.com/ipos", {
  //         params: { page: 1, limit: 50 },
  //         headers: {
  //           "x-api-key": "123456789",
  //         },
  //       });

  //       const mappedData = response.data.data.map((row) => ({
  //         company: row.company_name,
  //         issueDate: row.filing_date, // already formatted (e.g. "Jun 08, 2004")
  //         pdfUrl: row.pdf_url,
  //       }));

  //       setMainboardIpoApiData(mappedData);
  //     } catch (error) {
  //       console.error("Failed to fetch mainboard IPOs", error);
  //     } finally {
  //       setLoadingIpos(false);
  //     }
  //   };

  //   fetchMainboardIpos();
  // }, [activeTab]);

  return (
    <div className="p-12 pb-12">
      <h1 className="text-2xl font-semibold text-black">
        IPO Dashboard ({activeTab === "mainboard" ? "Mainboard" : "SME"})
      </h1>

      <div className="mt-2 bg-white rounded-[0.7rem] shadow-sm px-4 pt-4 pb-8">
        <div className="flex gap-6 border-b border-gray-300 mt-1">
          {["mainboard", "sme"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                navigate(
                  tab === "sme" ? "/sme-ipos/smedashboard" : "/ipos/dashboard"
                );
              }}
              className={`pb-2 text-sm transition ${
                activeTab === tab
                  ? "text-emerald-700 font-semibold border-b-2 border-emerald-700"
                  : "text-gray-600 font-normal"
              }`}
            >
              {tab === "mainboard" ? "Mainboard IPOs" : "SME IPOs"}
            </button>
          ))}
        </div>

        <p className="mt-3 text-gray-700">
          Stay updated on {activeTab === "mainboard" ? "Mainboard" : "SME"} IPO
          activity across NSE & BSE—follow companies as they debut on the stock
          market.
        </p>

        <h2 className="mt-4 text-lg font-semibold text-black">
          {activeTab === "mainboard" ? "Mainboard" : "SME"} IPO Summary{" "}
          {summary.year}
        </h2>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6">
          <SummaryCard
            value={summary.listed}
            label={`IPOs in ${summary.year} (Listed)`}
          />
          <SummaryCard
            value={summary.upcomingAndOngoing}
            label="Upcoming & Ongoing IPOs"
          />
          <SummaryCard
            value={summary.gainOnListing}
            label="IPOs in Gain on Listing"
          />
          <SummaryCard
            value={summary.lossOnListing}
            label="IPOs in Loss on Listing"
          />
          <SummaryCard value={summary.totalGain} label="IPOs in Gain" />
          <SummaryCard value={summary.totalLoss} label="IPOs in Loss" />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {TABLE_CONFIGS[activeTab]
          .filter((cfg) => TOP_TABLE_IDS.includes(cfg.id))
          .map((cfg) => (
            // <IpoTableCard
            //   key={cfg.id}
            //   config={cfg}
            //   data={DATA_MAP[activeTab][cfg.id]}
            // />

            <IpoTableCard
              key={cfg.id}
              config={cfg}
              data={
                activeTab === "mainboard" && cfg.id === "ipos"
                  ? mainboardIpoApiData
                  : DATA_MAP[activeTab][cfg.id]
              }
              loading={
                activeTab === "mainboard" && cfg.id === "ipos" && loadingIpos
              }
            />
          ))}
      </div>

      <div className="mt-6 mb-3 bg-white border border-gray-200 rounded-lg shadow-sm px-3 pt-3 pb-4 relative group">
        {activeTab === "mainboard" && (
          <MainboardIpoDocuments data={mainboardIpoDocuments} />
        )}
        {activeTab === "sme" && <SmeIpoDocuments data={smeIpoDocuments} />}
      </div>

      {/* Bottom Tables */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {TABLE_CONFIGS[activeTab]
          .filter((cfg) => BOTTOM_TABLE_IDS.includes(cfg.id))
          .map((cfg) => (
            <IpoTableCard
              key={cfg.id}
              config={cfg}
              data={DATA_MAP[activeTab][cfg.id]}
            />
          ))}
      </div>
    </div>
  );
};

export default IpoDashboard;
