import { NavLink } from "react-router-dom";

const RouteList = ({ title, routes }) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-emerald-700">
        {title}
      </h2>

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
            <span className="w-6 text-sm text-gray-500">
              {route.id}
            </span>
            <span className="flex-1">{route.label}</span>
            <span className="text-xs text-gray-400">
              {route.path}
            </span>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default RouteList;
