import React from 'react'
import { Outlet } from 'react-router-dom'
import FAQLayout from '@components/common/faq/FAQLayout'
import NcdHeader from '@components/NCD/NcdHeader'
import ComparisonBar from '@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar'
import CurrentBuybackCard from '@components/NCD/Buyback/CurrentBuyback/CurrentBuybackCard'
import CurrentBuybackTableCard from '@components/NCD/Buyback/CurrentBuyback/CurrentBuybackTableCard'



const CurrentBuyback = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <NcdHeader />
      <div className='text-xl font-bold'>Buyback Offer List : 2026</div>
      <CurrentBuybackCard />
      <CurrentBuybackTableCard />
      <ComparisonBar />
      <FAQLayout />
    </section>
  )
}


export default CurrentBuyback
