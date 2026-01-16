import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
  {id:1, label: "IPO Dashboard", path: "/ipos" },
  { id:2, label: "Current IPOs", path: "/ipos/current" },
  {id:3, label: "Upcoming IPOs", path: "/ipos/upcoming" },
  { id:4,label: "IPO Timetable", path: "/ipos/ipotimetable" },
  { id:5,label: "IPO Calendar", path: "/ipos/ipocalendar" },
  { id:6,label: "IPO Performance Tracker", path: "/ipos/ipoperformance" },
  { id:7,label: "Live IPO Subscription Status", path: "/ipos/iposubscription" },
  { id:8,label: "Grey Market Premium", path: "/ipos/grey-market-premium" },
  { id:9,label: "IPO Reviews", path: "/ipos/iporeviews" },
  { id:10,label: "IPO Listing", path: "/ipos/ipolisting" },
  {id:11,label: "IPO Allotment Status", path: "/ipos/ipoallotmentstatus"},
  {id:12,label: "Basis of Allotments", path: "/ipos/basisofallotments"},
  {id:13,label: "IPO Reports", path: "/ipos/reports"},
  {id:14,label: "ebook Guide", path: "/ipos/ebookguide"},
  {id:15,label: "IPO Articles", path: "/ipos/articles"}
];

const Home = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-emerald-700">
        Mainboard IPO Info Routes
      </h1>

      <div className="grid gap-3">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              `
              flex justify-between items-center
              px-4 py-3
              rounded-md
              border
              transition
              ${
                isActive
                  ? "bg-emerald-50 border-emerald-500 text-emerald-700 font-semibold"
                  : "bg-white border-gray-200 hover:bg-gray-50 text-gray-700"
              }
            `
            }
          >
            <span>{route.id}</span>
            <span>{route.label}</span>
            <span className="text-xs text-gray-400">{route.path}</span>
          </NavLink>
        ))}
      </div>
    </main>
  );
};

export default Home;


// import React from 'react'

// function Home() {
//   return (
//     <div></div>
//   )
// }

// export default Home
