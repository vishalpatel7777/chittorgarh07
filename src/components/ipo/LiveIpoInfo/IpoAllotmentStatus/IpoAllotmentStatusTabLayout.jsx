import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

import IpoAllotmentStatusHeader from "./IpoAllotmentStatusHeader";
import IpoAllotmentStatusMainboardCard from "./IpoAllotmentStatusMainboardCard";

const tabs = [
  { label: "IPO Dashboard", path: "__dashboard__" }, // virtual path
  { label: "Mainboard IPO Allotment Status List", path: "", exact: true },
  { label: "SME IPO Allotment Status List", path: "sme" },
];

const IpoAllotmentStatusTabLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDashboardClick = (e) => {
    e.preventDefault();

    // Decide destination based on current section
    if (location.pathname.startsWith("/sme-ipos")) {
      navigate("/sme-ipos/smedashboard");
    } else {
      navigate("/ipos/dashboard");
    }
  };

  return (
    <>
      {/* Tabs + Search */}
      <div className="flex items-center justify-between pb-2">
        <nav className="flex gap-4">
          {tabs.map((tab) => {
            // Special case: IPO Dashboard tab
            if (tab.label === "IPO Dashboard") {
              return (
                <a
                  key={tab.label}
                  href="#"
                  onClick={handleDashboardClick}
                  className="text-sm font-semibold pb-2 text-gray-600 hover:text-green-600"
                >
                  {tab.label}
                </a>
              );
            }

            // Normal tabs
            return (
              <NavLink
                key={tab.label}
                to={tab.path}
                end={tab.exact}
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
            );
          })}
        </nav>

        <IpoAllotmentStatusHeader />
      </div>

      <h1 className="font-semibold text-2xl">
        IPO Allotment Status – Check Date, Process and Calculation
      </h1>

      <div className="mt-4">
        <IpoAllotmentStatusMainboardCard />
        <Outlet />
      </div>
    </>
  );
};

export default IpoAllotmentStatusTabLayout;
