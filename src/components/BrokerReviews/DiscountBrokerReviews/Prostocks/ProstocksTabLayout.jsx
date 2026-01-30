import { NavLink, Outlet, useMatch } from "react-router-dom";
import ProStocksReviews from './Reviews/ProStocksReviews'
import ProStocksBrokerage from "./Brokerage/ProStocksBrokerage";

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

const ProstocksTabLayout = () => {
  const isReviewTab = useMatch("/broker-reviews/ProStocks");
  const isBrokerageTab = useMatch("/broker-reviews/ProStocks/brokerage");
  const isMobileAppTab = useMatch("/broker-reviews/ProStocks/mobileapp");
  const isAccountOpeningTab = useMatch(
    "/broker-reviews/ProStocks/accountopening"
  );
  const isCalculatorTab = useMatch("/broker-reviews/ProStocks/calculator");
  const isDematTab = useMatch("/broker-reviews/ProStocks/demat");
  const isIpoTab = useMatch("/broker-reviews/ProStocks/ipo");
  const isBranchesTab = useMatch("/broker-reviews/ProStocks/branches");
  const isTradingSoftwareTab = useMatch(
    "/broker-reviews/ProStocks/tradingsoftware"
  );
  const isNriAccountTab = useMatch("/broker-reviews/ProStocks/nriaccount");
  const isMutualFundTab = useMatch("/broker-reviews/ProStocks/mutualfund");
  const isIsItSafeTab = useMatch("/broker-reviews/ProStocks/isitsafe");
  const isApiTab = useMatch("/broker-reviews/ProStocks/api");
  const isComplaintsTab = useMatch("/broker-reviews/ProStocks/complaints");
  const isFaqsTab = useMatch("/broker-reviews/ProStocks/faqs");


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

    

          {isReviewTab && <ProStocksReviews />}
          {isBrokerageTab && <ProStocksBrokerage />}  
      </div>

      {/* ❌ Everything else is OUTSIDE the card */}
      <Outlet />
    </>
  );
};

export default ProstocksTabLayout;
