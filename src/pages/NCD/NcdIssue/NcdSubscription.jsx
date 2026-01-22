import React from 'react'
import { Outlet } from 'react-router-dom'
import FAQLayout from '@components/common/faq/FAQLayout'
import NcdReviewHeader from '@components/NCD/NcdReview/NcdReviewHeader'
import ComparisonBar from '@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar'
import NcdSubscriptionCard from '@components/NCD/NcdSubscription/NcdSubscriptionCard'
import NcdSubscriptionTableCard from '@components/NCD/NcdSubscription/NcdSubscriptionTableCard'


const NcdSubscription = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <NcdReviewHeader />
      <div className='text-xl font-bold'>NCD Subscription Status - Live from BSE and NSE 2026</div>
      <NcdSubscriptionCard />
      <NcdSubscriptionTableCard />
      <ComparisonBar />
      <FAQLayout />
    </section>
  )
}


export default NcdSubscription
