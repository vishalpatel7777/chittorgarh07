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



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },

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
