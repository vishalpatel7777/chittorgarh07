import React from "react";

const IpoMerchantBankerMainboardCard = () => {
  return (
    <div
      className="
        mb-4
        overflow-hidden
        rounded-xl
        bg-white
        shadow-sm
        px-1
        py-4
        pt-2
        lg:px-4
        flex
        flex-col
      "
    >
      <div className="mt-2 md:flex md:items-start">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_ipo_lead_manager_performance_tracker_19_mainboard.png"
          alt="IPO Lead Manager Performance 2026 | Best Merchant Bankers for Mainboard IPOs"
          width={300}
          height={150}
          className="
            mx-auto
            mb-3
            block
            rounded-lg
            shadow-sm
            md:mb-0
            md:me-4
            md:float-start
            md:inline
          "
        />

        {/* Content */}
        <div className="text-[15px] leading-7 text-gray-800">
          <p className="mb-3">
            <a
              href="/keyword/lead-manager/70/"
              className="text-blue-600 hover:underline font-medium"
              title="Lead Manager"
            >
              Book Running Lead Managers (BRLMs)
            </a>{" "}
            , also referred to as Lead Managers, are SEBI-registered merchant
            bankers appointed by the issuer company to assist in raising funds
            through an IPO. They play a critical role in managing and ensuring
            the success of the issuance process.
          </p>

          <p className="mb-2">
            The responsibilities of Lead Managers include:
          </p>

          <ul className="list-disc pl-5 mb-3 space-y-1">
            <li>Structuring the issue.</li>
            <li>Ensuring regulatory compliance and documentation.</li>
            <li>Conducting due diligence.</li>
            <li>
              Appointment of{" "}
              <a
                href="/keyword/intermediaries/1171/"
                className="text-blue-600 hover:underline"
                title="Intermediaries"
              >
                intermediaries
              </a>{" "}
              (Registrars, Legal Advisors, Advertising Agencies, Printers, etc.).
            </li>
            <li>Marketing and promotion of the issue.</li>
            <li>Pricing and allotment of shares.</li>
            <li>Post-issue SEBI compliance.</li>
          </ul>

          <p className="mb-2">
            Given below is the list of Lead Managers ranked by the number of
            Mainboard IPOs managed in 2026, along with a summary of their
            listing performance.
          </p>

          <p className="italic text-gray-600">
            Click on a Lead Manager&apos;s name to view the detailed list of
            IPOs managed by them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IpoMerchantBankerMainboardCard;
