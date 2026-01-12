import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import UpcomingIpoListModel from "./UpcomingIpoListModel";

export default function UpcomingIpoHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        {/* Breadcrumb / Report Link */}
        <nav aria-label="breadcrumb">
          <ol className="flex text-sm text-gray-600">
            <li>
              <Link
                to="/report/report-list/116/49/"
                title="IPO Report List"
                className="hover:text-green-600 font-medium"
              >
                IPO Reports
              </Link>
            </li>
          </ol>
        </nav>

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
      {open && <UpcomingIpoListModel onClose={() => setOpen(false)} />}
    </>
  );
}
