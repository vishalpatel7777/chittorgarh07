import IpoMerchantBanker from '@pages/ipo/IpoPerformanceReports/IpoMerchantBanker'
import IpoMerchantBankerTabLayout from  '@components/ipo/IpoPerformanceReports/IpoMerchantBanker/IpoMerchantBankerTabLayout'

import {
  AllIpos,
  MainboardIpos,
  SmeIpos,
} from  '@components/ipo/IpoPerformanceReports/IpoMerchantBanker/SubComponents'

const SmeIpoMerchantBankerRoutes = [
  {
    path: "/sme-ipos/ipomerchantbanker",
    element: <IpoMerchantBanker />,
    children: [
      {
        element: <IpoMerchantBankerTabLayout />,
        children: [
          { index: true, element: <AllIpos /> },
          { path: "mainboard", element: <MainboardIpos /> },
          { path: "sme", element: <SmeIpos /> },
           ],
      },
    ],
  },
];

export default SmeIpoMerchantBankerRoutes;



