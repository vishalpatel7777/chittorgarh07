import { Link } from "react-router-dom";
import { useState } from "react";
import NcdIpoList from "./NcdIpoList";
import { FaSearch } from "react-icons/fa";

export default function NcdHeader() {
  const [open, setOpen] = useState(false);

  const brokers = [
    {
      id: 1,
      name: "Zerodha",
      logo: "https://www.chittorgarh.net/images/ipo/zerodha_logo.gif",
      badge: "star",
    },
    {
      id: 2,
      name: "Angel One",
      logo: "https://www.chittorgarh.net/images/ipo/angel-one-logo.png",
    },
    {
      id: 3,
      name: "Kotak Securities",
      logo: "https://www.chittorgarh.net/images/ipo/kotak-logo.gif",
    },
    {
      id: 4,
      name: "ProStocks",
      logo: "https://www.chittorgarh.net/images/ipo/prostocks-logo.png",
      badge: "trophy",
    },
  ];

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="flex text-sm text-gray-600">
            <li>
              <Link
                to="/report/report-list/116/50/"
                className="font-medium hover:text-green-600"
              >
                Stock Market Reports
              </Link>
            </li>
          </ol>
        </nav>

        {/* Trigger Button */}
        <button
          onClick={() => setOpen(true)}
          className="
            flex items-center gap-2
            rounded-xl px-4 py-2
            text-sm font-medium text-white
            bg-linear-to-r from-[#28b463] to-[#239b56]
            shadow-md transition
            hover:from-[#239b56] hover:to-[#1e8449]
          "
        >
          <FaSearch /> Search
        </button>
      </div>

      {open && <NcdIpoList onClose={() => setOpen(false)} brokers={brokers} />}
    </>
  );
}
