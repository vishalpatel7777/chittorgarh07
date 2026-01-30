import ComparisonBar from '@components/smeIpo/LearnAboutSmeIpo/NseSharePrices/ComparisonBar'
import CommentSection from '@components/common/comment/CommentsSection'
import { Outlet } from 'react-router';


const Prostocks = () => {
  return (
    <div className="p-10">
      <Outlet />

      <ComparisonBar />
      <CommentSection />
    </div>
  );
};

export default Prostocks;
