import React from "react";

const ZerodhaTransactionCharges = () => {
  return (
    <div className="mb-4 rounded-xl border border-[rgba(34,34,47,0.1)] bg-white p-4 shadow-sm">
      <div>
        <a id="table_transaction_charges"></a>

        <h2 className="text-xl font-semibold">
          Zerodha Transaction Charges (Exchange Turnover Change)
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-[#1e1e27]">
          A combination of Exchange Turnover Charge and Trade{" "}
          <a
            href="/keyword/clearing-charge/1307"
            title="Clearing Charges"
            className="text-[#2163e8]"
          >
            Clearing Charge
          </a>
          . Know more about{" "}
          <a
            href="/article/transaction_charges_by_stock_brokers_in_india/82/"
            title="Transaction Charges by Brokers"
            className="text-[#2163e8]"
          >
            Transaction Charges
          </a>
          .
        </p>
      </div>

      <div
        className="mt-4"
        itemScope
        itemType="http://schema.org/Table"
      >
        <h2 itemProp="about" className="text-lg font-semibold">
          Zerodha Transaction Charges 2025
        </h2>

        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                  Segment
                </th>
                <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                  Transaction Fee
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Equity Intraday
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  NSE Rs 297 per Cr (0.00297%) | BSE Rs 375 per Cr (0.00375%)
                  (sell side)
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Equity Delivery
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  NSE Rs 297 per Cr (0.00297%) | BSE Rs 375 per Cr (0.00375%)
                  (each side)
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Equity Futures
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  NSE Rs 173 per Cr (0.00173%) | BSE Rs 0
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Equity Options
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  NSE Rs 3503 per Cr (0.03503%) | BSE Rs 325 per Cr (0.00325%)
                  (on premium)
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Currency Future
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  NSE Rs 35 per Cr (0.00035%) | BSE Rs 45 per Cr (0.00045%)
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Currency Option
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  NSE Rs 3110 per Cr (0.0311%) | BSE Rs 100 per Cr (0.001%)
                  (on premium)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaTransactionCharges;
