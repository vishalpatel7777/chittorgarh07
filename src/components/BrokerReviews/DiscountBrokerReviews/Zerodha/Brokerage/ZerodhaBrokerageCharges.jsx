import React from "react";

const ZerodhaBrokerageCharges = () => {
  return (
    <div className="mb-4 rounded-xl border border-[rgba(34,34,47,0.1)] bg-white p-4 shadow-sm">
      <h2 className="text-xl font-semibold">
        Zerodha Brokerage Charges 2026
      </h2>

      <p className="mt-2 text-sm leading-relaxed text-[#1e1e27]">
        Customer pays a commission (brokerage) when buying or selling stocks
        through Zerodha. The brokerage charges for equity, commodities and
        currency derivative trading for Zerodha are explained as below.
      </p>

      <div
        itemScope
        itemType="http://schema.org/Table"
        className="mt-4"
      >
        <h3
          className="text-lg font-semibold"
          itemProp="about"
        >
          Zerodha Flat Brokerage Plan
        </h3>

        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                  Segment
                </th>
                <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                  Brokerage Fee
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <a
                    href="/keyword/equity-delivery/1214"
                    title="Equity Delivery"
                    className="text-[#2163e8] hover:underline"
                  >
                    Equity Delivery
                  </a>
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Rs 0 (Free)
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <a
                    href="/keyword/equity-intraday/1228"
                    title="Equity Intraday"
                    className="text-[#2163e8] hover:underline"
                  >
                    Equity Intraday
                  </a>
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Rs 20 per executed order or .03% whichever is lower
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <a
                    href="/keyword/equity-futures/1219"
                    title="Equity Futures"
                    className="text-[#2163e8] hover:underline"
                  >
                    Equity Futures
                  </a>
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Rs 20 per executed order or .03% whichever is lower
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <a
                    href="/keyword/equity-options/1227"
                    title="Equity Options"
                    className="text-[#2163e8] hover:underline"
                  >
                    Equity Options
                  </a>
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Rs 20 per executed order
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <a
                    href="/keyword/currency-futures/1340"
                    title="Currency Futures"
                    className="text-[#2163e8] hover:underline"
                  >
                    Currency Futures
                  </a>
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Rs 20 per executed order or .03% whichever is lower
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <a
                    href="/keyword/currency-options/1221"
                    title="Currency Options"
                    className="text-[#2163e8] hover:underline"
                  >
                    Currency Options
                  </a>
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Rs 20 per executed order
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <a
                    href="/keyword/commodity-futures/1252"
                    title="Commodity Futures"
                    className="text-[#2163e8] hover:underline"
                  >
                    Commodity Futures
                  </a>
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Rs 20 per executed order or .03% whichever is lower
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <a
                    href="/keyword/commodity-options/1251"
                    title="Commodity Options"
                    className="text-[#2163e8] hover:underline"
                  >
                    Commodity Options
                  </a>
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Rs 20 per executed order
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaBrokerageCharges;
