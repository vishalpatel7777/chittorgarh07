const RiReviewsTableCard = ({ data }) => {
  const { records, meta } = data;

  return (
    <div className="card mb-3 overflow-hidden rounded-[0.7rem] bg-[var(--base)] shadow-sm px-2 py-2 md:px-3 flex flex-col min-w-0">

      {/* Top Search Row */}
      <div className="flex flex-wrap gap-3 mt-3">
        <div className="w-1/2 md:w-1/4">
          <input
            type="text"
            placeholder="Review Title"
            maxLength={50}
            className="input-sm w-full mb-3"
          />
        </div>

        <div className="w-1/2 md:w-1/3 flex gap-2">
          <button className="bg-[var(--success)] text-white text-sm px-3 py-1.5 rounded flex items-center gap-1">
            Search
          </button>

          <button className="bg-[var(--danger)] text-white text-sm px-3 py-1.5 rounded flex items-center gap-1">
            Clear
          </button>
        </div>
      </div>

      {/* Header Row */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center my-3 gap-3">
        <h2 className="text-[var(--success)] font-bold text-lg">
          Rights Issue Reviews and Analysis
        </h2>

        <div className="flex items-center gap-2">
          <select className="border border-[var(--success)] text-[var(--success)] font-semibold text-sm rounded px-2 py-[0.3rem]">
            {Array.from({ length: 22 }, (_, i) => {
              const year = 2027 - i;
              return (
                <option key={year} value={year}>
                  Year {year}
                </option>
              );
            })}
          </select>

          <button
            className="border border-[var(--success)] text-[var(--success)] text-sm px-3 py-1.5 rounded flex items-center gap-2"
            title="Export to CSV"
          >
            Export
          </button>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="table-responsive overflow-x-auto">

        {/* Total Records */}
        <small className="text-muted mb-2 flex items-center gap-1">
          🗄️ Total Records:
          <span className="font-semibold text-[var(--text-primary)]">
            {meta.totalRecords}
          </span>
        </small>

        {/* Table */}
        <table className="data-table table-striped table-hover rounded-md w-auto min-w-full mt-2 mb-2">

          {/* THEAD */}
          <thead className="table-light sticky-top">
            <tr>
              {["#", "Review Title", "Recommendation", "Review Date"].map(
                (label, idx) => (
                  <th
                    key={label}
                    className={`table-head ${idx === 0 ? "w-[10%]" : ""}`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span>{label}</span>
                      <span className="flex gap-1 text-[11px] text-[#adb5bd] leading-none">
                        <span>▲</span>
                        <span>▼</span>
                      </span>
                    </div>
                  </th>
                )
              )}
            </tr>

            {/* Filter Row */}
            <tr>
              {Array.from({ length: 4 }).map((_, i) => (
                <th key={i} className="table-head">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input-sm w-full mt-[5px]"
                  />
                </th>
              ))}
            </tr>
          </thead>

          {/* TBODY */}
          <tbody>
            {records.map((item, index) => (
              <tr
                key={item.id}
                className="transition-colors"
              >
                <td className="table-cell text-right">
                  {index + 1}
                </td>

                <td className="table-cell text-left">
                  <a
                    href={item.link}
                    target="_parent"
                    className="text-link"
                  >
                    {item.title}
                  </a>
                </td>

                <td className="table-cell text-left">
                  {item.recommendation}
                </td>

                <td className="table-cell text-left">
                  {item.reviewDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-sm text-[var(--text-secondary)]">
        <p className="font-semibold mb-1">Note:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            The reviews on this site are purely for general educational and
            information purposes. Investors are advised to take their own
            decision.
          </li>
        </ul>

        <h2 className="font-bold text-base text-[var(--text-primary)] mb-2">
          Learn more about Rights Issue of Shares
        </h2>

        <ul className="list-disc pl-5 space-y-1">
          <li><a className="text-link" href="#">Rights Issue Definition, Benefits, Eligibility and Prices</a></li>
          <li><a className="text-link" href="#">Rights Issue Entitlement</a></li>
          <li><a className="text-link" href="#">Rights Issue Glossary</a></li>
          <li><a className="text-link" href="#">Latest Rights Issue</a></li>
        </ul>
      </div>
    </div>
  );
};

export default RiReviewsTableCard;
