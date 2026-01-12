import React, { useState } from "react";
import { ipoPerformanceData } from "@data/ipo/MainboardIpoInfo/IpoPerformance/IpoPerformanceData";

const years = [
  2026, 2025, 2024, 2023, 2022,
  2021, 2020, 2019, 2018,
];

export const SmeIpos = () => {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState(2026);

  const data = ipoPerformanceData.sme.filter((ipo) =>
    ipo.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-2 p-3">
      {/* IPO Search */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          IPO Search
        </label>
        <input
          type="text"
          placeholder="Type to search company name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full md:w-[320px]
            bg-gray-100
            border border-gray-200
            rounded-md
            px-3 py-2
            text-sm
            focus:outline-none
            focus:ring-1 focus:ring-emerald-400
          "
        />
      </div>

      <hr className="my-4" />

      {/* Header */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <h2 className="text-lg font-bold text-emerald-600">
          IPO Performance Tracker
        </h2>

        <button
          className="
            ml-auto
            flex items-center gap-2
            border border-emerald-500
            text-emerald-600
            px-3 py-1.5
            rounded-md
            text-sm
            hover:bg-emerald-50
          "
        >
          📄 <span className="hidden sm:inline">Export</span>
        </button>

        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="
            border border-emerald-500
            rounded-md
            px-3 py-1.5
            text-sm font-semibold
            bg-white
            focus:outline-none
            focus:ring-1 focus:ring-emerald-400
          "
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Company Name",
                "Listed On",
                "Issue Price",
                "Listing Day Close",
                "Listing Day Gain",
                "Current Price",
                "Profit/Loss",
              ].map((h) => (
                <th
                  key={h}
                  className="px-3 py-2 text-right font-semibold text-blue-700 first:text-left"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-600">
                  No Record Found.
                </td>
              </tr>
            ) : (
              data.map((row, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="px-3 py-2 text-left text-blue-600 font-medium">
                    {row.company}
                  </td>
                  <td className="px-3 py-2 text-right">{row.listedOn}</td>
                  <td className="px-3 py-2 text-right">{row.issuePrice}</td>
                  <td className="px-3 py-2 text-right">{row.listingClose}</td>
                  <td
                    className={`px-3 py-2 text-right font-semibold ${
                      row.listingGain.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {row.listingGain}
                  </td>
                  <td className="px-3 py-2 text-right">{row.currentPrice}</td>
                  <td
                    className={`px-3 py-2 text-right font-semibold ${
                      row.profitLoss.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {row.profitLoss}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

