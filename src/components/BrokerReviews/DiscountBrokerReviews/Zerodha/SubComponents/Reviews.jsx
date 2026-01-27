import React from 'react'
// import ZerodhaInnerTabLayout from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaInnerTabLayout";
import ZerodhaOverviewSection from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaOverviewSection";
import ZerodhaExclusiveOffer from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaExclusiveOffer";
import QuickLinks from "@components/BrokerReviews/DiscountBrokerReviews/Common/QuickLinks";
import OpenZerodhaAccount from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/OpenZerodhaAccount";
import ZerodhaChargesAndFees from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaChargesAndFees";
import ZerodhaAccountOpeningAndPlatforms from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaAccountOpeningAndPlatforms ";
import ZerodhaProsConsCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaProsConsCard";
import ZerodhaMarginExposureCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaMarginExposureCard";
import ZerodhaRatings from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaRatings";
import ZerodhaComplaints from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaComplaints";
import ZerodhaPinsAndShortSelling from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaPinsAndShortSelling";
import RelatedArticles from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/RelatedArticles";
import FAQSection from '@components/common/faq/FAQSection'
import ZerodhaKnowledgeLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaKnowledgeLinks";
import ZerodhaUsefulLinks from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaUsefulLinks";
import ZerodhaBrokerComparison from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaBrokerComparison";
import ZerodhaSpecialOfferCard from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaSpecialOfferCard";



export  function Reviews() {
  return (
    <div>
       
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* FAQ - 9 columns */}
        <div className="col-span-12 md:col-span-9">
          <ZerodhaExclusiveOffer />
          <ZerodhaChargesAndFees />
          <ZerodhaAccountOpeningAndPlatforms />
          <ZerodhaProsConsCard />
          <ZerodhaMarginExposureCard />
          <ZerodhaRatings />
          <ZerodhaComplaints />
          <ZerodhaPinsAndShortSelling />
          <RelatedArticles />
          <FAQSection />
          <ZerodhaKnowledgeLinks />
          <ZerodhaUsefulLinks />
          <ZerodhaBrokerComparison />
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
