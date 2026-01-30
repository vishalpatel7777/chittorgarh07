const ZerodhaApiBrokerageCharge = () => {
  return (
    <div className="mb-4">
      <div className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Zerodha API Brokerage Charge
        </h2>

        <p className="mb-4 text-sm leading-relaxed text-gray-700">
          Zerodha API is available to retail customers at a monthly fee. For{" "}
          <strong>Kite Connect APIs</strong>, the retail users need to pay{" "}
          <strong>Rs 500 per month</strong>.
        </p>

        <h3 className="mb-2 text-base font-semibold text-gray-900">
          Zerodha API Pricing
        </h3>

        <div className="overflow-x-auto">
          <table className="w-auto border-collapse border border-gray-300 text-sm">
            <tbody>
              <tr className="border-b">
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  Kite API (Personal)
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700">
                  Free
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  Kite Connect API
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700">
                  Rs 500 per month
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaApiBrokerageCharge;
