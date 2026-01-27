import React from "react";

const ZerodhaDematAccountCharges = () => {
  return (
    <div className="mb-4 rounded-xl border border-[rgba(34,34,47,0.1)] bg-white p-4 shadow-sm">
      <h2 className="text-xl font-semibold">
        Zerodha Demat Account Charges 2026
      </h2>

      <p className="mt-2 text-sm leading-relaxed text-[#1e1e27]">
        The Demat account transactions are charged separately from the trading
        commission. Find Zerodha Demat account charges 2026.
      </p>

      <div
        itemScope
        itemType="https://schema.org/Table"
        className="mt-4"
      >
        <p itemProp="about" className="font-semibold">
          Zerodha Demat Charges
        </p>

        <p className="mt-2 text-sm leading-relaxed text-[#1e1e27]">
          Zerodha trading and demat account opening fees are Rs 0. Zerodha charges
          Rs 300 per year demat account AMC. Zerodha demat debit transaction fee of
          <br />
          Market Trades: ₹13.5 + GST
          <br />
          Off-Market Trades: 0.03% of ₹25 whichever is higher + GST per debit
          transaction.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                  ID
                </th>
                <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                  Transaction
                </th>
                <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                  Charges
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">1</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Demat Account Opening Charges
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Rs 0
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">2</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Transaction Charges (Buy)
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2"></td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">3</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Transaction Charges (Sell)
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2 whitespace-pre-line">
                  Market Trades: ₹13.5 + GST
                  {"\n"}
                  Off-Market Trades: 0.03% of ₹25 whichever is higher + GST
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">4</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Annual Maintenance Charges (AMC)
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2 whitespace-pre-line">
                  Individuals/Non Individual (except Corporate) - ₹300 + GST
                  {"\n"}
                  Non Individual - Corporate - ₹1000
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">5</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Demat + Courier charges
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  ₹150 per certificate (+ ₹100 Courier charges)
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">6</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Remat
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  ₹150 per certificate + CDSL charges + ₹100 Courier charges
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">7</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Pledge Creation
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  ₹30 per request + GST
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">8</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Pledge Creation Confirmation
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  ₹0
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">9</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Pledge Invocation
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  ₹20
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">10</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Failed Transactions
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  ₹50 per ISIN
                </td>
              </tr>

              <tr>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">11</td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                  Other Charges
                </td>
                <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2 whitespace-pre-line">
                  Cheque Bounce: ₹350
                  {"\n"}
                  Physical Statement - ₹50 (+Courier charges at actual)
                  {"\n"}
                  Modification in CML - ₹25 per request
                  {"\n"}
                  KRA Upload / Download - ₹50 per request
                  {"\n\n"}
                  Note: Interest at 18% p.a is charged on the outstanding bill
                  amount if not paid within the due date.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ZerodhaDematAccountCharges;
