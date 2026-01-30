const ZerodhaApiBriefIntroduction = () => {
  return (
    <div className="mb-4 rounded-lg border border-gray-300 bg-white p-4">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">
        Zerodha API Brief Introduction
      </h2>

      <div className="mb-3 rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
        <p className="mb-3 text-sm leading-relaxed text-gray-800">
          Zerodha provides a set of APIs (Application Programming Interface) to
          its clients through <strong>Zerodha Kite Connect</strong>. Zerodha Kite
          Connect is{" "}
          <strong>
            India's first market API offered to retail customers.
          </strong>{" "}
          With technology changing the face of financial markets, API is the
          future of Indian trading that will soon replace the traditional
          trading methods of constantly monitoring the screens and tracking
          markets for order placement and executions.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-gray-800">
          Zerodha Kite Connect is a set of{" "}
          <strong>simple HTTP/JSON APIs built on Zerodha Kite</strong>. It enables
          the users to create customized and full-fledged trading platforms as
          per their requirements. Kite connect gives programmatic access to data
          that allows users to place orders across various segments and
          exchanges using any third-party software. Zerodha also offers Kite
          Publisher API that helps users to add one-click trade buttons to their
          website or app for a better user experience.
        </p>

        <p className="mb-2 text-sm font-semibold text-gray-900">
          Zerodha API Benefits
        </p>

        <ol className="list-decimal pl-5 text-sm leading-relaxed text-gray-800 space-y-1">
          <li>Allows customization of the trading platform as per user needs.</li>
          <li>Users get access to data that enables them to trade at their convenience.</li>
          <li>Users can build their own trading platforms.</li>
          <li>Users can enjoy a personalized investment experience.</li>
          <li>Assist in algo trading.</li>
          <li>
            No separate approval is required for individuals to use Zerodha APIs
            as these exchange pre-approved APIs (except in case of fully
            automated trading).
          </li>
          <li>Real-time order execution.</li>
          <li>
            Can use any programming language – Excel VBA, Python, Java, C#, or
            command line console.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ZerodhaApiBriefIntroduction;
