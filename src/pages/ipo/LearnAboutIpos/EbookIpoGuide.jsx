const EbookIpoGuide = () => {
  return (
    <div className="container my-3">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded text-sm">
          <li>
            <a
              href="/books/stock-market-and-financial-education/1/"
              className="text-blue-600 hover:underline"
              title="eBooks"
            >
              eBooks
            </a>
          </li>
          <li className="text-gray-600">/</li>
          <li className="text-gray-500">Introduction to IPO</li>
        </ol>
      </nav>

      {/* Intro Card */}
      <div className="bg-white p-3 mb-3 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold mb-3">
          Introduction to IPO
        </h1>

        <div className="text-justify text-gray-700 leading-relaxed">
          Introduction to Initial Public Offer (IPO) in India Stock Markets.
          Learn about IPO basics, eligibility, process, valuation, pricing,
          Grey Market Premium, refunds, and subscription. The IPO process
          enables the company to offer the shares to the public for the first
          time and get listed on the stock exchanges. This IPO Information
          guide will enhance your knowledge about IPO.
        </div>
      </div>

      {/* Chapters */}
      <div className="mb-4">
        <h2 className="ml-2 mb-3 text-xl font-semibold">
          📘 Chapters
        </h2>

        <div className="flex flex-wrap">
          {/* Main Content */}
          <div className="w-full lg:w-9/12 pr-0 lg:pr-4">
            {[
              {
                id: 1,
                title: "IPO Basics",
                link: "/book-chapter/ipo-basics-meaning-benefits-history-regulations/2/",
                desc:
                  "IPO is a process by which a company offers its shares to the general public for the first time via the stock market.",
              },
              {
                id: 2,
                title: "IPO Eligibility",
                link: "/book-chapter/ipo-eligibility/3/",
                desc:
                  "A company wishing to go public must comply with SEBI and stock exchange regulations.",
              },
              {
                id: 3,
                title: "IPO Pricing",
                link: "/book-chapter/ipo-pricing/4/",
                desc:
                  "The IPO price is the price at which shares are first offered to the public.",
              },
              {
                id: 4,
                title: "IPO Process",
                link: "/book-chapter/ipo-process/5/",
                desc:
                  "The IPO process begins when a company decides to go public and ends with listing.",
              },
              {
                id: 5,
                title: "IPO Intermediaries",
                link: "/book-chapter/ipo-intermediaries/6/",
                desc:
                  "IPO intermediaries include merchant bankers, registrars, bankers, and underwriters.",
              },
              {
                id: 6,
                title: "IPO Investors",
                link: "/book-chapter/ipo-investors/7/",
                desc:
                  "IPO investors buy shares with the expectation of making a profit.",
              },
              {
                id: 7,
                title: "IPO Prospectus",
                link: "/book-chapter/ipo-prospectus/18/",
                desc:
                  "The IPO prospectus provides detailed information about the company.",
              },
              {
                id: 8,
                title: "Objects of the Issue in IPOs",
                link: "/book-chapter/objects-of-the-issue-in-ipos/56/",
                desc:
                  "Explains how IPO funds will be utilised by the company.",
              },
              {
                id: 9,
                title: "IPO Valuation",
                link: "/book-chapter/ipo-valuation/20/",
                desc:
                  "IPO valuation helps determine the correct IPO price.",
              },
              {
                id: 10,
                title: "IPO Application",
                link: "/book-chapter/ipo-application-meaning-process-charges-time/19/",
                desc:
                  "IPO application is the process of applying for IPO shares.",
              },
            ].map((chapter) => (
              <div
                key={chapter.id}
                className="bg-white p-3 mb-3 rounded-lg shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold">
                  <a
                    href={chapter.link}
                    className="hover:underline text-blue-700"
                    title={chapter.title}
                  >
                    {chapter.id}. {chapter.title}
                  </a>
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {chapter.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-3/12 mt-4 lg:mt-0">
            <div className="sticky top-[80px]">
              {/* SME IPO Card */}
              <div className="mb-3 flex justify-center">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden w-full">
                  <div className="bg-green-600 text-white text-center py-2 font-semibold">
                    🚀 SME IPO Consulting
                  </div>
                  <div className="p-3 text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2332/2332091.png"
                      alt="SME IPO"
                      width={48}
                      height={48}
                      className="mx-auto mb-2"
                    />
                    <p className="font-semibold text-sm mb-1 text-gray-900">
                      Planning an SME IPO?
                    </p>
                    <p className="text-xs text-gray-600 mb-3">
                      End-to-end support from preparation to listing.
                    </p>
                    <button className="bg-red-600 text-white text-sm px-4 py-1 rounded-full shadow-sm hover:bg-red-700">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>

              {/* Ad Card */}
              <div className="hidden md:block">
                <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
                  <a
                    href="https://tinyurl.com/broker-zerodha-homepage"
                    target="_blank"
                    rel="noreferrer"
                    className="block p-2"
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
      </div>
    </div>
  );
};

export default EbookIpoGuide;
