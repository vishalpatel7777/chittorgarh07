
import React from "react";

const IpoAnchorInvestorsTable = ({ title, data }) => {
  return (
    <div
      className="
        w-full
        bg-white
        rounded-xl
        shadow-sm
        border
        border-gray-200
        p-4
        flex
        flex-col
      "
    >
      {/* Card Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="text-green-700 font-bold text-lg">
          {title}
        </h2>

        <div className="flex gap-2 items-center">
          <select
            className="
              border
              border-green-600
              text-green-700
              font-semibold
              rounded-md
              px-3
              py-1.5
              text-sm
              focus:outline-none
              focus:ring-1
              focus:ring-green-600
            "
          >
            <option>Year 2027</option>
            <option>Year 2026</option>
            <option>Year 2025</option>
            <option>Year 2024</option>
          </select>

          <button
            className="
              flex
              items-center
              gap-2
              border
              border-green-600
              text-green-700
              rounded-md
              px-3
              py-1.5
              text-sm
              hover:bg-green-50
              transition
            "
          >
            Export
          </button>
        </div>
      </div>

      {/* Table (vertical scroll only) */}
      <div className="max-h-[65vh] overflow-y-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr className="text-center font-semibold text-gray-700">
              <th className="p-2 text-left">Anchor Investor</th>
              <th className="p-2">No. of IPOs</th>
              <th className="p-2">Total investment (Rs.cr.)</th>
              <th className="p-2">Total Issue Amount (Rs.cr.)</th>
              <th className="p-2">Average Issue Amount (Rs.cr.)</th>
              <th className="p-2">Average P/E</th>
              <th className="p-2">Avg Listing gain (%)</th>
              <th className="p-2">Avg Current gain/loss (%)</th>
              <th className="p-2">Avg subscription (x)</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="p-2 text-left break-words max-w-[260px]">
                  {row.anchorInvestor}
                </td>
                <td className="p-2 text-right">{row.ipoCount}</td>
                <td className="p-2 text-right">
                  {row.totalInvestment.toFixed(2)}
                </td>
                <td className="p-2 text-right">
                  {row.totalIssueAmount.toLocaleString()}
                </td>
                <td className="p-2 text-right">
                  {row.averageIssueAmount.toLocaleString()}
                </td>
                <td className="p-2 text-right">{row.averagePE}</td>
                <td className="p-2 text-right">{row.averageListingGain}</td>
                <td className="p-2 text-right">
                  {row.averageCurrentGainLoss}
                </td>
                <td className="p-2 text-right">
                  {row.averageSubscription}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Footer */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <p>Showing 1 to {data.length} entries</p>

        <div className="flex gap-1">
          <button className="px-2 py-1 border rounded text-gray-400">
            « First
          </button>
          <button className="px-2 py-1 border rounded text-gray-400">
            ‹ Prev
          </button>
          <span className="px-2 py-1 border rounded bg-green-600 text-white">
            1
          </span>
          <button className="px-2 py-1 border rounded">
            Next ›
          </button>
          <button className="px-2 py-1 border rounded">
            Last »
          </button>
        </div>
      </div>
    </div>
  );
};

export default IpoAnchorInvestorsTable;
