import React from "react";

const rowStatusBg = {
  aqua: "bg-cyan-50",
  green: "bg-green-50",
};

const CurrentRisTableCard = ({ data = [] }) => {
  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white px-2 py-2  md:px-4">
      {/* 🔍 Search Row */}
      <div className="mt-3 flex flex-wrap items-end gap-3">
        <input
          type="text"
          placeholder="Company_Name"
          maxLength={50}
          className="w-full max-w-xs rounded border border-gray-300 px-2 py-1 text-sm"
        />

        <div className="flex gap-2">
          <button className="rounded bg-green-600 px-3 py-1 text-sm font-semibold text-white">
            Search
          </button>
          <button className="rounded bg-red-600 px-3 py-1 text-sm font-semibold text-white">
            Clear
          </button>
        </div>
      </div>

      {/* 🧾 Header */}
      <div className="my-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-green-700">Rights Issues 2026</h2>

        <div className="flex items-center gap-2">
          <select className="rounded border border-green-600 px-2 py-1 text-sm font-semibold">
            <option>Year 2026</option>
            <option>Year 2025</option>
            <option>Year 2024</option>
          </select>

          <button className="flex items-center gap-2 rounded border border-green-600 px-3 py-1 text-sm font-semibold text-green-700">
            Export
          </button>
        </div>
      </div>

      {/* 📊 Table */}
      <div className="overflow-x-auto">
        <p className="mb-2 text-sm text-gray-500">
          Total Records: <span className="font-semibold">{data.length}</span>
        </p>

        <table className="w-full border border-gray-300 text-sm">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              {[
                "Company Name",
                "Record Date",
                "Issue Open",
                "Renunciation",
                "Issue Close",
                "Issue Price",
                "Issue Size",
                "CMP Share",
                "CMP RE",
                "Ratio",
                "Compare",
              ].map((h) => (
                <th
                  key={h}
                  className="border border-gray-300 px-2 py-2 text-center font-semibold"
                >
                  {h}
                </th>
              ))}
            </tr>

            {/* Column search row */}
            <tr>
              {Array.from({ length: 10 }).map((_, i) => (
                <th key={i} className="border border-gray-300 px-1 py-1">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded border border-gray-300 px-1 py-[2px] text-xs"
                  />
                </th>
              ))}
              <th className="border border-gray-300" />
            </tr>
          </thead>

          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className={rowStatusBg[row.status] || ""}>
                <td className="border border-gray-300 px-2 py-1 text-left">
                  <a
                    href={row.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-700 hover:underline"
                  >
                    {row.company}
                  </a>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {row.recordDate}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {row.issueOpen}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {row.renunciation}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {row.issueClose}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-right">
                  {row.price}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-right">
                  {row.size}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-right">
                  {row.cmpShare}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-right">
                  {row.cmpRe}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {row.ratio}
                </td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap -mx-2 mt-4">
        <div className="w-full px-2">
          <div className="text-sm leading-7 text-gray-800">
            <p className="mb-2">
              <b>Note:</b>
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>
                The offer to buy a rights issue is an option and not an
                obligation on the existing shareholder.
              </li>
              <li>
                To be eligible for the rights issue, one must be the shareholder
                of the company as on record date to qualify as an existing
                shareholder.
              </li>
              <li>
                An existing shareholder subscribing to the rights issue in full
                can opt to subscribe for additional shares as well. The
                allotment for the additional shares would be based on the issue
                subscription.
              </li>
              <li>
                The rights issue can be partly subscribed and partly transferred
                to other investors by the trading of the rights entitlements.
                However, in such cases, there will be no option to opt for
                additional shares over and above the allocated rights issue for
                either of the parties.
              </li>
              <li>
                The rights entitlements (RE) are given a different ISIN to
                differentiate from the normal equity shares trading in the
                market.
              </li>
              <li>
                The trading of RE closes 2–3 working days before the rights
                issue.
              </li>
            </ul>

            <h2 className="text-lg font-semibold mb-3">
              Learn more about Rights Issue of Shares
            </h2>

            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a
                  href="/article/rights-issue-of-shares-definition-benefits-prices/492/"
                  className="text-blue-600 hover:underline"
                >
                  Rights Issue Definition, Benefits, Eligibility and Prices
                </a>
              </li>
              <li>
                <a
                  href="/article/rights-issue-entitlement-explained-with-examples/491/"
                  className="text-blue-600 hover:underline"
                >
                  Rights Issue Entitlement
                </a>
              </li>
              <li>
                <a
                  href="/report/glossary/117/44/"
                  className="text-blue-600 hover:underline"
                >
                  Rights Issue Glossary – Definitions, Abbreviations and Meaning
                </a>
              </li>
              <li>
                <a
                  href="/report/rights-issue-review-list/74/"
                  className="text-blue-600 hover:underline"
                >
                  Rights Issue Review
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentRisTableCard;
