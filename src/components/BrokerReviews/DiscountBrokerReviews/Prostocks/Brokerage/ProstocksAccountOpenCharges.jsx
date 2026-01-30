const ProstocksAccountOpenCharges = () => {
  return (
    <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold">
        Prostocks Account Open Charges | Prostocks AMC 2026
      </h3>

      <div className="overflow-x-auto rounded-xl border border-gray-200 p-4">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white">
            <tr>
              <th className="border-b border-b-gray-200  px-4 py-3 text-left font-medium text-gray-700">
                Transaction
              </th>
              <th className="border-b border-b-gray-200  px-4 py-3 text-left font-medium text-gray-700">
                Fee
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="odd:bg-gray-50 even:bg-white">
              <td className="px-4 py-3">
                Trading Account Opening Charges (One Time)
              </td>
              <td className="px-4 py-3 font-medium">Rs 0 (Free)</td>
            </tr>

            <tr className="odd:bg-gray-50 even:bg-white">
              <td className="px-4 py-3">
                Trading Annual Maintenance Charges{" "}
                <span className="text-gray-500">(AMC)</span>
              </td>
              <td className="px-4 py-3 font-medium">Rs 0</td>
            </tr>

            <tr className="odd:bg-gray-50 even:bg-white">
              <td className="px-4 py-3">
                Demat Account Opening Charges (One Time)
              </td>
              <td className="px-4 py-3 font-medium">Rs 0 (Free)</td>
            </tr>

            <tr className="odd:bg-gray-50 even:bg-white">
              <td className="px-4 py-3">
                Demat Account Annual Maintenance Charges (AMC)
              </td>
              <td className="px-4 py-3 font-medium">
                Rs 0 (Lifetime Zero AMC)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProstocksAccountOpenCharges;
