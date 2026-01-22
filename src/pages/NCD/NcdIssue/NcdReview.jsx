import React from 'react'
import { Outlet } from 'react-router-dom'
import FAQLayout from '@components/common/faq/FAQLayout'
import NcdReviewHeader from '@components/NCD/NcdReview/NcdReviewHeader'
import ComparisonBar from '@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar'
import NcdReviewCard from '@components/NCD/NcdReview/NcdReviewCard'
import NcdReviewTableCard from '@components/NCD/NcdReview/NcdReviewTableCard'


const NcdReview = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <NcdReviewHeader />
      <div className='text-xl font-bold'>NCD Issue Review, Analysis and Notes</div>
      <NcdReviewCard />
      <NcdReviewTableCard />
      <ComparisonBar />
      <FAQLayout />
    </section>
  )
}


export default NcdReview
