import { Link } from "react-router-dom";
import { useState } from "react";
import NcdIpoList from '@components/NCD/NcdIpoList'
import { FaSearch } from "react-icons/fa";

export default function BrokerHeader() {
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
          <ol className="flex text-sm text-gray-600 ">
            <li>
              <Link
                to="/broker-reviews/topstockbrokersinindia"
                className="m-2 font-medium hover:text-blue-600"
              >
                Top 20 Share Brokers 
                <span> |</span>
              </Link>
            </li>

            <li>
              <Link
                to="/broker-reviews/topfullservicebrokers"
                className="m-2 font-medium hover:text-blue-600"
              >
                Top 10 Full-Service Brokers 
                <span> |</span>
              </Link>
            </li>

               <li>
              <Link
                to="/broker-reviews/topdiscountstockbrokers"
                className="font-medium hover:text-blue-600"
              >
                Top 10 Discount Stock Brokers 
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
