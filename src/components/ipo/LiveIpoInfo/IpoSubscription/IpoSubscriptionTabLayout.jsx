import { NavLink, Outlet } from "react-router-dom";
import IpoSubscripitionHeader
  from "@components/ipo/LiveIpoInfo/IpoSubscription/IpoSubscripitionHeader";

const tabs = [
  { label: "Mainboard IPOs", path: "" },
  { label: "SME IPOs", path: "sme" },
];

const IpoSubscriptionTabLayout = () => {
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
              end={tab.path === ""}
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
        <IpoSubscripitionHeader />
      </div>

      {/* Active tab content */}
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default IpoSubscriptionTabLayout;
