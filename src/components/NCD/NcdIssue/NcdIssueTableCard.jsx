import React from "react";
import { ncdIssueData } from "@data/NCD/NcdIssueData";

const NcdIssueTableCard = () => {
  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white px-2 py-2 shadow-sm md:px-3">
      {/* Search Section */}
      <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-6">
        <input
          type="text"
          placeholder="Company Name"
          className="col-span-2 rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <div className="col-span-2 flex gap-2">
          <button className="flex items-center gap-1 rounded-md bg-green-600 px-3 py-1 text-sm font-semibold text-white hover:bg-green-700">
            Search
          </button>
          <button className="flex items-center gap-1 rounded-md bg-red-600 px-3 py-1 text-sm font-semibold text-white hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="my-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-green-700">
          Public NCD Issues Open in India 2026
        </h2>

        <div className="flex items-center gap-2">
          <select className="rounded-md border border-green-600 px-2 py-1 text-sm font-semibold">
            <option>Year 2026</option>
            <option>Year 2025</option>
            <option>Year 2024</option>
          </select>

          <button className="rounded-md border border-green-600 px-3 py-1 text-sm font-semibold text-green-700 hover:bg-green-50">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto overscroll-x-contain">
        <p className="mb-2 flex items-center gap-1 text-xs text-gray-500">
          Total Records:
          <span className="font-semibold">{ncdIssueData.length}</span>
        </p>

        <table className=" min-w-full border-collapse border border-gray-400 text-sm">
          <thead className="sticky top-0 z-10 bg-gray-100">
            <tr>
              {[
                "Company",
                "Opening Date",
                "Closing Date",
                "Issue Amount - Base (Rs.cr)",
                "Issue Amount - Shelf (Rs.cr)",
                "Credit Rating",
                "Compare",
              ].map((head) => (
                <th
                  key={head}
                  className="border-collapse border border-gray-400px-3 py-2 text-center font-semibold"
                >
                  <div className="flex items-center justify-center gap-1 ">
                    <span>{head}</span>
                    {head !== "Compare" && (
                      <span className="flex flex-col text-[10px] leading-none text-gray-400">
                        <span>▲</span>
                        <span>▼</span>
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>

            {/* Column Filters */}
            <tr className="border-collapse border border-gray-400 bg-gray-50">
              {Array.from({ length: 6 }).map((_, i) => (
                <th key={i} className="px-2 py-1">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border px-2 py-[2px] text-xs focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                </th>
              ))}
              <th />
            </tr>
          </thead>

          <tbody>
            {ncdIssueData.map((item, index) => (
              <tr
                key={item.id}
                className={`border-collapse border border-gray-400  ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="px-3 py-2 text-left font-medium text-blue-600">
                  {item.company}
                </td>
                <td className="border-collapse border border-gray-400 px-3 py-2 text-left">
                  {item.openingDate}
                </td>
                <td className="border-collapse border border-gray-400 px-3 py-2 text-left">
                  {item.closingDate}
                </td>
                <td className=" border-collapse border border-gray-400 px-3 py-2 text-right">
                  {item.issueBase}
                </td>
                <td className="border-collapse border border-gray-400 px-3 py-2 text-right">
                  {item.issueShelf ?? "-"}
                </td>
                <td className="border-collapse border border-gray-400  px-3 py-2 text-left">
                  {item.creditRating.map((r, i) => (
                    <p key={i}>{r}</p>
                  ))}
                </td>
                <td className="border-collapse border border-gray-400 px-3 py-2 text-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-green-600"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-sm text-gray-700">
        <p className="font-semibold">Note:</p>
        <ul className="list-disc pl-5">
          <li>NCDs are corporate bonds with fixed interest.</li>
          <li>NCD public issues are similar to IPOs.</li>
          <li>NCDs are tradable on stock exchanges.</li>
          <li>NCDs can be held in demat or physical form.</li>
        </ul>
      </div>
    </div>
  );
};

export default NcdIssueTableCard;
