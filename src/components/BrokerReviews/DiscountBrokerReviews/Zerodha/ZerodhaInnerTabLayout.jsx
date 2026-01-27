import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { label: "Review", path: "" },
  { label: "Brokerage", path: "brokerage" },
  { label: "Mobile App", path: "mobile-app" },
  { label: "Account Opening", path: "account-opening" },
  { label: "Calculator", path: "calculator" },
  { label: "Demat", path: "demat" },
  { label: "IPO", path: "ipo" },
  { label: "Branches", path: "branches" },
  { label: "Trading Software", path: "trading-software" },
  { label: "NRI Account", path: "nri-account" },
  { label: "Mutual Fund", path: "mutual-fund" },
  { label: "Is It Safe?", path: "is-safe" },
  { label: "API", path: "api" },
  { label: "Complaints", path: "complaints" },
  { label: "FAQ's", path: "faqs" },
];

const ZerodhaInnerTabLayout = () => {
  return (
    <>
      {/* Tabs */}
      <nav className="mb-2 flex flex-wrap gap-2">
        {tabs.map(tab => (
          <NavLink
            key={tab.label}
            to={tab.path}
            end={tab.path === ""}
            className={({ isActive }) =>
              `
                px-2
                sm:px-4
                py-2
                text-sm
                whitespace-nowrap
                rounded
                ${
                  isActive
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>

      {/* Swappable content */}
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default ZerodhaInnerTabLayout;
