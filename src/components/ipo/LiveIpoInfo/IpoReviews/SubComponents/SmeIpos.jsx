// src/pages/AllIpos.jsx

import { useState } from "react";
import { ipoReviewData } from '@data/ipo/LiveIpoInfo/ipoReviewData';

export const SmeIpos = () => {
  const [year, setYear] = useState("2026");
  const [companySearch, setCompanySearch] = useState("");
  const [reviewSearch, setReviewSearch] = useState("");

  const filteredData = ipoReviewData.filter((ipo) => {
    const companyMatch = ipo.company
      .toLowerCase()
      .includes(companySearch.toLowerCase());

    const reviewMatch = ipo.reviews.some((r) =>
      r.name.toLowerCase().includes(reviewSearch.toLowerCase())
    );

    return companyMatch && reviewMatch;
  });

  return (
    <section className="w-full border-0">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-4 gap-3">
        <h2 className="text-green-600 font-bold text-xl">
          IPOs Reviews and Rating {year} India
        </h2>

        <div className="flex items-center gap-2">
          {/* Year Select */}
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border border-green-600 text-green-700 font-semibold text-sm rounded px-2 py-1 focus:outline-none"
          >
            {Array.from({ length: 21 }, (_, i) => 2027 - i).map((y) => (
              <option key={y} value={y}>
                Year {y}
              </option>
            ))}
          </select>

          {/* Export */}
          <button
            type="button"
            className="flex items-center gap-2 border border-green-600 text-green-700 text-sm px-3 py-1 rounded hover:bg-green-50 transition"
          >
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Table wrapper */}
      <div className="overflow-x-auto scrollbar-thin">
        <small className="text-gray-500 block mb-2">
          Total Records:{" "}
          <span className="font-semibold">{filteredData.length}</span>
        </small>

        <table className="min-w-max text-sm rounded-lg overflow-hidden">
          {/* Head */}
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-center font-semibold">
                Company
              </th>
              <th className="px-4 py-2 text-center font-semibold">
                Reviews
              </th>
            </tr>

            {/* Search row */}
            <tr className="bg-white">
              <th className="px-2 pb-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={companySearch}
                  onChange={(e) => setCompanySearch(e.target.value)}
                  className="w-full text-xs px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </th>
              <th className="px-2 pb-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={reviewSearch}
                  onChange={(e) => setReviewSearch(e.target.value)}
                  className="w-full text-xs px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredData.map((ipo, index) => (
              <tr
                key={ipo.company}
                className={`
                  border-t
                  ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  hover:bg-green-50 transition
                `}
              >
                {/* Company */}
                <td className="px-4 py-3 text-left">
                  <a
                    href={ipo.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {ipo.company}
                  </a>
                </td>

                {/* Reviews */}
                <td className="px-4 py-3">
                  <ul className="space-y-2">
                    {ipo.reviews.map((r, i) => (
                      <li key={i}>
                        <span className="text-blue-600">
                          {r.name}
                        </span>
                        {r.verdict && (
                          <span className="ml-1 font-semibold">
                            – {r.verdict}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

