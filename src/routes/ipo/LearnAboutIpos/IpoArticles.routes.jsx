import IpoArticles from '@pages/ipo/LearnAboutIpos/IpoArticles'
import IpoArticlesTabLayout from   '@components/ipo/LearnAboutIpos/IpoArticles/IpoArticlesTabLayout'
import IpoMessageBoard from '@pages/ipo/LearnAboutIpos/IpoMessageBoard'
import {
  StockBrokers, MainboardIpo , SmeIpo , Ncd , CityInfo , HistoryAndTourism , OptionsTrading , NriTrading , Sponsored , Miscellaneous
} from  '@components/ipo/LearnAboutIpos/IpoArticles/SubComponents'

const IpoArticlesRoutes = [
  {
    path: "ipos/articles",
    element: <IpoArticles />,
    children: [
      {
        element: <IpoArticlesTabLayout />,
        children: [
          { index: true, element: <StockBrokers /> },
          { path: "mainboardipo", element: <MainboardIpo /> },
          { path: "smeipo", element: <SmeIpo /> },
          { path: "ncd", element: <Ncd /> },
          { path: "cityinfo", element: <CityInfo /> },
          { path:"historyandtourism" , element: <HistoryAndTourism/>},
          {path:"optionstrading" , element: <OptionsTrading/>},
          {path:"nritrading", element: <NriTrading/>},
          {path: "sponsored"  , element: <Sponsored/>},
          {path:"miscellaneous", element: <Miscellaneous/>}


        ],
      },
    ],
  },{
    path:"ipos/message",
    element: <IpoMessageBoard/>
  }
 
];

export default IpoArticlesRoutes;
