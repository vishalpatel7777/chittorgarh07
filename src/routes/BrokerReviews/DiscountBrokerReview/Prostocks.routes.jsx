import Prostocks from  '@pages/BrokerReviews/DiscountBrokerReview/Prostocks'
import ProstocksTabLayout from  '@components/BrokerReviews/DiscountBrokerReviews/Prostocks/ProstocksTabLayout'

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
} from '@components/BrokerReviews/DiscountBrokerReviews/Prostocks/SubComponents'


const ProstocksRoutes = [
  {
    path: "/broker-reviews/prostocks",
    element: <Prostocks />,
     children: [
          {
            element: <ProstocksTabLayout />,
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

export default  ProstocksRoutes; 

