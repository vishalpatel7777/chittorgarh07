import RightIssueCalendar from  '@pages/NCD/RightsIssue/RightsIssueCalendar'
import EbookRiGuide from '@pages/NCD/RightsIssue/EbookRiGuide'
const RightIssueCalendarRoutes = [
  {
    path: "ncd/rights-issue-calendar",
    element: <RightIssueCalendar />,
    
  },
  {
    path: "ncd/ebook-ri-guide",
    element: <EbookRiGuide />
  }

];

export default RightIssueCalendarRoutes;
