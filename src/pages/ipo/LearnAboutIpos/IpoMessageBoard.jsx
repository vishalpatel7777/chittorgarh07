import {React , useState} from 'react';
import { FaSearch } from "react-icons/fa";
import CommentSection from '@components/common/comment/CommentsSection';



const IpoMessageBoard = () => {
   const [open, setOpen] = useState(false);
  
  return (
    <div className='p-2'>
      <div className='flex justify-between font-semibold text-2xl'>
        <h1>IPO Message Board</h1>
          {/* Search Button */}
                <button
                  onClick={() => setOpen(true)}
                  className="  flex items-center gap-2
            px-4 py-2
            text-sm font-medium
            text-white
            rounded-xl
            bg-gradient-to-r from-[#28b463] to-[#239b56]
            shadow-md
            hover:from-[#239b56] hover:to-[#1e8449]
            transition
            border-0
            appearance-none"
                >
                  <FaSearch />
                  IPO List
                </button>
      </div>
      <CommentSection />
    </div>
  );
}

export default IpoMessageBoard;
