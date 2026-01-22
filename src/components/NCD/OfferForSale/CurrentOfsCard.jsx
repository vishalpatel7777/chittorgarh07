import React from "react";

const CurrentOfsCard = () => {
  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white px-1 py-4 pt-2 shadow-sm lg:px-4">
      <div className="clearfix mt-2">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_offer-for-sale-in-india_157.png"
          alt="Offer For Sale 2026"
          width={300}
          height={150}
          className="
            mx-auto mb-2 block
            rounded-md
            border-0
            shadow-sm
            md:float-left
            md:mr-4
            md:inline
          "
        />

        {/* Content */}
        <div className="text-[15px] leading-[1.8rem] text-[#1e1e27]">
          <p className="mb-2">
            An Offer for Sale (OFS) is a mechanism through which promoters of a
            company can reduce their shareholding by selling their shares to the
            public. This method is commonly used to comply with regulatory
            requirements, such as maintaining a minimum public shareholding of
            25%. If the promoter’s holding exceeds 75%, they may need to use the
            OFS route to bring it back within the prescribed limit.
          </p>

          <p className="mb-2">
            The OFS process spans two days: T day for non-retail investors and T+1
            day for retail investors. During this period, investors can place
            only limit orders between 9:15 AM and 3:30 PM.
          </p>

          <p>
            OFS announcements are made one or two days before the issue opens,
            with a reserved portion of 10% allocated for retail investors.
            Oversubscription is confirmed on the issue day (T Day). Allocation of
            shares can follow either the Price Priority Method or the
            Proportionate Basis. The process is fast, and excess funds are
            returned to the trading participant the same day after 6:00 p.m. due
            to non-allotment or partial allocation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentOfsCard;
