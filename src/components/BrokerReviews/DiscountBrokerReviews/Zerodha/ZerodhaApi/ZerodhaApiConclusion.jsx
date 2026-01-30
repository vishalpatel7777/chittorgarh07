const ZerodhaApiConclusion = () => {
  return (
    <div className="mb-4">
      <div className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Conclusion
        </h2>

        <div>
          <p className="text-sm leading-relaxed text-gray-700">
            Zerodha API is one of the innovative new-age features offered by
            Zerodha to enhance the user trading experience across all segments.
            It has a set of pre-approved APIs that allow order placement,
            modification, cancellation, view market depth, calculate margins,
            access to live quotes and historical data, and much more. Using
            these APIs, you can customize your trading experience at your
            convenience and not get bound to the trading platform offered by
            the broker that does not have features/services you want. Refer to{" "}
            <a
              href="https://kite.trade/docs/connect/v3/"
              title="Zerodha API documentation"
              className="text-blue-600 hover:underline"
            >
              Zerodha API documentation
            </a>{" "}
            that contains the detailed parameters, values, functions,
            description format of different APIs that can assist you to use
            the APIs more effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaApiConclusion;
