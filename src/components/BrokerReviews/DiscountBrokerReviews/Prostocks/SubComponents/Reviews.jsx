import React from "react";
import ProStocksCard from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/ProStocksCard";
import QuickLinks from "@components/BrokerReviews/DiscountBrokerReviews/Common/QuickLinks";
import RelatedArticles from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/RelatedArticles";
import ReadMoreAboutProstocks from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/ReadMoreAboutProstocks";
import UsefulLinksProstocks from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/UsefulLinksProstocks";
import CompareProstocksWithBrokers from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/CompareProstocksWithBrokers";
import ProStocksSpecialOffer from "@components/BrokerReviews/DiscountBrokerReviews/Prostocks/Common/ProStocksSpecialOffer";
import ProstocksSpecialOfferCard from "../Reviews/ProstocksSpecialOfferCard";
import ProstocksCharges2026 from "../Reviews/ProstocksCharges2026";
import ProstocksAccountOpeningAndSoftware from "../Reviews/ProstocksAccountOpeningAndSoftware";
import ProstocksProsAndCons from "../Reviews/ProstocksProsAndCons";
import ProstocksRatings from "../Reviews/ProstocksRatings";
import ProstocksComplaints from "../Reviews/ProstocksComplaints";
import ProstocksMembershipInfo from "../Reviews/ProstocksMembershipInfo";

export function Reviews() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* FAQ - 9 columns */}
        <div className="col-span-12 md:col-span-9">
          <ProstocksSpecialOfferCard />
          <ProstocksCharges2026 />
          <ProstocksAccountOpeningAndSoftware />
          <ProstocksProsAndCons />
          <ProstocksRatings />
          <ProstocksComplaints />
          <ProstocksMembershipInfo />

          <RelatedArticles />
          <ReadMoreAboutProstocks />
          <UsefulLinksProstocks />
          <CompareProstocksWithBrokers />
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
  );
}
