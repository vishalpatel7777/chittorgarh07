import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { label: "Mainboard IPOs", path: "" },
  { label: "SME IPOs", path: "sme" },
];

const IpoSubscriptionTabLayout = () => {
  return (
    <>
      {/* Tabs */}
      <nav className="flex gap-2 border-b border-[#4040521a]">
        {tabs.map((tab) => (
          <NavLink
            key={tab.label}
            to={tab.path}
            end={tab.path === ""}
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium ${
                isActive
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600"
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>

      {/* Tab content */}
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default IpoSubscriptionTabLayout;
