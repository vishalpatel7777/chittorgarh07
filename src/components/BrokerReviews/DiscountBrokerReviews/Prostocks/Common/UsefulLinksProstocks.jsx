const UsefulLinksProstocks = () => {
  return (
      <div className="mb-3 rounded-lg  bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Useful Links
      </h2>

      <ul className="grid grid-cols-1 gap-x-3 gap-y-1 text-sm text-gray-700 md:grid-cols-2 border border-gray-100 rounded-xl p-2">
        {/* 1 */}
        <li className="bg-white p-2">
          <strong>ProStocks Website</strong>:{" "}
          <em>
            <a
              href="https://tinyurl.com/broker-prostocks"
              title="ProStocks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              http://www.ProStocks.com
            </a>
          </em>
        </li>

        {/* 2 */}
        <li className="bg-white p-2">
          <a
            href="https://tinyurl.com/broker-prostocks"
            title="Contact ProStocks"
            className="font-semibold text-blue-600 hover:underline"
          >
            <mark className="rounded bg-yellow-200 px-1">
              Contact ProStocks
            </mark>
          </a>{" "}
          for trading &amp; demat account.
        </li>

        {/* 3 */}
        <li className="bg-gray-100 p-2">
          <a
            href="/article/top_10_reasons_trade_with_prostocks/174/"
            title="The Top 10 Reasons to Trade with ProStocks"
            className="text-blue-600 hover:underline"
          >
            The Top 10 Reasons to Trade with ProStocks
          </a>
        </li>

        {/* 4 */}
        <li className="bg-gray-100 p-2">
          <a
            href="/comparebroker/zerodha-vs-prostocks/18/38/"
            title="ProStocks Vs Zerodha - Comparison of Brokerage Charges, Fees and Taxes"
            className="text-blue-600 hover:underline"
          >
            ProStocks Vs Zerodha
          </a>
          <span className="text-gray-500">
            {" "}
            – Comparison of Brokerage Charges, Fees and Taxes
          </span>
        </li>

        {/* 5 */}
        <li className="bg-white p-2 md:col-span-2">
          Know more about{" "}
          <a
            href="/article/flat_fee_stock_trading_broker_in_india/5/"
            title="Know more about Flat Fee Share Broker in India"
            className="font-semibold text-blue-600 hover:underline"
          >
            Flat Fee Share Brokers in India
          </a>{" "}
          (Also known as <strong>budget broker</strong> or{" "}
          <strong>discount broker</strong>)
        </li>
      </ul>
    </div>
  );
};

export default UsefulLinksProstocks;



