const ZerodhaMarginExposureCard = () => {
  return (
    <div
      className="mb-4 p-4 bg-white rounded-lg shadow-sm flex flex-col text-gray-900"
      itemScope
      itemType="http://schema.org/Table"
    >
      <h2 className="text-xl font-semibold mb-2" itemProp="about">
        Zerodha Margin Exposure
      </h2>

      <p className="text-sm leading-relaxed mb-4">
        Zerodha margin for intraday trading is{" "}
        <strong>
          up to 20% of trade value (max 5x leverage) based on the stock
        </strong>
        . Zerodha F&amp;O intraday trading margin is 1.3x across Equity,
        Currency, and Commodity trading at BSE, NSE, and MCX. There is no
        additional margin offered for Zerodha F&amp;O carry forward positions
        and equity delivery trades.
      </p>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto mb-4">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                Segment
              </th>
              <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                Margin
              </th>
              <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                Leverage
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">
                Equity Delivery
              </td>
              <td className="border border-gray-200 px-3 py-2">
                100% of trade value for T+5 days
              </td>
              <td className="border border-gray-200 px-3 py-2">
                1x
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">
                Equity Intraday
              </td>
              <td className="border border-gray-200 px-3 py-2">
                Up to 20% of trade value
              </td>
              <td className="border border-gray-200 px-3 py-2">
                5x
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border border-gray-200 px-3 py-2">
                F&amp;O (Equity, Currency and Commodities)
              </td>
              <td className="border border-gray-200 px-3 py-2">
                100% of NRML margin (Span + Exposure + Delivery margin)
              </td>
              <td className="border border-gray-200 px-3 py-2">
                1x
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ZerodhaMarginExposureCard;
