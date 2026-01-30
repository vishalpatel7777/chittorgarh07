const ProstocksSpecialOfferCard = () => {
  return (
    <div className="mb-3 rounded-2xl">
      <div className="relative mb-4 overflow-hidden rounded-2xl shadow-lg">
        {/* Header */}
        <div className="bg-[#191a1f] px-4 py-3 text-white">
          <h2 className="mb-0 flex items-center gap-2 text-lg font-semibold">
            Prostocks Special Offer <i className="fa fa-gift" />
          </h2>
        </div>

        {/* Body */}
        <div className=" bg-[#ffffec] px-4 py-4">
          <h3 className="mt-1 text-lg font-semibold">
            <mark className="bg-[#fff3cd] px-2 py-1">
              Unlimited Monthly Trading @ Rs 899
            </mark>
          </h3>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-[0.9375rem] leading-[1.8rem] text-[#1e1e27]">
            <li>Monthly unlimited trading plan @ Rs 899.</li>
            <li>
              Or Rs 0 Eq Delivery Brokerage and Flat Rs 15 per trade for Intraday
              &amp; F&amp;O +
            </li>
            <li>
              <b>Lifetime Free AMC Demat Account</b> +
            </li>
            <li>API for algo trading.</li>
          </ul>

          <p className="mt-4 text-[0.9375rem] leading-[1.8rem] text-[#1e1e27]">
            This is a limited-time offer.{" "}
            <a
              href="https://tinyurl.com/broker-prostocks"
              target="_blank"
              rel="noopener noreferrer"
              title="ProStocks - Free Instant Demat Account Opening"
              className="ml-1 inline-block rounded bg-[#d6293e] px-3 py-1 text-xs font-semibold text-white hover:opacity-90"
            >
              Open FREE Instant Demat Account
            </a>{" "}
            and start trading today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProstocksSpecialOfferCard;
