import React from "react";

const links = [
  {
    title: "Visit Zerodha Website",
    href: "https://tinyurl.com/broker-zerodha-account-opening",
    note: "to open instant account (in 15 minutes).",
    highlight: true,
  },
  {
    title: "How to trade, buy and sell options in Zerodha Kite?",
    href: "/article/how-to-trade-buy-sell-options-in-zerodha-kite/337/",
  },
  {
    title: "Zerodha CDSL TPIN",
    href: "/article/zerodha-cdsl-tpin-pre-authorise-sell-from-demat/473/",
    note: "(for Demat Sell Transaction)",
    pill: true,
  },
  {
    title: "Zerodha GTT Order (GTC Equivalent) Explained",
    href: "/article/zerodha-gtt-order-good-till-triggered-gtc/436/",
    pill: true,
  },
  {
    title: "Zerodha Partner Program Review (Refer and Earn)",
    href: "/article/zerodha-partner-program-review-refer-and-earn/462/",
  },
  {
    title: "Zerodha SIP Mutual Fund Investment in 3 Easy Steps",
    href: "/article/zerodha-sip-mutual-fund-investment-in-3-easy-steps/381/",
  },
  {
    title: "Zerodha Telephone Code",
    href: "/article/zerodha-telephone-code-zpin-get-change-reset/472/",
    note: "(for Customer Support Calls)",
    pill: true,
  },
  {
    title:
      "Zerodha Kite Review - Most simple yet powerful trading platform",
    href: "/article/zerodha-kite-review-trading-platform-demo-charts/269/",
    pill: true,
  },
  {
    title: "Zerodha Coin Review (Mutual Fund Investment)",
    href: "/article/zerodha-coin-mutual-fund-investment-platform/461/",
  },
  {
    title: "Zerodha Varsity Review (Module, App & Certificate)",
    href: "/article/zerodha-varsity-review-modules-app-certificate/463/",
  },
  {
    title: "Zerodha Options Trading Review",
    href: "/article/zerodha-reviews-options-trading-platform/287/",
    pill: true,
  },
  {
    title: "20 Reasons to Trade with Zerodha",
    href: "/article/20_reasons_to_trade_with_zerodha_discount_broker/62/",
  },
  {
    title: "How can I refer a friend to Zerodha?",
    href: "/article/how-can-i-refer-a-friend-to-zerodha/377/",
  },
  {
    title: "Zerodha BTST Orders Explained",
    href: "/article/zerodha-btst-explained-charges-margin-brokerage/528/",
  },
  {
    title: "Open Zerodha Demat Account",
    href: "https://tinyurl.com/broker-zerodha-account-opening",
    note: "online in just 15 minutes.",
    highlight: true,
  },
  {
    title: "Zerodha NFO Explained - Means, Steps to Apply and Charges",
    href: "/article/zerodha-nfo-means-steps-to-apply-and-charges/511/",
  },
  {
    title: "Zerodha Streak Review - Algo Trading for Retail Investors",
    href: "/article/zerodha-streak-review-algo-trading-for-retail/516/",
  },
  {
    title: "NFO (Nifty Futures & Options) in Zerodha",
    href: "/article/nfo-nifty-futures-options-in-zerodha/514/",
  },
  {
    title: "GTT in Zerodha Kite (Zerodha GTT guide)",
    href: "/article/gtt-in-zerodha-kite-zerodha-gtt-guide/512/",
  },
  {
    title:
      "Direct Mutual Funds Explained (Meaning, Charges & Taxation)",
    href: "/article/direct-mutual-funds-explained-meaning-charges-tax/501/",
  },
  {
    title: "Zerodha Order Types & Product Types Explained",
    href: "/article/zerodha-order-types-and-product-types-explained/529/",
    isNew: true,
    pill: true,
  },
  {
    title: "Zerodha Account Closure Online - Explained",
    href: "/article/zerodha-account-closure-online/545/",
    isNew: true,
    pill: true,
  },
];

const ZerodhaUsefulLinks = () => {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
      {/* Title */}
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Useful Links
      </h2>

      {/* Inner bordered container */}
      <div className="rounded-lg border border-blue-200 p-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {links.map((item, index) => (
            <div
              key={index}
              className={`rounded-md px-3 py-2 ${
                item.highlight
                  ? "bg-yellow-100"
                  : item.pill
                  ? "bg-gray-50"
                  : ""
              }`}
            >
              <a
                href={item.href}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                {item.title}
              </a>

              {item.note && (
                <span className="ml-1 text-sm text-gray-700">
                  {item.note}
                </span>
              )}

              {item.isNew && (
                <span className="ml-2 inline-block rounded bg-yellow-300 px-1 text-[10px] font-bold text-black">
                  NEW
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZerodhaUsefulLinks;
