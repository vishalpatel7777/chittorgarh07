import MoreReportsTabsLayout from '@components/BrokerReviews/MoreReports/MoreReportsTabsLayout'
import MoreReports from  '@pages/BrokerReviews/BestOf/MoreReports'

import {
  IpoReportList,
  StockBrokerReportList,
  StockMarket,
  OtherReportList,
} from '@components/BrokerReviews/MoreReports/Subcomponents'

const MoreReportsRoutes = [
  {
     path: "/broker-reviews/morereports",
    element: <MoreReports />,
    children: [
      {
        element: <MoreReportsTabsLayout />,
        children: [
          { index: true, element: <IpoReportList /> },
          { path: "stockbrokerreportlist", element: <StockBrokerReportList /> },
          { path: "stockmarket", element: <StockMarket /> },
          { path: "otherreportlist", element: <OtherReportList /> },
        ],
      },
    ],
  },
];

export default MoreReportsRoutes;








