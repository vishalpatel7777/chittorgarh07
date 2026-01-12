import { useState } from "react";
import { BasisOfAllotmentsData } from "@data/ipo/LiveIpoInfo/BasisOfAllotmentsData";

export const SmeFpos = () => {
  const [year, setYear] = useState("2026");
  const hasData = BasisOfAllotmentsData.length > 0;

  return (
    <section className="w-full border-0">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-4 gap-3">
        <h2 className="text-green-600 font-bold text-xl">
          Basis of Allotments – IPOs: {year}
        </h2>

        <div className="flex items-center gap-2">
          {/* Year Selector */}
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

          {/* Export */}
          <button
            className="
              border border-green-600
              text-green-700 text-sm
              px-3 py-1 rounded
              hover:bg-green-50 transition
            "
          >
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="max-h-[70vh] overflow-y-auto">
        <small className="text-gray-500 block mb-2">
          Total Records:{" "}
          <span className="font-semibold">
            {hasData ? BasisOfAllotmentsData.length : 0}
          </span>
        </small>

        <div className="w-full overflow-x-auto md:overflow-x-visible">
          <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Company</th>
                <th className="px-3 py-2 text-left font-semibold">Issue Size</th>
                <th className="px-3 py-2 text-left font-semibold">
                  Opening Date
                </th>
                <th className="px-3 py-2 text-left font-semibold">
                  Closing Date
                </th>
                <th className="px-3 py-2 text-left font-semibold">
                  Allotment Date
                </th>
                <th className="px-3 py-2 text-left font-semibold">
                  Basis of Allotment
                </th>
              </tr>
            </thead>

            <tbody>
              {!hasData ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                BasisOfAllotmentsData.map((row, index) => (
                  <tr
                    key={index}
                    className={`
                      border-t
                      ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      hover:bg-green-50 transition
                    `}
                  >
                    <td className="px-3 py-2">{row.company}</td>
                    <td className="px-3 py-2">{row.issueSize}</td>
                    <td className="px-3 py-2">{row.openingDate}</td>
                    <td className="px-3 py-2">{row.closingDate}</td>
                    <td className="px-3 py-2">{row.allotmentDate}</td>
                    <td className="px-3 py-2">
                      <a
                        href={row.boaLink}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        BoA
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

