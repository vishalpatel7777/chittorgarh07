import React from 'react'
import { Outlet } from 'react-router-dom'

const IpoPerformance = () => {
  return (
    <section className='px-3 mx-23 mt-4'>
      <div className='font-semibold text-xl'>Mainboard IPO Performance 2026 (IPO History by Year)</div>
      {/* sub component  */}
       <div  className="
          bg-white
          rounded-[0.7rem]
          shadow-sm
          px-2 md:px-4
          py-2
          mb-4
          overflow-hidden
        "><Outlet />
        </div>
      
    </section>
  )
}


export default IpoPerformance;
