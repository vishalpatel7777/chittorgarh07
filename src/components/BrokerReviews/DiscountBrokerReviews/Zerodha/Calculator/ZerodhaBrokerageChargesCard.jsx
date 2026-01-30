import React from "react";

const ZerodhaBrokerageChargesCard = () => {
  return (
    <div className="mb-4 rounded-xl border border-[#22222f1a] bg-white p-4 shadow-sm">

      {/* HEADER */}
      <div className="grid grid-cols-12">
        <div
          className="col-span-12"
          itemScope
          itemType="http://schema.org/Table"
        >
          <h2
            className="mb-3 text-lg font-semibold"
            itemProp="about"
          >
            Zerodha Brokerage Charges
          </h2>

          {/* TABLE */}
          <div className="overflow-x-auto shadow-sm rounded-2xl p-4">
            <table className="w-full table-auto border-collapse text-sm hover:table-fixed">
              <thead className="sticky top-0 bg-white">
                <tr>
                  <th className="border-b px-3 py-2 text-left font-semibold">
                    Segments
                  </th>
                  <th className="border-b px-3 py-2 text-left font-semibold">
                    Flat Brokerage Plan
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="hover:bg-[#f7f8f9]">
                  <td className="px-3 py-2 font-semibold">
                    Monthly Fee (Fixed)
                  </td>
                  <td className="px-3 py-2">NA</td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="px-3 py-2 font-semibold">
                    Equity Delivery
                  </td>
                  <td className="px-3 py-2">Rs 0 (Free)</td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="px-3 py-2 font-semibold">
                    Equity Intraday
                  </td>
                  <td className="px-3 py-2">
                    Rs 20 per executed order or .03% whichever is lower
                  </td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="px-3 py-2 font-semibold">
                    Equity Futures
                  </td>
                  <td className="px-3 py-2">
                    Rs 20 per executed order or .03% whichever is lower
                  </td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="px-3 py-2 font-semibold">
                    Equity Options
                  </td>
                  <td className="px-3 py-2">
                    Rs 20 per executed order
                  </td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="px-3 py-2 font-semibold">
                    Currency Futures
                  </td>
                  <td className="px-3 py-2">
                    Rs 20 per executed order or .03% whichever is lower
                  </td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="px-3 py-2 font-semibold">
                    Currency Options
                  </td>
                  <td className="px-3 py-2">
                    Rs 20 per executed order
                  </td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="px-3 py-2 font-semibold">
                    Commodity Futures
                  </td>
                  <td className="px-3 py-2">NA</td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="px-3 py-2 font-semibold">
                    Commodity Options
                  </td>
                  <td className="px-3 py-2">NA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-4 text-sm leading-relaxed text-[#1e1e27]">
        <p>
          A Brokerage Calculator is an online tool that brokers provide to
          traders. The brokerage calculator helps you find out the other fees.
          It allows you to see all the hidden fees of the transaction.
        </p>

        <p className="mt-2 font-semibold">
          Zerodha Brokerage is calculated
        </p>

        <p className="mt-1">
          Brokerage = Number of shares sold/bought x Price of one unit of stock x
          brokerage percentage/Flat Rate.
        </p>

        <p className="mt-3 font-semibold">
          Brokerage Charges List
        </p>

        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <a
              href="/article/brokerage_charges_explained/95/#STT"
              className="font-semibold text-[#2163e8]"
            >
              Securities Transaction Tax (STT):
            </a>{" "}
            This fee is levied only on the sell side for intraday and F&O trades.
            It is levied on both sides for delivery transactions in shares. There
            is no STT on bonds, foreign exchange and mutual funds.
          </li>

          <li>
            <a
              href="/article/brokerage_charges_explained/95/#transaction-charges"
              className="font-semibold text-[#2163e8]"
            >
              Transaction Charges (Exchange Turnover Charges):
            </a>{" "}
            This fee is charged by the stock exchanges for using their trading
            platform. The transaction fee is an addition to two charges.
            Transaction charge = Exchange Turnover Charges + Clearing Charges.
          </li>

          <li>
            <a
              href="/article/brokerage_charges_explained/95/#gst"
              className="font-semibold text-[#2163e8]"
            >
              Goods and Services Tax (GST):
            </a>{" "}
            GST is a tax levied by the Indian government on services rendered in
            India. GST on securities transactions is 18% of total brokerage plus
            transaction fees.
          </li>

          <li>
            <a
              href="/article/brokerage_charges_explained/95/#sebi-charges"
              className="font-semibold text-[#2163e8]"
            >
              SEBI Charges:
            </a>{" "}
            SEBI charges a fee for all sale and purchase transactions in
            securities other than debt securities.
          </li>

          <li>
            <a
              href="/article/brokerage_charges_explained/95/#stamp-duty"
              className="font-semibold text-[#2163e8]"
            >
              Stamp Duty:
            </a>{" "}
            This is a government tax in India on trading in securities. It is
            collected by stockbrokers, clearing companies, or custodians.
            Subsequently, the stamp duty collected is paid to the respective
            states.
          </li>

          <li>
            <b>Breakeven (per share):</b> Breakeven Point in share trading is the
            price at which the net gain or net loss is 0 after paying the
            brokerage and taxes for both the buy and sell transactions and
            adding other expenses.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ZerodhaBrokerageChargesCard;
