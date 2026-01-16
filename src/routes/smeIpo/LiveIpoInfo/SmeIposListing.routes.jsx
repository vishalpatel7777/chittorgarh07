import IposListing from '@pages/ipo/LiveIpoInfo/IposListing'
import IposListingTabLayout from '@components/ipo/LiveIpoInfo/IpoListing/IposListingTabLayout';

import {
  AllIpos,
  MainboardIpos,
  SmeIpos,
  MainboardFpos,
  SmeFpos,
} from '@components/ipo/LiveIpoInfo/IpoListing/SubComponents';

const SmeIposListingRoutes = [
  {
    path: "sme-ipos/ipolisting",
    element: <IposListing />,
    children: [
      {
        element: <IposListingTabLayout />,
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

export default SmeIposListingRoutes;
