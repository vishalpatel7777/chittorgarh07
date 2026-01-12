import { Link, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoNotifications, IoSearch, IoPersonSharp } from "react-icons/io5";
import { RiShareFill } from "react-icons/ri";

const navLinks = [
  { name: "IPO", path: "/ipo" },
  { name: "SME IPO", path: "/smeipo" },
  { name: "NCD / RI / BB / OFS", path: "/ncd" },
  { name: "Mutual Fund", path: "/mutualfund" },
  { name: "Reports", path: "/reports" },
  { name: "Broker Reviews", path: "/brokerreviews" },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full bg-white py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        
         <div className="flex items-center justify-between bg-emerald-600 rounded-full px-5 py-3 shadow-md">
           <div className="flex items-center gap-4">
            <button className="text-2xl text-white lg:hidden">
              <CgMenuLeftAlt />
            </button>

            <Link to="/" className="text-white text-xl flex items-center gap-2">
              <IoMdHome />
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-opacity ${
                    location.pathname === link.path
                      ? "text-white opacity-100"
                      : "text-white/90 hover:opacity-100"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-white text-xl">
            <Icon icon={<IoNotifications />} />
            <Icon icon={<IoSearch />} />
            <Icon icon={<IoPersonSharp />} />
            <Icon icon={<RiShareFill />} />
          </div>

        </div>
      </div>
    </nav>
  );
}

const Icon = ({ icon }) => (
  <button className="hover:opacity-80 transition-opacity">
    {icon}
  </button>
);

export default Navbar;
