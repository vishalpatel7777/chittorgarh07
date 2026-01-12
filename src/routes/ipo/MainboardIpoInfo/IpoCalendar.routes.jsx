import IpoCalendar from "@pages/ipo/MainboardIpoInfo/IpoCalendar";
import IpoCalendarTabsLayout from "@components/ipo/MainboardIpoInfo/IpoCalendar/IpoCalendarTabsLayout";

import {
  MainboardIpos,
  SmeIpos,
} from "@components/ipo/MainboardIpoInfo/IpoCalendar/SubComponents";

const IpoCalendarRoutes = [
  {
    path: "ipos/ipocalendar",
    element: <IpoCalendar />,
    children: [
      {
        element: <IpoCalendarTabsLayout />,
        children: [
          { index: true, element: <MainboardIpos /> },
          { path: "sme", element: <SmeIpos /> }
        ],
      },
    ],
  },
];

export default IpoCalendarRoutes;
