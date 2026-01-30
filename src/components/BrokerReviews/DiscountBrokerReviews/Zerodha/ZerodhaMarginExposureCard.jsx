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
      <div className="overflow-x-auto mb-3 border rounded-xl p-1 border-[#d0dbebcc]">
        <table className="w-full text-sm border-separate border-spacing-0">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-800">
                Segment
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-800">
                Margin
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-800">
                Leverage
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="odd:bg-gray-50 even:bg-white">
              <td className="px-4 py-3">Equity Delivery</td>
              <td className="px-4 py-3">100% of trade value for T+5 days</td>
              <td className="px-4 py-3">1x</td>
            </tr>

            <tr className="odd:bg-gray-50 even:bg-white">
              <td className="px-4 py-3">Equity Intraday</td>
              <td className="px-4 py-3">Up to 20% of trade value</td>
              <td className="px-4 py-3">5x</td>
            </tr>

            <tr className="odd:bg-gray-50 even:bg-white">
              <td className="px-4 py-3">
                F&amp;O (Equity, Currency and Commodities)
              </td>
              <td className="px-4 py-3">
                100% of NRML margin (Span + Exposure + Delivery margin)
              </td>
              <td className="px-4 py-3">1x</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ZerodhaMarginExposureCard;
