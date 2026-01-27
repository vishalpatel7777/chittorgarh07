
import React from "react";

const complaintData = [
  { exchange: "BSE", year: "2025-26", clients: 6008383, complaints: 16, percent: "0.0003%" },
  { exchange: "NSE", year: "2025-26", clients: 6852086, complaints: 683, percent: "0.01%" },
  { exchange: "BSE", year: "2024-25", clients: 6671991, complaints: 223, percent: "0.0033%" },
  { exchange: "NSE", year: "2024-25", clients: 7888964, complaints: 1075, percent: "0.01%" },
  { exchange: "BSE", year: "2023-24", clients: 5749732, complaints: 217, percent: "0%" },
  { exchange: "NSE", year: "2023-24", clients: 7392836, complaints: 567, percent: "0%" },
  { exchange: "BSE", year: "2022-23", clients: 4362520, complaints: 127, percent: "0%" },
  { exchange: "NSE", year: "2022-23", clients: 6392902, complaints: 446, percent: "0%" },
  { exchange: "BSE", year: "2021-22", clients: 3316769, complaints: 46, percent: "0%" },
  { exchange: "NSE", year: "2021-22", clients: 6277434, complaints: 543, percent: "0%" },
];

const ZerodhaComplaints = () => {
  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {/* Title */}
      <h2 className="mb-2 text-lg font-semibold text-gray-900">
        Zerodha Complaint
      </h2>

      {/* Description */}
      <p className="mb-3 text-sm leading-relaxed text-gray-700">
        The number of <strong>Zerodha customer complaint</strong> received by the
        exchanges. The Zerodha consumer complaint report helps understanding the
        Zerodha quality and reliability of service.
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-center">
              <th className="px-2 py-2 font-medium text-gray-700">Exchange</th>
              <th className="px-2 py-2 font-medium text-gray-700">Financial Year</th>
              <th className="px-2 py-2 font-medium text-gray-700">Number of Clients*</th>
              <th className="px-2 py-2 font-medium text-gray-700">Complaints**</th>
              <th className="px-2 py-2 font-medium text-gray-700">%</th>
            </tr>
          </thead>

          <tbody>
            {complaintData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 text-center last:border-b-0"
              >
                <td className="px-2 py-2 text-gray-800">{row.exchange}</td>
                <td className="px-2 py-2 text-gray-800">{row.year}</td>
                <td className="px-2 py-2 text-gray-800">{row.clients}</td>
                <td className="px-2 py-2 text-gray-800">{row.complaints}</td>
                <td className="px-2 py-2 text-gray-800">{row.percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnotes */}
      <p className="mt-3 text-xs text-gray-600 italic">
        * The number of active customers reported by the broker.
      </p>
      <p className="text-xs text-gray-600 italic">
        ** The total number of complaints received against the broker at the given exchange.
      </p>

      {/* Link */}
      <p className="mt-2 text-xs text-gray-700">
        Visit{" "}
        <a
          href="/broker-complaints/zerodha/18/"
          className="font-medium text-blue-600 hover:underline"
        >
          <mark className="rounded bg-yellow-100 px-1">
            Zerodha Complaints at BSE, NSE and MCX
          </mark>
        </a>{" "}
        for detail report.
      </p>
    </div>
  );
};

export default ZerodhaComplaints;
