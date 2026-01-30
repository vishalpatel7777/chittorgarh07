const ProstocksDematCharges2026 = () => {
  return (
    <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold">
        Prostocks Demat Account Charges 2026
      </h2>

      <p className="mb-4 text-sm text-gray-700">
        The Demat account transactions are charged separately from the trading
        commission. Find Prostocks Demat account charges 2026.
      </p>

      <p className="mb-2 font-semibold">Prostocks Demat Charges</p>

      <p className="mb-4 text-sm text-gray-700">
        Prostocks trading and demat account opening fees are Rs 0 (Free).
        Prostocks charges Rs 0 (Lifetime Zero AMC) per year demat account AMC.
        Prostocks demat debit transaction fee of Rs 8 + Rs 5.50 (CDSL charges)
        per ISIN per debit transaction.
      </p>

      <div className="overflow-x-auto rounded-xl border border-gray-200 p-4">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white">
            <tr>
              <th className="border-b  border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                ID
              </th>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Transaction
              </th>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Charges
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "Demat Account Opening Charges", "Rs 0 (Free)"],
              ["2", "Transaction Charges (Buy)", "—"],
              [
                "3",
                "Transaction Charges (Sell)",
                "Rs 8 + Rs 5.50 (CDSL charges) per ISIN",
              ],
              ["4", "Annual Maintenance Charges (AMC)", "Nil"],
              [
                "5",
                "Demat + Courier charges",
                "Rs 50 per set up + Rs 50 courier charges",
              ],
              [
                "6",
                "Remat",
                "Rs 50 per set up + Rs 50 courier charges",
              ],
              ["7", "Pledge Creation", "Rs 50 per set up"],
              ["8", "Pledge Creation Confirmation", "Nil"],
              ["9", "Pledge Invocation", "Rs 50 per set up"],
              [
                "10",
                "Failed Transactions",
                "Rs 50 per ISIN",
              ],
              ["11", "Other Charges", "—"],
            ].map(([id, transaction, charge], index) => (
              <tr
                key={id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-3">{id}</td>
                <td className="px-4 py-3">{transaction}</td>
                <td className="px-4 py-3 font-medium">{charge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProstocksDematCharges2026;
