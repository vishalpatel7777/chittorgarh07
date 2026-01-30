import React from "react";
import ZerodhaExclusiveOffer from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaExclusiveOffer";
import QuickLinks from "@components/BrokerReviews/DiscountBrokerReviews/Common/QuickLinks";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import RelatedArticles from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/RelatedArticles";
import ZerodhaUsefulLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaUsefulLinks";
import ZerodhaBrokerComparison from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaBrokerComparison";
import ZerodhaSpecialOfferCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaSpecialOfferCard";
import ZerodhaKnowledgeLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaKnowledgeLinks";
import ZerodhaCompetitorsReview from "../Brokerage/ZerodhaCompetitorsReview";
import CommentsSection from '@components/common/comment/CommentsSection'
import ZerodhaBrokerageChargesCard from "../Calculator/ZerodhaBrokerageChargesCard";
import ZerodhaBrokerageDisclaimerCard from "../Calculator/ZerodhaBrokerageDisclaimerCard";

export function Calculator() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* FAQ - 9 columns */}
           <div className="col-span-12 md:col-span-9">
          <ZerodhaBrokerageChargesCard />
          
          <ZerodhaExclusiveOffer />
          <ZerodhaBrokerageDisclaimerCard />
          <RelatedArticles />
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
