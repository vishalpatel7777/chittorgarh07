import React from 'react'
import FAQAdCard from '@components/common/faq/FAQAdCard'
import CommentsSection from '@components/common/comment/CommentsSection'
import ViewAllIpos from '@components/common/currentIpos/ViewAllIpos'
import IPOHeader from '@components/ipo/MainboardIpoInfo/currentIpos/IPOHeader'

import RightsIssueSubscriptionCard from '@components/NCD/RightsIssue/RightsIssueSubscription/RightsIssueSubscriptionCard'



const RightsIssueSubscription = () => {
  return (
    <section className="px-3 mx-23 mt-4">

        <IPOHeader />
        <h1 className='text-xl font-bold'>Live Rights Issue Subscription Status : 2026</h1>
        <RightsIssueSubscriptionCard />
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

export default RightsIssueSubscription;
