import React from "react";
import Chart from '../Chart'
import { TopStockBrokersInIndiaData as data } from "@data/BrokerReviews/TopStockBrokersInIndiaData";

const TopStockBrokersInIndiaTableCard = () => {
  return (
    <div className="mb-4 rounded-lg bg-white px-2 py-2 shadow-sm md:px-4">
      
      {/* Header */}
      <div className="my-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-[#0cbc87]">
          {data.title}
        </h2>

        <div className="flex items-center gap-2">
          <select
            className="
              rounded-md
              border
              border-[#0cbc87]
              px-2
              py-1
              text-sm
              font-semibold
              text-[#0cbc87]
              focus:outline-none
            "
          >
            {data.years.map((year) => (
              <option key={year}>Year {year}</option>
            ))}
          </select>

          <button
            className="
              flex items-center gap-2
              rounded-md
              border
              border-[#0cbc87]
              px-3
              py-1
              text-sm
              font-medium
              text-[#0cbc87]
              hover:bg-[#0cbc87]
              hover:text-white
            "
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
      <div className="overflow-auto rounded-md border">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-[#f7f8f9]">
            <tr>
              {["Rank", "Broker", "Active Clients", "Request Callback", "Compare"].map(
                (head) => (
                  <th
                    key={head}
                    className="border-b px-3 py-2 text-center font-semibold"
                  >
                    {head}
                    <div className="mt-1 flex justify-center gap-1 text-xs text-[#a1a1a8]">
                      ▲ ▼
                    </div>
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {data.rows.map((row) => (
              <tr
                key={row.rank}
                className="border-t hover:bg-[#f7f8f9]"
              >
                <td className="px-3 py-2 text-right font-semibold">
                  {row.rank}
                </td>

                <td className="px-3 py-2 text-left">
                  <a
                    href={row.link}
                    className="text-[#2163e8] hover:underline"
                    target="_parent"
                  >
                    {row.broker}
                  </a>
                </td>

                <td className="px-3 py-2 text-right">
                  {row.activeClients.toLocaleString("en-IN")}
                </td>

                <td className="px-3 py-2 text-left">
                  {row.ctaLink ? (
                    <a
                      href={row.ctaLink}
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded bg-[#0cbc87] px-2 py-1 text-xs font-semibold text-white"
                    >
                      Open Account
                      <img
                        src="https://www.chittorgarh.net/images/topic.gif"
                        alt=""
                        className="h-3"
                      />
                    </a>
                  ) : (
                    "-"
                  )}
                </td>

                <td className="px-3 py-2 text-center">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart */}
      <div className="mt-6">
        <Chart
          type="bar"
          data={data.rows}
          labelKey="broker"
          valueKey="activeClients"
          label="Active Clients"
        />
      </div>
    </div>
  );
};

export default TopStockBrokersInIndiaTableCard;
