const IpoListingMainboardCard = () => {
  return (
    <div
      className="
        flex flex-col
        bg-white
        border-0
        rounded-xl
        shadow-sm
        overflow-hidden
        will-change-transform
        mb-4
        py-4 pt-2
        px-1 lg:px-4
      "
    >
      <div className="mt-2 flex flex-col md:flex-row items-start">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_ipo-listing-date-check-status-price-bse-nse_25_mainboard.png"
          alt="Mainboard IPOs Listing 2026 - Listing Date, Time and Status"
          width={300}
          height={150}
          className="
            mx-auto md:mx-0
            mb-3 md:mb-0
            md:mr-4
            rounded
            shadow-sm
            block
          "
        />

        {/* Content */}
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>
            Get in-depth insights into Mainboard IPOs Listings for the year 2026.
            This detailed IPO performance report features a complete list of
            companies that got listed during 2026 with essential data such as
            Company Name, IPO Listing Date, Issue Price, Listing Day Close Price,
            Listing Day Gain or Loss (%), and the Current Market Prices at BSE and
            NSE. Track and compare how each IPO has performed since listing —
            from listing gains to current market trends.
          </p>

          <p>
            This page is a valuable resource for retail investors, market
            analysts, financial advisors, and anyone interested in IPO
            performance tracking. Whether you are following Mainboard IPOs, SME
            IPOs, or other public offerings, this listing summary helps you
            evaluate returns and make informed investment decisions based on
            real-time data and historical performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IpoListingMainboardCard;
