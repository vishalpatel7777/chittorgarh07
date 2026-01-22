import React from "react";

const NcdSubscriptionCard = () => {
  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white px-1 py-3 pt-2 shadow-sm lg:px-3">
      <div className="mt-2 clear-both">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_ncd-subscription-status-live-bidding-data-bse-nse_90.png"
          alt="NCD Subscription Status - Live from BSE and NSE 2026"
          width={300}
          height={150}
          className="mx-auto mb-2 block rounded-md shadow-sm md:float-left md:me-4 md:mb-0"
        />

        {/* Content */}
        <div className="text-[0.95rem] leading-relaxed text-gray-800">
          <p className="mb-3">
            <strong>NCD Subscription</strong> is the number of times an NCD public
            issue is subscribed at BSE and NSE. NCD subscription details show
            the demand for the bonds.
          </p>

          <p className="mb-2">
            <strong>NCD live subscription</strong> is important for investors
            because:
          </p>

          <ul className="mb-3 list-disc pl-5">
            <li>
              NCDs are allocated on a{" "}
              <strong>First Come First Serve basis</strong>.
            </li>
            <li>
              Most NCD issues close early, well before their issue closing date.
            </li>
            <li>
              Higher demand results in the{" "}
              <strong>early closure</strong> of the NCD issue.
            </li>
            <li>
              NCDs of well-rated companies often close within a few days.
            </li>
          </ul>

          <p>
            The <strong>latest NCD subscription status</strong> 2026 shown below
            is the combined subscription data from{" "}
            <strong>BSE</strong> and <strong>NSE</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NcdSubscriptionCard;
