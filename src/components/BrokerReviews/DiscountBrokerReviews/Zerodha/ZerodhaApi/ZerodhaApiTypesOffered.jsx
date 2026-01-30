const ZerodhaApiTypesOffered = () => {
  return (
    <div className="mb-4">
      <div className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Zerodha API Types Offered
        </h2>

        <div>
          <ol className="list-decimal pl-5 space-y-6 text-sm text-gray-700">
            <li>
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                Zerodha API for trading
              </h3>
              <p className="mb-2">
                Zerodha offers different APIs to its users through Kite Connect
                to place, modify and cancel various order types like regular
                orders, after-market orders, cover orders, and GTT orders. It
                also has an API to retrieve user holdings and positions and
                calculate margin values. Currently, Zerodha does not have any
                API to integrate the back-office data.
              </p>

              <h4 className="mb-2 font-semibold text-gray-900">
                Zerodha API for Algo Trading
              </h4>
              <p className="mb-2">
                There are various ways you can use Zerodha APIs to automate
                trading. You can convert your trading ideas into trading
                strategies using Zerodha APIs and build your own algorithmic
                trading system. The Kite Connect APIs are for trade execution.
                It does not offer you access to any technical indicators. The
                technical indicators are required to be created on your own. In
                case you plan to automate trading end-to-end, you are required
                to obtain the necessary exchange approvals to that effect.
              </p>
              <p className="mb-2">
                You can also use these Zerodha APIs to connect with third-party
                algo trading software like Amibroker to set up your trading
                strategies. All of these require coding skills and programming
                knowledge.
              </p>
              <p className="mb-2">
                Apart from this, Zerodha also offers{" "}
                <a
                  href="/article/zerodha-streak-review-algo-trading-for-retail/516/"
                  title="Zerodha Streak Review"
                  className="text-blue-600 hover:underline"
                >
                  Zerodha Streak
                </a>{" "}
                that allows you to do algo trading without any coding knowledge
                requirement.
              </p>
              <p>
                It is important to note that an algo to perform well requires
                thorough back testing before implementing it to live.
              </p>
            </li>

            <li>
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                Zerodha WebSocket API
              </h3>
              <p className="mb-2">
                Zerodha WebSocket API allows you to access{" "}
                <strong>3,000 instruments across all exchanges</strong> on a
                single WebSocket connection and receive{" "}
                <strong>live quotes</strong> for them during market hours that
                include open, close, high, low, and market depth view for the
                top five orders. It also provides notifications for order
                updates in the form of text messages.
              </p>
              <p>
                To connect to Kite WebSocket API, you need an API key, access
                token, and a WebSocket client library in your choice of
                programming language. The access token gets generated once you
                enter the API key, API secret, and the request token. The
                request token is the token that gets generated on the registered
                redirect URL on successful login.
              </p>
            </li>

            <li>
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                Zerodha Historical data API
              </h3>
              <p className="mb-2">
                The historical data API provides users with archived data for
                several years back in time. The data is available for all
                instruments across various exchanges and contains the timestamp,
                Open, High, Low, Close, Volume, and OI (open interest). The data
                is presented in the form of a candle and is available in several
                time intervals like 5 minutes, 15 minutes, hourly, daily, etc.
              </p>
              <p>
                The historical data is imperative for back testing purposes when
                one intends to do algo trading to give correct trading signals.
                The historical data API is available at Rs.2000 per month. It is
                important to note that you cannot subscribe to historical data
                API alone without a subscription to the live data as it is an
                add-on subscription to Kite connect.
              </p>
            </li>

            <li>
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                Zerodha Publisher API
              </h3>
              <p className="mb-2">
                Kite Publisher API enables users to add buttons to their apps or
                websites that allow trade execution in one click. The publisher
                API is available for free and is beneficial for individuals who
                have their websites or apps related to stock market investments,
                research, advisory services that help people with investment
                decisions. The website visitors can click on the embedded
                buttons to place an order directly from there rather than
                leaving the website and logging into the Zerodha account
                separately to place the order.
              </p>
              <p className="mb-2">
                This feature is beneficial for both parties as it enhances the
                user experience and increases website traffic. You can add
                buttons for a specific stock or a basket with a maximum of 10
                shares added to it. The buttons created can be either branded
                with the Kite logo, customized or dynamic.
              </p>

              <img
                src="https://www.chittorgarh.net/images/screenshots/zerodha-kite-connect-publisher-api-example.jpg"
                alt="Zerodha Publisher API Example"
                title="Zerodha Publisher API Example"
                loading="lazy"
                className="mx-auto mt-2 rounded-lg border border-gray-300"
              />
            </li>

            <li>
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                Zerodha Coin API
              </h3>
              <p>
                Zerodha Coin APIs are the APIs built on the top of the BSE STAR
                MF platform that allows <strong>mutual fund investments</strong>
                . Zerodha Coin APIs enable individuals to buy, sell, and manage
                the SIPs of mutual funds listed on Zerodha's{" "}
                <a
                  href="https://coin.zerodha.com/"
                  className="text-blue-600 hover:underline"
                >
                  Coin platform
                </a>
                . The orders for mutual funds do not get sent to the exchange
                immediately but in batches that run at frequent intervals. You
                can use the mutual fund APIs to place, modify, or cancel your
                orders. The APIs are also available to retrieve individual
                orders, entire order history for the last seven days, user
                portfolio, and instrument list.
              </p>
            </li>
          </ol>

          <hr className="my-6" />

          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Zerodha API example
          </h2>
          <p className="mb-2">
            You can use Zerodha API for different activities that can make
            trading easy and convenient for you as per your requirement. Let us
            see some of the simple examples of Zerodha API usage:
          </p>
          <p className="mb-2">
            <strong>Example 1</strong>: If you wish to accumulate a certain
            quantity of a particular stock, you can schedule a daily program
            using Zerodha API to buy an 'X quantity of stock with price
            conditions/target that you may have in mind. With this, you need not
            place an order manually daily.
          </p>
          <p className="mb-4">
            <strong>Example 2</strong>: You may want to know the margins for a
            bunch of stocks you intend to purchase. Currently, you use the
            margin calculators by keying in one-by-one stock details. Instead of
            this, you can use the margin calculation API that can assist you to
            calculate all the margins (viz. Span, Exposure, Option premium, Cash
            margin, VAR margin, etc.) for a list of orders in one go.
          </p>

          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Zerodha API support
          </h2>
          <p className="mb-2">
            Zerodha does not provide any support for queries or issues related
            to Kite API. There is a separate Kite connect forum that contains a
            group of other Zerodha API users and developers. You can post your
            queries/issues related to API on this forum for a solution. It is
            important to note that since the Kite Connect forum is an open
            public group, you should not post any personal and sensitive details
            like API key, secret, etc.
          </p>
          <p>
            To access the Kite connect forum, visit https://kite.trade and click
            on Forum tab. To be a part of the Kite connect community, register
            your details and log in to post comments or raise any doubts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaApiTypesOffered;
