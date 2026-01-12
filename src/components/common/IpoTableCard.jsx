import TableCard from "./TableCard";
import StatusLegend from "./StatusLegend";

const STATUS_BG = {
  open: "bg-green-100",
  upcoming: "bg-slate-50",
  listingToday: "bg-cyan-100",
};

const IpoTableCard = ({ config, data }) => {
  return (
    <TableCard title={config.title} subtitle={config.subtitle}>

       {config.showStatusLegend && <StatusLegend />}

      <table className="mt-4 w-full text-sm border-collapse">
        <thead className="sticky top-0 bg-[var(--stripes)]">
          <tr className="border-b border-theme text-secondary">
            {config.columns.map(col => (
              <th
                key={col.key}
                className={`py-2 px-2 text-${col.align || "left"}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b border-theme ${
                config.statusKey ? STATUS_BG[row[config.statusKey]] : ""
              }`}
            >
              {config.columns.map(col => (
                <td
                  key={col.key}
                  className={`py-2 px-2 text-${col.align || "left"} ${
                    col.link ? "text-blue-600 font-medium" : ""
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

       {config.moreLink && (
        <p className="text-center p-3 mb-0">
          <a
            href={config.moreLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 text-sm hover:underline"
          >
            More…
          </a>
        </p>
      )}
    </TableCard>
  );
};

export default IpoTableCard;
