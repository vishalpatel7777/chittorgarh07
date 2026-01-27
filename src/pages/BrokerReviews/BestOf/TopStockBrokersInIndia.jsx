import React from 'react'
import { Outlet } from 'react-router-dom'
import FAQLayout from '@components/common/faq/FAQLayout'
import BrokerHeader from '@components/BrokerReviews/BrokerHeader'
import ComparisonBar from '@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar'
import TopStockBrokersInIndiaCard from '@components/BrokerReviews/TopStockBrokersInIndia/TopStockBrokersInIndiaCard'
import TopStockBrokersInIndiaTableCard from '@components/BrokerReviews/TopStockBrokersInIndia/TopStockBrokersInIndiaTableCard'


const TopStockBrokersInIndia = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <BrokerHeader />
      <div className='text-xl font-bold'>Top 20 Share Brokers in India 2026</div>
      <TopStockBrokersInIndiaCard />
      <TopStockBrokersInIndiaTableCard />
      <ComparisonBar />
      <FAQLayout />
    </section>
  )
}


export default TopStockBrokersInIndia
