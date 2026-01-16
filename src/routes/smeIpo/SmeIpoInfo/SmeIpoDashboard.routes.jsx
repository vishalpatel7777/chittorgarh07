import React from 'react'
import IpoDashboard from '@pages/ipo/MainboardIpoInfo/IpoDashboard'


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



const SmeIpoDashboardRoutes = [
  {
    path: "/sme-ipos/smedashboard",
    element: <IpoDashboard />,
    
  },
  {
    path : '/sme-ipos/current/',
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

]

export default SmeIpoDashboardRoutes
