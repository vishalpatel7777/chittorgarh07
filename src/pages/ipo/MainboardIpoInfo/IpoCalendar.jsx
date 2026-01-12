import React from 'react'
import { Outlet } from 'react-router-dom'
import IpoHeader from '@components/common/search/IpoHeader'
import CommentsSection from '@components/common/comment/CommentsSection'

const IpoCalendar = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <IpoHeader/>
      <div className='font-semibold text-xl'>IPO Calendar India (Mainboard IPO in January 2026)</div>
      {/* sub component  */}
       <div  className="
          bg-white
          rounded-[0.7rem]
          shadow-sm
          px-2 md:px-4
          py-2
          mb-4
          overflow-hidden
        "><Outlet />
        <CommentsSection />
        </div>
      
    </section>
  )
}


export default IpoCalendar;
