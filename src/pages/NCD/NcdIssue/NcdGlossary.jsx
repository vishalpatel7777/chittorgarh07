import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NcdGlossaryCard from '@components/NCD/NcdGlossary/NcdGlossaryCard'
import FAQAdCard from '@components/common/faq/FAQAdCard'
import CommentsSection from '@components/common/comment/CommentsSection'
import ViewAllIpos from '@components/common/currentIpos/ViewAllIpos'
const NcdGlossary = () => {
  return (
    <section className="px-3 mx-23 mt-4">
      
      {/* Redirect Link Section */}
      <div className="mb-4">
        <Link
          to="https://www.chittorgarh.com/report/report-list/116/51/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
         Other Reports 
        </Link>
      </div>
        <h1 className='text-xl font-bold'>IPO Glossary - Definitions, Abbreviations, Terminology and Meaning</h1>
      <NcdGlossaryCard />

      <div className=' bg-white
          rounded-[0.7rem]
          shadow-sm
          px-2 md:px-4
          py-2
          mb-4
          overflow-hidden
       '>
        <Outlet />
      </div>

      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* Main Content */}
        <div className="col-span-12 md:col-span-9">
          <CommentsSection />
          <ViewAllIpos />
        </div>

        {/* Ads */}
        <div className="col-span-12 md:col-span-3">
          <FAQAdCard />
        </div>
      </div>
    </section>
  )
}

export default NcdGlossary
