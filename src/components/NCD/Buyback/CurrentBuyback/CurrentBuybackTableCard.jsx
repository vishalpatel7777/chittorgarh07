import React from "react";
import { CurrentBuybackData } from '@data/NCD/CurrentBuybackData'


const CurrentBuybackTableCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-4 px-2 md:px-3 py-2 overflow-hidden">
      
      {/* Search row */}
      <div className="grid grid-cols-12 gap-2 mt-3">
        <div className="col-span-6 md:col-span-3">
          <input
            type="text"
            placeholder="Company Name"
            className="w-full text-sm px-2 py-1 border border-gray-300 rounded"
          />
        </div>

        <div className="col-span-6 md:col-span-4 flex gap-2">
          <button className="bg-[#0cbc87] text-white text-sm px-3 py-1 rounded flex items-center gap-1">
            🔍 <span className="hidden md:inline">Search</span>
          </button>
          <button className="bg-[#d6293e] text-white text-sm px-3 py-1 rounded flex items-center gap-1">
            ✖ <span className="hidden md:inline">Clear</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center my-3 gap-3">
        <h2 className="text-[#0cbc87] font-bold text-lg">
          List of buyback of shares in India 2026
        </h2>

        <div className="flex items-center gap-2">
          <select className="border border-[#0cbc87] text-[#0cbc87] font-semibold text-sm rounded px-2 py-[0.3rem]">
            {[2027, 2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019].map(
              (year) => (
                <option key={year}>Year {year}</option>
              )
            )}
          </select>

          <button className="border border-[#0cbc87] text-[#0cbc87] text-sm px-3 py-1 rounded flex items-center gap-2">
            📄 <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="text-sm text-gray-600 mb-2 flex items-center gap-1">
        🗄️ Total Records:
        <span className="font-semibold text-black">
          {CurrentBuybackData.length}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-[#dbe4f0] border-separate border-spacing-0 text-[14px]">
          <thead className="bg-[#f7f8f9] sticky top-0 z-10">
            <tr>
              {[
                "Company Name",
                "Record Date",
                "Issue Open",
                "Issue Close",
                "Buyback Type",
                "Buyback Price",
                "Market Price",
                "Issue Shares",
                "Issue Amount",
                "Compare",
              ].map((head) => (
                <th
                  key={head}
                  className="px-3 py-2 text-center font-semibold border-b border-[#dbe4f0]"
                >
                  {head}
                </th>
              ))}
            </tr>

            {/* Filter row */}
            <tr>
              {Array.from({ length: 9 }).map((_, i) => (
                <th key={i} className="px-2 py-1 border-b border-[#dbe4f0]">
                  <input
                    className="w-full text-[12px] px-2 py-1 border border-gray-300 rounded"
                    placeholder="Search..."
                  />
                </th>
              ))}
              <th />
            </tr>
          </thead>

          <tbody>
            {CurrentBuybackData.map((row) => (
              <tr
                key={row.id}
                className={`hover:bg-[#eef3ff] transition ${
                  row.status === "upcoming" ? "bg-[#fff3cd]" : ""
                }`}
              >
                <td className="px-3 py-2 border-t border-[#dbe4f0]">
                  <a
                    href={row.link}
                    target="_parent"
                    className="text-[#2163e8] hover:underline"
                  >
                    {row.company}
                  </a>
                </td>
                <td className="px-3 py-2 border-t border-[#dbe4f0]">
                  {row.recordDate}
                </td>
                <td className="px-3 py-2 border-t border-[#dbe4f0]">
                  {row.issueOpen}
                </td>
                <td className="px-3 py-2 border-t border-[#dbe4f0]">
                  {row.issueClose}
                </td>
                <td className="px-3 py-2 border-t border-[#dbe4f0]">
                  {row.type}
                </td>
                <td className="px-3 py-2 text-right border-t border-[#dbe4f0]">
                  {row.buybackPrice}
                </td>
                <td className="px-3 py-2 text-right border-t border-[#dbe4f0]">
                  {row.marketPrice}
                </td>
                <td className="px-3 py-2 text-right border-t border-[#dbe4f0]">
                  {row.issueShares}
                </td>
                <td className="px-3 py-2 text-right border-t border-[#dbe4f0]">
                  {row.issueAmount}
                </td>
                <td className="px-3 py-2 text-center border-t border-[#dbe4f0]">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-sm text-gray-700">
        <ol className="list-decimal pl-5 space-y-1">
          <li>Participation in a buyback offer is voluntary.</li>
          <li>Eligibility depends on record date shareholding.</li>
          <li>Additional shares may be accepted subject to availability.</li>
          <li>Buyback is open to Demat and physical shareholders.</li>
        </ol>
      </div>
    </div>
  );
};

export default CurrentBuybackTableCard;
