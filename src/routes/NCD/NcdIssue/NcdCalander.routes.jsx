import NcdCalander from '@pages/NCD/NcdIssue/NcdCalendar'
import EbookNcdguide from '../../../pages/NCD/NcdIssue/EbookNcdGuide';

const NcdCalanderRoutes = [
  {
    path: "ncd/calendar",
    element: <NcdCalander />,
    
  },
  {
    path: "ncd/ebookguide",
    element: <EbookNcdguide />
  }
];

export default NcdCalanderRoutes;
