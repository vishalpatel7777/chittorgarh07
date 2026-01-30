import React from "react";
import ProStocksCard from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/ProStocksCard";
import QuickLinks from "@components/BrokerReviews/DiscountBrokerReviews/Common/QuickLinks";
import RelatedArticles from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/RelatedArticles";
import ReadMoreAboutProstocks from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/ReadMoreAboutProstocks";
import UsefulLinksProstocks from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/UsefulLinksProstocks";
import ProStocksSpecialOffer from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/ProStocksSpecialOffer";
import ProstocksSpecialOfferCard from "../Reviews/ProstocksSpecialOfferCard";
import ProstocksCompetitors from '../Common/ProstocksCompetitors'
import ProstocksAccountChargesIntro from "../Brokerage/ProstocksAccountChargesIntro";
import ProstocksAccountOpenCharges from "../Brokerage/ProstocksAccountOpenCharges";
import ProstocksBrokerageCharges2026 from "../Brokerage/ProstocksBrokerageCharges2026";
import ProstocksDematCharges2026 from "../Brokerage/ProstocksDematCharges2026";
import ProstocksTransactionCharges2025 from "../Brokerage/ProstocksTransactionCharges2025";
import ProstocksTradingTaxes from "../Brokerage/ProstocksTradingTaxes";

export  function Brokerage() {
  return (
     <div>
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* FAQ - 9 columns */}
        <div className="col-span-12 md:col-span-9">
          <ProstocksAccountChargesIntro />
          <ProstocksAccountOpenCharges />
          <ProstocksBrokerageCharges2026 />
          <ProstocksDematCharges2026 />
          <ProstocksTransactionCharges2025 />
          <ProstocksTradingTaxes />
          <ProstocksSpecialOfferCard />
          <RelatedArticles />
          <ReadMoreAboutProstocks />
          <UsefulLinksProstocks />
          <ProstocksCompetitors />
          <ProStocksSpecialOffer />
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-6 space-y-4">
            <QuickLinks />
            <ProStocksCard />
          </div>
        </div>
      </div>
    </div>
  )
}
