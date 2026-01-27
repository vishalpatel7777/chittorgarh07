import React from "react";

const ZerodhaTradingTaxes = () => {
  return (
    <div className="mb-4 rounded-xl border border-[rgba(34,34,47,0.1)] bg-white p-4 shadow-sm">
      <div>
        <h2 className="text-xl font-semibold">
          Zerodha Trading Taxes
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-[#1e1e27]">
          Zerodha charges government taxes and fees in addition to the brokerage.
          These <strong>Zerodha trading taxes</strong> are shows in the contract
          note sent to the customer at the end of the day. The below table can be
          used for <strong>the Zerodha tax calculation</strong>.
        </p>
      </div>

      <div
        className="mt-4"
        itemScope
        itemType="https://schema.org/Table"
      >
        <h3
          className="text-lg font-semibold"
          itemProp="about"
        >
          Zerodha Tax on Trading
        </h3>

        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="sticky top-0 bg-white">
                <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                  Tax Zerodha
                </th>
                <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                  Rates
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="align-top border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <p>
                    <strong>
                      <a
                        title="Securities Transaction Tax (STT)"
                        href="/keyword/securities-transaction-tax/1244/"
                        className="text-[#2163e8]"
                      >
                        Securities Transaction Tax (STT)
                      </a>
                    </strong>
                  </p>
                </td>

                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <ul className="list-disc space-y-1 pl-5 text-sm">
                    <li>Equity Delivery: 0.1% on both Buy and Sell</li>
                    <li>Equity Intraday: 0.025% on the Sell Side</li>
                    <li>Equity Futures: 0.01% on Sell Side</li>
                    <li>Equity Options: 0.05% on Sell Side(on Premium)</li>
                    <li>Commodity Futures: 0.01% on sell side (Non-Agri)</li>
                    <li>Commodity Options: 0.05% on sell side</li>
                    <li>
                      <a
                        href="/keyword/currency-trading/1323"
                        title="Currency F&O: No STT"
                        className="text-[#2163e8]"
                      >
                        Currency F&amp;O
                      </a>
                      : No STT
                    </li>
                    <li>On Exercise transaction: 0.125%</li>
                    <li>Right to entitlement: 0.05% on sell side</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <p>
                    <strong>
                      <a
                        title="Exchange Transaction Charges"
                        href="/keyword/exchange-transaction-charges/1245/"
                        className="text-[#2163e8]"
                      >
                        Exchange Transaction Charges
                      </a>
                    </strong>
                  </p>
                </td>

                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <p>
                    <a
                      title="Refer table above"
                      href="#table_transaction_charges"
                      className="text-[#2163e8]"
                    >
                      Refer table above
                    </a>
                  </p>
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <p>
                    <strong>
                      <a
                        href="/keyword/gst-charges/1248"
                        title="GST Charges"
                        className="text-[#2163e8]"
                      >
                        GST
                      </a>
                    </strong>
                  </p>
                </td>

                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <p>18% on (Brokerage + Transaction Charge + SEBI Fee)</p>
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <p>
                    <strong>
                      <a
                        href="/keyword/sebi-charges/1249"
                        title="SEBI Charges"
                        className="text-[#2163e8]"
                      >
                        SEBI Charges
                      </a>
                    </strong>
                  </p>
                </td>

                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <p>
                    0.0001% (₹10/Crore) of the turnover (except for Agri futures
                    where it is Rs 1 per crore)
                  </p>
                </td>
              </tr>

              <tr>
                <td className="align-top border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  <p>
                    <strong>
                      <a
                        href="/keyword/stamp-duty/1303"
                        title="Stamp Duty"
                        className="text-[#2163e8]"
                      >
                        Stamp Duty
                      </a>
                    </strong>
                  </p>
                </td>

                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-sm">
                  <p>
                    (On buy side only){" "}
                    <a
                      href="/keyword/equity-delivery/1214"
                      title="Delivery"
                      className="text-[#2163e8]"
                    >
                      Delivery
                    </a>
                    : 0.015%,{" "}
                    <a
                      href="/keyword/intraday-delivery/1216"
                      title="Intraday trading"
                      className="text-[#2163e8]"
                    >
                      Intraday
                    </a>
                    : 0.003%, Equity Futures: 0.002%, Equity Options: 0.003%,
                    and Currency F&amp;O: 0.0001%.
                  </p>

                  <p className="mt-1">
                    Commodity Futures: 0.002%, Commodity Options: 0.003% (MCX)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaTradingTaxes;
