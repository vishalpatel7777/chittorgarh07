import React from "react";

const IpoMerchantBankerTable = ({ title, data }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="text-green-700 font-bold text-lg">
          {title}
        </h2>

        <div className="flex gap-2 items-center">
          <select
            className="
              border border-green-600
              text-green-700
              font-semibold
              rounded-md
              px-3 py-1.5
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
              border border-green-600
              text-green-700
              rounded-md
              px-3 py-1.5
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
      <div className="max-h-[60vh] overflow-y-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr className="text-gray-700 font-semibold text-center">
              <th className="p-2 text-left">Lead Manager</th>
              <th className="p-2">Total IPOs</th>
              <th className="p-2">Positive listing</th>
              <th className="p-2">% of Positive listing</th>
              <th className="p-2">Negative listing</th>
              <th className="p-2">% of Negative listing</th>
              <th className="p-2">% Avg gains on listing day</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="p-2 text-left break-words max-w-[260px]">
                  {row.leadManager}
                </td>
                <td className="p-2 text-right">{row.totalIpos}</td>
                <td className="p-2 text-right">{row.positiveListing}</td>
                <td className="p-2 text-right">
                  {row.positiveListingPercent.toFixed(2)}%
                </td>
                <td className="p-2 text-right">{row.negativeListing}</td>
                <td className="p-2 text-right">
                  {row.negativeListingPercent.toFixed(2)}%
                </td>
                <td
                  className={`p-2 text-right font-medium ${
                    row.averageListingGain >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {row.averageListingGain.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 text-sm text-gray-600">
        Showing 1 to {data.length} entries
      </div>
    </div>
  );
};

export default IpoMerchantBankerTable;
