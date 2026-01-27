import React from "react";
import { Outlet } from "react-router-dom";
import FAQLayout from "@components/common/faq/FAQLayout";
import NcdHeader from '@components/NCD/NcdHeader'
import ComparisonBar from "@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar";
import LifetimeFreeDematAcctCard from '@components/BrokerReviews/LifetimeFreeDematAcct/LifetimeFreeDematAcctCard'
import LifetimeFreeDematAcctTableCard from '@components/BrokerReviews/LifetimeFreeDematAcct/LifetimeFreeDematAcctTableCard'
import { LifetimeFreeDematAcctData } from "@/data/BrokerReviews/LifetimeFreeDematAcctData";


const LifetimeFreeDematAcct = () => {
  return (
    <section className="px-3 mx-23 mt-4">
      <NcdHeader />
      <div className="text-xl font-bold">
        Lifetime Free Demat Account (AMC Free)
      </div>
      <LifetimeFreeDematAcctCard />
     <LifetimeFreeDematAcctTableCard
  title={LifetimeFreeDematAcctData.title}
  rows={LifetimeFreeDematAcctData.rows}
/>;
      <ComparisonBar />
      <FAQLayout />
    </section>
  );
};

export default LifetimeFreeDematAcct;
