import React from "react";
import ZerodhaExclusiveOffer from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaExclusiveOffer";
import QuickLinks from "@components/BrokerReviews/DiscountBrokerReviews/Common/QuickLinks";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import RelatedArticles from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/RelatedArticles";
import ZerodhaUsefulLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaUsefulLinks";
import ZerodhaSpecialOfferCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaSpecialOfferCard";
import ZerodhaKnowledgeLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaKnowledgeLinks";
import ZerodhaCompetitorsReview from "../Brokerage/ZerodhaCompetitorsReview";
import ZerodhaComplaintsTable from "../Complaints/ZerodhaComplaintsTable";
import ZerodhaComplaintsAtNSE from "../Complaints/ZerodhaComplaintsAtNSE";
import ZerodhaComplaintsAtBSE from "../Complaints/ZerodhaComplaintsAtBSE";
import ZerodhaComplaintsNote from "../Complaints/ZerodhaComplaintsNote";

export function Complaints() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* FAQ - 9 columns */}
        <div className="col-span-12 md:col-span-9">
          <ZerodhaComplaintsTable />
          <ZerodhaComplaintsAtNSE />
          <ZerodhaComplaintsAtBSE />
          <ZerodhaComplaintsNote />

          <ZerodhaExclusiveOffer />
          <RelatedArticles />
          {/* <FAQSection /> */}
          <ZerodhaKnowledgeLinks />
          <ZerodhaUsefulLinks />
          <ZerodhaCompetitorsReview />
          <ZerodhaSpecialOfferCard />
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-6 space-y-4">
            <QuickLinks />
            <OpenZerodhaAccount />
          </div>
        </div>
      </div>
    </div>
  );
}
