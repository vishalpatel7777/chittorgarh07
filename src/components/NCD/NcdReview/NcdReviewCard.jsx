import React from "react";

const NcdReviewCard = () => {
  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white px-1 py-3 pt-2 shadow-sm lg:px-3">
      <div className="mt-2 clear-both">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_ncd_issue_review_list_28.png"
          alt="NCD Issue Review, Analysis and Notes"
          width={300}
          height={150}
          className="mx-auto mb-2 block rounded-md shadow-sm md:float-left md:me-4 md:mb-0"
        />

        {/* Content */}
        <div className="text-[0.95rem] leading-relaxed text-gray-800">
          <p className="mb-3">
            <strong>NCD Review</strong> by SEBI Registered Analysts provides
            in-depth <strong>NCD analysis</strong> to retail and HNI investors.
            This data-supported <strong>NCD forecast</strong> helps investors
            decide if the <strong>NCD is worth investing</strong>. The reviews
            also provide <strong>NCD recommendations</strong> to determine
            whether an <strong>NCD is good or bad</strong>.
          </p>

          <p>
            The <strong>NCD views</strong> provide detailed analysis of company
            background, offer details, valuation, capital structure, financial
            performance, strengths, risks, benefits, peer comparison, and final
            recommendations. These <strong>NCD notes</strong> are designed for
            both short-term and long-term investors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NcdReviewCard;
