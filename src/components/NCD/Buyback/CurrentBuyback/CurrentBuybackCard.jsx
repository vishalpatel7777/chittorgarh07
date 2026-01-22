import React from "react";

const CurrentBuybackCard = () => {
  return (
    <div
      className="
        bg-white
        shadow-sm
        border-0
        mb-3
        overflow-hidden
        pt-2
        pb-4
        px-1
        lg:px-4
        rounded-[0.7rem]
        relative
      "
    >
      <div className="mt-2 clearfix">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_latest-buyback-issues-in-india_80.png"
          alt="Current Buyback Offers 2026"
          width={300}
          height={150}
          loading="lazy"
          className="
            max-w-full
            h-auto
            bg-white
            shadow-sm
            rounded
            mb-2
            mx-auto
            block
            md:inline
            md:float-left
            md:mr-4
          "
        />

        {/* Text content */}
        <div className="text-[#1e1e27] text-[0.9375rem] leading-[1.8rem]">
          <p>
            Buyback of shares is the repurchasing of own shares by a company. In
            simple words, buyback is nothing but a company buying back its
            shares from the existing shareholders. A company can announce a
            buyback offer either through a tender offer or through the open
            market through book building process. The buyback offer price is
            usually higher than the market price.
          </p>

          <p className="mt-3">
            Learn more about{" "}
            <a
              href="/article/buyback-of-shares-meaning-procedure-and-taxation/517/"
              title="Buyback of Shares Meaning, Procedure and Taxation Explained"
              className="text-[#2163e8] hover:underline"
            >
              Buyback of Shares
            </a>
            .
          </p>

          <p className="mt-3">
            The buyback offers benefits the shareholders as it helps improve the
            shareholder value, increase return on share capital, and fetches a
            premium price. However, one should study the company's performance
            and understand one's need and risk appetite to decide whether one
            wants to stay invested or offer the shares in buyback.
          </p>

          {/* Status legend */}
          <div className="mt-4 px-2">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[12px] font-semibold">
              {/* Issue open */}
              <div className="flex items-center">
                <span className="h-5 w-5 rounded-full border border-black bg-[#0cbc87] mr-2" />
                <span>Issue open</span>
              </div>

              {/* Upcoming */}
              <div className="flex items-center">
                <span className="h-5 w-5 rounded-full border border-black bg-[#f7c32e] mr-2" />
                <span>Upcoming</span>
              </div>

              {/* Record date available */}
              <div className="flex items-center">
                <span className="h-5 w-5 rounded-full border border-black bg-[#4f9ef8] mr-2" />
                <span>Record date available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBuybackCard;
