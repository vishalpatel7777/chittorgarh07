import React from "react";

/* Rights Issue Chapters */
const chapters = [
  {
    id: 1,
    title: "Basics of Rights Issue",
    link: "/book-chapter/basics-of-rights-issue/54/",
    desc:
      "A Rights Issue of Shares is when a company offers its existing shareholders the right to buy additional shares, usually at a discounted price and in a fixed proportion to their current holdings.",
  },
  {
    id: 2,
    title: "Key Terms in Rights Issue",
    link: "/book-chapter/key-terms-in-rights-issue/55/",
    desc:
      "Key terms like Rights Entitlement (RE), record date, renunciation period and call money determine eligibility, flexibility and timing of a rights issue.",
  },
  {
    id: 3,
    title: "Rights Issue Process and Eligibility",
    link: "/book-chapter/rights-issue-process-and-eligibility/57/",
    desc:
      "A step-by-step explanation of how a rights issue works and who is eligible to participate.",
  },
  {
    id: 4,
    title: "Understanding the Rights Issue Mechanism",
    link: "/book-chapter/understanding-the-rights-issue-mechanism/58/",
    desc:
      "Behind-the-scenes view of how companies, exchanges, depositories and regulators coordinate a rights issue.",
  },
  {
    id: 5,
    title: "Rights Issue Offer Letter",
    link: "/book-chapter/rights-issue-offer-letter/59/",
    desc:
      "The offer letter explains pricing, ratio, timelines and investor choices including subscription or renunciation.",
  },
  {
    id: 6,
    title: "Rights Issue Application Process",
    link: "/book-chapter/rights-issue-application-process/60/",
    desc:
      "How to apply online, through ASBA or offline for a rights issue.",
  },
  {
    id: 7,
    title: "Applying via ASBA (Bank Process Guide)",
    link: "/book-chapter/applying-for-a-rights-issue-via-asba-bank-process-guide/61/",
    desc:
      "Bank-wise ASBA application guides with tips for smooth submission.",
  },
  {
    id: 8,
    title: "Rights Entitlement (RE) Trading and Strategy",
    link: "/book-chapter/rights-entitlement-re-trading-and-strategy/62/",
    desc:
      "How REs are traded in the market and strategies investors use.",
  },
  {
    id: 9,
    title: "Rights Issue Allotment and Listing Process",
    link: "/book-chapter/rights-issue-allotment-and-listing-process/63/",
    desc:
      "Timeline from application to allotment and listing of rights shares.",
  },
  {
    id: 10,
    title: "Rights Issue Call Money",
    link: "/book-chapter/rights-issue-call-money/64/",
    desc:
      "Explains call money for partly-paid shares issued via rights issue.",
  },
];

const EbookRiGuide = () => {
  return (
    <div className="mx-auto my-3 max-w-[1140px] px-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="flex flex-wrap items-center gap-2 rounded bg-[--bs-gray-100] p-2 text-sm">
          <li>
            <a
              href="/books/stock-market-and-financial-education/1/"
              className="text-[--bs-link-color] hover:underline"
            >
              eBooks
            </a>
          </li>
          <li className="text-[--bs-gray-600]">/</li>
          <li className="font-medium text-[--bs-emphasis-color]">
            Rights Issue
          </li>
        </ol>
      </nav>

      {/* Intro Card */}
      <div className="mb-3 rounded-[0.7rem] bg-white p-3 shadow-sm">
        <h1 className="mb-3 text-2xl font-bold text-[--bs-emphasis-color]">
          Rights Issue
        </h1>
        <p className="text-sm leading-[1.8rem] text-[--bs-secondary]">
          A rights issue allows existing shareholders to buy additional shares at
          a discounted price, helping companies raise capital while giving
          investors a chance to increase their ownership.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Chapters */}
        <div className="lg:col-span-9">
          <h2 className="mb-3 ml-2 text-xl font-semibold">
            📘 Chapters
          </h2>

          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="mb-3 rounded-[0.7rem] bg-white p-3 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold">
                <a
                  href={chapter.link}
                  className="text-[--bs-link-color] hover:underline"
                >
                  {chapter.id}. {chapter.title}
                </a>
              </h3>
              <p className="text-sm leading-[1.8rem] text-[--bs-gray-700]">
                {chapter.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-3">
          <div className="sticky top-[80px] hidden md:block">
            <div className="mb-3 overflow-hidden rounded-[1rem] border bg-white p-2 shadow-sm">
              <a
                href="https://tinyurl.com/broker-zerodha-homepage"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.chittorgarh.net/images/broker_campagn/zerodha/zerodha-300x250.png"
                  alt="Open an Instant Account with Zerodha"
                  className="w-full rounded-[1rem]"
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

export default EbookRiGuide;
