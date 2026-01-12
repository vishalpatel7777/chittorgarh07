import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import IPOListModal from "@components/common/search/IPOListModal";

export default function IpoSubscripitionHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-3">
      
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

      {/* Modal */}
      {open && <IPOListModal onClose={() => setOpen(false)} />}
    </>
  );
}
