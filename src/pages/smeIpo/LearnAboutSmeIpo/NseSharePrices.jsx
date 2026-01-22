import React from 'react'
import { Outlet } from 'react-router-dom'
import IPOHeader from '@components/ipo/MainboardIpoInfo/currentIpos/IPOHeader'
import NseSharePriceCard from '@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/NseSharePriceCard'
import FAQLayout from '@components/common/faq/FAQLayout'
import NseMiddle from '@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/NseMiddle'

const NseSharePrices = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <IPOHeader/>
      <h1 className='font-semibold text-2xl mb-1'>NSE SME Share Price Live| NSE SME Stocks List</h1>
      <NseSharePriceCard />
      <NseMiddle />
     
    </section>
  )
}


export default NseSharePrices
