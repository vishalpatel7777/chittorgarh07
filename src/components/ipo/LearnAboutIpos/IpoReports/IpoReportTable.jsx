// IpoReportTable.jsx
const IpoReportTable = ({ data }) => {
  return (
    <div className="w-full border-0">
      {/* Header */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center my-3">
        <h2 className="text-green-600 font-bold text-lg">
          {data.title}
        </h2>

        <button
          type="button"
          className="
            border border-green-600 text-green-600
            px-3 py-1 text-sm rounded
            flex items-center gap-2
            hover:bg-green-50
          "
        >
          Export
        </button>
      </div>

      {/* Meta */}
      <div className="text-sm text-gray-500 mb-2">
        Total Records:{" "}
        <span className="font-semibold">{data.totalRecords}</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              <th className="w-[10%] text-center text-sm font-semibold p-2">
                #
              </th>
              <th className="text-left text-sm font-semibold p-2">
                Report
              </th>
            </tr>
          </thead>

          <tbody>
            {data.sections.map((item, idx) => {
              // Section Header Row
              if (item.type === "section") {
                return (
                  <tr key={idx} className="bg-cyan-50">
                    <td />
                    <td className="py-3">
                      <strong className="text-base">
                        {item.title}
                      </strong>
                    </td>
                  </tr>
                );
              }

              // Data Row
              return (
                <tr key={idx} className="border-t">
                  <td className="text-right text-sm p-2">
                    {item.index}
                  </td>
                  <td className="text-sm p-2">
                    <div>
                      {item.content}
                      {item.links?.length > 0 && (
                        <span className="ml-2">
                          {item.links.map((link, i) => (
                            <span key={i}>
                              {" "}
                              |{" "}
                              <a
                                href={link.url}
                                className="text-blue-600 hover:underline"
                              >
                                {link.label}
                              </a>
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IpoReportTable;
