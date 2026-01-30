import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@pages/Home";
import MainLayout from "@components/layout/MainLayout";

// Mainboard IPO routes
import CurrentIpoRoutes from "./ipo/MainboardIpoInfo/CurrentIpo.routes";
import UpcomingIpoRoutes from "./ipo/MainboardIpoInfo/UpcomingIpo.routes";
import IpoTimetableRoutes from "./ipo/MainboardIpoInfo/IpoTimtable.routes";
import IpoCalendarRoutes from "./ipo/MainboardIpoInfo/IpoCalendar.routes";
import IpoPerformanceRoutes from "./ipo/MainboardIpoInfo/IpoPerformance.routes";
import IpoDashboardRoutes from "./ipo/MainboardIpoInfo/IpoDashboard.routes";


// Live IPO routes
import IpoSubscriptionRoutes from "./ipo/LiveIpoInfo/IpoSubscription.routes";
import IpoReviewsRoutes from "./ipo/LiveIpoInfo/IpoReviews.routes";
import IposListingRoutes from "./ipo/LiveIpoInfo/IposListing.routes";
import IpoAllotmentStatusRoutes from "./ipo/LiveIpoInfo/IpoAllotmentStatus.routes";
import BasisofAllotmentsIposRoutes from "./ipo/LiveIpoInfo/BasisofAllotmentsIpos.routes";


// Learn about ipos
import IpoReportsRoutes from "./ipo/LearnAboutIpos/IpoReports.routes";
import IpoArticlesRoutes from "./ipo/LearnAboutIpos/IpoArticles.routes";


// IPO performance Reports
import IpoAnchorInvestorsRoutes from "./ipo/IpoPerformanceReports/IpoAnchorInvestors.routes";
import IpoMerchantBankerRoutes from "./ipo/IpoPerformanceReports/IpoMerchantBanker.routes";
import SmeIpoDashboardRoutes from "./smeIpo/SmeIpoInfo/SmeIpoDashboard.routes";
import SmeUpcomingIpoRoutes from "./smeIpo/SmeIpoInfo/SmeUpcomingIpo.routes";
import SmeIpoTimtableRoutes from "./smeIpo/SmeIpoInfo/SmeIpoTimtable.routes";
import SmeIpoCalendarRoutes from "./smeIpo/SmeIpoInfo/SmeIpoCalendar.routes";
import SmeIpoPerformanceRoutes from "./smeIpo/SmeIpoInfo/SmeIpoPerformance.routes";

import SmeIpoSubscriptionRoutes from "./smeIpo/LiveIpoInfo/SmeIpoSubscription.routes";
import SmeIpoReviewsRoutes from "./smeIpo/LiveIpoInfo/SmeIpoReviews.routes";
import SmeIposListingRoutes from './smeIpo/LiveIpoInfo/SmeIposListing.routes';
import SmeIpoAllotmentStatusRoutes from "./smeIpo/LiveIpoInfo/SmeIpoAllotmentStatus.routes";
// import SmeIpoSubscriptionRoutes from './smeIpo/LiveIpoInfo/SmeIpoSubscription.routes';
import SmeBasisofAllotmentsIposRoutes from "./smeIpo/LiveIpoInfo/smeBasisofAllotmentsIpos.routes";

import SmeIpoReportsRoutes from "./smeIpo/LearnAboutSmeIpo/SmeIpoReports.routes";
import SmeIpoArticlesRoutes from "./smeIpo/LearnAboutSmeIpo/SmeIpoArticles.routes";
import NseSharePricesRoutes from "./smeIpo/LearnAboutSmeIpo/NseSharePrices.routes";
import BseSharePricesRoutes from "./smeIpo/LearnAboutSmeIpo/BseSharePrices.routes";

import SmeIpoAnchorInvestorsRoutes from "./smeIpo/SmeIpoPerformanceReports/SmeIpoAnchorInvestors.routes";
import SmeIpoMerchantBankerRoutes from "./smeIpo/SmeIpoPerformanceReports/SmeIpoMerchantBanker.routes";


import CurrentNdcIssuesRoutes from "./NCD/NcdIssue/CurrentNcdIssues.routes";
import NcdReviewRoutes from "./NCD/NcdIssue/NcdReview.routes";
import NcdSubscriptionRoutes from "./NCD/NcdIssue/NcdSubscription.routes";
import NcdCalanderRoutes from "./NCD/NcdIssue/NcdCalander.routes";
import NcdGlossaryRoutes from "./NCD/NcdIssue/NcdGlossary.routes";

