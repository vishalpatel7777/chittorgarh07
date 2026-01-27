import React from "react";

const ZerodhaPinsAndShortSelling = () => {
  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {/* Zerodha Pin Codes */}
      <h2 className="mb-2 text-lg font-semibold text-gray-900">
        Zerodha Pin Codes
      </h2>

      <p className="mb-3 text-sm leading-relaxed text-gray-700">
        Zerodha customer gets 3 pin numbers (passwords or pass codes) for
        different purposes:
      </p>

      <ol className="mb-4 list-decimal space-y-1 pl-5 text-sm text-gray-800">
        <li>Kite PIN (for Login to Kite)</li>
        <li>
          <a
            href="/keyword/zerodha-telephone-code/1357/"
            className="font-medium text-blue-600 hover:underline"
          >
            Zerodha Telephone Code
          </a>{" "}
          (for calling Zerodha)
        </li>
        <li>
          <a
            href="/keyword/zerodha-cdsl-tpin/1358/"
            className="font-medium text-blue-600 hover:underline"
          >
            Zerodha CDSL TPIN
          </a>{" "}
          (for Demat Sell Transaction)
        </li>
      </ol>

      {/* Zerodha Short Selling */}
      <h2 className="mb-2 text-lg font-semibold text-gray-900">
        Zerodha Short Selling
      </h2>

      <ol className="list-decimal space-y-2 pl-5 text-sm text-gray-800">
        <li>
          <strong>
            <a
              href="/keyword/equity-fo/1261/"
              className="text-blue-600 hover:underline"
            >
              Equity F&amp;O Segment
            </a>
          </strong>{" "}
          – Zerodha allows intraday and overnight short selling in the F&amp;O
          segment.
        </li>
        <li>
          <strong>Equity Cash Segment</strong> – Zerodha allows short selling
          only for Intraday, but not for overnight positions.
        </li>
      </ol>
    </div>
  );
};

export default ZerodhaPinsAndShortSelling;
