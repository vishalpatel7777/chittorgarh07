import React, { useMemo, useState } from "react";
import { ncdSubscriptionData } from "@data/NCD/NcdSubscriptionData";

const NcdSubscriptionTableCard = () => {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return ncdSubscriptionData.filter((item) =>
      item.company.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white px-2 py-2 shadow-sm md:px-3">
      {/* Search */}
      <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-6">
        <input
          type="text"
          placeholder="Company Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="col-span-2 rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <div className="col-span-2 flex gap-2">
          <button className="rounded-md bg-green-600 px-3 py-1 text-sm font-semibold text-white">
            Search
          </button>
          <button
            onClick={() => setSearch("")}
            className="rounded-md bg-red-600 px-3 py-1 text-sm font-semibold text-white"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="my-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-green-700">
          NCD Bidding Status 2026
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
        <p className="mb-2 text-xs text-gray-500">
          Total Records:{" "}
          <span className="font-semibold">{filteredData.length}</span>
        </p>

        <table className="w-max min-w-full border-collapse text-sm">
          <thead className="sticky top-0 z-10 bg-gray-100">
            <tr>
              {[
                "Company Name",
                "Issue Close Date",
                "Issue Size (Rs Cr)",
                "Category 1 (x)",
                "Category 2 (x)",
                "Category 3 (x)",
                "Category 4 (x)",
                "Total (x)",
              ].map((head) => (
                <th
                  key={head}
                  className="border-b px-3 py-2 text-center font-semibold"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span>{head}</span>
                    <span className="flex flex-col text-[10px] text-gray-400">
                      <span>▲</span>
                      <span>▼</span>
                    </span>
                  </div>
                </th>
              ))}
            </tr>

            {/* Column filters */}
            <tr className="bg-gray-50">
              {Array.from({ length: 8 }).map((_, i) => (
                <th key={i} className="px-2 py-1">
                  <input
                    placeholder="Search..."
                    className="w-full rounded border border-gray-300 px-2 py-[2px] text-xs focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="px-3 py-2 text-left font-medium text-blue-600">
                  <a href={item.link}>{item.company}</a>
                </td>
                <td className="px-3 py-2 text-left">{item.closeDate}</td>
                <td className="px-3 py-2 text-right">{item.issueSize}</td>
                <td className="px-3 py-2 text-right">{item.cat1}</td>
                <td className="px-3 py-2 text-right">{item.cat2}</td>
                <td className="px-3 py-2 text-right">{item.cat3}</td>
                <td className="px-3 py-2 text-right">{item.cat4}</td>
                <td className="px-3 py-2 text-right">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-sm text-gray-700">
        <p className="font-semibold">Disclaimer</p>
        <ul className="list-disc pl-5">
          <li>Click on the company name for day-by-day bidding details.</li>
          <li>Report is sorted by NCD closing date by default.</li>
          <li>
            Learn more about NCD Public Issues:
            <ul className="list-disc pl-5">
              <li>NCD IPO Explained | NCD vs FD</li>
              <li>Equity IPO vs Debt IPO (NCD IPO)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NcdSubscriptionTableCard;
