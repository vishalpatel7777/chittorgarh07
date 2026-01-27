// src/components/IpoReportList.jsx
import React from "react";
import MoreReportsTableCard from '../MoreReportsTableCard'
import MoreReportsData from '@data/BrokerReviews/MoreReportsData'

export  function OtherReportList() {
  return (
 <div className="mb-4 overflow-hidden px-2 py-2 ">
      

      {/* Table */}
      <MoreReportsTableCard
        title="Reports related to IPOs in India"
        data={MoreReportsData}
      />


    </div>
  )
}





