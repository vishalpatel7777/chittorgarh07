const ZerodhaApiKey = () => {
  return (
    <div className="mb-4">
      <div className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          Zerodha API Key
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          Zerodha offers Zerodha trading APIs to{" "}
          <strong>individuals and start-ups</strong>, provided they have a{" "}
          <strong>Zerodha trading account</strong>. You need a Zerodha Client ID
          for the Zerodha API login. If you do not have a trading account with
          Zerodha,{" "}
          <a
            href="[[referral_link]]"
            title="Zerodha Online Account Opening"
            className="text-blue-600 hover:underline"
          >
            open an instant account with Zerodha
          </a>{" "}
          to access Zerodha API.
        </p>

        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          Zerodha API gives users programmatic access to historical data,
          positions, live quotes, fund movements that can help order placement,
          margin calculation, portfolio reporting, and much more.
        </p>

        <p className="mb-4 text-sm leading-relaxed text-gray-700">
          To use any API, you need an API key that is a unique number assigned to
          each API.
        </p>

        <h3 className="mb-2 text-base font-semibold text-gray-900">
          Steps for Zerodha API login
        </h3>

        <ul className="mb-4 list-disc pl-5 text-sm text-gray-700">
          <li>
            Go to{" "}
            <a
              href="https://developers.kite.trade/login"
              className="text-blue-600 hover:underline"
            >
              Login / Kite Connect developer
            </a>
            .
          </li>
          <li>Sign up and create a Kite connect developer account.</li>
          <li>Log in using the email id used during registration.</li>
          <li>Click on Create App button.</li>
          <li>
            Provide an app name, Redirect URL, Zerodha Client ID, and Description.
          </li>
          <li>Click on Create.</li>
          <li>
            You will get the Zerodha API key and secret using which you can start
            using Zerodha APIs.
          </li>
        </ul>

        <div className="flex justify-center">
          <img
            src="https://www.chittorgarh.net/images/screenshots/zerodha-kite-connect-login-flow.png"
            alt="Zerodha API Login Flow"
            title="Zerodha API Login Flow"
            loading="lazy"
            className="max-w-full rounded-lg border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ZerodhaApiKey;
