import BasisofAllotmentsIpos from '@pages/ipo/LiveIpoInfo/BasisofAllotmentsIpos'
import BasisofAllotmentsIposTabLayout from  '@components/ipo/LiveIpoInfo/BasisofAllotmentsIpos/BasisofAllotmentsIposTabLayout'

import {
  AllIpos,
  MainboardIpos,
  SmeIpos,
  MainboardFpos,
  SmeFpos,
} from  '@components/ipo/LiveIpoInfo/BasisofAllotmentsIpos/SubComponents'

const BasisofAllotmentsIposRoutes = [
  {
    path: "ipos/basisofallotments",
    element: <BasisofAllotmentsIpos />,
    children: [
      {
        element: <BasisofAllotmentsIposTabLayout />,
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

export default BasisofAllotmentsIposRoutes;
