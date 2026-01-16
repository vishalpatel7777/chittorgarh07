import React from 'react'
import CommentsSection from '@components/common/comment/CommentsSection'
import ViewAllIpos from '@components/common/currentIpos/ViewAllIpos'
import FAQAdCard from '@components/common/faq/FAQAdCard'


import { Outlet, useLocation } from "react-router-dom";
import { IpoArticlesTabs } from "@data/ipo/LearnAboutIpos/IpoArticlesTabs";

const IpoArticles = () => {

  const location = useLocation();

  // Determine active tab safely
  const activeTab =
    IpoArticlesTabs.find(tab =>
      tab.path === ""
        ? location.pathname.endsWith("/ipos/articles")
        : location.pathname.includes(tab.path)
    ) || IpoArticlesTabs[0];

  return (
    <section className='px-3 mx-23 mt-4'>
      {/* <IpoHeader/> */}
    
      {/* sub component  */}
       <div  className="
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


export default IpoArticles;
