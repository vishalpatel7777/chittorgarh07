// src/components/ipo/LiveIpoInfo/IpoSubscription/IpoSubscriptionTable.jsx

import { ipoSubscriptionData } from '@data/ipo/LiveIpoInfo/IpoSubscriptionData';

const rowBgByStatus = (status) => {
  if (status === "open") return "bg-green-50";
  if (status === "listingToday") return "bg-cyan-50";
  return "";
};

export default function IpoSubscriptionTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-3 overflow-x-auto">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
        <h2 className="text-green-600 font-bold text-lg">
          Live Subscription Status from BSE and NSE: 2026
        </h2>

        <div className="flex items-center gap-2">
          <select
            className="
              border border-green-600 rounded-md
              px-3 py-1 text-sm font-semibold
              focus:outline-none
            "
          >
            {Array.from({ length: 22 }, (_, i) => 2027 - i).map((y) => (
              <option key={y}>Year {y}</option>
            ))}
          </select>

          <button
            className="
              border border-green-600 text-green-600
              rounded-md px-3 py-1 text-sm font-semibold
              hover:bg-green-50 transition
            "
          >
            Export
          </button>
        </div>
      </div>

      {/* Meta */}
      <p className="text-xs text-gray-500 mb-2">
        🗄 Total Records:{" "}
        <span className="font-semibold">{ipoSubscriptionData.length}</span>
      </p>

      {/* Table */}
      <table
        className="
          w-auto text-sm border border-gray-200
          rounded-lg border-separate border-spacing-0
        "
      >
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr>
            {[
              "Company",
              "Closing Date",
              "Total Issue Amount (₹ Cr)",
              "QIB (x)",
              "sNII (x)",
              "bNII (x)",
              "NII (x)",
              "Retail (x)",
              "Employee (x)",
              "Shareholder (x)",
              "Others (x)",
              "Total (x)",
              "Applications",
            ].map((head) => (
              <th
                key={head}
                className="
                  px-3 py-2 text-center font-semibold
                  border-b border-gray-200 whitespace-nowrap
                "
              >
                {head}
              </th>
            ))}
          </tr>

          {/* Filter row */}
          <tr>
            {Array(13).fill(0).map((_, i) => (
              <th key={i} className="px-2 py-1 border-b border-gray-200">
                <input
                  placeholder="Search..."
                  className="
                    w-full text-xs px-2 py-1
                    border border-gray-200 rounded
                    focus:outline-none
                  "
                />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {ipoSubscriptionData.map((ipo, i) => (
            <tr
              key={i}
              className={`
                border-t border-gray-200
                hover:bg-gray-50
                ${rowBgByStatus(ipo.status)}
              `}
            >
              <td className="px-3 py-2 text-blue-600 font-medium whitespace-nowrap">
                {ipo.company}
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                {ipo.closingDate}
              </td>
              <td className="px-3 py-2 text-right">
                {ipo.totalIssueAmount.toLocaleString()}
              </td>
              <td className="px-3 py-2 text-right">{ipo.qib}</td>
              <td className="px-3 py-2 text-right">{ipo.snii}</td>
              <td className="px-3 py-2 text-right">{ipo.bnii}</td>
              <td className="px-3 py-2 text-right">{ipo.nii}</td>
              <td className="px-3 py-2 text-right">{ipo.retail}</td>
              <td className="px-3 py-2 text-right">{ipo.employee}</td>
              <td className="px-3 py-2 text-right">
                {ipo.shareholder ?? "-"}
              </td>
              <td className="px-3 py-2 text-right">
                {ipo.others ?? "-"}
              </td>
              <td className="px-3 py-2 text-right font-semibold">
                {ipo.total}
              </td>
              <td className="px-3 py-2 text-right">
                {ipo.applications}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
