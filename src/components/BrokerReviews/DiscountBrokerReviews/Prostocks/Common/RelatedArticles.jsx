const RelatedArticles = () => {
  return (
    <div className="mb-3 rounded-2xl  bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">
        Related articles
      </h2>

      <ul className="list-disc space-y-2 pl-5 text-sm">
        <li>
          <a
            href="/article/brokerage_charges_explained/95/"
            title="Brokerage Charges Explained with example"
            className="text-blue-600 hover:underline"
          >
            Brokerage Charges Explained with example
          </a>
        </li>

        <li>
          <a
            href="/article/transaction_charges_by_stock_brokers_in_india/82/"
            title="Transaction Charges by Broker explained with examples"
            className="text-blue-600 hover:underline"
          >
            Transaction Charges by Broker explained with examples
          </a>
        </li>

        <li>
          <a
            href="/article/minimum_brokerage_charged_by_share_brokers/93/"
            title="Minimum Brokerage Charges explained with examples"
            className="text-blue-600 hover:underline"
          >
            Minimum Brokerage Charges explained with examples
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RelatedArticles;
