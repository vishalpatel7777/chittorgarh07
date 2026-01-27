import React from 'react'
import { Outlet } from 'react-router-dom'
import FAQLayout from '@components/common/faq/FAQLayout'
import BrokerHeader from '@components/BrokerReviews/BrokerHeader'
import ComparisonBar from '@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar'
import TopDiscountBrokersCard from '@components/BrokerReviews/TopDiscountBrokers/TopDiscountBrokersCard'
import TopDiscountBrokersTableCard from '@components/BrokerReviews/TopDiscountBrokers/TopDiscountBrokersTableCard'


const TopDiscountBrokers = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <BrokerHeader />
      <div className='text-xl font-bold'>Top 10 Discount Stock Brokers in India 2026</div>
      <TopDiscountBrokersCard />
      <TopDiscountBrokersTableCard />
      <ComparisonBar />
      <FAQLayout />
    </section>
  )
}


export default TopDiscountBrokers
