import React from "react";
import { Outlet } from "react-router-dom";
import IPOHeader from "@components/ipo/MainboardIpoInfo/currentIpos/IPOHeader";
import IpoMerchantBankerMainboardCard from "@components/ipo/IpoPerformanceReports/IpoMerchantBanker/IpoMerchantBankerMainboardCard";
import FAQLayout from "@components/common/faq/FAQLayout";

const IpoMerchantBanker = () => {
  return (
    <section className="px-3 mx-23 mt-4">
      <IPOHeader />
      <h1 className="font-semibold text-2xl mb-1">
        Lead Managers - By No. and Performance of Mainboard IPOs managed : 2026
      </h1>
      <IpoMerchantBankerMainboardCard />
      {/* space for the last component  */}
      <div
        className="
          bg-white
          rounded-[0.7rem]
          shadow-sm
          px-2 md:px-4
          py-2
          mb-4
          overflow-hidden
        "
      >
        <Outlet />

        <div className="flex justify-between mt-4">
          {/* Disclaimer Section */}
          <div className="">
            <h2 className="font-bold text-gray-800 mb-3">Disclaimer</h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-7">
              <li>
                <strong>Total IPOs:</strong> Number of IPOs managed by the{" "}
                <a
                  href="/keyword/lead-manager/70/"
                  className="text-blue-600 hover:underline"
                >
                  Lead Manager
                </a>{" "}
                during the year.
              </li>

              <li>
                <strong>Positive Listing:</strong> Number of IPOs (out of total
                managed) that listed at a price higher than the{" "}
                <a
                  href="/keyword/issue-price/275/"
                  className="text-blue-600 hover:underline"
                >
                  issue price
                </a>
                .
              </li>

              <li>
                <strong>% of Positive Listing:</strong> Percentage of IPOs
                managed by the Lead Manager that listed above the issue price.
              </li>

              <li>
                <strong>Negative Listing:</strong> Number of IPOs (out of total
                managed) that listed at a price lower than the issue price.
              </li>

              <li>
                <strong>% of Negative Listing:</strong> Percentage of IPOs
                managed by the Lead Manager that listed below the issue price.
              </li>

              <li>
                <strong>% Average Gains on Listing Day:</strong> Average
                percentage gain or loss of IPOs managed by the Lead Manager on
                their listing day.
              </li>
            </ul>
          </div>
          {/* SME IPO Consulting Card (floats right on md+) */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden w-full max-w-xs">
              {/* Header */}
              <div className="bg-red-600 text-white text-center py-2">
                <h6 className="text-sm font-semibold">🚀 SME IPO Consulting</h6>
              </div>

              {/* Body */}
              <div className="p-4 text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2332/2332091.png"
                  alt="SME IPO"
                  width={48}
                  height={48}
                  className="mx-auto mb-2"
                />

                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Planning an SME IPO?
                </p>

                <p className="text-xs text-gray-500 mb-3">
                  End-to-end support from preparation to listing.
                </p>

                <button
                  className="
                inline-flex items-center gap-1
                bg-red-600 text-white
                text-xs font-semibold
                px-4 py-1.5
                rounded-full
                shadow-sm
                hover:bg-red-700
                transition
              "
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQLayout />
    </section>
  );
};

export default IpoMerchantBanker;
