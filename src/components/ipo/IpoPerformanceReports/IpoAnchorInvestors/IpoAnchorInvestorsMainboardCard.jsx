import React from "react";

const IpoAnchorInvestorsMainboardCard = () => {
  return (
    <div
      className="
        mb-4
        overflow-hidden
        rounded-xl
        bg-white
        shadow-sm
        px-1
        py-4
        pt-2
        lg:px-4
        flex
        flex-col
      "
    >
      <div className="mt-2 clearfix md:flex md:items-start">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_anchor-investors-list_133_mainboard.png"
          alt="Anchor Investor Mainboard IPOs | Mainboard IPOs Anchor Investor List"
          width={300}
          height={150}
          className="
            mx-auto
            mb-3
            block
            rounded-lg
            shadow-sm
            md:mb-0
            md:me-4
            md:float-start
            md:inline
            img-fluid
          "
        />

        {/* Content */}
        <div className="text-[15px] leading-7 text-gray-800">
          <p className="mb-3">
            This report provides anchor investor–wise investment details in
            Mainboard IPOs for 2026 highlighting the number of issues, total
            issue size and key averages including valuation, listing
            performance, post-listing returns and subscription levels.
          </p>

          <p>
            Anchor investors are large institutional participants including
            mutual funds, insurance companies, pension funds, and banks whose
            early investment aids price discovery, lowers under-subscription
            risk and moderates listing-day volatility. Their presence
            strengthens IPO credibility and builds confidence across retail,
            HNI, and QIB investor categories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IpoAnchorInvestorsMainboardCard;
