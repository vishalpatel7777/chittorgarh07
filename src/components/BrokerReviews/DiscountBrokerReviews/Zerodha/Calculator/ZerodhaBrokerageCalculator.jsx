import React, { useState, useMemo } from "react";
import ZerodhaClientGrowthStatCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaClientGrowthStatCard";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";

const ZerodhaBrokerageCalculator = () => {
  const [quantity, setQuantity] = useState(5000);
  const [buyPrice, setBuyPrice] = useState(990);
  const [sellPrice, setSellPrice] = useState(1010);
  const [segment, setSegment] = useState("intraday");

  /* =======================
     CORE CALCULATIONS
     ======================= */

  const turnover = useMemo(() => {
    return quantity * (buyPrice + sellPrice);
  }, [quantity, buyPrice, sellPrice]);

  const brokerage = useMemo(() => {
    if (segment === "delivery") return 0;
    return (
      Math.min(20, 0.0003 * quantity * buyPrice) +
      Math.min(20, 0.0003 * quantity * sellPrice)
    );
  }, [segment, quantity, buyPrice, sellPrice]);

  const stt = useMemo(() => {
    if (segment === "intraday") {
      return 0.00025 * quantity * sellPrice;
    }
    if (segment === "delivery") {
      return 0.001 * quantity * (buyPrice + sellPrice);
    }
    return 0;
  }, [segment, quantity, buyPrice, sellPrice]);

  const exchangeCharges = 0.0000297 * turnover;
  const sebiCharges = 0.000001 * turnover;
  const stampDuty = 0.00003 * quantity * buyPrice;

  const gst = 0.18 * (brokerage + exchangeCharges);

  const totalCharges =
    brokerage + stt + exchangeCharges + sebiCharges + stampDuty + gst;

  const grossPL = quantity * (sellPrice - buyPrice);
  const netPL = grossPL - totalCharges;
  const breakeven = totalCharges / quantity;

  const format = (n) =>
    `₹ ${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

  /* =======================
     UI
     ======================= */

  return (
    <div className="mt-6">
      <div className="grid grid-cols-12 gap-4">
        {/* LEFT CONTENT */}
        <div className="col-span-12 md:col-span-9">
          {/* LOGO */}
          <a href="/stockbroker/zerodha/18/" title="Zerodha Detail">
            <img
              src="https://www.chittorgarh.net/images/ipo/zerodha_logo.gif"
              width={228}
              height={56}
              alt="Zerodha Logo"
              className="float-left mr-4 mb-2"
            />
          </a>

          <p className="text-sm text-[#595d69] mt-2">
            Zerodha Brokerage Calculator helps you understand the details of
            every transaction. This brokerage calculator offers transparency,
            especially for pricing. You can check the price breakdown, which
            includes{" "}
            <strong>
              Total brokerage charges &amp; taxes, Breakeven point (per share),
              and Net profit or Loss Per Trade.
            </strong>
          </p>

          {/* CALCULATOR CARD */}
          <div className="mt-4 bg-white p-3">
            <div className="grid grid-cols-12 gap-4">
              {/* LEFT COLUMN (Inputs) */}
              <div className="col-span-12 md:col-span-4 px-3 md:px-0 space-y-4">
                <h2 className="text-lg font-semibold">
                  Zerodha Brokerage Calculator
                </h2>

                <p className="text-sm text-[#595d69]">
                  Change the options below to calculate Zerodha brokerage.
                </p>

                {/* BROKERAGE PLAN */}
                <div>
                  <label className="block text-sm mb-1">Brokerage Plan</label>
                  <select className="w-full rounded border px-3 py-2 text-sm bg-white">
                    <option>Flat Rate Plan</option>
                  </select>
                </div>

                {/* QTY / BUY / SELL */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm mb-1">Quantity</label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(+e.target.value)}
                      className="w-full rounded border px-2 py-2 text-sm"
                      placeholder="Eg: 100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Buy Price</label>
                    <input
                      type="number"
                      value={buyPrice}
                      onChange={(e) => setBuyPrice(+e.target.value)}
                      className="w-full rounded border px-2 py-2 text-sm"
                      placeholder="Eg: 1000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Sell Price</label>
                    <input
                      type="number"
                      value={sellPrice}
                      onChange={(e) => setSellPrice(+e.target.value)}
                      className="w-full rounded border px-2 py-2 text-sm"
                      placeholder="Eg: 1000"
                    />
                  </div>
                </div>

                {/* EXCHANGE */}
                <div>
                  <p className="text-sm mb-1">Exchange</p>
                  <div className="flex gap-4 text-sm">
                    <label className="flex items-center gap-1">
                      <input type="radio" checked readOnly />
                      NSE
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" readOnly />
                      BSE
                    </label>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (Results) */}
              <div className="col-span-12 md:col-span-8 shadow-sm rounded-sm p-3">
                {/* TABS */}
                <div className="flex border-b overflow-x-auto">
                  {[
                    ["intraday", "Intraday"],
                    ["delivery", "Delivery"],
                    ["future", "Future"],
                    ["option", "Option"],
                    ["currencyFuture", "Currency Future"],
                    ["currencyOption", "Currency Option"],
                  ].map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setSegment(key)}
                      className={`px-4 py-2 text-sm whitespace-nowrap border-b-2 ${
                        segment === key
                          ? "border-[#0cbc87] text-[#0cbc87] font-semibold"
                          : "border-transparent text-[#595d69]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* VALUES */}
                <div className="mt-7 space-y-2 text-sm">
                  <Row label="Turnover" value={format(turnover)} bold />

                  <hr />

                  <Row label="Brokerage Applicable" value={format(brokerage)} />
                  <Row label="STT" value={format(stt)} />
                  <Row
                    label="Exchange Charges"
                    value={format(exchangeCharges)}
                  />
                  <Row label="GST" value={format(gst)} />
                  <Row label="SEBI Charges" value={format(sebiCharges)} />
                  <Row label="Stamp Duty Charges" value={format(stampDuty)} />

                  <Row
                    label="Total Tax and Charges"
                    value={format(totalCharges)}
                  />

                  <hr />

                  <Row
                    label="Breakeven (Per Share)"
                    value={format(breakeven)}
                    bold
                  />

                  <hr />

                  <Row
                    label="Net Profit or Loss"
                    value={
                      <span
                        className={`inline-block px-3 py-1 rounded text-white ${
                          netPL >= 0 ? "bg-[#0cbc87]" : "bg-[#d6293e]"
                        }`}
                      >
                        {format(netPL)}
                      </span>
                    }
                    bold
                  />
                </div>

                <p className="mt-3 text-xs text-[#595d69]">
                  Note: Charges may vary due to change in taxes and brokerage
                  plans.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 md:col-span-3">
          <ZerodhaClientGrowthStatCard
            totalClients="68,52,086"
            growthPercentage="-13.14"
            growthDirection="down"
            infoText="This field shows the number of active customers with the stockbroker in the last month (clients who traded at least once)."
          />

          <OpenZerodhaAccount />
        </div>
      </div>
    </div>
  );
};

/* Small helper */
const Row = ({ label, value, bold }) => (
  <div className="flex justify-between">
    <span className={bold ? "font-semibold" : ""}>{label}</span>
    <span className={bold ? "font-semibold" : ""}>{value}</span>
  </div>
);

export default ZerodhaBrokerageCalculator;
