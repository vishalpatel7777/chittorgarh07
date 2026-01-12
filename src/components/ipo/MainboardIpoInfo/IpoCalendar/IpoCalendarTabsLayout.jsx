import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { label: "IPO Calendar", path: "" },
  { label: "SME IPO Calendar", path: "sme" },
];


const IpoCalendarTabsLayout = () => {
  return (
    <>
      {/* Tabs */}
      <nav className="flex gap-2 border-b border-[#22222f1a] ">
        {tabs.map(tab => (
          <NavLink
            key={tab.label}
            to={tab.path}
            end={tab.path === ""}
            className={({ isActive }) =>
              `px-3 py-2 ${
                isActive ? "border-b-2 border-green-600 text-green-600" : ""
              }`
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

export default IpoCalendarTabsLayout;




