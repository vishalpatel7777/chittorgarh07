import React from 'react'
import { Outlet } from 'react-router-dom'
import IPOHeader from '@components/ipo/MainboardIpoInfo/currentIpos/IPOHeader'
import MainboardIpoCard from '@components/ipo/MainboardIpoInfo/currentIpos/MainboardIpoCard'
import FAQLayout from '@components/common/faq/FAQLayout'

const CurrentIpos = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <IPOHeader/>
      <MainboardIpoCard />
      {/* space for the last component  */}
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


export default CurrentIpos
