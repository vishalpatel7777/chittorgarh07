const ProstocksTransactionCharges2025 = () => {
  return (
    <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <a id="table_transaction_charges" />

      <h2 className="mb-2 text-xl font-semibold">
        Prostocks Transaction Charges (Exchange Turnover Charge)
      </h2>

      <p className="mb-4 text-sm text-gray-700">
        A combination of Exchange Turnover Charge and Trade Clearing Charge.
        Know more about{" "}
        <a
          href="/article/transaction_charges_by_stock_brokers_in_india/82/"
          className="text-blue-600 hover:underline"
        >
          Transaction Charges
        </a>
        .
      </p>

      <h3 className="mb-3 text-lg font-semibold">
        Prostocks Transaction Charges 2025
      </h3>

      <div className="overflow-x-auto rounded-xl border border-gray-200 p-4">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white">
            <tr>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Segment
              </th>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Transaction Fee
              </th>
            </tr>
          </thead>

          <tbody>
            {[
              [
                "Equity Intraday",
                "NSE Rs 297 per Cr (0.00297%) | BSE Rs 375 per Cr (0.00375%) (sell side)",
              ],
              [
                "Equity Delivery",
                "NSE Rs 297 per Cr (0.00297%) | BSE Rs 375 per Cr (0.00375%) (each side)",
              ],
              [
                "Equity Futures",
                "NSE Rs 173 per Cr (0.00173%) | BSE Rs 0",
              ],
              [
                "Equity Options",
                "NSE Rs 3503 per Cr (0.03503%) | BSE Rs 325 per Cr (0.00325%) (on premium)",
              ],
              [
                "Currency Future",
                "NSE Rs 35 per Cr (0.00035%) | BSE Rs 45 per Cr (0.00045%)",
              ],
              [
                "Currency Option",
                "NSE Rs 3110 per Cr (0.0311%) | BSE Rs 100 per Cr (0.001%) (on premium)",
              ],
            ].map(([segment, fee], index) => (
              <tr
                key={segment}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-3 font-medium">{segment}</td>
                <td className="px-4 py-3">{fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProstocksTransactionCharges2025;
