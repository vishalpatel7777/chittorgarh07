import IpoPerformance from "@pages/ipo/MainboardIpoInfo/IpoPerformance";
import IpoPerformanceTabsLayout from "@components/ipo/MainboardIpoInfo/IpoPerformance/IpoPerformanceTabsLayout";


import {
  MainboardIpos,
  SmeIpos,
} from "@components/ipo/MainboardIpoInfo/IpoPerformance/SubComponents";

const IpoPerformanceRoutes = [
  {
    path: "ipos/ipoperformance",
    element: <IpoPerformance />,
    children: [
      {
        element: <IpoPerformanceTabsLayout />,
        children: [
          { index: true, element: <MainboardIpos /> },
          { path: "sme", element: <SmeIpos /> }
        ],
      },
    ],
  },
];

export default IpoPerformanceRoutes;
