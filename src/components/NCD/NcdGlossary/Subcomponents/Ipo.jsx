import React, { useMemo, useState } from "react";
import { ncdGlossaryData } from "@data/NCD/NcdGlossaryData";

export function Ipo() {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return ncdGlossaryData.filter(
      (item) =>
        item.term.toLowerCase().includes(search.toLowerCase()) ||
        item.definition.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="mb-3 overflow-hidden  px-2 py-2  md:px-3">
      

      {/* Search */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          type="text"
          placeholder="Term"
          maxLength={50}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded border px-3 py-1 text-sm md:w-60"
        />
        <button className="rounded bg-green-600 px-3 py-1 text-sm text-white">
          Search
        </button>
        <button
          onClick={() => setSearch("")}
          className="rounded bg-red-600 px-3 py-1 text-sm text-white"
        >
          Clear
        </button>
      </div>

      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold text-green-700">
          IPO Definitions, Abbreviations, Meanings
        </h2>
        <button className="flex items-center gap-2 rounded border border-green-600 px-3 py-1 text-sm text-green-700">
          Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <p className="mb-2 text-sm text-gray-500">
          Total Records:{" "}
          <span className="font-semibold">{filteredData.length}</span>
        </p>

        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              <th className="border px-2 py-2 text-center">S No</th>
              <th className="border px-2 py-2 text-left">Term</th>
              <th className="border px-2 py-2 text-left">Definition</th>
              <th className="border px-2 py-2 text-right">Feedback</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="border px-2 py-2 text-right">
                  {index + 1}
                </td>
                <td className="border px-2 py-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item.term}
                  </a>
                </td>
                <td className="border px-2 py-2">
                  {item.definition}
                </td>
                <td className="border px-2 py-2 text-right">
                  {item.feedback}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (UI only) */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
        <p>Showing 1 to {filteredData.length} entries</p>
        <div className="flex gap-1">
          <button className="rounded border px-2 py-1 text-gray-400" disabled>
            « First
          </button>
          <button className="rounded border px-2 py-1 text-gray-400" disabled>
            ‹ Prev
          </button>
          <span className="rounded bg-green-600 px-3 py-1 text-white">
            1
          </span>
          <button className="rounded border px-2 py-1">
            Next ›
          </button>
          <button className="rounded border px-2 py-1">
            Last »
          </button>
        </div>
      </div>
    </div>
  );
};


