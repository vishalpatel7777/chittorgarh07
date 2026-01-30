const ProstocksBrokerageCharges2026 = () => {
  return (
    <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold">
        Prostocks Brokerage Charges 2026
      </h2>

      <p className="mb-4 text-sm text-gray-700">
        Customer pays a commission (brokerage) when buying or selling stocks
        through Prostocks. The brokerage charges for equity, commodities and
        currency derivative trading for Prostocks are explained below.
      </p>

      {/* Flat Rate Plan */}
      <h3 className="mb-3 text-lg font-semibold">
        Prostocks Flat Rate Plan
      </h3>

      <div className="mb-6 overflow-x-auto rounded-xl border border-gray-200 p-4">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white">
            <tr>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Segment
              </th>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Brokerage Fee
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Monthly Fee (Fixed)", "NA"],
              ["Equity Delivery", "Rs 0 (Free)"],
              ["Equity Intraday", "Rs 15 per executed order"],
              ["Equity Futures", "Rs 15 per executed order"],
              ["Equity Options", "Rs 15 per executed order"],
              ["Currency Futures", "Rs 15 per executed order"],
              ["Currency Options", "Rs 15 per executed order"],
              ["Commodity Futures", "NA"],
              ["Commodity Options", "NA"],
            ].map(([segment, fee], i) => (
              <tr key={i} className="odd:bg-gray-50 even:bg-white">
                <td className="px-4 py-3">{segment}</td>
                <td className="px-4 py-3 font-medium">{fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Unlimited Equity Plan */}
      <h3 className="mb-3 text-lg font-semibold">
        Prostocks Unlimited Equity Trading Plan
      </h3>

      <div className="mb-6 overflow-x-auto rounded-xl border border-gray-200 p-4">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white">
            <tr>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Segment
              </th>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Brokerage Fee
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Monthly Fee (Fixed)", "Rs 899"],
              ["Equity Delivery", "Rs 0"],
              ["Equity Intraday", "Rs 0"],
              ["Equity Futures", "Rs 0"],
              ["Equity Options", "Rs 0"],
              ["Currency Futures", "NA"],
              ["Currency Options", "NA"],
              ["Commodity Futures", "NA"],
              ["Commodity Options", "NA"],
            ].map(([segment, fee], i) => (
              <tr key={i} className="odd:bg-gray-50 even:bg-white">
                <td className="px-4 py-3">{segment}</td>
                <td className="px-4 py-3 font-medium">{fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Unlimited Currency Plan */}
      <h3 className="mb-3 text-lg font-semibold">
        Prostocks Unlimited Currency Trading Plan
      </h3>

      <div className="overflow-x-auto rounded-xl border border-gray-200 p-4">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white">
            <tr>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Segment
              </th>
              <th className="border-b border-b-gray-200 px-4 py-3 text-left font-medium text-gray-700">
                Brokerage Fee
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Monthly Fee (Fixed)", "Rs 499"],
              ["Equity Delivery", "NA"],
              ["Equity Intraday", "NA"],
              ["Equity Futures", "NA"],
              ["Equity Options", "NA"],
              ["Currency Futures", "Rs 0"],
              ["Currency Options", "Rs 0"],
              ["Commodity Futures", "NA"],
              ["Commodity Options", "NA"],
            ].map(([segment, fee], i) => (
              <tr key={i} className="odd:bg-gray-50 even:bg-white">
                <td className="px-4 py-3">{segment}</td>
                <td className="px-4 py-3 font-medium">{fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProstocksBrokerageCharges2026;
