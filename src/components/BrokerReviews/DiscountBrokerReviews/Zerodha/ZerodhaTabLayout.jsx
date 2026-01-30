import { NavLink, Outlet, useMatch } from "react-router-dom";
import ZerodhaOverviewSection from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaOverviewSection";
import ZerodhaAccountOpeningContent from "@components/BrokerReviews/DiscountBrokerReviews/Zerodha/Brokerage/ZerodhaAccountOpeningContent";
import ZerodhaBrokerIntro from "./MobileApp/ZerodhaBrokerIntro";
import ZerodhaAccountChargesAndFAQ from "./AccountOpening/ZerodhaAccountChargesAndFAQ";
import ZerodhaBrokerageCalculator from "./Calculator/ZerodhaBrokerageCalculator";
import ZerodhaDemat from "./Demat/ZerodhaDemat";
import ZerodhaIpo from "./Ipo/ZerodhaIpo";
import ZerodhaBranches from "./Branches/ZerodhaBranches";
import ZerodhaTradingSoftware from "./TradingSoftware/ZerodhaTradingSoftware";
import ZerodhaNriAccount from "./NriAccount/ZerodhaNriAccount";
import ZerodhaMutualFund from "./MutualFund/ZerodhaMutualFund";
import ZerodhaIsItSafe from "./IsItSafe/ZerodhaIsItSafe";
import ZerodhaApi from "./ZerodhaApi/ZerodhaApi";
import ZerodhaComplaints from "./Complaints/ZerodhaComplaints";
import ZerodhaFaqs from "./Faqs/ZerodhaFaqs";


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
  const isAccountOpeningTab = useMatch(
    "/broker-reviews/zerodha/accountopening"
  );
  const isCalculatorTab = useMatch("/broker-reviews/zerodha/calculator");
  const isDematTab = useMatch("/broker-reviews/zerodha/demat");
  const isIpoTab = useMatch("/broker-reviews/zerodha/ipo");
  const isBranchesTab = useMatch("/broker-reviews/zerodha/branches");
  const isTradingSoftwareTab = useMatch(
    "/broker-reviews/zerodha/tradingsoftware"
  );
  const isNriAccountTab = useMatch("/broker-reviews/zerodha/nriaccount");
  const isMutualFundTab = useMatch("/broker-reviews/zerodha/mutualfund");
  const isIsItSafeTab = useMatch("/broker-reviews/zerodha/isitsafe");
  const isApiTab = useMatch("/broker-reviews/zerodha/api");
  const isComplaintsTab = useMatch("/broker-reviews/zerodha/complaints");
  const isFaqsTab = useMatch("/broker-reviews/zerodha/faqs");


  return (
    <>
      {/* ✅ Card wrapper ONLY for tabs + overview */}
      <div className="mb-4 rounded-2xl bg-white p-10 shadow-sm">
        {/* Tabs */}
        <nav className="mb-6 flex flex-wrap gap-3">
          {tabs.map((tab) => (
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
        {isBrokerageTab && <ZerodhaAccountOpeningContent />}
        {isMobileAppTab && <ZerodhaBrokerIntro />}
        {isAccountOpeningTab && <ZerodhaAccountChargesAndFAQ />}
        {isCalculatorTab && <ZerodhaBrokerageCalculator />}

        {isDematTab && <ZerodhaDemat />}
        {isIpoTab && <ZerodhaIpo />}
        {isBranchesTab && <ZerodhaBranches />}
        {isTradingSoftwareTab && <ZerodhaTradingSoftware />}
        {isNriAccountTab && <ZerodhaNriAccount />}  
        {isMutualFundTab && <ZerodhaMutualFund />}
        {isIsItSafeTab && <ZerodhaIsItSafe />}
        {isApiTab && <ZerodhaApi />}
        {isComplaintsTab && <ZerodhaComplaints />}
        {isFaqsTab && <ZerodhaFaqs />}

      </div>

      {/* ❌ Everything else is OUTSIDE the card */}
      <Outlet />
    </>
  );
};

export default ZerodhaTabLayout;
