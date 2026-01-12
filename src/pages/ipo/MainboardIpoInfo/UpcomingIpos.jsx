import React from 'react'
import { Outlet } from 'react-router-dom'
import UpcomingIpoHeader from '@components/ipo/MainboardIpoInfo/UpcomingIpos/UpcomingIpoHeader'
import UpcomingMainboardIpoCard from '@components/ipo/MainboardIpoInfo/UpcomingIpos/UpcomingMainboardIpoCard'
import FAQLayout from '@components/common/faq/FAQLayout'

const UpcomingIpos = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <UpcomingIpoHeader/>
      <UpcomingMainboardIpoCard />
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


export default UpcomingIpos;
