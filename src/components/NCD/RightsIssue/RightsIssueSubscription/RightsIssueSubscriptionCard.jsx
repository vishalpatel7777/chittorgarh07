import React, { useMemo, useState } from "react";
import { RightIssueSubscriptionData } from "@data/NCD/RightIssueSubscriptionData";

const ROWS_PER_PAGE = 25;

const RightsIssueSubscriptionCard = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(
    RightIssueSubscriptionData.length / ROWS_PER_PAGE
  );

  const visibleRows = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    return RightIssueSubscriptionData.slice(start, start + ROWS_PER_PAGE);
  }, [page]);

  return (
    <div
      className="
        card
        rounded-[0.7rem]
        shadow-sm
        bg-white
        p-2
        md:p-3
      "
      itemScope
      itemType="http://schema.org/Table"
    >
      {/* Header */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center my-3 gap-2">
        <h2
          className="text-[var(--bs-success)] font-bold text-lg"
          itemProp="about"
        >
          Live Subscription Status from BSE and NSE: 2026
        </h2>

        <div className="flex items-center gap-2">
          <select
            className="
              border
              border-[var(--bs-success)]
              text-[var(--bs-success)]
              font-semibold
              text-sm
              rounded
              px-2
              py-[0.3rem]
            "
          >
            {[2027, 2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019].map(
              (year) => (
                <option key={year}>{`Year ${year}`}</option>
              )
            )}
          </select>

          <button
            className="
              border
              border-[var(--bs-success)]
              text-[var(--bs-success)]
              text-sm
              px-3
              py-1.5
              rounded
              flex
              items-center
              gap-2
            "
            title="Export to CSV"
          >
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="text-sm text-[var(--bs-gray-600)] mb-2 flex items-center gap-1">
          <span>🗄️</span>
          <span>
            Total Records:{" "}
            <span className="font-semibold text-[var(--bs-black)]">
              {RightIssueSubscriptionData.length}
            </span>
          </span>
        </div>

        <table
          className="
    data-table
    w-auto
    min-w-full
    border
    border-[var(--border-color)]
    border-separate
    border-spacing-0
    bg-white
    rounded-md
    overflow-hidden
    shadow-[0_2px_6px_rgba(0,0,0,0.05)]
    text-[15px]
  "
        >
          {/* ===== TABLE HEAD ===== */}
          <thead className="sticky top-0 z-10 bg-[var(--stripes)]">
            {/* Header row */}
            <tr>
              {[
                "Company",
                "Close Date",
                "Bid Date",
                "Total Issue Amount (Rs. Cr.)",
                "Total Bid Quantity",
                "Subscription (x)",
              ].map((label) => (
                <th
                  key={label}
                  className="
            px-3
            py-3
            text-center
            font-semibold
            border-b-2
            border-r
            border-[var(--border-color)]
            last:border-r-0
            whitespace-nowrap
          "
                >
                  <div className="flex justify-between items-center gap-1">
                    <span>{label}</span>
                    <span className="text-[11px] text-blue-400 leading-none">
                      ▲<br />▼
                    </span>
                  </div>
                </th>
              ))}
            </tr>

            {/* Filter row */}
            <tr>
              {Array.from({ length: 6 }).map((_, i) => (
                <th
                  key={i}
                  className="
            px-2
            py-2
            border-b
            border-r
            border-[var(--border-color)]
            last:border-r-0
          "
                >
                  <input
                    placeholder="Search..."
                    className="
              w-full
              text-[12px]
              px-2
              py-1.5
              rounded
              border
              border-[#dfe3ea]
              bg-[#f3f6f9]
              outline-none
              focus:bg-white
              focus:border-blue-500
            "
                  />
                </th>
              ))}
            </tr>
          </thead>

          {/* ===== TABLE BODY ===== */}
          <tbody>
            {visibleRows.map((row) => (
              <tr
                key={row.id}
                className={`
          even:bg-[#fafbfe]
          hover:bg-[#eef3ff]
          transition-colors
          ${row.highlight ? "bg-[#d9ffd9]" : ""}
        `}
              >
                <td className="px-3 py-3 border-b border-r border-[var(--line-color)] last:border-r-0">
                  <a
                    href={row.link}
                    target="_parent"
                    className="text-blue-600 hover:underline"
                  >
                    {row.company}
                  </a>
                </td>

                <td className="px-3 py-3 border-b border-r border-[var(--line-color)] last:border-r-0">
                  {row.closeDate}
                </td>

                <td className="px-3 py-3 border-b border-r border-[var(--line-color)] last:border-r-0">
                  {row.bidDate}
                </td>

                <td className="px-3 py-3 text-right border-b border-r border-[var(--line-color)] last:border-r-0">
                  {row.issueAmount}
                </td>

                <td className="px-3 py-3 text-right border-b border-r border-[var(--line-color)] last:border-r-0">
                  {row.bidQty}
                </td>

                <td className="px-3 py-3 text-right border-b border-r border-[var(--line-color)] last:border-r-0">
                  {row.subscription}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 text-sm border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 text-sm border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RightsIssueSubscriptionCard;
