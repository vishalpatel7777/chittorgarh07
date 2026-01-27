// src/components/MoreReportsTableCard.jsx
import React from "react";

const MoreReportsTableCard = ({ title, data }) => {
  return (
    <div
      className="
        mb-4
        overflow-hidden
        rounded-lg
     
        px-2
        py-2
      
        md:px-4
      "
    >
      {/* Header */}
      <div className="my-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-bold text-emerald-700">
          Reports related to IPOs in India
        </h2>

        <button
          type="button"
          className="
            flex
            items-center
            gap-2
            rounded
            border
            border-emerald-600
            px-3
            py-1
            text-sm
            text-emerald-700
            hover:bg-emerald-50
          "
        >
          Export
        </button>
      </div>

      {/* Meta */}
      <div className="mb-2 text-xs text-gray-500">
        Total Records: <span className="font-semibold">88</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              <th className="w-20 px-3 py-2 text-center font-semibold text-gray-600">
                #
              </th>
              <th className="px-3 py-2 text-center font-semibold text-gray-600">
                Report
              </th>
            </tr>

            {/* Search row */}
            <tr>
              <th className="px-2 py-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded border px-2 py-1 text-xs"
                />
              </th>
              <th className="px-2 py-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded border px-2 py-1 text-xs"
                />
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Section header */}
            <tr className="bg-cyan-50">
              <td />
              <td className="px-3 py-2">
                <strong className="text-base">Investor Tools</strong>
              </td>
            </tr>

            {/* Example rows */}
            <tr className="border-b hover:bg-gray-50">
              <td className="px-3 py-2 text-right text-gray-600">1</td>
              <td className="px-3 py-2">
                IPO Schedule and Fund Planning Calendar :{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Mainboard IPOs
                </a>{" "}
                |{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  SME IPOs
                </a>
              </td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="px-3 py-2 text-right text-gray-600">2</td>
              <td className="px-3 py-2">
                IPO Timetable :{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Mainboard IPOs
                </a>{" "}
                |{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  SME IPOs
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-sm leading-relaxed">
        <h3 className="mb-2 text-base font-semibold">
          SME IPO analysis reports by{" "}
          <a
            href="https://www.ipoplatform.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            IPOPlatform.com
          </a>
        </h3>

        <ul className="list-disc space-y-1 pl-5 text-gray-700">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              SME IPOs by Sector
            </a>{" "}
            – Analyse SME IPOs by sector, location, and date
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              SME Merchant Bankers’ Review
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              SME Anchor Investors’ Review
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MoreReportsTableCard;
