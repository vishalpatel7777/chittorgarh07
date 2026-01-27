import React from "react";

const ZerodhaAccountCharges = () => {
  return (
    <div >
      {/* HEADER CONTENT */}
    <div className="mb-4 rounded-xl border border-[rgba(34,34,47,0.1)] bg-white p-4 shadow-sm">
        <h2 className="mt-2 text-xl font-semibold">
        Zerodha Account Charges
      </h2>

      <p className="mt-2 text-sm leading-relaxed text-[#1e1e27]">
        Zerodha offers stock trading account and Demat account services. Customer
        pays the fees, commission and taxes while trading with Zerodha. Zerodha
        fee structure and trading commission rates are explained as below.
      </p>
    </div>

    <div className="mb-4 rounded-xl border border-[rgba(34,34,47,0.1)] bg-white p-4 shadow-sm">
        {/* TABLE TITLE */}
      <h3
        className="mt-6 text-lg font-semibold"
        itemScope
        itemType="http://schema.org/Table"
        itemProp="about"
      >
        Zerodha Account Open Charges | Zerodha AMC 2026
      </h3>

      {/* TABLE */}
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                Transaction
              </th>
              <th className="border border-[rgba(34,34,47,0.1)] px-3 py-2 text-left font-medium">
                Fee
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                Trading Account Opening Charges (One Time)
              </td>
              <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                Rs 0
              </td>
            </tr>

            <tr>
              <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                Trading Annual Maintenance Charges{" "}
                <span>
                  <a
                    href="/keyword/amc-charge/1242"
                    title="AMC (Account Maintenance Charges)"
                    className="text-[#2163e8] hover:underline"
                  >
                    AMC
                  </a>
                </span>
              </td>
              <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                Rs 0 (Free)
              </td>
            </tr>

            <tr>
              <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                Demat Account Opening Charges (One Time)
              </td>
              <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                Rs 0
              </td>
            </tr>

            <tr>
              <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                Demat Account Annual Maintenance Charges AMC
              </td>
              <td className="border border-[rgba(34,34,47,0.1)] px-3 py-2">
                Rs 300
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ZerodhaAccountCharges;
