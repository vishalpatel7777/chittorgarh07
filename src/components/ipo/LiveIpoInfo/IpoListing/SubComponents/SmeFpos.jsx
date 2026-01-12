import { useState } from "react";
import { IpoListingData } from  '@data/ipo/LiveIpoInfo/IpoListingData';

export const SmeFpos = () => {
  const [year, setYear] = useState("2026");

  const hasData = IpoListingData.length > 0 && IpoListingData[0].company;

  return (
    <section className="w-full border-0">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-4 gap-3">
        <h2 className="text-green-600 font-bold text-xl">
          Mainboard IPOs Listings: {year}
        </h2>

        <div className="flex items-center gap-2">
          {/* Year Select */}
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="
              border border-green-600
              text-green-700 font-semibold text-sm
              rounded px-2 py-1
              focus:outline-none
            "
          >
            {Array.from({ length: 22 }, (_, i) => 2027 - i).map((y) => (
              <option key={y} value={y}>
                Year {y}
              </option>
            ))}
          </select>

          {/* Export Button */}
          <button
            type="button"
            className="
              border border-green-600
              text-green-700 text-sm
              px-3 py-1 rounded
              flex items-center gap-2
              hover:bg-green-50 transition
            "
            title="Export to CSV"
          >
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Table Container (vertical scroll allowed, horizontal adaptive) */}
      <div className="max-h-[70vh] overflow-y-auto">
        <small className="text-gray-500 block mb-2">
          Total Records:{" "}
          <span className="font-semibold">
            {hasData ? IpoListingData.length : 0}
          </span>
        </small>

        <div className="w-full overflow-x-auto md:overflow-x-visible">
          <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
  {/* Table Head */}
  <thead className="bg-gray-100 sticky top-0 z-10">
    <tr>
      <th className="px-3 py-2 text-left">Company</th>
      <th className="px-3 py-2">Opening Date</th>
      <th className="px-3 py-2">Listing Date</th>
      <th className="px-3 py-2">Listing At</th>
      <th className="px-3 py-2">ISIN</th>
      <th className="px-3 py-2">BSE Code</th>
      <th className="px-3 py-2">NSE Symbol</th>
      <th className="px-3 py-2">Issue Price</th>
      <th className="px-3 py-2">Close Price</th>
      <th className="px-3 py-2">Day Gain/Loss %</th>
      <th className="px-3 py-2">BSE Price</th>
      <th className="px-3 py-2">NSE Price</th>
      <th className="px-3 py-2">Total Gain/Loss %</th>
    </tr>
  </thead>

  {/* Table Body */}
  <tbody>
    {IpoListingData.map((row, index) => (
      <tr
        key={index}
        className={`
          border-t
          ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}
          hover:bg-green-50 transition
        `}
      >
        <td className="px-3 py-2">{row.company}</td>
        <td className="px-3 py-2">{row.openingDate}</td>
        <td className="px-3 py-2">{row.listingDate}</td>
        <td className="px-3 py-2">{row.listingAt}</td>
        <td className="px-3 py-2">{row.isin}</td>
        <td className="px-3 py-2">{row.bseScripCode || "-"}</td>
        <td className="px-3 py-2">{row.nseSymbol || "-"}</td>
        <td className="px-3 py-2">₹{row.issuePrice}</td>
        <td className="px-3 py-2">₹{row.listingDayClosePrice}</td>

        <td
          className={`px-3 py-2 font-semibold ${
            row.listingDayGainLoss >= 0
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {row.listingDayGainLoss}%
        </td>

        <td className="px-3 py-2">{row.currentPriceBse || "-"}</td>
        <td className="px-3 py-2">{row.currentPriceNse || "-"}</td>

        <td
          className={`px-3 py-2 font-semibold ${
            row.totalGainLoss >= 0
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {row.totalGainLoss}%
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </section>
  );
};