import CurrentRisRoutes from "./NCD/RightsIssue/CurrentRis.routes";
import RiReviewsRoutes from "./NCD/RightsIssue/RiReviews.routes";
import RightIssueCalendarRoutes from "./NCD/RightsIssue/RightIssueCalendar.routes";
import RightsIssueSubscriptionRoutes from "./NCD/RightsIssue/RightsIssueSubscription.routes";
import RiGlossaryRoutes from "./NCD/RightsIssue/RiGlossary.routes";
import CurrentBuybackRoutes from "./NCD/Buyback/CurrentBuyback.routes";
import BuybackCalendarRoutes from "./NCD/Buyback/BuybackCalendar.routes";


import CurrentOfsRoutes from '@routes/NCD/OfferForSale/CurrentOfs.routes'

import MutualFundsRoutes from "./MutualFunds/MutualFunds.routes";


import TopStockBrokersInIndiaRoutes from "./BrokerReviews/TopStockBrokersInIndia.routes";
import TopDiscountBrokersRoutes from "./BrokerReviews/TopDiscountBrokers.routes";
import TopFullServiceBrokersRoutes from "./BrokerReviews/TopFullServiceBrokers.routes"; 
import LifetimeFreeDematAcctRoutes from "./BrokerReviews/LifetimeFreeDematAcct.routes";
import BestBrokerforBeginnersRoutes from "./BrokerReviews/BestBrokerforBeginners.routes";
import BestApiBrokerRoutes from "./BrokerReviews/BestApiBroker.routes";
import MoreReportsRoutes from "./BrokerReviews/MoreReports.routes";



import ZerodhaRoutes from "./BrokerReviews/DiscountBrokerReview/Zerodha.routes";
import ProstocksRoutes from "./BrokerReviews/DiscountBrokerReview/Prostocks.routes";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },


         /*  Here the all the IPO routes...  */ 
          // IPO ROUTES (merged cleanly)
          ...CurrentIpoRoutes,
          ...UpcomingIpoRoutes,
          ...IpoTimetableRoutes,
          ...IpoCalendarRoutes,
          ...IpoPerformanceRoutes,
          ...IpoDashboardRoutes,

          //Live IPO routes
          ...IpoSubscriptionRoutes,
          ...IpoReviewsRoutes,
          ...IposListingRoutes,
          ...IpoAllotmentStatusRoutes,
          ...BasisofAllotmentsIposRoutes,


          // Learn about ipos
          ...IpoReportsRoutes,
          ...IpoArticlesRoutes,


          // IPO performance Reports
          ...IpoAnchorInvestorsRoutes,
          ...IpoMerchantBankerRoutes,


          /*Here the all SME IPO routes... */
          ...SmeIpoDashboardRoutes,
          ...SmeUpcomingIpoRoutes,
          ...SmeIpoTimtableRoutes,
          ...SmeIpoCalendarRoutes,
          ...SmeIpoPerformanceRoutes,
          
          ...SmeIpoSubscriptionRoutes,
          ...SmeIpoReviewsRoutes,
          ...SmeIposListingRoutes,
          ...SmeIpoSubscriptionRoutes,
          ...SmeIpoAllotmentStatusRoutes,
          ...SmeBasisofAllotmentsIposRoutes,

          ...SmeIpoReportsRoutes,
          ...SmeIpoArticlesRoutes,
          ...NseSharePricesRoutes,
          ...BseSharePricesRoutes,

          ...SmeIpoAnchorInvestorsRoutes,
          ...SmeIpoMerchantBankerRoutes,



          /* here all the NCD / RI / BB / OFS */
          ...CurrentNdcIssuesRoutes,
          ...NcdReviewRoutes,
          ...NcdSubscriptionRoutes,
          ...NcdCalanderRoutes,
          ...NcdGlossaryRoutes,


          ...CurrentRisRoutes,
          ...RiReviewsRoutes,
          ...RightIssueCalendarRoutes,
          ...RightsIssueSubscriptionRoutes,
          ...RiGlossaryRoutes,

          ...CurrentBuybackRoutes,
          ...BuybackCalendarRoutes,

          ...CurrentOfsRoutes,



      /* Mutual Funds route placeholder */
          ...MutualFundsRoutes,



          /* Here all Broker Reviews routes  */
          ...TopStockBrokersInIndiaRoutes,   
          ...TopDiscountBrokersRoutes, 
          ...TopFullServiceBrokersRoutes , 
          ...LifetimeFreeDematAcctRoutes, 
          ...BestBrokerforBeginnersRoutes, 
          ...BestApiBrokerRoutes,
          ...MoreReportsRoutes,


          ...ZerodhaRoutes,
          ...ProstocksRoutes,


          
        ],
      },

      {
        path: "*",
        element: <div>404 Page Not Found</div>,
      },
    ],
  },
]);

export default router;
