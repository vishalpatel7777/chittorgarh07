import IpoAllotmentStatus from '@pages/ipo/LiveIpoInfo/IpoAllotmentStatus';
import IpoDashboard from '@pages/ipo/MainboardIpoInfo/IpoDashboard'

import IpoAllotmentStatusTabLayout from   '@components/ipo/LiveIpoInfo/IpoAllotmentStatus/IpoAllotmentStatusTabLayout'
import {
  MainboardIpos,
  SmeIpos,
} from '@components/ipo/LiveIpoInfo/IpoAllotmentStatus/SubComponents'

const IpoSubscriptionRoutes = [
  {
    path: "ipos/ipoallotmentstatus",
    element: <IpoAllotmentStatus />,
    children: [
      {
        element: <IpoAllotmentStatusTabLayout />,
        children: [
          // { index: true, element: <IpoDashboard/> },
          { index: true , element: <MainboardIpos/> },
          // { path: "mainboard", element: <MainboardIpos/> },
          { path: "sme", element: <SmeIpos /> },
         
        ],
      },
    ],
  },
  {
    path : "ipos",
    element : <IpoDashboard/>
  }

];


export default IpoSubscriptionRoutes;
