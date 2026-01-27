import React from "react";
import FAQLayout from "@components/common/faq/FAQLayout";
import NcdHeader from '@components/NCD/NcdHeader'
import ComparisonBar from "@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar";
import BestBrokerforBeginnersCard from '@components/BrokerReviews/BestBrokerforBeginners/BestBrokerforBeginnersCard'
import BestBrokerforBeginnersTableCard from '@components/BrokerReviews/BestBrokerforBeginners/BestBrokerforBeginnersTableCard'

const BestBrokerforBeginners = () => {
  return (
    <section className="px-3 mx-23 mt-4">
      <NcdHeader />
      <div className="text-xl font-bold">
        Best Stock Broker for Beginners in India 2026
      </div>
      <BestBrokerforBeginnersCard />
     <BestBrokerforBeginnersTableCard />
      <ComparisonBar />
      <FAQLayout />
    </section>
  );
};

export default BestBrokerforBeginners;
