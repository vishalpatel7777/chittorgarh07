import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ipoReportsTabs } from "@data/ipo/LearnAboutIpos/ipoReportsTabs";

const IpoReportsTabLayout = () => {
  

  return (
    <>
      
      {/* Tabs */}
      <nav className="flex gap-2 border-b border-[#22222f1a]">
        {ipoReportsTabs.map(tab => (
          <NavLink
            key={tab.label}
            to={tab.path}
            end={tab.path === ""}
            className={({ isActive }) =>
              `
              px-3 py-2 text-sm font-semibold
              ${
                isActive
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }
              `
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>

      {/* Routed content */}
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default IpoReportsTabLayout;
