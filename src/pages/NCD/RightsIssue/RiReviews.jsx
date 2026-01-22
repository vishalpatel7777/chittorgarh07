import React from 'react'
// import { Outlet } from 'react-router-dom'
import FAQLayout from '@components/common/faq/FAQLayout'
import NcdHeader from '@components/NCD/NcdHeader'
import ComparisonBar from '@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar'
import RiReviewsCard from '@components/NCD/RightsIssue/RiReviews/RiReviewsCard'
import RiReviewsTableCard from '@components/NCD/RightsIssue/RiReviews/RiReviewsTableCard'
import RiReviewData from '@data/NCD/RiReviewData';



const RiReviews = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <NcdHeader />
      <div className='text-xl font-bold'>Rights Issue Review, Analysis and Notes</div>
      <RiReviewsCard />
     <RiReviewsTableCard data={RiReviewData} />
      <ComparisonBar />
      <FAQLayout />
    </section>
  )
}


export default RiReviews
