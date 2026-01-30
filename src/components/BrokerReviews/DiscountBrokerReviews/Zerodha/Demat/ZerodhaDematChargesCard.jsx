import React from 'react'

export default function ZerodhaDematChargesCard() {
  return (
  <div className="mb-4 rounded-2xl border border-[#22222f1a] bg-white p-4 shadow-sm">
  <div itemScope itemType="https://schema.org/Table">
    <p itemProp="about" className="font-semibold mb-2">
      Zerodha Demat Charges
    </p>

    <p className="text-sm leading-[1.8rem] text-[#1e1e27] mb-4">
      Zerodha trading and demat account opening fees are Rs 0. Zerodha charges
      Rs 300 per year demat account AMC. Zerodha demat debit transaction fee of
      <br />
      <strong>Market Trades:</strong> ₹13.5 + GST
      <br />
      <strong>Off-Market Trades:</strong> 0.03% of ₹25 whichever is higher + GST
      per debit transaction.
    </p>

    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead className="sticky top-0 bg-white">
          <tr>
            <th className="border-b px-3 py-2 text-left font-semibold">ID</th>
            <th className="border-b px-3 py-2 text-left font-semibold">
              Transaction
            </th>
            <th className="border-b px-3 py-2 text-left font-semibold">
              Charges
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">1</td>
            <td className="px-3 py-2">Demat Account Opening Charges</td>
            <td className="px-3 py-2">Rs 0</td>
          </tr>

          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">2</td>
            <td className="px-3 py-2">Transaction Charges (Buy)</td>
            <td className="px-3 py-2">—</td>
          </tr>

          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">3</td>
            <td className="px-3 py-2">Transaction Charges (Sell)</td>
            <td className="px-3 py-2 whitespace-pre-line">
              Market Trades: ₹13.5 + GST{"\n"}
              Off-Market Trades: 0.03% of ₹25 whichever is higher + GST
            </td>
          </tr>

          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">4</td>
            <td className="px-3 py-2">
              Annual Maintenance Charges (AMC)
            </td>
            <td className="px-3 py-2 whitespace-pre-line">
              Individuals / Non-Individual (except Corporate): ₹300 + GST{"\n"}
              Corporate: ₹1000
            </td>
          </tr>

          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">5</td>
            <td className="px-3 py-2">Demat + Courier charges</td>
            <td className="px-3 py-2">
              ₹150 per certificate (+ ₹100 courier)
            </td>
          </tr>

          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">6</td>
            <td className="px-3 py-2">Remat</td>
            <td className="px-3 py-2">
              ₹150 per certificate + CDSL charges + ₹100 courier
            </td>
          </tr>

          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">7</td>
            <td className="px-3 py-2">Pledge Creation</td>
            <td className="px-3 py-2">₹30 per request + GST</td>
          </tr>

          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">8</td>
            <td className="px-3 py-2">
              Pledge Creation Confirmation
            </td>
            <td className="px-3 py-2">₹0</td>
          </tr>

          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">9</td>
            <td className="px-3 py-2">Pledge Invocation</td>
            <td className="px-3 py-2">₹20</td>
          </tr>

          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">10</td>
            <td className="px-3 py-2">Failed Transactions</td>
            <td className="px-3 py-2">₹50 per ISIN</td>
          </tr>

          <tr className="hover:bg-[#f7f8f9]">
            <td className="px-3 py-2">11</td>
            <td className="px-3 py-2">Other Charges</td>
            <td className="px-3 py-2 whitespace-pre-line">
              Cheque Bounce: ₹350{"\n"}
              Physical Statement: ₹50 (+ courier at actual){"\n"}
              Modification in CML: ₹25 per request{"\n"}
              KRA Upload / Download: ₹50 per request{"\n\n"}
              <span className="italic text-[#595d69]">
                Note: Interest @18% p.a. is charged if dues are unpaid.
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

  )
}
