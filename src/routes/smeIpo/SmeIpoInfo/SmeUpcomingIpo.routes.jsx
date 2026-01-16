import React from 'react';

import UpcomingIpos from "@pages/ipo/MainboardIpoInfo/UpcomingIpos";
import UpcomingIpoTabsLayout from "@components/ipo/MainboardIpoInfo/UpcomingIpos/UpcomingIpoTabsLayout";
import {
  AllIpos,
  MainboardIpos,
  SmeIpos,
  ReitsIpos,
  InvitsIpos,
  MainboardFpos,
  SmeFpos,
} from "@components/ipo/MainboardIpoInfo/UpcomingIpos/SubComponents";


const SmeUpcomingIpoRoutes = [
  
  {
    path: "sme-ipos/upcoming",
    element: <UpcomingIpos />,
    children: [
      {
        element: <UpcomingIpoTabsLayout />,
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
]

export default SmeUpcomingIpoRoutes;
