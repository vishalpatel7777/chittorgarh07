const ProStocksCard = () => {
  return (
    <div
      id="accountopeningbox_3"
      className="mx-auto max-w-md rounded-2xl border border-red-600 bg-white p-4 text-center shadow-sm"
    >
      <h5 className="mb-2 text-lg font-bold text-red-600">
        🚀 Open Your <span className="uppercase">Prostocks</span> Account Today!
      </h5>

      <p className="text-sm leading-relaxed text-gray-700">
        Pay Rs 899 per month for unlimited trading or flat Rs 15 per Trade +
        Brokerage-Free Equity Delivery + Lifetime Free AMC Demat Account.
      </p>

      <div className="mt-3">
        <a
          href="https://tinyurl.com/broker-prostocks"
          target="_blank"
          rel="noopener noreferrer"
          title="ProStocks - Free Instant Demat Account Opening"
          className="inline-block rounded-md bg-red-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-700"
        >
          Open FREE Instant Demat Account
        </a>
      </div>

      <p className="mt-2 text-sm text-gray-700">
        and start trading today.
      </p>
    </div>
  );
};

export default ProStocksCard;
