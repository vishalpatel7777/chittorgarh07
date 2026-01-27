import React from "react";

const ZerodhaExclusiveOffer = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        rounded-lg
        bg-[linear-gradient(135deg,#fffbe6,#ffffff)]
        md:flex-row
      "
    >
      {/* Left Content */}
      <div className="w-full px-4 py-4 text-center md:w-7/12 md:text-left">
        <h2 className="mb-3 text-xl font-bold text-gray-900">
          🎯 <span className="text-red-600">Zerodha</span> Exclusive Offer
        </h2>

        <h5 className="mb-3 text-green-700">
          <mark className="bg-yellow-200 px-1">
            Invest Smarter. Trade Faster.
          </mark>
        </h5>

        <ul className="mb-3 inline-block list-none space-y-1 text-left text-sm text-gray-600">
          <li>
            💹 <strong>₹0 Brokerage</strong> on Equity Delivery &amp; Mutual Funds
          </li>
          <li>
            ⚡ Flat <strong>₹20</strong> per trade on Intraday, F&amp;O &amp;
            Commodities
          </li>
          <li>
            🔒 Safe, Reliable &amp; Trusted by{" "}
            <strong>1 Crore+ Investors</strong>
          </li>
          <li>
            💻 Advanced Trading Platform – <em>Kite by Zerodha</em>
          </li>
          <li>🏆 Award-Winning Customer Experience</li>
        </ul>

        <p className="mb-3 text-sm text-gray-500">
          ⏰ Don’t miss out — open your{" "}
          <strong>FREE Zerodha account</strong> and start your investing journey
          today!
        </p>

        <a
          href="https://tinyurl.com/broker-zerodha-account-opening"
          title="Open Instant Zerodha Account"
          className="
            inline-flex
            items-center
            rounded-full
            bg-red-600
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition-transform
            duration-200
            hover:scale-105
            hover:bg-red-700
          "
        >
          🚀 Open Instant Account —{" "}
          <span className="ml-1 text-yellow-300">FREE!</span>
        </a>
      </div>

      {/* Right Image */}
      <div className="relative w-full bg-white p-4 text-center md:w-5/12">
        <img
          src="https://zerodha.com/static/images/products-kite.png"
          alt="Zerodha Kite Platform"
          className="
            mx-auto
            mb-2
            max-h-[240px]
            rounded-lg
            object-contain
            shadow-sm
            animate-[float_3s_ease-in-out_infinite]
          "
        />

        <p className="text-xs italic text-gray-500">
          ⚙️ 5-minute Setup | 100% Online | Paperless Process
        </p>
      </div>
    </div>
  );
};

export default ZerodhaExclusiveOffer;
