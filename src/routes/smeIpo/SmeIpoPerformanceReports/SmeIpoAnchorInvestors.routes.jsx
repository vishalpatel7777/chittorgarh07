import IpoAnchorInvestors from '@pages/ipo/IpoPerformanceReports/IpoAnchorInvestors'
import IpoAnchorInvestorsTabLayout from  '@components/ipo/IpoPerformanceReports/IpoAnchorInvestors/IpoAnchorInvestorsTabLayout'

import {
  AllIpos,
  MainboardIpos,
  SmeIpos,
  MainboardFpos,
  SmeFpos,
} from  '@components/ipo/IpoPerformanceReports/IpoAnchorInvestors/SubComponents'

const SmeIpoAnchorInvestorsRoutes = [
  {
    path: "/sme-ipos/ipoanchorinvestors",
    element: <IpoAnchorInvestors />,
    children: [
      {
        element: <IpoAnchorInvestorsTabLayout />,
        children: [
          { index: true, element: <AllIpos /> },
          { path: "mainboard", element: <MainboardIpos /> },
          { path: "sme", element: <SmeIpos /> },
          { path: "mainboard-fpo", element: <MainboardFpos /> },
          { path: "sme-fpo", element: <SmeFpos /> },
        ],
      },
    ],
  },
];

export default SmeIpoAnchorInvestorsRoutes;



