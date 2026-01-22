const NcdIpoList = ({ onClose }) => {
  const brokers = [
    {
      id: 1,
      name: "Zerodha",
      logo: "https://www.chittorgarh.net/images/ipo/zerodha_logo.gif",
      badge: "star",
    },
    {
      id: 2,
      name: "Angel One",
      logo: "https://www.chittorgarh.net/images/ipo/angel-one-logo.png",
    },
    {
      id: 3,
      name: "Kotak Securities",
      logo: "https://www.chittorgarh.net/images/ipo/kotak-logo.gif",
    },
    {
      id: 4,
      name: "Motilal Oswal",
      logo:
        "https://www.chittorgarh.net/images/ipo/motilal-oswal-wealth-management-logo.png",
    },
    {
      id: 5,
      name: "ProStocks",
      logo: "https://www.chittorgarh.net/images/ipo/prostocks-logo.png",
      badge: "trophy",
    },
    {
      id: 6,
      name: "Upstox",
      logo: "https://www.chittorgarh.net/images/ipo/upstox-logo.svg",
    },
    {
      id: 7,
      name: "Paytm",
      logo: "https://www.chittorgarh.net/images/ipo/paytrm-money-logo.png",
    },
    {
      id: 8,
      name: "Fyers",
      logo: "https://www.chittorgarh.net/images/ipo/fyers-logo.jpg",
    },
  ];

  return (
    <div className="fixed inset-0 z-1050 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Modal Card */}
      <div className="relative flex h-150 w-[95%] max-w-187.5 flex-col rounded-[14px] bg-white p-5 shadow-[0_6px_25px_rgba(0,0,0,0.3)]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        {/* Title */}
        <h4 className="mb-3 text-center text-lg font-bold">
          🔎 Find Your Broker
        </h4>

        {/* Action Chips */}
        <div className="mb-3 flex flex-wrap justify-center gap-2">
          {[
            "Compare",
            "Articles",
            "Reports",
            "Glossary",
            "Complaints",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center justify-center gap-1 rounded-full border bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Search */}
        <div className="mb-3">
          <input
            placeholder="Type broker name..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Broker Grid */}
        <div className="grid flex-1 grid-cols-2 gap-y-3 overflow-y-auto pt-2 md:grid-cols-4">
          {brokers.map((broker) => (
            <div key={broker.id} className="px-1">
              <div className="relative flex min-h-42.5 cursor-pointer flex-col items-center justify-between rounded-md border bg-white p-2 text-center shadow-[0_3px_10px_rgba(0,0,0,0.12)] transition hover:scale-[1.03]">
                {/* Badge */}
                {broker.badge && (
                  <span
                    className={`absolute right-2 top-2 text-base ${
                      broker.badge === "star"
                        ? "text-orange-400"
                        : "text-red-600"
                    }`}
                  >
                    {broker.badge === "star" ? "★" : "🏆"}
                  </span>
                )}

                {/* Logo Circle */}
                <div className="mb-2 flex h-22.5 w-22.5 items-center justify-center rounded-full border bg-gray-50">
                  <img
                    src={broker.logo}
                    alt={broker.name}
                    className="max-h-[80%] max-w-[80%] object-contain"
                  />
                </div>

                {/* Name */}
                <small className="truncate pb-2 text-[13px] font-semibold">
                  {broker.name}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NcdIpoList;
