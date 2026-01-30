const ZerodhaComplaintsAtNSE = () => {
  return (
    <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="w-full">
        <h3 className="section-title mb-3 text-lg font-semibold text-gray-800">
          Zerodha complaint at NSE
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
                <td className="border px-3 py-2 text-center">68,52,086</td>
                <td className="border px-3 py-2 text-center">78,88,964</td>
                <td className="border px-3 py-2 text-center">73,92,836</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">Complaints*</td>
                <td className="border px-3 py-2 text-center">683</td>
                <td className="border px-3 py-2 text-center">1,075</td>
                <td className="border px-3 py-2 text-center">567</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Resolved through the exchange
                </td>
                <td className="border px-3 py-2 text-center">628</td>
                <td className="border px-3 py-2 text-center">1,016</td>
                <td className="border px-3 py-2 text-center">545</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">Non actionable **</td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">1</td>
                <td className="border px-3 py-2 text-center">21</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Advised / Opted for arbitration
                </td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">0</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Pending for redressal with exchange
                </td>
                <td className="border px-3 py-2 text-center">55</td>
                <td className="border px-3 py-2 text-center">58</td>
                <td className="border px-3 py-2 text-center">0</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  No. of arbitration filed by clients
                </td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">4</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Decided by arbitrators in favour of the clients
                </td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">1</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Decided by the arbitrators
                </td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">3</td>
              </tr>

              <tr>
                <td className="border px-3 py-2">
                  Pending for redressal with arbitrators
                </td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">0</td>
                <td className="border px-3 py-2 text-center">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaComplaintsAtNSE;
