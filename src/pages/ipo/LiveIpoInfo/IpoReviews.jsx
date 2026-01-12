import React from 'react'
import { Outlet } from 'react-router-dom'
import IpoHeader from '@components/common/search/IpoHeader'
import IpoReviewsMainboardCard from '@components/ipo/LiveIpoInfo/IpoReviews/IpoReviewsMainboardCard'
import CommentsSection from '@components/common/comment/CommentsSection'
import ViewAllIpos from '@components/common/currentIpos/ViewAllIpos'
import FAQAdCard from '@components/common/faq/FAQAdCard'


const IpoTimetable = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <IpoHeader/>
      <h1 className='font-semibold text-2xl'>SME IPOs Reviews 2026, IPO Analysis and Notes</h1>
      <IpoReviewsMainboardCard />
      {/* sub component  */}
       <div  className="
          bg-white
          rounded-[0.7rem]
          shadow-sm
          px-2 md:px-4
          py-2
          mb-4
          overflow-hidden
        "><Outlet /></div>
        
      <div className="grid grid-cols-12 gap-4 mt-6">
            {/* FAQ - 9 columns */}
            <div className="col-span-12 md:col-span-9">
              {/* <FAQSection /> */}
              <CommentsSection /> 
              <ViewAllIpos />
            </div>
      
            {/* Ads - 3 columns */}
            <div className="col-span-12 md:col-span-3">
              <FAQAdCard />
            </div>
          </div>
    </section>
  )
}


export default IpoTimetable;
