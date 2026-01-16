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
// import SmeIpoSubscriptionRoutes from './smeIpo/LiveIpoInfo/SmeIpoSubscription.routes';



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
