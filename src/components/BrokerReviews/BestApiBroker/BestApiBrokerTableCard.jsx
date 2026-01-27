import React from "react";
import BestApiBrokerData from "@/data/BrokerReviews/BestApiBrokerData";

const BestApiBrokerTableCard = () => {
  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white px-2 py-2 shadow-sm md:px-3">
      {/* Header */}
      <div className="my-3 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#0cbc87]">
          Top API Stock Brokers in India
        </h2>

        <button className="rounded border border-[#0cbc87] px-3 py-1 text-sm font-medium text-[#0cbc87] hover:bg-[#0cbc87] hover:text-white">
          Export
        </button>
      </div>

      {/* Meta */}
      <p className="mb-2 text-sm text-[#595d69]">
        Total Records:{" "}
        <span className="font-semibold">
          {BestApiBrokerData.length}
        </span>
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-[#f7f8f9]">
            <tr>
              {[
                "Broker",
                "Intraday Brokerage",
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
            {BestApiBrokerData.map((row, index) => (
              <tr
                key={row.id}
                className={index === 0 ? "bg-[#ffffcc]" : "hover:bg-[#fcfbfd]"}
              >
                {/* Broker */}
                <td className="border border-[#dfe0e5] px-3 py-2 text-left">
                  {row.broker}
                </td>

                {/* Brokerage */}
                <td className="border border-[#dfe0e5] px-3 py-2 text-left">
                  {row.intradayBrokerage}
                </td>

                {/* Active Clients */}
                <td className="border border-[#dfe0e5] px-3 py-2 text-right">
                  {row.activeClients
                    ? row.activeClients.toLocaleString("en-IN")
                    : "-"}
                </td>

                {/* Callback */}
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

                {/* Review */}
                <td className="border border-[#dfe0e5] px-3 py-2 text-center">
                  <a
                    href={row.reviewUrl}
                    className="inline-block h-6 w-6 rounded bg-[#f0f1f3] text-center text-xs leading-6"
                  >
                    ★
                  </a>
                </td>

                {/* Compare */}
                <td className="border border-[#dfe0e5] px-3 py-2 text-center">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-sm leading-relaxed text-[#595d69]">
        <p>
          Trading APIs allow developers and traders to build algorithmic trading
          systems, stream live market data, and place orders programmatically.
        </p>
        <p className="mt-2">
          Only selected brokers in India provide API access to retail traders.
        </p>
      </div>
    </div>
  );
};

export default BestApiBrokerTableCard;
