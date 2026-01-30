const ZerodhaComplaintsTable = () => {
  return (
    <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="w-full">
        <h3 className="section-title mb-3 text-lg font-semibold text-gray-800">
          Zerodha Complaints
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-nowrap text-sm">
            <thead className="sticky top-0 bg-gray-100">
              <tr>
                <th className="border px-3 py-2 text-center font-medium text-gray-700">
                  Exchange
                </th>
                <th className="border px-3 py-2 text-center font-medium text-gray-700">
                  Financial Year
                </th>
                <th className="border px-3 py-2 text-center font-medium text-gray-700">
                  Total Complaints
                </th>
                <th className="border px-3 py-2 text-center font-medium text-gray-700">
                  Active Clients
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                ["BSE", "2025-26", "16", "60,08,383"],
                ["NSE", "2025-26", "683", "68,52,086"],
                ["BSE", "2024-25", "223", "66,71,991"],
                ["NSE", "2024-25", "1,075", "78,88,964"],
                ["BSE", "2023-24", "217", "57,49,732"],
                ["NSE", "2023-24", "567", "73,92,836"],
                ["BSE", "2022-23", "127", "43,62,520"],
                ["NSE", "2022-23", "446", "63,92,902"],
                ["BSE", "2021-22", "46", "33,16,769"],
                ["NSE", "2021-22", "543", "62,77,434"],
                ["BSE", "2020-21", "19", "4,52,471"],
                ["NSE", "2020-21", "868", "36,02,074"],
                ["BSE", "2019-20", "25", "4,51,299"],
                ["NSE", "2019-20", "432", "14,14,376"],
                ["BSE", "2018-19", "24", "2,34,716"],
                ["NSE", "2018-19", "265", "8,87,267"],
                ["BSE", "2017-18", "28", "2,59,642"],
                ["NSE", "2017-18", "339", "5,40,905"],
                ["BSE", "2016-17", "10", "30,690"],
                ["NSE", "2016-17", "99", "1,65,586"],
                ["BSE", "2015-16", "3", "5,377"],
                ["NSE", "2015-16", "25", "61,970"],
                ["NSE", "2014-15", "17", "30,379"],
                ["NSE", "2013-14", "8", "17,523"],
                ["NSE", "2012-13", "7", "7,996"],
                ["NSE", "2011-12", "4", "1,163"],
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className="border px-3 py-2 text-center text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaComplaintsTable;
