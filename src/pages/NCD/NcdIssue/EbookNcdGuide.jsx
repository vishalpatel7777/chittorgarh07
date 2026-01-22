import React from "react";

const chapters = [
  {
    id: 1,
    title: "Introduction to NCD",
    link: "/book-chapter/introduction-to-ncd/30/",
    desc:
      "NCD (Non-Convertible Debenture) is a long-term fixed-income instrument issued by companies to raise funds from investors.",
  },
  {
    id: 2,
    title: "NCD IPO",
    link: "/book-chapter/ncd-ipo/31/",
    desc:
      "NCD IPO is the issuance of debt securities by companies to the general public. Unlike Equity IPO, a company can issue NCD IPO multiple times.",
  },
  {
    id: 3,
    title: "NCD IPO Process",
    link: "/book-chapter/ncd-public-issue-process/32/",
    desc:
      "The process for issuance of NCDs by public companies in India is similar to the IPO process.",
  },
  {
    id: 4,
    title: "NCD Intermediaries",
    link: "/book-chapter/ncd-intermediaries/33/",
    desc:
      "NCD Intermediaries are entities involved in issuance, allotment and listing of NCDs.",
  },
  {
    id: 5,
    title: "NCD Offer Document",
    link: "/book-chapter/ncd-offer-document/34/",
    desc:
      "NCD offering documents contain all necessary information to help investors make informed decisions.",
  },
  {
    id: 6,
    title: "NCD Investors",
    link: "/book-chapter/ncd-investors/35/",
    desc:
      "Institutional, non-institutional, HNI and retail investors can apply for NCD IPOs.",
  },
  {
    id: 7,
    title: "NCD Application Process",
    link: "/book-chapter/ncd-ipo-application-process/36/",
    desc:
      "Applications can be filed via ASBA, UPI or physical forms.",
  },
  {
    id: 8,
    title: "NCD Subscription and Allotment Process",
    link: "/book-chapter/ncd-subscription-and-allotment-process/40/",
    desc:
      "Subscription reflects the demand for an NCD issue in the market.",
  },
  {
    id: 9,
    title: "NCD Credit Rating",
    link: "/book-chapter/ncd-credit-rating/38/",
    desc:
      "NCD rating assesses the issuer’s ability to repay principal and interest.",
  },
  {
    id: 10,
    title: "NCD Comparison",
    link: "/book-chapter/compare-ncd-with-fd-mf-and-other-debt-instruments/41/",
    desc:
      "Comparison of NCD with Bank FD, Corporate FD and Mutual Funds.",
  },
];

const EbookNcdguide = () => {
  return (
    <div className="container mx-auto my-3 px-2 md:px-3 lg:max-w-[1140px]">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="flex flex-wrap gap-2 rounded-md bg-gray-100 p-2 text-sm">
          <li>
            <a
              href="/books/stock-market-and-financial-education/1/"
              className="text-blue-600 hover:underline"
            >
              eBooks
            </a>
          </li>
          <li className="text-gray-600">/</li>
          <li className="font-medium text-gray-800">
            NCD (Non-convertible debentures)
          </li>
        </ol>
      </nav>

      {/* Header Card */}
      <div className="mb-3 rounded-xl bg-white p-3 shadow-sm">
        <h1 className="mb-3 text-2xl font-bold">
          NCD (Non-convertible debentures)
        </h1>
        <p className="text-sm leading-relaxed">
          NCDs in India are long-term fixed-income instruments issued by companies
          to raise funds from investors. Learn NCD meaning, types, benefits,
          risks and features.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Chapters */}
        <div className="lg:col-span-9">
          <h2 className="mb-3 ml-2 text-xl font-semibold">📘 Chapters</h2>

          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="mb-3 rounded-xl bg-white p-3 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold">
                <a
                  href={chapter.link}
                  className="text-blue-600 hover:underline"
                >
                  {chapter.id}. {chapter.title}
                </a>
              </h3>
              <p className="text-sm text-gray-700">{chapter.desc}</p>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-3">
          <div className="sticky top-20 hidden md:block">
            <div className="mb-3 rounded-2xl border bg-white p-2 shadow-sm">
              <a
                href="https://tinyurl.com/broker-zerodha-homepage"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.chittorgarh.net/images/broker_campagn/zerodha/zerodha-300x250.png"
                  alt="Open an Instant Account with Zerodha"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookNcdguide;
