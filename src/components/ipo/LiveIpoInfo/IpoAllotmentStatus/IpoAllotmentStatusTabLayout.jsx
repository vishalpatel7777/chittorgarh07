import { NavLink, Outlet } from "react-router-dom";
import IpoAllotmentStatusHeader  from './IpoAllotmentStatusHeader'

import IpoAllotmentStatusMainboardCard from './IpoAllotmentStatusMainboardCard'
  
const tabs = [
  { label: "Mainboard IPOs", path: "", exact: true },
  { label: "SME IPOs", path: "sme" },
  { label: "IPO Dashboard", path: "/ipos", exact: true },
];


const IpoAllotmentStatusTabLayout = () => {
  return (
    <>
      {/* Top row: Tabs (left) + Search (right) */}
      <div className="flex items-center justify-between pb-2">
        {/* Tabs */}
       <nav className="flex gap-4">
  {tabs.map((tab) => (
    <NavLink
      key={tab.label}
      to={tab.path}
      end={tab.exact}   // 🔥 decisive line
      className={({ isActive }) =>
        `
        text-sm font-semibold pb-2
        ${
          isActive
            ? "text-green-600 border-b-2 border-green-600"
            : "text-gray-600 hover:text-green-600"
        }
      `
      }
    >
      {tab.label}
    </NavLink>
  ))}
</nav>



        {/* Search button */}
        < IpoAllotmentStatusHeader />
      </div>

          <h1 className="font-semibold text-2xl">IPO Allotment Status - Check Date, Process and Calculation</h1>
      {/* Active tab content */}
      <div className="mt-4">
        <IpoAllotmentStatusMainboardCard />
        <Outlet />
      </div>
    </>
  );
};

export default IpoAllotmentStatusTabLayout;
