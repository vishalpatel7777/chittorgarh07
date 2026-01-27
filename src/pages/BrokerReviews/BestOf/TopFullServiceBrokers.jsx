import React from "react";
import { Outlet } from "react-router-dom";
import FAQLayout from "@components/common/faq/FAQLayout";
import BrokerHeader from "@components/BrokerReviews/BrokerHeader";
import ComparisonBar from "@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar";
import TopFullServiceBrokersCard from "@components/BrokerReviews/TopFullServiceBrokers/TopFullServiceBrokersCard";
import TopFullServiceBrokersTableCard from "@components/BrokerReviews/TopFullServiceBrokers/TopFullServiceBrokersTableCard";
import { TopFullServiceBrokersData } from '@data/BrokerReviews/TopFullServiceBrokersData'

const TopFullServiceBrokers = () => {
  return (
    <section className="px-3 mx-23 mt-4">
      <BrokerHeader />
      <div className="text-xl font-bold">
        Top 10 Full-Service Brokers in India 2026
      </div>
      <TopFullServiceBrokersCard />
      <TopFullServiceBrokersTableCard
        title="Top 10 Full-service Brokers 2026"
        years={TopFullServiceBrokersData.years}
        rows={TopFullServiceBrokersData.rows}
      />
      ;
      <ComparisonBar />
      <FAQLayout />
    </section>
  );
};

export default TopFullServiceBrokers;
