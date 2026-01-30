const ProstocksTradingTaxes = () => {
  return (
    <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold">Prostocks Trading Taxes</h2>

      <p className="mb-4 text-sm text-gray-700">
        Prostocks charges government taxes and fees in addition to brokerage.
        These <strong>Prostocks trading taxes</strong> are shown in the contract
        note sent to customers at the end of the day. The table below can be used
        for <strong>Prostocks tax calculation</strong>.
      </p>

      <h3 className="mb-3 text-lg font-semibold">
        Prostocks Tax on Trading
      </h3>

      <div className="overflow-x-auto rounded-xl border border-gray-200 p-4">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white">
            <tr>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Tax Prostocks
              </th>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Rates
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">
                Securities Transaction Tax (STT)
              </td>
              <td className="px-4 py-3">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Equity Delivery: 0.1% on both Buy and Sell</li>
                  <li>Equity Intraday: 0.025% on Sell Side</li>
                  <li>Equity Futures: 0.01% on Sell Side</li>
                  <li>Equity Options: 0.05% on Sell Side (on Premium)</li>
                  <li>Commodity Futures: 0.01% on Sell Side (Non-Agri)</li>
                  <li>Commodity Options: 0.05% on Sell Side</li>
                  <li>Currency F&amp;O: No STT</li>
                  <li>On Exercise Transaction: 0.125%</li>
                  <li>Right Entitlement: 0.05% on Sell Side</li>
                </ul>
              </td>
            </tr>

            <tr className="bg-white">
              <td className="px-4 py-3 font-medium">
                Exchange Transaction Charges
              </td>
              <td className="px-4 py-3">
                <a
                  href="#table_transaction_charges"
                  className="text-blue-600 hover:underline"
                >
                  Refer table above
                </a>
              </td>
            </tr>

            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">GST</td>
              <td className="px-4 py-3">
                18% on (Brokerage + Transaction Charge + SEBI Fee)
              </td>
            </tr>

            <tr className="bg-white">
              <td className="px-4 py-3 font-medium">SEBI Charges</td>
              <td className="px-4 py-3">
                0.0001% (₹10 per Crore of turnover)
              </td>
            </tr>

            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium">Stamp Duty</td>
              <td className="px-4 py-3 space-y-2">
                <p>
                  (Buy side only) Delivery: 0.015%, Intraday: 0.003%, Equity
                  Futures: 0.002%, Equity Options: 0.003%, Currency F&amp;O:
                  0.0001%
                </p>
                <p>
                  Commodity Futures: 0.002%, Commodity Options: 0.003% (MCX)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProstocksTradingTaxes;
