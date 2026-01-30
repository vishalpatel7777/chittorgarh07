import React from "react";

const ZerodhaNriAccountTradingSoftwareReview = () => {
  return (
    <section className="mx-auto px-1">
      {/* Card */}
      <div className="mb-4 rounded-xl border border-[#22222f1a] bg-white p-4 shadow-sm">
        {/* =======================
            Trading Software Review
        ======================= */}
        <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
          Zerodha NRI Trading Software Review
        </h2>

        <p className="mb-3 text-[15px] text-[#1e1e27]">
          The trading platform offered to NRIs is the same as it is offered to
          resident accounts. Zerodha offers a range of{" "}
          <a
            href="/broker/zerodha/trading_software_review/18/"
            className="text-[#2163e8] hover:underline"
          >
            online trading software
          </a>{" "}
          and tools:
        </p>

        <ul className="mb-4 list-disc pl-5 space-y-1 text-[15px]">
          <li>
            <a
              href="/article/zerodha-kite-review-trading-platform-demo-charts/269/"
              className="text-[#2163e8] hover:underline"
            >
              Zerodha Kite
            </a>{" "}
            (Web-based trading platform)
          </li>
          <li>
            <a
              href="/broker/zerodha/mobile-app/18/"
              className="text-[#2163e8] hover:underline"
            >
              Zerodha Kite Mobile
            </a>{" "}
            (Mobile Trading App)
          </li>
          <li>
            <a
              href="/keyword/console/1271/"
              className="text-[#2163e8] hover:underline"
            >
              Console
            </a>{" "}
            (Back-office)
          </li>
          <li>
            Coin (
            <a
              href="/article/zerodha-sip-mutual-fund-investment-in-3-easy-steps/381/"
              className="text-[#2163e8] hover:underline"
            >
              Zerodha Mutual Fund Investment
            </a>
            )
          </li>
          <li>
            <a
              href="/keyword/sentinel/1353/"
              className="text-[#2163e8] hover:underline"
            >
              Sentinel
            </a>{" "}
            (Live Market Alerts)
          </li>
        </ul>

        <p className="mb-2 text-[15px]">
          Zerodha also offers the following paid add-ons for advanced traders:
        </p>

        <ul className="mb-4 list-disc pl-5 space-y-1 text-[15px]">
          <li>
            <a
              href="/keyword/smallcase/1355/"
              className="text-[#2163e8] hover:underline"
            >
              Smallcase
            </a>
          </li>
          <li>
            <a
              href="/keyword/streak/1342/"
              className="text-[#2163e8] hover:underline"
            >
              Streak
            </a>
          </li>
          <li>
            <a
              href="/options-trading-platform/sensibull/review/15/"
              className="text-[#2163e8] hover:underline"
            >
              Sensibull
            </a>
          </li>
          <li>StockReports+</li>
        </ul>

        <hr className="my-6 border-t border-[#22222f1a]" />

        {/* =======================
            Investment Options Table
        ======================= */}
        <div itemScope itemType="http://schema.org/Table">
          <h2
            className="mb-2 text-[20px] font-semibold text-[#22222f]"
            itemProp="about"
          >
            Zerodha Investment Options
          </h2>

          <p className="mb-3 text-[15px] text-[#1e1e27]">
            The investment options available to an NRI at Zerodha.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-nowrap text-[15px]">
              <thead className="sticky top-0 bg-[#f7f8f9]">
                <tr>
                  <th className="border border-[#22222f1a] px-3 py-2 text-left font-semibold">
                    Investment Option
                  </th>
                  <th className="border border-[#22222f1a] px-3 py-2 text-left font-semibold">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="hover:bg-[#f7f8f9]">
                  <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                    Stocks
                  </td>
                  <td className="border border-[#22222f1a] px-3 py-2">
                    Yes
                  </td>
                </tr>
                <tr className="hover:bg-[#f7f8f9]">
                  <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                    Mutual Funds
                  </td>
                  <td className="border border-[#22222f1a] px-3 py-2">
                    No
                  </td>
                </tr>
                <tr className="hover:bg-[#f7f8f9]">
                  <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                    IPO
                  </td>
                  <td className="border border-[#22222f1a] px-3 py-2">
                    No
                  </td>
                </tr>
                <tr className="hover:bg-[#f7f8f9]">
                  <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                    Others
                  </td>
                  <td className="border border-[#22222f1a] px-3 py-2">
                    —
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZerodhaNriAccountTradingSoftwareReview;
