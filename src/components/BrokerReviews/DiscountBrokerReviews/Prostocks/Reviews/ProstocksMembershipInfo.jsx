const ProstocksMembershipInfo = () => {
  return (
    <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-2 text-lg font-semibold">
        ProStocks Membership Information:
      </h2>

      <p className="mb-3 text-sm leading-relaxed text-gray-700">
        ProStocks is a registered{" "}
        <a
          href="/keyword/stock-broker/1294/"
          title="Stock Broker"
          className="text-blue-600 hover:underline"
        >
          stock broker
        </a>{" "}
        and a{" "}
        <a
          href="/keyword/depository/158/"
          title="Depository"
          className="text-blue-600 hover:underline"
        >
          depository
        </a>{" "}
        participant. ProStocks is a member of BSE and NSE. ProStocks is a SEBI
        registered Trading Member and{" "}
        <a
          href="/keyword/demat-account/40/"
          title="Demat Account"
          className="text-blue-600 hover:underline"
        >
          Demat Account
        </a>{" "}
        service provider.
      </p>

      <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
        <li>
          <b>ProStocks NSE Member ID:</b> 6635
        </li>
        <li>
          <b>ProStocks BSE Member ID:</b> 90084
        </li>
        <li>
          <b>SEBI Trading Member Regn. No.:</b> INZ000048660
        </li>
        <li>
          <b>SEBI DP Registration Number (CDSL):</b> IN-DP-280-2016
        </li>
      </ul>
    </div>
  );
};

export default ProstocksMembershipInfo;
