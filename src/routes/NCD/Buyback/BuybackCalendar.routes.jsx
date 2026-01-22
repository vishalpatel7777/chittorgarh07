import BuybackCalendar from '@pages/NCD/Buyback/BuybackCalendar'
// import EbookNcdguide from '../../../pages/NCD/NcdIssue/EbookNcdGuide';
import EbookBuybackGuide from '../../../pages/NCD/Buyback/EbookBuybackGuide';

const BuybackCalendarRoutes = [
  {
    path: "ncd/buyback/calendar",
    element: <BuybackCalendar />,
    
  },
  {
    path: "ncd/buyback/ebookguide",
    element: <EbookBuybackGuide />
  }
];

export default BuybackCalendarRoutes;
