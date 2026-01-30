import React from "react";

const ZerodhaNriMutualFund = () => {
  return (
    <section className="mx-auto px-1">
      <div className="mb-4 rounded-xl border border-[#22222f1a] bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-[20px] font-semibold text-[#22222f]">
          Zerodha NRI Mutual Fund
        </h2>

        <p className="mb-3 text-[15px] leading-[1.8rem] text-[#1e1e27]">
          Zerodha offers{" "}
          <a
            href="/keyword/coin/1347/"
            className="text-[#2163e8] hover:underline"
          >
            Coin
          </a>
          , a Mutual Fund investment platform to its customers. However, this
          platform is <strong>not available to NRIs</strong>. Zerodha NRI
          customers can invest in Mutual Funds directly through AMCs by using
          their Zerodha demat account while purchasing Mutual Funds.
        </p>

        <p className="mb-4 text-[15px] leading-[1.8rem]">
          Zerodha does not offer Mutual Fund investments to NRI customers
          through its trading platform. As per Zerodha’s official statement:
        </p>

        <blockquote className="border-l-4 border-[#2163e8] bg-[#f7f8f9] px-4 py-3 text-[15px] italic leading-[1.8rem] text-[#29292e]">
          This is because of the{" "}
          <a
            href="/glossary/fatca/124/"
            className="text-[#2163e8] hover:underline"
          >
            Foreign Account Tax Compliance Act (FATCA)
          </a>
          , which makes it compulsory for financial institutions worldwide to
          report comprehensive transaction details involving U.S. persons,
          including NRIs.
        </blockquote>
      </div>
    </section>
  );
};

export default ZerodhaNriMutualFund;
