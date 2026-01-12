import CurrentIpos from "@pages/ipo/MainboardIpoInfo/CurrentIpos";
import IpoTabsLayout from "@components/ipo/MainboardIpoInfo/currentIpos/IpoTabsLayout";

import {
  AllIpos,
  MainboardIpos,
  SmeIpos,
  ReitsIpos,
  InvitsIpos,
  MainboardFpos,
  SmeFpos,
} from "@components/ipo/MainboardIpoInfo/currentIpos/SubComponents";

const CurrentIpoRoutes = [
  {
    path: "ipos/current",
    element: <CurrentIpos />,
    children: [
      {
        element: <IpoTabsLayout />,
        children: [
          { index: true, element: <AllIpos /> },
          { path: "mainboard", element: <MainboardIpos /> },
          { path: "sme", element: <SmeIpos /> },
          { path: "reit", element: <ReitsIpos /> },
          { path: "invit", element: <InvitsIpos /> },
          { path: "mainboard-fpo", element: <MainboardFpos /> },
          { path: "sme-fpo", element: <SmeFpos /> },
        ],
      },
    ],
  },
];

export default CurrentIpoRoutes;
