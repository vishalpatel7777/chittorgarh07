import React from "react";
import ZerodhaExclusiveOffer from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaExclusiveOffer";
import QuickLinks from "@components/BrokerReviews/DiscountBrokerReviews/Common/QuickLinks";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import RelatedArticles from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/RelatedArticles";
import ZerodhaUsefulLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaUsefulLinks";
import ZerodhaSpecialOfferCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaSpecialOfferCard";
import ZerodhaKnowledgeLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaKnowledgeLinks";
import ZerodhaCompetitorsReview from "../Brokerage/ZerodhaCompetitorsReview";
import FAQSection from "@components/common/faq/FAQSection";
import ZerodhaApiBriefIntroduction from "../ZerodhaApi/ZerodhaApiBriefIntroduction";
import ZerodhaApiDetails from "../ZerodhaApi/ZerodhaApiDetails";
import ZerodhaApiBrokerageCharge from "../ZerodhaApi/ZerodhaApiBrokerageCharge";
import ZerodhaApiRateLimit from "../ZerodhaApi/ZerodhaApiRateLimit";
import ZerodhaApiKey from "../ZerodhaApi/ZerodhaApiKey";
import ZerodhaApiTypesOffered from "../ZerodhaApi/ZerodhaApiTypesOffered";
import ZerodhaApiConclusion from "../ZerodhaApi/ZerodhaApiConclusion";

export function Api() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* FAQ - 9 columns */}
        <div className="col-span-12 md:col-span-9">
          <ZerodhaApiBriefIntroduction />
          <ZerodhaApiDetails />
          <ZerodhaApiBrokerageCharge />
          <ZerodhaApiRateLimit />
          <ZerodhaApiKey />
          <ZerodhaApiTypesOffered />
          <ZerodhaApiConclusion />

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
      <ZerodhaExclusiveOffer />
    </div>
  );
}
