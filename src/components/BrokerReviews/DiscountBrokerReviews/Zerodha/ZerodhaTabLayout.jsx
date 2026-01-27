import { NavLink, Outlet, useMatch } from "react-router-dom";
import ZerodhaOverviewSection from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaOverviewSection";
import ZerodhaAccountOpeningContent from '@components/BrokerReviews/DiscountBrokerReviews/Zerodha/Brokerage/ZerodhaAccountOpeningContent'
import ZerodhaBrokerIntro from "./MobileApp/ZerodhaBrokerIntro";
import ZerodhaAccountChargesAndFAQ from "./AccountOpening/ZerodhaAccountChargesAndFAQ";

const tabs = [
  { label: "Review", path: "" },
  { label: "Brokerage", path: "brokerage" },
  { label: "Mobile App", path: "mobileapp" },
  { label: "Account Opening", path: "accountopening" },
  { label: "Calculator", path: "calculator" },
  { label: "Demat", path: "demat" },
  { label: "IPO", path: "ipo" },
  { label: "Branches", path: "branches" },
  { label: "Trading Software", path: "tradingsoftware" },
  { label: "NRI Account", path: "nriaccount" },
  { label: "Mutual Fund", path: "mutualfund" },
  { label: "Is It Safe?", path: "isitsafe" },
  { label: "API", path: "api" },
  { label: "Complaints", path: "complaints" },
  { label: "FAQs", path: "faqs" },
];

const ZerodhaTabLayout = () => {
  const isReviewTab = useMatch("/broker-reviews/zerodha");
  const isBrokerageTab = useMatch("/broker-reviews/zerodha/brokerage");
  const isMobileAppTab = useMatch("/broker-reviews/zerodha/mobileapp");
  const isAccountOpeningTab = useMatch("/broker-reviews/zerodha/accountopening");
 



  return (
    <>
      {/* ✅ Card wrapper ONLY for tabs + overview */}
      <div className="mb-4 rounded-2xl bg-white p-10 shadow-sm">
        {/* Tabs */}
        <nav className="mb-6 flex flex-wrap gap-3">
          {tabs.map(tab => (
            <NavLink
              key={tab.label}
              to={tab.path}
              end={tab.path === ""}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-blue-600 hover:text-blue-800"
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        {/* ✅ Overview ONLY on Review tab */}
        {isReviewTab && <ZerodhaOverviewSection />}
        {isBrokerageTab && 
        <ZerodhaAccountOpeningContent />}
        {isMobileAppTab && <ZerodhaBrokerIntro />}
        {isAccountOpeningTab && <ZerodhaAccountChargesAndFAQ/ >}
      </div>

      {/* ❌ Everything else is OUTSIDE the card */}
      <Outlet />
    </>
  );
};

export default ZerodhaTabLayout;
