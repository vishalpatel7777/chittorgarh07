import React from "react";

const links = [
  {
    title: "Zerodha Review",
    href: "/stockbroker/zerodha/18/",
    meta: "Detailed analysis of Zerodha",
  },
  {
    title: "Zerodha Brokerage Charges, Fees, AMC, Transaction Charges",
    href: "/brokerage_charges/zerodha/18/",
  },
  {
    title: "Zerodha Account Opening Process Review",
    href: "/broker/zerodha/account-opening/18/",
  },
  {
    title: "Zerodha Demat Account Review",
    href: "/broker/zerodha/demat-account/18/",
  },
  {
    title: "Apply in IPO through Zerodha",
    href: "/broker/zerodha/ipo/18/",
  },
  {
    title: "Zerodha Branch Offices / Sub Brokers / Franchise",
    href: "/broker/zerodha/branches/18/",
  },
  {
    title: "Trading Software",
    href: "/broker/zerodha/trading_software_review/18/",
  },
  {
    title: "Zerodha NRI Account Review",
    href: "/broker/zerodha/nri-account-review/18/",
  },
  {
    title: "Zerodha Mutual Fund Review",
    href: "/broker/zerodha/mutual-fund/18/",
  },
  {
    title: "Is Zerodha Safe?",
    href: "/broker/zerodha/is-safe-or-not/18/",
  },
  {
    title: "Zerodha Mobile App",
    href: "/broker/zerodha/mobile-app/18/",
  },
  {
    title: "Zerodha API Review (Algo Trading)",
    href: "/broker/zerodha/api-for-algo-trading-review/18/",
  },
  {
    title: "Zerodha Complaint Monitor",
    href: "/broker-complaints/zerodha/18/",
  },
  {
    title: "Zerodha FAQs",
    href: "/broker_faqs/zerodha/18/",
  },
];

const ZerodhaKnowledgeLinks = () => {
  return (
    <div className="mb-4 rounded-xl bg-white p-4 shadow-sm">
      {/* Title */}
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Read more about Zerodha
      </h2>

      {/* Inner bordered box */}
      <div className="rounded-lg border border-blue-200 p-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              <span>{item.title}</span>
              {item.meta && (
                <span className="ml-1 font-normal text-gray-600">
                  – {item.meta}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZerodhaKnowledgeLinks;



