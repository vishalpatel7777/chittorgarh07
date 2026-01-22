import React from "react";

const NcdIssueCard = ({
  image ='https://www.chittorgarh.net/images/ipo/report_latest-ncd-issue-in-india_27.png',
  title = "Public NCD Issue 2026",
  description,  
  status = "Issue open",
}) => {
  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white shadow-sm px-1 py-3 pt-2 lg:px-3">
      <div className="mt-2 clear-both">
        {/* Image */}
        <img
          src={image}
          alt={title}
          width={300}
          height={150}
          className="mx-auto mb-2 block rounded-md shadow-sm md:float-left md:me-4 md:mb-0"
        />

        {/* Content */}
        <div className="text-[0.95rem] leading-relaxed text-gray-800">
          <p className="mb-3">
            <strong>NCD issue means Non-Convertible Debenture</strong> public
            issue. NCD is a{" "}
            <strong>secure and redeemable corporate bond</strong>, issued by a
            corporation to raise money from the capital market. Unlike equity
            shares, <strong>bondholders do not own the company</strong>.
          </p>

          <p className="mb-3">
            When you buy a corporate bond, you are lending money to the company.
            In return, the company promises repayment on a fixed maturity date
            along with interest.
          </p>

          <p className="mb-3">
            Corporate bonds are long-term debt securities with maturities
            ranging from <strong>1 to 20 years</strong>.
          </p>

          <p>
            The <strong>NCD issue process</strong> is similar to IPOs. Investors
            apply through brokers, NCDs are credited to demat accounts, and
            funds are deducted from bank accounts.
          </p>

          {/* Status */}
          <div className="mt-4 px-2">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full border border-gray-800 bg-green-600" />
              <p className="text-xs font-semibold text-gray-900">
                {status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NcdIssueCard;
