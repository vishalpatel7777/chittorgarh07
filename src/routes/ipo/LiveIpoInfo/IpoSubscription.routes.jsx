import IpoSubscription from '@pages/ipo/LiveIpoInfo/IpoSubscription';
import IpoSubscriptionTabLayout from  '@components/ipo/LiveIpoInfo/IpoSubscription/IpoSubscriptionTabLayout'
import {
  MainboardIpos,
  SmeIpos,
} from '@components/ipo/LiveIpoInfo/IpoSubscription/SubComponents'
import RedirectToGmp from '../../../components/ipo/LiveIpoInfo/RedirectToGmp/RedirectToGmp';
const IpoSubscriptionRoutes = [
  {
    path: "ipos/iposubscription",
    element: <IpoSubscription />,
    children: [
      {
        element: <IpoSubscriptionTabLayout />,
        children: [
          { index: true, element: <MainboardIpos /> },
          { path: "sme", element: <SmeIpos /> },
        ],
      },
    ],
  },
  {
    path: "ipos/grey-market-premium",
    element: <RedirectToGmp />
  }
];


export default IpoSubscriptionRoutes;
