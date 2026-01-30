const ZerodhaFaqsDetails = () => {
  return (
    <div className="my-4 flex w-full flex-wrap">
      <div className="w-full">
        <h2 className="my-2 text-xl font-semibold text-gray-900">FAQs</h2>

        <ol className="space-y-4">
          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">
              What is AMC for Zerodha?
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-800">
              Zerodha charges Rs 0 (Free) Annual Maintenance Charge (AMC) for a trading account and Rs 300 for a Demat account. AMC is charged to maintain the accounts.
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">
              How much Zerodha charge for delivery?
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-800">
              Zerodha charge Rs 0 (Free) for equity delivery trade. These trades are also known as cash &amp; carry trades or CNC.
            </p>
            <p className="mt-2 text-sm leading-7 text-gray-800">
              Espresso customer also has to pay{" "}
              <a
                href="/article/brokerage_charges_explained/95/"
                title="Brokerage Charges Explained"
                className="text-blue-600 hover:underline"
              >
                taxes
              </a>
              ,{" "}
              <a
                href="/article/demat-account-fees-charges/423/"
                title="Demat Account Charges Explained"
                className="text-blue-600 hover:underline"
              >
                demat debit transaction fee
              </a>{" "}
              (Rs 13.5 per trade) and{" "}
              <a
                href="/report/transaction_charges_by_india_share_brokers/2/"
                title="Exchange Transaction Charges Explained"
                className="text-blue-600 hover:underline"
              >
                exchange transaction charges
              </a>
              .
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">
              How much Zerodha charge for intraday?
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-800">
              Zerodha charge Rs 20 per executed order or .03% whichever is lower for intra-day trades. These orders are also known as Margin Intraday Square-up or MIS orders. All open intraday orders are auto squared-off at the end of the day. Extra leverage is offered for these trades.
            </p>
            <p className="mt-2 text-sm leading-7 text-gray-800">
              In addition you have to pay{" "}
              <a
                href="/article/brokerage_charges_explained/95/"
                title="Brokerage Charges Explained"
                className="text-blue-600 hover:underline"
              >
                taxes
              </a>{" "}
              and{" "}
              <a
                href="/report/transaction_charges_by_india_share_brokers/2/"
                title="Exchange Transaction Charges Explained"
                className="text-blue-600 hover:underline"
              >
                exchange transaction charges
              </a>
              .
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">
              How much Zerodha charge for futures?
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-800">
              Zerodha charge Rs 20 per executed order or .03% whichever is lower for equity, currency and commodity futures trading.
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">
              How much Zerodha charge for options?
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-800">
              Zerodha charges Rs 20 per executed order for equity, currency and commodity options trading. Options are highly leveraged derivative products. Options trading is used in many ways including hedging or to reduce the risk exposure of the portfolio.
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">
              How much Zerodha charge for currency trading?
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-800">
              Zerodha charge Rs 20 per executed order or .03% whichever is lower for currency futures trading and Rs 20 per executed order for currency options trading.
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">
              What are transaction charges in Zerodha?
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-800">
              Transaction Charges (or Exchange Turnover Charges) is a fee charged by the stock exchanges for trades done through them. Most brokers include clearing charges to it. These charges can be seen in the contract note.
            </p>

            <div className="mt-4 overflow-x-auto">
              <b className="text-sm">Zerodha Transaction Charges 2026</b>
              <table className="mt-2 w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-3 py-2 text-left">Segment</th>
                    <th className="border px-3 py-2 text-left">Transaction Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Equity Delivery</td>
                    <td className="border px-3 py-2">
                      NSE Rs 297 per Cr (0.00297%) | BSE Rs 375 per Cr (0.00375%) (each side)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Equity Intraday</td>
                    <td className="border px-3 py-2">
                      NSE Rs 297 per Cr (0.00297%) | BSE Rs 375 per Cr (0.00375%) (sell side)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Equity Futures</td>
                    <td className="border px-3 py-2">
                      NSE Rs 173 per Cr (0.00173%) | BSE Rs 0
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Equity Options</td>
                    <td className="border px-3 py-2">
                      NSE Rs 3503 per Cr (0.03503%) | BSE Rs 500 per Cr (0.005%) (on premium)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Currency Futures</td>
                    <td className="border px-3 py-2">
                      NSE Rs 35 per Cr (0.00035%) | BSE Rs 45 per Cr (0.00045%)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Currency Options</td>
                    <td className="border px-3 py-2">
                      NSE Rs 3110 per Cr (0.0311%) | BSE Rs 100 per Cr (0.001%) (on premium)
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Commodity</td>
                    <td className="border px-3 py-2">
                      Group A - Rs 260 per Cr (0.0026%)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>

          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold">Does Zerodha offer IPO?</h3>
            <p className="mt-2 text-sm leading-7">
              Yes. Zerodha offers online IPO applications to its customers. Initial Public Offer (IPO) offers an early opportunity to buy shares of companies that are not previously traded publicly.
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold">Does Zerodha offer Mutual Funds?</h3>
            <p className="mt-2 text-sm leading-7">
              Yes. You can buy/sell Mutual Funds if you have an account with Zerodha.
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold">Do Zerodha provide margin funds?</h3>
            <p className="mt-2 text-sm leading-7">
              Yes. Zerodha provide margin funding.
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold">
              What is Zerodha intraday auto square-off time?
            </h3>
            <p className="mt-2 text-sm leading-7">
              Zerodha auto square-off all open intraday positions at Eq Cash: 3:15 PM | Eq F&amp;O : 3:25 PM | Currency: 4:45 PM | Commodities: 25 min before close.
            </p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-lg font-semibold">
              Does Zerodha provide trading tips or investment strategies?
            </h3>
            <p className="mt-2 text-sm leading-7">
              No. Zerodha doesn't provide trading tips for stock and commodity trading to its customers.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ZerodhaFaqsDetails;
