import IpoReports from '@pages/ipo/LearnAboutIpos/IpoReports'
import IpoReportsTabLayout from   '@components/ipo/LearnAboutIpos/IpoReports/IpoReportsTabLayout'
import {
  IpoReportList,
  StokeBrokerReportsList,
  StockMarket,
  OtherReportsList
} from  '@components/ipo/LearnAboutIpos/IpoReports/SubComponents'

import EbookIpoGuide  from '@pages/ipo/LearnAboutIpos/EbookIpoGuide'

const IpoReportsRoutes = [
  {
    path: "ipos/reports",
    element: <IpoReports />,
    children: [
      {
        element: <IpoReportsTabLayout />,
        children: [
          { index: true, element: <IpoReportList /> },
          { path: "stockbrokerreportslist", element: <StokeBrokerReportsList /> },
          { path: "stockmarket", element: <StockMarket /> },
          { path: "otherreportslist", element: <OtherReportsList /> },

        ],
      },
    ],
  },
  {
    path:"ipos/ebookguide",
    element: <EbookIpoGuide/>
  }
];

export default IpoReportsRoutes;
