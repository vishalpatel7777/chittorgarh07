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
import ZerodhaNriAccountCharges from "../NriAccount/ZerodhaNriAccountCharges";
import ZerodhaNriAccountTradingSoftwareReview from "../NriAccount/ZerodhaNriAccountTradingSoftwareReview";
import ZerodhaNriAccountOpeningProcess from "../NriAccount/ZerodhaNriAccountOpeningProcess";
import ZerodhaNriMutualFund from "../NriAccount/ZerodhaNriMutualFund";
import ZerodhaNriCustomerCare from "../NriAccount/ZerodhaNriCustomerCare";
import ZerodhaNriTradingAccountAdvantages from "../NriAccount/ZerodhaNriTradingAccountAdvantages";
import ZerodhaNriTradingAccountDisadvantages from "../NriAccount/ZerodhaNriTradingAccountDisadvantages";
import ZerodhaNriConclusion from "../NriAccount/ZerodhaNriConclusion";


export  function NriAccount() {
  return (
     <div>
      <ZerodhaNriAccountCharges />
      <ZerodhaNriAccountTradingSoftwareReview />
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* FAQ - 9 columns */}
        <div className="col-span-12 md:col-span-9">
          <ZerodhaNriAccountOpeningProcess />
          <ZerodhaNriMutualFund />
          <ZerodhaNriCustomerCare />
          <ZerodhaNriTradingAccountAdvantages />
          <ZerodhaNriTradingAccountDisadvantages />
          <ZerodhaNriConclusion />
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
  )
}
