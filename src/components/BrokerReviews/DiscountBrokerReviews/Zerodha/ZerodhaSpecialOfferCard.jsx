import React from "react";

const ZerodhaSpecialOfferCard = () => {
  return (
    <div className="mb-4 rounded-lg bg-[#fff3cd] p-2 shadow-sm justify-center items-center ">
      <div className="rounded-md border border-[#cc0000] bg-[#fff3cd] p-4 m-3">
        <div className="  gap-3 ">
          {/* Text Section */}
          <div className="text-center ">
            <span className="text-[#cc0000] font-semibold">
              Special Offer:
            </span>

            <p className="mt-1 text-sm text-[#6c757d]">
              <strong className="text-black">₹0 Brokerage</strong> on Equity
              Delivery &amp; Mutual Funds
              <br />
              Flat <strong className="text-black">₹20/trade</strong> for Intraday
              &amp; F&amp;O
            </p>

            <p className="mt-2 text-sm text-[#6c757d]">
              India’s most trusted trading platform 💹
            </p>

            {/* CTA Button */}
            <a
              href="https://tinyurl.com/broker-zerodha-account-opening"
              title="Open Instant Zerodha Account"
              className="mt-3 inline-block rounded-full bg-[#d6293e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#b51f31] transition"
            >
              🔓 Open Account –{" "}
              <span className="text-[#f7c32e]">FREE</span>
            </a>

            <p className="mt-2 text-xs italic text-[#6c757d]">
              ⏱ 5 min | 100% Online | Paperless
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaSpecialOfferCard;
