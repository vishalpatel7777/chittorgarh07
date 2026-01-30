const ProstocksRatings = () => {
  return (
    <div
      className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
      itemScope
      itemType="https://schema.org/Table"
    >
      <h2 className="mb-3 text-lg font-semibold" itemProp="about">
        Prostocks Ratings
      </h2>

      <div className="overflow-x-auto p-4 border border-gray-200 rounded-xl">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {[
              {
                label: "Overall Rating",
                img: "https://www.chittorgarh.net/images/starimages/3.2.gif",
                value: "3.2/5",
              },
              {
                label: "Fees",
                img: "https://www.chittorgarh.net/images/starimages/4.5.gif",
                value: "4.5/5",
              },
              {
                label: "Brokerage",
                img: "https://www.chittorgarh.net/images/starimages/4.2.gif",
                value: "4.2/5",
              },
              {
                label: "Usability",
                img: "https://www.chittorgarh.net/images/starimages/2.9.gif",
                value: "2.9/5",
              },
              {
                label: "Customer Service",
                img: "https://www.chittorgarh.net/images/starimages/3.2.gif",
                value: "3.2/5",
              },
              {
                label: "Research Capabilities",
                img: "https://www.chittorgarh.net/images/starimages/2.0.gif",
                value: "2.0/5",
              },
            ].map((row, index) => (
              <tr
                key={row.label}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-3 py-2 font-medium text-gray-800">
                  {row.label}
                </td>
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={row.img}
                      height={12}
                      alt={`Rated ${row.value}`}
                      className="inline-block"
                    />
                    <small className="text-gray-700">{row.value}</small>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-sm text-gray-700">
        Based on <mark className="bg-yellow-200 px-1">42 Votes</mark> by
        Prostocks Customers
      </p>

      <p className="mt-2 text-sm">
        <strong>Do you trade with Prostocks?</strong>{" "}
        <a href="#" title="Rate Prostocks">
          <span className="ml-1 inline-block rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white hover:bg-green-700">
            Rate Prostocks
          </span>
        </a>
      </p>
    </div>
  );
};

export default ProstocksRatings;
