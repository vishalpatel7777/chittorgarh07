import React from "react";

const ZerodhaNriAccountCharges = () => {
  return (
    <section className="mx-auto  px-1">
      {/* Card */}
      <div className="mb-4 rounded-xl border border-[#22222f1a] bg-white p-4 shadow-sm">
        <div itemScope itemType="http://schema.org/Table">
          {/* Title */}
          <h2
            className="mb-2 text-[20px] font-semibold text-[#22222f]"
            itemProp="about"
          >
            Zerodha NRI Trading Account Charges
          </h2>

          <p className="mb-3 text-[15px] text-[#1e1e27]">
            Zerodha NRI brokerage charges for trading in Equity and Equity
            Derivatives.
          </p>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-nowrap text-[15px]">
              <thead className="sticky top-0 bg-[#f7f8f9]">
                <tr>
                  <th className="border border-[#22222f1a] px-3 py-2 text-left font-semibold">
                    Transaction
                  </th>
                  <th className="border border-[#22222f1a] px-3 py-2 text-left font-semibold">
                    Fee
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="hover:bg-[#f7f8f9]">
                  <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                    NRI Account Opening Charges
                  </td>
                  <td className="border border-[#22222f1a] px-3 py-2">
                    ₹500
                  </td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                    NRI Account AMC
                  </td>
                  <td className="border border-[#22222f1a] px-3 py-2">
                    ₹0
                  </td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                    Equity Delivery Brokerage
                  </td>
                  <td className="border border-[#22222f1a] px-3 py-2">
                    Non-PIS account, 0.5% or ₹50 per executed order
                  </td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                    Equity Future Brokerage
                  </td>
                  <td className="border border-[#22222f1a] px-3 py-2">
                    Non-PIS account, 0.5% or ₹50 per executed order
                  </td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                    Equity Options Brokerage
                  </td>
                  <td className="border border-[#22222f1a] px-3 py-2">
                    Non-PIS account, 0.5% or ₹50 per executed order
                  </td>
                </tr>

                <tr className="hover:bg-[#f7f8f9]">
                  <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                    Other Charges
                  </td>
                  <td className="border border-[#22222f1a] px-3 py-2">
                    —
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZerodhaNriAccountCharges;
