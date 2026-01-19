import { useState } from "react";
import NseSharePriceData from "@/data/smeIpo/LearnAboutSmeIpo/NseSharePriceData";

const PAGE_SIZE = 5;

const NseTableCard = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const filteredData = NseSharePriceData.filter((item) =>
    item.company.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const currentData = filteredData.slice(start, start + PAGE_SIZE);

  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white px-2 py-2 shadow-sm md:px-3">
      {/* Search */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          type="text"
          placeholder="Company Name"
          className="w-full rounded-md border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 md:w-64"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Title */}
      <h2 className="mb-3 text-lg font-bold text-green-700">
        List of SME Stocks in NSE | NSE SME Share List
      </h2>

      <p className="mb-2 text-sm text-gray-500">
        Total Records:{" "}
        <span className="font-semibold">{filteredData.length}</span>
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-gray-100">
            <tr className="text-center font-semibold">
              {[
                "Company",
                "Group",
                "Open",
                "High",
                "Low",
                "LTP",
                "Shares",
                "Turnover",
                "Trades",
                "Date",
              ].map((h) => (
                <th key={h} className="border px-2 py-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentData.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border px-2 py-1 text-left">
                  <a
                    href={row.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-700 hover:underline"
                  >
                    {row.company}
                  </a>
                </td>
                <td className="border px-2 text-center">{row.group}</td>
                <td className="border px-2 text-right">{row.open}</td>
                <td className="border px-2 text-right">{row.high}</td>
                <td className="border px-2 text-right">{row.low}</td>
                <td className="border px-2 text-right">{row.ltp}</td>
                <td className="border px-2 text-right">{row.shares}</td>
                <td className="border px-2 text-right">{row.turnover}</td>
                <td className="border px-2 text-right">{row.trades}</td>
                <td className="border px-2 text-left">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <p>
          Showing {start + 1} to{" "}
          {Math.min(start + PAGE_SIZE, filteredData.length)} of{" "}
          {filteredData.length}
        </p>

        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(1)}
            className="rounded border px-2 py-1 disabled:opacity-40"
          >
            « First
          </button>
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="rounded border px-2 py-1 disabled:opacity-40"
          >
            ‹ Prev
          </button>
          <span className="rounded border bg-green-600 px-3 py-1 text-white">
            {page}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="rounded border px-2 py-1 disabled:opacity-40"
          >
            Next ›
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(totalPages)}
            className="rounded border px-2 py-1 disabled:opacity-40"
          >
            Last »
          </button>
        </div>
      </div>
    </div>
  );
};

export default NseTableCard;
