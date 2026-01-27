import React from "react";

const comparisons = [
  ["5paisa", "/comparebroker/5paisa-vs-zerodha/4/18/"],
  ["Aditya Birla Money", "/comparebroker/aditya-birla-money-vs-zerodha/16/18/"],
  ["Alice Blue", "/comparebroker/zerodha-vs-aliceblue/18/43/"],
  ["Anand Rathi", "/comparebroker/zerodha-vs-anand_rathi_broker/18/31/"],
  ["Angel One", "/comparebroker/angel-broking-vs-zerodha/14/18/"],
  ["AxisDirect", "/comparebroker/zerodha-vs-axisdirect/18/35/"],
  ["Bajaj Broking", "/comparebroker/bajaj-broking-vs-zerodha/17/18/"],
  ["BlinkX", "/comparebroker/zerodha-vs-blinkx/18/179/"],
  ["Dhan", "/comparebroker/zerodha-vs-dhan/18/176/"],
  ["Firstock", "/comparebroker/zerodha-vs-firstock/18/177/"],
  ["Fyers", "/comparebroker/zerodha-vs-fyers_securities/18/32/"],
  ["Geojit", "/comparebroker/geojit-vs-zerodha/10/18/"],
  ["Groww", "/comparebroker/zerodha-vs-groww/18/173/"],
  ["HDFC Securities", "/comparebroker/hdfc-securities-vs-zerodha/6/18/"],
  ["ICICIdirect", "/comparebroker/icicidirect-vs-zerodha/1/18/"],
  ["Indiabulls Securities", "/comparebroker/indiabulls-securities-vs-zerodha/3/18/"],
  ["INDmoney", "/comparebroker/zerodha-vs-indmoney/18/182/"],
  ["Jainam Broking", "/comparebroker/zerodha-vs-jainam-broking/18/183/"],
  ["Kotak Securities", "/comparebroker/kotak-securities-vs-zerodha/12/18/"],
  ["m.Stock", "/comparebroker/zerodha-vs-mstock/18/181/"],
  ["Mirae Asset Sharekhan", "/comparebroker/sharekhan-vs-zerodha/2/18/"],
  ["Monarch Networth", "/comparebroker/zerodha-vs-monarch-networth-capital/18/178/"],
  ["Motilal Oswal", "/comparebroker/motilal-oswal-vs-zerodha/5/18/"],
  ["Nuvama (Edelweiss)", "/comparebroker/zerodha-vs-edelweiss_broking/18/34/"],
  ["Paytm Money", "/comparebroker/zerodha-vs-paytm-money/18/175/"],
  ["Prostocks", "/comparebroker/zerodha-vs-prostocks/18/38/"],
  ["Sahi", "/comparebroker/zerodha-vs-Sahi/18/184/"],
  ["SAMCO", "/comparebroker/zerodha-vs-samco/18/138/"],
  ["SAS Online", "/comparebroker/zerodha-vs-sasonline/18/25/"],
  ["SBI Securities", "/comparebroker/zerodha-vs-sbi-capital/18/19/"],
  ["Share.Market", "/comparebroker/zerodha-vs-share-dot-market-phonepe/18/180/"],
  ["TradeSmart", "/comparebroker/zerodha-vs-trade_smart_online/18/24/"],
  ["Tradingo", "/comparebroker/zerodha-vs-tradingo/18/169/"],
];

const ZerodhaBrokerComparison = () => {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
      {/* Title */}
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Compare Zerodha with Top Brokers
      </h2>

      {/* Responsive table-like grid */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-md divide-y md:divide-y-0 md:divide-x">
          {comparisons.map(([name, link], index) => (
            <div
              key={index}
              className="px-4 py-3 text-center hover:bg-gray-50 transition"
            >
              <a
                href={link}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Zerodha Vs {name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZerodhaBrokerComparison;
