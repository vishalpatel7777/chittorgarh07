import React from "react";

const links = [
  {
    title: "Top 10 discount brokers in India 2026",
    href: "/broker-reviews/topdiscountstockbrokers",
    icon: "percent",
    color: "text-emerald-600",
  },
  {
    title: "Top 10 full service broker in India 2026",
    href: "/broker-reviews/topfullservicebrokers",
    icon: "briefcase",
    color: "text-sky-500",
  },
  {
    title: "Best API Brokers in India",
    href: "/broker-reviews/bestapibroker",
    icon: "code",
    color: "text-yellow-500",
  },
  {
    title: "Top Mobile Apps for Trading",
    href: "/report/best-broker-app-for-trading/141/",
    icon: "mobile",
    color: "text-blue-600",
  },
  {
    title: "Broker Articles",
    href: "/report/article-list/101/1/",
    icon: "file",
    color: "text-gray-500",
  },
];

const QuickLinks = () => {
  return (
    <div className="mb-4 flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 bg-[#52b45e] px-4 py-2 font-semibold text-white">
        <span>🔗</span>
        <span>Quick Links</span>
      </div>

      {/* List */}
      <ul className="divide-y">
        {links.map((link, index) => (
          <li key={index} className="px-4 py-2 hover:bg-gray-50">
            <a
              href={link.href}
              title={link.title}
              className="flex items-center gap-2 text-sm text-gray-800 hover:text-blue-600"
            >
              <span className={link.color}>
                {/* Icon placeholder (FontAwesome-safe) */}
                ●
              </span>
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
