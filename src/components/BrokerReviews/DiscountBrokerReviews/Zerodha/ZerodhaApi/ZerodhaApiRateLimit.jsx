const ZerodhaApiRateLimit = () => {
  return (
    <div className="mb-4">
      <div className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Zerodha API Rate Limit
        </h2>

        <p className="mb-2 text-sm text-gray-700">
          Zerodha has the following rate limits on the API:
        </p>

        <ul className="mb-4 list-disc pl-5 text-sm text-gray-700">
          <li>Quote API rate limit: 1/second</li>
          <li>
            Order placement API rate limit: 5 or 10/second restricted to 200
            order placement per minute
          </li>
          <li>Historical API rate limit: 3 per second</li>
          <li>WebSocket API limit: Subscription to 3,000 instruments.</li>
          <li>Order modification: 25 modifications per order.</li>
        </ul>

        <p className="text-sm leading-relaxed text-gray-700">
          Over and above the Zerodha API rate limits, Zerodha RMS has an account
          level limit of 2000 MIS (Margin Intraday Square-off) orders per day and
          2000 CO (Cover Orders) per day limit across all segments.
        </p>
      </div>
    </div>
  );
};

export default ZerodhaApiRateLimit;
