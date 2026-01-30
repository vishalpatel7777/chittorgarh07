import React from "react";
import RelatedArticles from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/RelatedArticles";
import ZerodhaUsefulLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaUsefulLinks";
import ZerodhaSpecialOfferCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaSpecialOfferCard";
import ZerodhaKnowledgeLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaKnowledgeLinks";
import ZerodhaCompetitorsReview from "../Brokerage/ZerodhaCompetitorsReview";
import FAQSection from "@components/common/faq/FAQSection";


export function MutualFund() {
  return (
    <div>
       
      <RelatedArticles />
      <FAQSection />
      <ZerodhaKnowledgeLinks />
      <ZerodhaUsefulLinks />
      <ZerodhaCompetitorsReview />
      <ZerodhaSpecialOfferCard />
    </div>
  );
}
