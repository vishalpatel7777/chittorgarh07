import { useState } from "react";

const years = [
  2027, 2026, 2025, 2024, 2023,
  2022, 2021, 2020, 2019, 2018,
];

const rowBgByStatus = (status) => {
  if (status === "open") return "bg-green-100";
  if (status === "planned") return "bg-yellow-100";
  return "";
};

export default function IpoTable({ data }) {
  const [year, setYear] = useState(2026);

  return (
    <section className="w-full">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
        <h2 className="text-lg font-bold text-emerald-600">
          IPOs: {year}
        </h2>

        <div className="flex items-center gap-2">
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="
              border border-emerald-500
              rounded-md
              px-3 py-1
              text-sm font-semibold
              bg-white
              focus:outline-none
              focus:ring-1 focus:ring-emerald-400
            "
          >
            {years.map((y) => (
              <option key={y} value={y}>
                Year {y}
              </option>
            ))}
          </select>

          <button
            className="
              flex items-center gap-2
              border border-emerald-500
              text-emerald-600
              px-3 py-1
              rounded-md
              text-sm
              hover:bg-emerald-50
            "
          >
            📄 <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Meta */}
      <p className="text-sm text-gray-500 mb-2">
        🗄 Total Records:{" "}
        <span className="font-semibold">{data.length}</span>
      </p>

      {/* Table wrapper (Bootstrap table-responsive equivalent) */}
      <div className="overflow-x-auto">

        <table
          className="
            w-auto
            bg-white
            text-[15px]
            leading-[1.5]
            border
            border-[var(--border-color)]
            rounded-lg
            border-separate border-spacing-0
            shadow-[0_2px_6px_rgba(0,0,0,0.05)]
            overflow-hidden
          "
        >
          {/* Table Head */}
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              {[
                "Company",
                "Opening Date",
                "Closing Date",
                "Listing Date",
                "Issue Price (₹)",
                "Total Issue Amount (₹ Cr)",
                "Listing At",
                "Lead Manager",
                "Compare",
              ].map((head) => (
                <th
                  key={head}
                  className="
                    px-4 py-3
                    font-semibold
                    text-center
                    text-gray-800
                    border-b
                    border-gray-200
                    whitespace-nowrap
                  "
                >
                  {head}
                </th>
              ))}
            </tr>

            {/* Filter row */}
            <tr className="bg-white">
              {Array(8).fill(0).map((_, i) => (
                <th
                  key={i}
                  className="px-3 py-2 border-b border-gray-200"
                >
                  <input
                    placeholder="Search..."
                    className="
                      w-full
                      bg-gray-100
                      border border-gray-200
                      rounded-md
                      px-3 py-1.5
                      text-[13px]
                      text-gray-600
                      placeholder:text-gray-400
                      focus:outline-none
                      focus:ring-1 focus:ring-blue-400
                    "
                  />
                </th>
              ))}
              <th className="border-b border-gray-200" />
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((ipo, i) => (
              <tr
                key={i}
                className={`
                  border-t
                  border-gray-200
                  hover:bg-gray-50
                  odd:bg-gray-50/60
                  ${rowBgByStatus(ipo.status)}
                `}
              >
                <td className="px-4 py-3 text-blue-600 font-medium whitespace-nowrap">
                  {ipo.company}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {ipo.openingDate}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {ipo.closingDate}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {ipo.listingDate || "-"}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {ipo.price}
                </td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  {ipo.issueAmount}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {ipo.listingAt}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {ipo.leadManager}
                </td>
                <td className="px-4 py-3 text-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-400"
                  />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </section>
  );
}
