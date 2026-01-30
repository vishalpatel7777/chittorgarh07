const ProstocksComplaints = () => {
  return (
    <div
      className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
      itemScope
      itemType="https://schema.org/Table"
    >
      <h2 className="mb-2 text-lg font-semibold" itemProp="about">
        Prostocks Complaint
      </h2>

      <p className="mb-3 text-sm text-gray-700">
        The number of <b>Prostocks customer complaint</b> received by the
        exchanges. The Prostocks consumer complaint report helps understanding
        the Prostocks quality and reliability of service.
      </p>

      {/* Table Wrapper */}
      <div className="p-4 border border-gray-200 rounded-xl overflow-x-auto">
        <table className="w-full border-collapse text-sm text-center">
          <thead className="bg-white">
            <tr className="border-b">
              <th className="px-3 py-2 font-semibold">Exchange</th>
              <th className="px-3 py-2 font-semibold">Financial Year</th>
              <th className="px-3 py-2 font-semibold">Number of Clients*</th>
              <th className="px-3 py-2 font-semibold">Complaints**</th>
              <th className="px-3 py-2 font-semibold">%</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["BSE", "2025-26", "3353", "1", "0.0298 %"],
              ["NSE", "2025-26", "6617", "2", "0.0302 %"],
              ["BSE", "2024-25", "3449", "1", "0.029 %"],
              ["NSE", "2024-25", "6989", "20", "0.29 %"],
              ["NSE", "2023-24", "6651", "1", "0.01 %"],
              ["NSE", "2022-23", "5899", "7", "0.11 %"],
              ["BSE", "2021-22", "1223", "1", "0.08 %"],
              ["NSE", "2021-22", "5646", "5", "0.08 %"],
              ["NSE", "2020-21", "4095", "2", "0.04 %"],
              ["NSE", "2019-20", "0", "0", "0 %"],
            ].map((row, index) => (
              <tr
                key={`${row[0]}-${row[1]}`}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                {row.map((cell, i) => (
                  <td key={i} className="px-3 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnotes */}
      <p className="mt-3 text-xs text-gray-600">
        <i>* The number of active customers reported by the broker.</i>
      </p>
      <p className="text-xs text-gray-600">
        <i>
          ** The total number of complaints received against the broker at the
          given exchange.
        </i>
      </p>

      <p className="mt-2 text-sm">
        Visit{" "}
        <a
          href="/broker-complaints/prostocks/38/"
          title="Prostocks Complaints at BSE, NSE"
        >
          <mark className="bg-yellow-200 px-1">
            Prostocks Complaints at BSE, NSE and MCX
          </mark>
        </a>{" "}
        for detail report.
      </p>
    </div>
  );
};

export default ProstocksComplaints;
