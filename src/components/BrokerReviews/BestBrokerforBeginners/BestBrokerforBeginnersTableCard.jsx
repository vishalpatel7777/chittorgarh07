import React, { useState } from "react";
import BestBrokerforBeginnersData from "@/data/BrokerReviews/BestBrokerforBeginnersData";
import Chart from "@/components/BrokerReviews/Chart";

const BestBrokerforBeginnersTableCard = () => {
  const [year, setYear] = useState("2026");

  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white px-2 py-2 shadow-sm md:px-3">
      {/* Header */}
      <div className="my-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-[#0cbc87]">
          Best Stock Broker for Beginners in India {year}
        </h2>

        <div className="flex items-center gap-2">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="rounded border border-[#0cbc87] px-2 py-1 text-sm font-semibold text-[#0cbc87]"
          >
            {Array.from({ length: 13 }, (_, i) => 2027 - i).map((y) => (
              <option key={y} value={y}>
                Year {y}
              </option>
            ))}
          </select>

          <button className="rounded border border-[#0cbc87] px-3 py-1 text-sm font-medium text-[#0cbc87] hover:bg-[#0cbc87] hover:text-white">
            Export
          </button>
        </div>
      </div>

      {/* Meta */}
      <p className="mb-2 text-sm text-[#595d69]">
        Total Records:{" "}
        <span className="font-semibold">
          {BestBrokerforBeginnersData.length}
        </span>
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-[#f7f8f9]">
            <tr>
              {[
                "Broker",
                "Brokerage (Delivery)",
                "Demat AMC",
                "Active Clients",
                "Request Callback",
                "Review",
                "Compare",
              ].map((head) => (
                <th
                  key={head}
                  className="border border-[#dfe0e5] px-3 py-2 text-center font-semibold text-[#22222f]"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {BestBrokerforBeginnersData.map((row, index) => (
              <tr
                key={row.id}
                className={index === 0 ? "bg-[#ffffcc]" : "hover:bg-[#fcfbfd]"}
              >
                <td className="border border-[#dfe0e5] px-3 py-2 text-left">
                  {row.broker}
                </td>

                <td className="border border-[#dfe0e5] px-3 py-2 text-center">
                  {row.brokerage}
                </td>

                <td className="border border-[#dfe0e5] px-3 py-2 text-center">
                  {row.amc}
                </td>

                <td className="border border-[#dfe0e5] px-3 py-2 text-right">
                  {row.activeClients.toLocaleString("en-IN")}
                </td>

                <td className="border border-[#dfe0e5] px-3 py-2 text-center">
                  {row.callbackUrl ? (
                    <a
                      href={row.callbackUrl}
                      target="_blank"
                      className="rounded bg-[#0cbc87] px-2 py-1 text-xs font-semibold text-white"
                    >
                      Open Account
                    </a>
                  ) : (
                    "-"
                  )}
                </td>

                <td className="border border-[#dfe0e5] px-3 py-2 text-center">
                  <a
                    href={row.reviewUrl}
                    className="inline-block h-6 w-6 rounded bg-[#f0f1f3] text-center text-xs leading-6"
                  >
                    ★
                  </a>
                </td>

                <td className="border border-[#dfe0e5] px-3 py-2 text-center">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart */}
      <div className="mt-6 h-[420px] w-full">
        <Chart
          data={BestBrokerforBeginnersData}
          labelKey="broker"
          valueKey="activeClients"
        />
      </div>
    </div>
  );
};

export default BestBrokerforBeginnersTableCard;
