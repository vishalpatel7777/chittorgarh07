import React from 'react'
import { Outlet } from 'react-router-dom'
import IPOHeader from '@components/ipo/MainboardIpoInfo/currentIpos/IPOHeader'
import IpoAnchorInvestorsMainboardCard from   '@components/ipo/IpoPerformanceReports/IpoAnchorInvestors/IpoAnchorInvestorsMainboardCard'
import FAQLayout from '@components/common/faq/FAQLayout'

const IpoAnchorInvestors = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <IPOHeader/>
      <h1 className='font-semibold text-2xl mb-1'>Mainboard IPOs - Anchor Investor-wise investments</h1>
      <IpoAnchorInvestorsMainboardCard />
      {/* space for the last component  */}
       <div  className="
          bg-white
          rounded-[0.7rem]
          shadow-sm
          px-2 md:px-4
          py-2
          mb-4
          overflow-hidden
        "><Outlet />
        
         <div className="w-full mt-4">
      <div >
        <p className="font-semibold text-gray-800 mb-2">
          Notes:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-7">
          <li>
            <strong>No. of IPOs :</strong>{" "}
            <span className="font-normal">
              Number of IPOs in which the anchor investor has invested.
            </span>
          </li>

          <li>
            <strong>Total Investment :</strong>{" "}
            <span className="font-normal">
              Aggregate amount invested by the anchor investor across all IPOs
              in which it participated.
            </span>
          </li>

          <li>
            <strong>Total Issue Amount of IPOs (in which Invested) :</strong>{" "}
            <span className="font-normal">
              Total issue amount of the issues in which the anchor investor
              participated.
            </span>
          </li>

          <li>
            <strong>Average Issue Amount of IPOs (in which Invested) :</strong>{" "}
            <span className="font-normal">
              Average issue amount of the issues in which the anchor investor
              participated.
            </span>
          </li>

          <li>
            <strong>Average P/E of IPOs :</strong>{" "}
            <span className="font-normal">
              Total of Price to Earnings ratio (P/E) of the issues (at the time
              of issue) divided by number of issues in which the anchor investor
              participated.
            </span>
          </li>

          <li>
            <strong>Average Listing gain (%) :</strong>{" "}
            <span className="font-normal">
              Total of percentage of listing gain or loss of the issues divided
              by number of issues in which the anchor investor participated.
            </span>
          </li>

          <li>
            <strong>Average Current gains / Loss (%) :</strong>{" "}
            <span className="font-normal">
              Total of percentage of gain or loss of the issues on current
              market price divided by number of issues in which the anchor
              investor participated.
            </span>
          </li>

          <li>
            <strong>Average Subscription (x) :</strong>{" "}
            <span className="font-normal">
              Total times subscription of the issues divided by number of
              issues in which the anchor investor participated.
            </span>
          </li>
        </ul>
      </div>
    </div>
        </div>
      <FAQLayout />
    </section>
  )
}


export default IpoAnchorInvestors;


