import React from 'react'
import { Outlet } from 'react-router-dom'
import IPOHeader from '@components/ipo/MainboardIpoInfo/currentIpos/IPOHeader'
import IpoListingMainboardCard from '@components/ipo/LiveIpoInfo/IpoListing/IpoListingMainboardCard'
import FAQLayout from '@components/common/faq/FAQLayout'

const IposListing = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <IPOHeader/>
      <h1 className='font-semibold text-2xl mb-1'>Mainboard IPOs Listings: 2026</h1>
      <IpoListingMainboardCard />
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
        
        <div className="mt-6 text-sm text-gray-700 leading-relaxed space-y-4">
      <p>
        <a
          href="https://www.chittorgarh.com/book-chapter/ipo-listing/27/#ipo-listing-date"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
          title="Listing Date Description"
        >
          IPO listing date
        </a>{" "}
        is the date of new IPO listing in NSE and BSE (IPOs). This is the day
        when IPO shares start trading on the stock exchanges. The{" "}
        <strong>IPO listing price calculation</strong> is based on the demand
        and supply of the company shares. It is difficult to predict the IPO
        listing price.
      </p>

      <p>
        Stock exchanges in India publish{" "}
        <strong>IPO listing status</strong> through a listing notice. It
        includes the date and other information about the listing of IPO
        shares.
      </p>

      <p className="font-semibold">
        IPO Listing Time BSE and NSE
      </p>

      <ul className="list-disc pl-6 space-y-1">
        <li>
          9:00 AM to 9:45 AM –{" "}
          <strong>Pre-open Trading Session</strong>
        </li>
        <li>
          9:45 AM to 10:00 AM –{" "}
          <strong>Price Discovery</strong>
        </li>
        <li>
          10:00 AM Onwards –{" "}
          <strong>Normal Trading</strong>
        </li>
      </ul>

      <p>
        Exchanges have a <strong>pre-open trading session</strong> for IPO
        shares on their listing day. During this session, the orders can be
        entered, modified and canceled. No orders get executed at this time.
        For 15 minutes after the pre-open trading session, the{" "}
        <strong>IPO listing price</strong> is discovered and pre-open orders
        get executed. The normal trading is commenced just after that.
      </p>
    </div>
        </div>
      <FAQLayout />
    </section>
  )
}


export default IposListing
