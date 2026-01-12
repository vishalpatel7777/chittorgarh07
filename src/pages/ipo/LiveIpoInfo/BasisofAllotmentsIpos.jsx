import React from 'react'
import { Outlet } from 'react-router-dom'
import IPOHeader from '@components/ipo/MainboardIpoInfo/currentIpos/IPOHeader'
import BasisofAllotmentsIposMainboardCard from  '@components/ipo/LiveIpoInfo/BasisofAllotmentsIpos/BasisofAllotmentsIposMainboardCard'
import FAQLayout from '@components/common/faq/FAQLayout'

const BasisofAllotmentsIpos = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <IPOHeader/>
      <h1 className='font-semibold text-2xl mb-1'>Basis of Allotments - IPOs: 2026</h1>
      <BasisofAllotmentsIposMainboardCard />
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
        
        <section className="w-full mt-4">
      <div>
        <p className="font-semibold mb-3">
          Not getting an IPO allotment can happen for several reasons. Here are
          the most common ones:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Oversubscription in the Retail Category:</strong> If the
            number of retail applicants is higher than the available number of
            lots, allotment is done via a lottery system. You may not be selected
            in the random draw.
          </li>

          <li>
            <strong>Application not in valid lot size:</strong> Applications must
            be in minimum lot sizes (e.g. 1 lot of 30 shares). Applications with
            invalid lot size could be rejected.
          </li>

          <li>
            <strong>Multiple applications on the same PAN:</strong> Only one
            application per PAN is allowed in the retail category. Multiple
            applications with the same PAN (even through different broker
            accounts) will result in rejection.
          </li>

          <li>
            <strong>Payment failure or UPI issues:</strong> If the UPI mandate was
            not approved, payment failed, or funds were not blocked in time, the
            application will be rejected.
          </li>

          <li>
            <strong>Incorrect details in application:</strong> Wrong PAN, Demat
            account number, or bank details can result in rejection.
          </li>

          <li>
            <strong>Rejection at registrar level:</strong> Issues like incorrect
            Demat account number or a minor account without parent PAN can lead
            to rejection.
          </li>
        </ul>
      </div>
    </section>
        </div>
      <FAQLayout />
    </section>
  )
}


export default BasisofAllotmentsIpos;


