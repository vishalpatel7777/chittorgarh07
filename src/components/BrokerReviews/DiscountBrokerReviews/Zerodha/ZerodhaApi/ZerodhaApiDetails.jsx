const ZerodhaApiDetails = () => {
  return (
    <div className="mb-4">
      <div className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Zerodha API Details
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              <tr className="border-b">
                <td className="w-1/3 p-3 font-medium text-gray-800">
                  API Brokerage Charge
                </td>
                <td className="p-3 text-gray-700">
                  Personal: Free, Kite Connect: Rs 500/month
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-medium text-gray-800">
                  API Document Link
                </td>
                <td className="p-3 text-blue-600 break-all">
                  https://kite.trade/docs/connect/v3/
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-medium text-gray-800">
                  API Data Format
                </td>
                <td className="p-3 text-gray-700">HTTP/JSON APIs</td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-medium text-gray-800">
                  API Offer Type
                </td>
                <td className="p-3 text-gray-700">
                  Trading API, Websocket API, Historical Data API, Publisher API,
                  Coin API
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-medium text-gray-800">
                  API Exchange Support
                </td>
                <td className="p-3 text-gray-700">
                  BSE, NSE and MCX (Equity, F&amp;O, Currency, and Commodity)
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-medium text-gray-800">
                  API OS Support
                </td>
                <td className="p-3 text-gray-700">
                  Windows/Linux
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-medium text-gray-800">
                  API Support Features
                </td>
                <td className="p-3 text-gray-700">
                  Order Placement, Cancellation, Modification, View Holdings &amp;
                  Positions, Track Funds, Portfolio, Logout
                </td>
              </tr>

              <tr className="border-b align-top">
                <td className="p-3 font-medium text-gray-800">
                  API Order Types
                </td>
                <td className="p-3 text-gray-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Market Order</li>
                    <li>Limit Order</li>
                    <li>After Market Orders</li>
                    <li>Cover Order</li>
                    <li>Good-till-triggered (GTT) Order</li>
                  </ul>
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3 font-medium text-gray-800">
                  API Support
                </td>
                <td className="p-3 text-blue-600 break-all">
                  https://support.zerodha.com/category/trading-and-markets/general-kite/kite-api
                </td>
              </tr>

              <tr>
                <td className="p-3 font-medium text-gray-800">
                  API Demo Link
                </td>
                <td className="p-3 text-blue-600 break-all">
                  https://www.youtube.com/watch?v=r88L9AqnNaE
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaApiDetails;
