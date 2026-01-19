import React from 'react'
import { Outlet } from 'react-router-dom'
import IPOHeader from '@components/ipo/MainboardIpoInfo/currentIpos/IPOHeader'
import BseSharePriceCard from '@components/smeIpo/LearnAboutSmeIpo/BseSharePrices/BseSharePriceCard'
import FAQLayout from '@components/common/faq/FAQLayout'
import BseMiddle from '@components/smeIpo/LearnAboutSmeIpo/BseSharePrices/BseMiddle'

const BseSharePrices = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <IPOHeader/>
      <h1 className='font-semibold text-2xl mb-1'>BSE SME Share Price Live | BSE SME Stocks List</h1>
      <BseSharePriceCard />
      <BseMiddle />
    
    </section>
  )
}


export default BseSharePrices
