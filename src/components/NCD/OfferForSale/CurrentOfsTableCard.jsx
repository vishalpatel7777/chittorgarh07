import React, { useMemo, useState } from "react";

const ROWS_PER_PAGE = 10;

const CurrentOfsTableCard = ({ data }) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.rows.length / ROWS_PER_PAGE);

  const visibleRows = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    return data.rows.slice(start, start + ROWS_PER_PAGE);
  }, [page, data.rows]);

  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white px-2 py-2 shadow-sm md:px-4">

      {/* Header */}
      <div className="my-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-[#0cbc87]">
          {data.title}
        </h2>

        <div className="flex items-center gap-2">
          <select
            className="rounded border border-[#0cbc87] px-2 py-1 text-sm font-semibold text-[#0cbc87]"
          >
            {data.years.map((year) => (
              <option key={year}>Year {year}</option>
            ))}
          </select>

          <button
            className="flex items-center gap-2 rounded border border-[#0cbc87] px-3 py-1 text-sm font-medium text-[#0cbc87] hover:bg-[#0cbc87] hover:text-white"
            title="Export to CSV"
          >
            <i className="fa fa-file-csv text-sm" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Record count */}
      <div className="mb-2 text-sm text-[#595d69]">
        <i className="fa fa-database mr-1" />
        Total Records:{" "}
        <span className="font-semibold">{data.totalRecords}</span>
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-md border border-[#d0d4d9]">
        <table className="min-w-full border-separate border-spacing-0 text-sm">
          <thead className="sticky top-0 z-10 bg-[#f7f8f9]">
            <tr>
              {[
                "Company Name",
                "Listing At",
                "Offer Date",
                "Total Shares Offered",
                "Floor Price (Rs.)",
                "Cut-off Price (Rs.)",
              ].map((head) => (
                <th
                  key={head}
                  className="border-b border-r border-[#d0d4d9] px-3 py-2 text-center font-semibold last:border-r-0"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span>{head}</span>
                    <span className="text-xs text-[#a1a1a8]">▲ ▼</span>
                  </div>
                </th>
              ))}
            </tr>

            {/* Search row */}
            <tr>
              {Array.from({ length: 6 }).map((_, i) => (
                <th
                  key={i}
                  className="border-b border-r border-[#d0d4d9] px-2 py-1 last:border-r-0"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded border border-[#d0d4d9] px-2 py-1 text-xs focus:outline-none"
                  />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {visibleRows.map((row, idx) => (
              <tr
                key={idx}
                className="even:bg-[#f7f8f9] hover:bg-[#eef3ff]"
              >
                <td className="border-t border-r border-[#d0d4d9] px-3 py-2 text-left last:border-r-0">
                  <a
                    href={row.link}
                    target="_parent"
                    className="text-[#2163e8] hover:underline"
                  >
                    {row.company}
                  </a>
                </td>
                <td className="border-t border-r border-[#d0d4d9] px-3 py-2 text-left last:border-r-0">
                  {row.listingAt}
                </td>
                <td className="border-t border-r border-[#d0d4d9] px-3 py-2 text-left last:border-r-0">
                  {row.offerDate}
                </td>
                <td className="border-t border-r border-[#d0d4d9] px-3 py-2 text-right last:border-r-0">
                  {row.totalShares}
                </td>
                <td className="border-t border-r border-[#d0d4d9] px-3 py-2 text-right last:border-r-0">
                  {row.floorPrice}
                </td>
                <td className="border-t px-3 py-2 text-right">
                  {row.cutOffPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-end gap-3">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="rounded border px-3 py-1 text-sm disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="rounded border px-3 py-1 text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-sm text-[#29292e]">
        <p className="mb-1 font-semibold">Note:</p>
        <ul className="list-disc space-y-1 pl-5">
          {data.disclaimer.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentOfsTableCard;
