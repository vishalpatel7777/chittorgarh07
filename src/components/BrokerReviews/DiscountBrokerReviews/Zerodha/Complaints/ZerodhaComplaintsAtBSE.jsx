const ZerodhaComplaintsAtBSE = () => {
  return (
    <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="w-full">
        <h3 className="section-title mb-3 text-lg font-semibold text-gray-800">
          Zerodha complaint at BSE
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-nowrap text-sm">
            <thead className="sticky top-0 bg-gray-100">
              <tr>
                <th className="border px-3 py-2 text-left"></th>
                <th className="border px-3 py-2 text-center font-semibold">
                  2025-26
                </th>
                <th className="border px-3 py-2 text-center font-semibold">
                  2024-25
                </th>
                <th className="border px-3 py-2 text-center font-semibold">
                  2023-24
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-3 py-2">Active Clients</td>
                <td className="border px-3 py-2 text-center">60,08,383</td>
                <td className="border px-3 py-2 text-center">66,71,991</td>
                <td className="border px-3 py-2 text-center">57,49,732</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">Complaints*</td>
                <td className="border px-3 py-2 text-center">16</td>
                <td className="border px-3 py-2 text-center">223</td>
                <td className="border px-3 py-2 text-center">217</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Resolved through the exchange
                </td>
                <td className="border px-3 py-2 text-center">15</td>
                <td className="border px-3 py-2 text-center">223</td>
                <td className="border px-3 py-2 text-center">200</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">Non actionable **</td>
                <td className="border px-3 py-2 text-center">1</td>
                <td className="border px-3 py-2 text-center">20</td>
                <td className="border px-3 py-2 text-center">10</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Advised / Opted for arbitration
                </td>
                <td className="border px-3 py-2 text-center"></td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">0</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Pending for redressal with exchange
                </td>
                <td className="border px-3 py-2 text-center">1</td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">9</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  No. of arbitration filed by clients
                </td>
                <td className="border px-3 py-2 text-center"></td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">1</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Decided by arbitrators in favour of the clients
                </td>
                <td className="border px-3 py-2 text-center"></td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">1</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Decided by the arbitrators
                </td>
                <td className="border px-3 py-2 text-center"></td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">1</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Pending for redressal with arbitrators
                </td>
                <td className="border px-3 py-2 text-center"></td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaComplaintsAtBSE;
