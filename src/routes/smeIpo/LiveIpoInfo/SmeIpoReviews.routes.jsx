import IpoReviews from '@pages/ipo/LiveIpoInfo/IpoReviews';
import IpoReviewsTabLayout from  '@components/ipo/LiveIpoInfo/IpoReviews/IpoReviewsTabLayout';
import {
  AllIpos,
  MainboardIpos,
  SmeIpos,
} from '@components/ipo/LiveIpoInfo/IpoReviews/SubComponents';
const SmeIpoReviewsRoutes = [
  {
    path: "sme-ipos/iporeviews",
    element: <IpoReviews />,
    children: [
      {
        element: <IpoReviewsTabLayout />,
        children: [
           { index: true, element: <AllIpos /> },
          { path: "mainboard", element: <MainboardIpos /> },
          { path: "sme", element: <SmeIpos /> },
         ],
      },
    ],
  }
];


export default SmeIpoReviewsRoutes;
