import Zerodha from  '@pages/BrokerReviews/DiscountBrokerReview/Zerodha'
import ZerodhaTabLayout from  '@components/BrokerReviews/DiscountBrokerReviews/Zerodha/ZerodhaTabLayout'

import {
  Reviews,
  Brokerage,
  MobileApp,
  AccountOpening,
  Calculator,
  Demat,
  Ipo,
  Branches,
  TradingSoftware,
  NriAccount,
  MutualFund,
  IsItSafe,
  Api,
  Complaints,
  Faqs,
} from '@components/BrokerReviews/DiscountBrokerReviews/Zerodha/SubComponents'


const ZerodhaRoutes = [
  {
    path: "/broker-reviews/zerodha",
    element: <Zerodha />,
     children: [
          {
            element: <ZerodhaTabLayout />,
            children: [
              { index: true, element: <Reviews /> },
              { path: "brokerage", element: <Brokerage /> },
              { path: "mobileapp", element: <MobileApp /> },
              { path: "accountopening", element: <AccountOpening /> },
              { path: "calculator", element: <Calculator /> },
              { path: "demat", element: <Demat /> },
              { path: "ipo", element: <Ipo /> },
              { path: "branches", element: <Branches /> },
              { path: "tradingsoftware", element: <TradingSoftware /> },
              { path: "nriaccount", element: <NriAccount /> },
              { path: "mutualfund", element: <MutualFund /> },
              { path: "isitsafe", element: <IsItSafe /> },
              { path: "api", element: <Api /> },
              { path: "complaints", element: <Complaints /> },
              { path: "faqs", element: <Faqs />},
            ],
          },
        ],
  },
];

export default ZerodhaRoutes;
