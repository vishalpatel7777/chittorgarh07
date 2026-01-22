import React from 'react'
import FAQLayout from '@components/common/faq/FAQLayout'
import NcdHeader from '@components/NCD/NcdHeader'
import ComparisonBar from '@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar'
import CurrentOfsCard from '@components/NCD/OfferForSale/CurrentOfsCard'
import CurrentOfsTableCard from '@components/NCD/OfferForSale/CurrentOfsTableCard'
import { currentOfsData } from '@data/NCD/CurrentOfsData'

const CurrentOfs = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <NcdHeader />
      <div className='text-xl font-bold'>Offer For Sale 2026</div>
      <CurrentOfsCard />
        <CurrentOfsTableCard data={currentOfsData} />
      <ComparisonBar />
      <FAQLayout />
    </section>
  )
}


export default CurrentOfs
