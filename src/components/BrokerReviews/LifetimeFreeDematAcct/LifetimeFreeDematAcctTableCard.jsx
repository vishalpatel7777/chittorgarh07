import React from "react";

const LifetimeFreeDematAcctTableCard = ({ title, rows }) => {
  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white px-2 py-2 shadow-sm md:px-3">
      {/* Header */}
      <div className="my-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-[#0cbc87]">
          {title}
        </h2>

        <button
          type="button"
          className="
            flex items-center gap-2
            rounded
            border
            border-[#0cbc87]
            px-3
            py-1
            text-sm
            font-semibold
            text-[#0cbc87]
            hover:bg-[#0cbc87]
            hover:text-white
          "
          title="Export to CSV"
        >
          <span className="hidden sm:inline">Export</span>
        </button>
      </div>

      {/* Record Count */}
      <small className="mb-2 block text-sm text-[#595d69]">
        Total Records:{" "}
        <span className="font-semibold">{rows.length}</span>
      </small>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-[#f7f8f9]">
            <tr>
              {[
                "Broker",
                "Demat Account Opening Fee",
                "Demat Account AMC",
                "Request Callback",
                "Review",
              ].map((head) => (
                <th
                  key={head}
                  className="
                    border
                    border-[#dfe0e5]
                    px-3
                    py-2
                    text-center
                    font-semibold
                    text-[#29292e]
                  "
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.broker}
                className={index === 0 ? "bg-[#ffffcc]" : "hover:bg-[#f7f8f9]"}
              >
                {/* Broker */}
                <td className="border border-[#dfe0e5] px-3 py-2 text-left">
                  {index === 0 && (
                    <span className="mr-1 text-[#ff6600]">🏆</span>
                  )}
                  {row.broker}
                </td>

                {/* Opening Fee */}
                <td className="border border-[#dfe0e5] px-3 py-2 text-left">
                  {row.openingFee}
                </td>

                {/* AMC */}
                <td className="border border-[#dfe0e5] px-3 py-2 text-left">
                  {row.amc}
                </td>

                {/* CTA */}
                <td className="border border-[#dfe0e5] px-3 py-2 text-left">
                  {row.ctaLink ? (
                    <a
                      href={row.ctaLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        inline-block rounded px-2 py-1 text-xs font-semibold
                        ${
                          index === 0
                            ? "bg-[#f7c32e] text-black"
                            : "bg-[#0cbc87] text-white"
                        }
                      `}
                    >
                      Open Account
                    </a>
                  ) : (
                    ""
                  )}
                </td>

                {/* Review */}
                <td className="border border-[#dfe0e5] px-3 py-2 text-center">
                  <a href={row.reviewLink} target="_parent">
                    <img
                      src="https://www.chittorgarh.net/images/review-icon.png"
                      alt={`${row.broker} Review`}
                      className="mx-auto h-[25px] w-[25px]"
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-sm text-[#29292e]">
        <p className="mb-1 font-semibold">Note:</p>
        <ul className="list-disc pl-5">
          <li>
            ProStocks charges <strong>Rs 1000 refundable security deposit</strong>{" "}
            for lifetime free demat account. The amount is refunded on account
            closure.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LifetimeFreeDematAcctTableCard;
