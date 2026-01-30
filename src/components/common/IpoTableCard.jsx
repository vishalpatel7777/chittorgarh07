import TableCard from "./TableCard";
import StatusLegend from "./StatusLegend";
import { FaDownload } from "react-icons/fa";

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
          <tr className="border  border-gray-200 text-secondary">
            {config.columns.map((col) => (
              <th
                key={col.key}
                className={` py-2 px-2 text-${col.align || "left"} `}
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
              className={` border  border-gray-200 odd:bg-white even:bg-gray-100  ${
                config.statusKey ? STATUS_BG[row[config.statusKey]] : ""
              }`}
            >
              {config.columns.map((col) => (
                <td
                  key={col.key}
                  className={`py-2 px-2 text-${col.align || "left"} ${
                    col.link ? "text-blue-600 font-medium" : ""
                  }`}
                >
                  {col.type === "external-link" ? (
                    row[col.linkKey] ? (
                      <a
                        href={row[col.linkKey]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
        inline-flex items-center justify-center
        rounded-md bg-emerald-600 px-7 py-3 py-1.5
        text-xs font-semibold text-white
        hover:bg-emerald-700
        transition
      "
                      >
                        <FaDownload />
                      </a>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )
                  ) : (
                    row[col.key]
                  )}
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
