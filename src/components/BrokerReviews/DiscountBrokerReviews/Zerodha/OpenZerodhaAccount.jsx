import React from "react";

const OpenZerodhaAccount = () => {
  return (
    <div
      id="accountopeningbox_2"
      className="
        mx-auto
        max-w-[320px]
        rounded-[15px]
        border
        border-gray-300
        border-t-[3px]
        border-t-red-600
        bg-[#ffffe2]
        p-4
        text-center
        shadow-md
      "
    >
      {/* Heading */}
      <h5 className="mb-2 font-bold text-red-600">
        🚀 Open Your{" "}
        <span className="uppercase">Zerodha</span> Account Today!
      </h5>

      {/* Content */}
      <div>
        <p className="mb-2 text-sm text-gray-600">
          <strong>₹0 Brokerage</strong> on Equity Delivery &amp; Mutual Funds
          <br />
          Flat <strong>₹20/trade</strong> for Intraday &amp; F&amp;O
        </p>

        <p className="mb-3 text-sm text-gray-500">
          India’s most trusted trading platform 💹
        </p>

        {/* CTA Button */}
        <a
          href="https://tinyurl.com/broker-zerodha-account-opening"
          title="Open Instant Zerodha Account"
          className="
            inline-flex
            items-center
            rounded-full
            bg-red-600
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            hover:bg-red-700
          "
        >
          🔓 Open Account –{" "}
          <span className="ml-1 text-yellow-300">FREE</span>
        </a>

        {/* Footer note */}
        <p className="mt-2 text-xs italic text-gray-500">
          ⏱ 5 min | 100% Online | Paperless
        </p>
      </div>
    </div>
  );
};

export default OpenZerodhaAccount;
