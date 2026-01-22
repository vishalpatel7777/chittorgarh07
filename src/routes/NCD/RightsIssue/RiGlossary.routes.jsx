import RiGlossary from '@pages/NCD/RightsIssue/RiGlossary'
import NcdGlossaryTabsLayout from "@components/NCD/NcdGlossary/NcdGlossaryTabsLayout";

import {
  GeneralStockMarket,
  Ipo,
  Ncd,
  NriTrading,
  OptionTrading,
  RightsIssue,
  StockBroker,
} from "@components/NCD/NcdGlossary/Subcomponents";

const RiGlossaryRoutes = [
  {
    path: "ncd/riglossary/",
    element: <RiGlossary />,
    children: [
      {
        element: <NcdGlossaryTabsLayout />,
        children: [
          { index: true, element: <Ipo /> },
          { path: "rightsissue", element: <RightsIssue /> },
          { path: "stockbroker", element: <StockBroker /> },
          { path: "nritrading", element: <NriTrading /> },
          { path: "generalstockmarket", element: <GeneralStockMarket /> },
          { path: "ncd", element: <Ncd /> },
          { path: "optiontrading", element: <OptionTrading /> },
        ],
      },
    ],
  },
];

export default RiGlossaryRoutes;
