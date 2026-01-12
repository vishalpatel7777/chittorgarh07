export default function UpcomingIpoSection({ title, data }) {
  if (!data || !data.length) return null;

  return (
    <section className="mt-6">
      {/* Section Title */}
      <h6 className="mb-3 text-sm font-semibold text-gray-800">
        {title}
      </h6>

      {/* IPO Cards */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {data.map((ipo, i) => {
          const highlight =
            ipo.status === "open"
              ? "border-green-500 bg-green-50"
              : ipo.status === "planned"
              ? "border-yellow-400 bg-yellow-50"
              : "border-gray-200 bg-white";

          return (
            <div
              key={i}
              className={`
                cursor-pointer rounded-md border p-3
                shadow-sm transition
                hover:shadow-md
                ${highlight}
              `}
            >
              {/* Company */}
              <p
                className="truncate text-sm font-semibold text-gray-900"
                title={ipo.company}
              >
                {ipo.company}
              </p>

              {/* Meta */}
              <p className="mt-1 text-xs text-gray-500">
                Last updated: {ipo.lastUpdated}
              </p>

              {/* Status */}
              <p className="mt-1 text-xs font-medium text-gray-700">
                {ipo.statusText}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
