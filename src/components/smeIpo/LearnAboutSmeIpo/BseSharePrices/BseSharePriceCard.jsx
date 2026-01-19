const BseSharePriceCard = () => {
  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white px-1 py-3 pt-2 shadow-sm lg:px-3">
      <div className="mt-2 clearfix">
        {/* Logo */}
        <img
          src="https://www.chittorgarh.net/images/ipo/bse_sme_logo.gif"
          alt="BSE SME List of Companies with live share price"
          width={179}
          height={78}
          className="
            mx-auto mb-2 block
            rounded shadow-sm
            md:float-left md:me-4 md:mx-0 md:inline
          "
        />

        {/* Content */}
        <div className="text-[15px] leading-7 text-gray-800">
          <p className="mb-3">
            BSE SME is the platform at the Bombay Stock Exchange (BSE) for Small
            and Medium Enterprises (SME). The SME companies raise funds from the
            public and get listed at the SME exchange by selling equities in the
            company. BSE SME companies eventually{" "}
            <a
              href="https://www.chittorgarh.com/book-chapter/sme-ipo-migration-to-mainboard/37/"
              className="font-medium text-green-700 hover:underline"
            >
              move to the main exchange
            </a>{" "}
            once they grow.
          </p>

          <p className="mb-3">
            The BSE SME stocks get listed in either{" "}
            <strong>M</strong> (Normal / Rolling segment) or{" "}
            <strong>MT</strong> (Trade-to-Trade (T2T) segment) group.
            Stocks in the normal segment can be bought and sold on the same day,
            whereas T2T segment stocks require delivery and can be sold on the
            next trading day.
          </p>

          <p>
            The companies listed on the BSE SME exchange are traded as per the
            stated minimum lot size for each scrip.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BseSharePriceCard;
