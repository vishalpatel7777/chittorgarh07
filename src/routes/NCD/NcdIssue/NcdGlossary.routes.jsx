import NcdGlossary from '@pages/NCD/NcdIssue/NcdGlossary'
import NcdGlossaryTabsLayout from '@components/NCD/NcdGlossary/NcdGlossaryTabsLayout'

import {
  GeneralStockMarket,
  Ipo,
  Ncd,
  NriTrading,
  OptionTrading,
  RightsIssue,
  StockBroker,
} from '@components/NCD/NcdGlossary/Subcomponents'
const NcdGlossaryRoutes = [
  {
    path: "ncd/glossary",
    element: <NcdGlossary />,
    children: [
      {
        element: <NcdGlossaryTabsLayout />,
        children: [
          { index: true, element: <Ipo /> },
          { path: "stockbroker", element: <StockBroker /> },
          { path: "nritrading", element: <NriTrading /> },
          { path: "rightsissue", element: <RightsIssue /> },
          { path: "generalstockmarket", element: <GeneralStockMarket /> },
          { path: "ncd", element: <Ncd /> },
          { path: "optiontrading", element: <OptionTrading /> },
        ],
      },
    ],
  },
];

export default NcdGlossaryRoutes;


