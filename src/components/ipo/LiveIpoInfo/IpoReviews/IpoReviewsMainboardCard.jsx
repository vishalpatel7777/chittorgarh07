import React from 'react'

const IpoReviewsMainboardCard = () => {
  return (
    <div
      className="
        flex flex-col
        border-0
        shadow-sm
        rounded-xl
        overflow-hidden
        will-change-transform
        mb-4 md:mb-3
        py-4 pt-2
        px-1 lg:px-3
        bg-white
      "
    >
      <div className="mt-2 flex flex-col md:flex-row items-start">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_ipo-review-and-rating-india_73_all.png"
          alt="IPOs Reviews 2026 and Capital Market IPO Rating India"
          width={300}
          height={150}
          className="
            mx-auto md:mx-0
            mb-2 md:mb-0
            md:mr-4
            rounded
            shadow-sm
            block md:inline-block
          "
        />

        {/* Content */}
        <div className="text-sm text-gray-700 leading-relaxed">
          <p>
            Get IPO recommendations from leading experts and brokerage houses.
            IPO reviews are among the most popular inputs that an investor uses
            to apply for an IPO. Below the IPO ratings are provided by various
            Financial Institutions, Independent Brokers and SEBI Registered
            Analysts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IpoReviewsMainboardCard
