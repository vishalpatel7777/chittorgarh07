export default function IPOSection({ title, data }) {
  if (!data.length) return null;

  return (
    <div className="mt-5">
      <h6 className="font-semibold text-sm mb-3 text-gray-800">
        {title}
      </h6>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {data.map((ipo, i) => {
          const highlight =
            ipo.status === "open"
              ? "border-green-500 bg-green-50"
              : ipo.status === "listingToday"
              ? "border-yellow-400 bg-yellow-50"
              : "border-gray-200";

          return (
            <div
              key={i}
              className={`border rounded-md p-3 shadow-sm hover:shadow-md cursor-pointer transition ${highlight}`}
            >
              <p
                className="text-sm font-semibold truncate text-gray-900"
                title={ipo.name}
              >
                {ipo.name} IPO
              </p>

              
            <p className="text-xs text-gray-500">{ipo.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
