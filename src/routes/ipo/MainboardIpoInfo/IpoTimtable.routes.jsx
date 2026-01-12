import IpoTimetable from "@pages/ipo/MainboardIpoInfo/IpoTimetable";
import IpoTimetableTabsLayout from "@components/ipo/MainboardIpoInfo/IpoTimetable/IpoTimetableTabsLayout";

import {
  AllIpos,
  MainboardIpos,
  SmeIpos,
} from "@components/ipo/MainboardIpoInfo/IpoTimetable/SubComponents";

const IpoTimetableRoutes = [
  {
    path: "ipos/ipotimetable",
    element: <IpoTimetable />,
    children: [
      {
        element: <IpoTimetableTabsLayout />,
        children: [
          { index: true, element: <AllIpos /> },
          { path: "mainboard", element: <MainboardIpos /> },
          { path: "sme", element: <SmeIpos /> }
        ],
      },
    ],
  },
];

export default IpoTimetableRoutes;
