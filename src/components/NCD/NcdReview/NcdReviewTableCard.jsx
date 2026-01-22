import React, { useMemo, useState } from "react";
import { ncdReviewData } from "@data/NCD/NcdReviewData";

const PAGE_SIZE = 25;

const NcdReviewTableCard = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredData = useMemo(() => {
    return ncdReviewData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  const paginatedData = filteredData.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white px-2 py-2 shadow-sm md:px-3">
      {/* Search */}
      <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-6">
        <input
          type="text"
          placeholder="Title"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
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
          NCD Issue Reviews and Analysis
        </h2>

        <button className="rounded-md border border-green-600 px-3 py-1 text-sm font-semibold text-green-700 hover:bg-green-50">
          Export
        </button>
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
              {["Title", "Review Author", "Recommendation", "Review Date"].map(
                (head) => (
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
                )
              )}
            </tr>

            {/* Column filters */}
            <tr className="bg-gray-50">
              {Array.from({ length: 4 }).map((_, i) => (
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
            {paginatedData.map((item, index) => (
              <tr
                key={item.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="px-3 py-2 text-left font-medium text-blue-600">
                  <a href={item.link}>{item.title}</a>
                </td>
                <td className="px-3 py-2">{item.author}</td>
                <td className="px-3 py-2">{item.recommendation}</td>
                <td className="px-3 py-2">{item.reviewDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
        <p>
          Showing {(page - 1) * PAGE_SIZE + 1} to{" "}
          {Math.min(page * PAGE_SIZE, filteredData.length)} of{" "}
          {filteredData.length} entries
        </p>

        <div className="flex gap-1">
          <button
            disabled={page === 1}
            onClick={() => setPage(1)}
            className="rounded border px-2 py-1 disabled:opacity-50"
          >
            « First
          </button>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="rounded border px-2 py-1 disabled:opacity-50"
          >
            ‹ Prev
          </button>
          <span className="rounded bg-green-600 px-3 py-1 text-white">
            {page}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="rounded border px-2 py-1 disabled:opacity-50"
          >
            Next ›
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(totalPages)}
            className="rounded border px-2 py-1 disabled:opacity-50"
          >
            Last »
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-sm text-gray-700">
        <p className="font-semibold">Note:</p>
        <ul className="list-disc pl-5">
          <li>
            The <b>NCD Notes / NCD Reviews</b> are for general information only.
            Investors should take independent decisions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NcdReviewTableCard;
