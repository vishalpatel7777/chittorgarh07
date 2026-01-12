import React from 'react'
import { Outlet } from 'react-router-dom'
import IpoHeader from '@components/common/search/IpoHeader'
import IpoTimetableMainboardIpoCard from '@components/ipo/MainboardIpoInfo/IpoTimetable/IpoTimetableMainboardIpoCard'
import FAQLayout from '@components/common/faq/FAQLayout'

const IpoTimetable = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <IpoHeader/>
      <IpoTimetableMainboardIpoCard />
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
      <FAQLayout />
    </section>
  )
}


export default IpoTimetable;
