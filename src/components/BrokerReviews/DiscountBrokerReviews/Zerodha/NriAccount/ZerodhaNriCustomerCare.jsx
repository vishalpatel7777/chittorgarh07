import React from "react";

const ZerodhaNriCustomerCare = () => {
  return (
    <section className="mx-auto px-1">
      <div className="mb-4 rounded-xl border border-[#22222f1a] bg-white p-4 shadow-sm">
        <h2 className="mb-2 text-[20px] font-semibold text-[#22222f]">
          Zerodha NRI Customer Care
        </h2>

        <p className="mb-4 text-[15px] leading-[1.8rem] text-[#1e1e27]">
          Zerodha NRI Support Desk contact information. Find Zerodha NRI contact
          number.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-nowrap text-[15px]">
            <thead className="sticky top-0 bg-[#f7f8f9]">
              <tr>
                <th className="border border-[#22222f1a] px-3 py-2 text-left font-semibold">
                  Zerodha NRI Helpline
                </th>
                <th className="border border-[#22222f1a] px-3 py-2 text-left font-semibold">
                  Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#f7f8f9]">
                <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                  Zerodha NRI Customer Care Number
                </td>
                <td className="border border-[#22222f1a] px-3 py-2">
                  +91 80 4718 1888
                </td>
              </tr>
              <tr className="hover:bg-[#f7f8f9]">
                <td className="border border-[#22222f1a] px-3 py-2 font-medium">
                  Zerodha NRI Customer Care Email ID
                </td>
                <td className="border border-[#22222f1a] px-3 py-2">
                  <a
                    href="mailto:nridesk@zerodha.com"
                    className="text-[#2163e8] hover:underline"
                  >
                    nridesk@zerodha.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ZerodhaNriCustomerCare;
