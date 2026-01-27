import React from "react";
import FAQLayout from "@components/common/faq/FAQLayout";
import NcdHeader from '@components/NCD/NcdHeader'
import ComparisonBar from "@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar";
import BestApiBrokerTableCard from '@components/BrokerReviews/BestApiBroker/BestApiBrokerTableCard'

const BestApiBroker = () => {
  return (
    <section className="px-3 mx-23 mt-4">
      <NcdHeader />
      <div className="text-xl font-bold">
      Best API Brokers in India (Automated Algo Trading Software)  </div>
      <BestApiBrokerTableCard />
      <ComparisonBar />
      <FAQLayout />
    </section>
  );
};

export default BestApiBroker;
