import React from "react";

const chapters = [
  {
    id: 1,
    title: "Introduction to Buyback of Shares",
    link: "/book-chapter/introduction-to-buyback-of-shares/1/",
    desc:
      "Buyback in the share market is when a company buys back the shares that it has sold earlier. The process through which a company repurchases its own shares is called a buyback.",
  },
  {
    id: 2,
    title: "Buyback Methods in India",
    link: "/book-chapter/buyback-methods-in-india/2/",
    desc:
      "Companies can announce buyback through the tender offer route or open market route. Each method has different rules and implications for investors.",
  },
  {
    id: 3,
    title: "Buyback Process and Timeline",
    link: "/book-chapter/buyback-process-and-timeline/3/",
    desc:
      "Understand the step-by-step process of a buyback including announcement date, record date, offer period, acceptance, and settlement.",
  },
  {
    id: 4,
    title: "Eligibility and Record Date",
    link: "/book-chapter/buyback-eligibility-and-record-date/4/",
    desc:
      "Only shareholders holding shares as of the record date are eligible to participate in a buyback. Learn how eligibility is determined.",
  },
  {
    id: 5,
    title: "Buyback Price and Calculation",
    link: "/book-chapter/buyback-price-and-calculation/5/",
    desc:
      "Buyback price is usually offered at a premium over the market price. This chapter explains how buyback price impacts investor returns.",
  },
  {
    id: 6,
    title: "Buyback Acceptance Ratio",
    link: "/book-chapter/buyback-acceptance-ratio/6/",
    desc:
      "Acceptance ratio determines how many shares tendered by an investor are actually bought back by the company.",
  },
  {
    id: 7,
    title: "Taxation on Buyback of Shares",
    link: "/book-chapter/buyback-taxation/7/",
    desc:
      "Taxation rules for buybacks differ for companies and investors. Learn how buyback tax works in India.",
  },
  {
    id: 8,
    title: "Buyback Strategies for Investors",
    link: "/book-chapter/buyback-strategies/8/",
    desc:
      "This chapter discusses practical strategies investors use while deciding whether to participate in a buyback.",
  },
  {
    id: 9,
    title: "Buyback Case Studies",
    link: "/book-chapter/buyback-case-studies/9/",
    desc:
      "Real-life examples and case studies of successful and unsuccessful buyback offers in India.",
  },
  {
    id: 10,
    title: "Buyback FAQs",
    link: "/book-chapter/buyback-faqs/10/",
    desc:
      "Frequently asked questions covering common doubts related to buyback of shares.",
  },
];

const EbookBuybackGuide = () => {
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
            Buyback of Shares
          </li>
        </ol>
      </nav>

      {/* Header Card */}
      <div className="mb-3 rounded-xl bg-white p-3 shadow-sm">
        <h1 className="mb-3 text-2xl font-bold">
          Buyback of Shares
        </h1>
        <p className="text-sm leading-relaxed">
          The buyback of shares is a process through which a company repurchases
          its shares from existing shareholders. This guide covers the basics of
          buyback, real examples, case studies, frequently asked questions, and
          detailed insights about buybacks in India.
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
                  className="hover:text-blue-600 "
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

export default EbookBuybackGuide;
