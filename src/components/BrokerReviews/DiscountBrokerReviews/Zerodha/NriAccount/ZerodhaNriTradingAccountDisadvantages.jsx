import React from "react";

const ZerodhaNriTradingAccountDisadvantages = () => {
  return (
    <section className="mx-auto px-1">
      <div className="mb-4 rounded-xl border border-[#22222f1a] bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
          Zerodha NRI Trading Account Disadvantages
        </h2>

        <ol className="list-decimal space-y-3 pl-5 text-[15px] leading-[1.8rem] text-[#1e1e27]">
          <li>
            Doesn&apos;t offer{" "}
            <a
              href="/keyword/3-in-1/1259/"
              className="text-[#2163e8] hover:underline"
            >
              3-in-1
            </a>{" "}
            accounts. Zerodha only provides trading and demat accounts, so funds
            must be transferred from the PIS bank account to the Zerodha trading
            account before placing trades.
          </li>

          <li>
            Doesn&apos;t offer{" "}
            <a
              href="/keyword/mutual-funds/1292/"
              className="text-[#2163e8] hover:underline"
            >
              Mutual Funds
            </a>{" "}
            to NRI customers.
          </li>

          <li>
            Doesn&apos;t provide research reports or market analysis for traders.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ZerodhaNriTradingAccountDisadvantages;
