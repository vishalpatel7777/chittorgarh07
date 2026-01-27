import React from "react";
import QuickLinks from "@components/BrokerReviews/DiscountBrokerReviews/Common/QuickLinks";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import ZerodhaAccountCharges from "../Brokerage/ZerodhaAccountCharges";
import ZerodhaBrokerageCharges from "../Brokerage/ZerodhaBrokerageCharges";
import ZerodhaDematAccountCharges from "../Brokerage/ZerodhaDematAccountCharges";

import RelatedArticles from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/RelatedArticles";
import FAQSection from "@components/common/faq/FAQSection";
import ZerodhaKnowledgeLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaKnowledgeLinks";
import ZerodhaUsefulLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaUsefulLinks";
import ZerodhaExclusiveOffer from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaExclusiveOffer";

import ZerodhaSpecialOfferCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaSpecialOfferCard";
import ZerodhaTransactionCharges from "../Brokerage/ZerodhaTransactionCharges";
import ZerodhaTradingTaxes from "../Brokerage/ZerodhaTradingTaxes";
import ZerodhaCompetitorsReview from "../Brokerage/ZerodhaCompetitorsReview";

export function Brokerage() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* FAQ - 9 columns */}
        <div className="col-span-12 md:col-span-9">
          <ZerodhaAccountCharges />
          <ZerodhaBrokerageCharges />
          <ZerodhaDematAccountCharges />
          <ZerodhaTransactionCharges />
          <ZerodhaTradingTaxes />
          <ZerodhaExclusiveOffer /> 

          <RelatedArticles />
          <FAQSection />
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
