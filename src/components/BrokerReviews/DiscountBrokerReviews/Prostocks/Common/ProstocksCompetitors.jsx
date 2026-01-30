const competitors = [
  {
    name: "5paisa",
    href: "/stockbroker/5paisa/4/",
    logo: "https://www.chittorgarh.net/images/ipo/5paisa-capital-ltd.jpg",
  },
  {
    name: "Aditya Birla Money",
    href: "/stockbroker/aditya-birla-money/16/",
    logo: "https://www.chittorgarh.net/images/ipo/aditya-birla-capital-logo.jpg",
  },
  {
    name: "Alice Blue",
    href: "/stockbroker/aliceblue/43/",
    logo: "https://www.chittorgarh.net/images/ipo/aliceblue-logo.png",
  },
  {
    name: "Anand Rathi",
    href: "/stockbroker/anand_rathi_broker/31/",
    logo: "https://www.chittorgarh.net/images/ipo/anand_rathi_logo.jpg",
  },
  {
    name: "Angel One",
    href: "/stockbroker/angel-broking/14/",
    logo: "https://www.chittorgarh.net/images/ipo/angel-one-logo.png",
  },
  {
    name: "AxisDirect",
    href: "/stockbroker/axisdirect/35/",
    logo: "https://www.chittorgarh.net/images/ipo/axis-securities-logo.png",
  },
  {
    name: "Bajaj Broking",
    href: "/stockbroker/bajaj-broking/17/",
    logo: "https://www.chittorgarh.net/images/ipo/bajaj-broking-logo.png",
  },
  {
    name: "BlinkX",
    href: "/stockbroker/blinkx/179/",
    logo: "https://www.chittorgarh.net/images/ipo/blinkx-logo.png",
  },
  {
    name: "Dhan",
    href: "/stockbroker/dhan/176/",
    logo: "https://www.chittorgarh.net/images/ipo/dhan-logo.png",
  },
  {
    name: "Firstock",
    href: "/stockbroker/firstock/177/",
    logo: "https://www.chittorgarh.net/images/ipo/firstock-logo.jpg",
  },
];

const ProstocksCompetitors = () => {
  return (
    <div className="mb-6">
      <h2 className="mb-3 text-lg font-semibold">
        Prostocks Competitors Review
      </h2>

      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {competitors.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="snap-start shrink-0"
          >
            <div className="mt-3 w-[160px] rounded-xl bg-white p-3 text-center shadow-sm transition hover:scale-[1.03]">
              <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full border bg-white">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-10 max-w-10 object-contain"
                />
              </div>
              <p className="truncate text-sm font-medium text-gray-800">
                {item.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProstocksCompetitors;
