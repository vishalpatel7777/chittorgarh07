import { useState } from "react";
import { IpoAllotmentStatusData } from "@data/ipo/LiveIpoInfo/IpoAllotmentStatusData";

export const SmeIpos = () => {
  const [year, setYear] = useState("2026");

  return (
    <section className="w-full border-0">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-4 gap-3">
        <h2 className="text-green-600 font-bold text-xl">
          IPO Allotment Status Check (Mainboard IPO)
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

          {/* Export */}
          <button
            type="button"
            className="
              border border-green-600
              text-green-700 text-sm
              px-3 py-1 rounded
              flex items-center gap-2
              hover:bg-green-50 transition
            "
          >
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="max-h-[70vh] overflow-y-auto">
        <small className="text-gray-500 block mb-2">
          Total Records:{" "}
          <span className="font-semibold">
            {IpoAllotmentStatusData.length}
          </span>
        </small>

        <div className="w-full overflow-x-auto md:overflow-x-visible">
          <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="px-3 py-2 text-left">Company</th>
                <th className="px-3 py-2 text-left">Opening Date</th>
                <th className="px-3 py-2 text-left">Closing Date</th>
                <th className="px-3 py-2 text-left">Allotment Date</th>
                <th className="px-3 py-2 text-left">BoA</th>
                <th className="px-3 py-2 text-left">Allotment</th>
              </tr>
            </thead>

            <tbody>
              {IpoAllotmentStatusData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-t ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-green-50 transition`}
                >
                  <td className="px-3 py-2">
                    <a
                      href={row.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {row.company}
                    </a>
                  </td>

                  <td className="px-3 py-2">{row.openingDate}</td>
                  <td className="px-3 py-2">{row.closingDate}</td>
                  <td className="px-3 py-2">{row.allotmentDate}</td>

                  <td className="px-3 py-2">
                    <a
                      href={row.boaUrl}
                      className="text-blue-600 hover:underline"
                    >
                      BoA
                    </a>
                  </td>

                  <td className="px-3 py-2 text-gray-400">
                    {row.allotment}
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

