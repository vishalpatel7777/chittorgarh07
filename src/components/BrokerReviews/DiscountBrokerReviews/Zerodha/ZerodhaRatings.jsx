import React from "react";

const ratings = [
  {
    label: "Overall Rating",
    value: 3.6,
    img: "https://www.chittorgarh.net/images/starimages/3.6.gif",
  },
  {
    label: "Fees",
    value: 3.6,
    img: "https://www.chittorgarh.net/images/starimages/3.6.gif",
  },
  {
    label: "Brokerage",
    value: 4.2,
    img: "https://www.chittorgarh.net/images/starimages/4.2.gif",
  },
  {
    label: "Usability",
    value: 3.6,
    img: "https://www.chittorgarh.net/images/starimages/3.6.gif",
  },
  {
    label: "Customer Service",
    value: 3.4,
    img: "https://www.chittorgarh.net/images/starimages/3.4.gif",
  },
  {
    label: "Research Capabilities",
    value: 2.8,
    img: "https://www.chittorgarh.net/images/starimages/2.8.gif",
  },
];

const ZerodhaRatings = () => {
  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {/* Title */}
      <h2 className="mb-3 text-lg font-semibold text-gray-900">
        Zerodha Ratings
      </h2>

      {/* Table */}
      <div className="overflow-x-auto mb-3 border rounded-xl p-1 border-[#d0dbebcc]">
        <table className="w-full text-sm border-separate border-spacing-0">
          <tbody>
            {ratings.map((item) => (
              <tr key={item.label} className="odd:bg-gray-50 even:bg-white">
                <td className="px-4 py-3 font-medium text-gray-700">
                  {item.label}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.img}
                      alt={`Rated ${item.value} stars`}
                      className="h-3"
                    />
                    <span className="text-xs text-gray-600">
                      {item.value}/5
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <p className="mt-3 text-sm text-gray-600">
        Based on{" "}
        <mark className="rounded bg-yellow-100 px-1 py-0.5 font-medium">
          492 Votes
        </mark>{" "}
        by Zerodha Customers
      </p>

      <p className="mt-2 text-sm text-gray-800">
        <strong>Do you trade with Zerodha?</strong>{" "}
        <a
          href="#"
          className="inline-block rounded bg-green-600 px-3 py-1 text-xs font-semibold text-white hover:bg-green-700"
        >
          Rate Zerodha
        </a>
      </p>
    </div>
  );
};

export default ZerodhaRatings;
