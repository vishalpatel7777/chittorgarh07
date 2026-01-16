import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IpoArticlesTabs } from "@data/ipo/LearnAboutIpos/IpoArticlesTabs";

import IpoArticlesCard from '@components/ipo/LearnAboutIpos/IpoArticles/IpoArticlesCard'


const IpoReportsTabLayout = () => {
  
  const location = useLocation();
  
    // Determine active tab safely
    const activeTab =
      IpoArticlesTabs.find(tab =>
        tab.path === ""
          ? location.pathname.endsWith("/ipos/articles")
          : location.pathname.includes(tab.path)
      ) || IpoArticlesTabs[0];
  

  return (
    <>
      
      {/* Tabs */}
      {/* <nav className=" mb-3 flex gap-2 border-b border-[rgba(34,34,47,0.1)]">
        {IpoArticlesTabs.map(tab => (
          <NavLink
            key={tab.label}
            to={tab.path}
            end={tab.path === ""}
            className={({ isActive }) =>
              `
              px-3 py-2 text-sm font-semibold
              ${
                isActive
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }
              `
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav> */}

      <nav className="mb-3">
  <ul className="flex flex-wrap gap-2">
{IpoArticlesTabs.map(tab => (
  <NavLink
    key={tab.label}
    to={tab.path}
    end={tab.path === ""}
    className={({ isActive }) =>
      `
        px-4 py-2
        text-sm font-semibold
        rounded-full
        transition-all duration-200
        ${
          isActive
            ? "bg-green-600 text-white shadow-sm"
            : "text-gray-700 hover:bg-green-50 hover:text-green-700"
        }
      `
    }
  >
    {tab.label}
  </NavLink>
))}
  </ul>
</nav>


        <h1 className="font-semibold text-2xl mb-3">
                {activeTab.title}
              </h1>

              
      <IpoArticlesCard />
      {/* Routed content */}
      <div className=" bg-white
                rounded-[0.7rem]
                shadow-sm
                px-2 md:px-4
                py-2
                mb-4
                overflow-hidden
             ">
        <Outlet />
      </div>
    </>
  );
};

export default IpoReportsTabLayout;
