const ProStocksSpecialOffer = () => {
  return (
    <div className="mb-3">
      {/* Last updated */}
      <p className="mt-2 text-left  text-[14px] text-[#595d69]">
        Information on this page was last updated on Friday, November 17, 2023
      </p>

      {/* Offer box */}
      <div className="  rounded-xl bg-[#fff3cd] p-5 shadow-sm">
        <div
          className="flex flex-col items-center justify-center rounded-xl border border-[#cc0000] bg-[#fffbea] px-8 py-5 md:flex-row"
          style={{ lineHeight: "1.25" }}
        >
          <div className="text-center justify-center items-center-safe text-[14px] text-[#212529] md:mr-3 md:text-left bg-[#fffbea] ">
            <span className="font-bold text-[#cc0000]">
              Special Offer:{" "}
            </span>
            Pay Rs 899 per month for unlimited trading or flat Rs 15 per Trade +
            Brokerage-Free Equity Delivery + Lifetime Free AMC Demat Account.{" "}
            <a
              href="https://tinyurl.com/broker-prostocks"
              target="_blank"
              rel="noopener noreferrer"
              title="ProStocks - Free Instant Demat Account Opening"
              className="inline-block rounded bg-[#d6293e] px-[6px] py-[2px] text-[11px] font-semibold text-white align-middle"
              style={{ textDecoration: "none" }}
            >
              Open FREE Instant Demat Account
            </a>{" "}
            and start trading today.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProStocksSpecialOffer;
