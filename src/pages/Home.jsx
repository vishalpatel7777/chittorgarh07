import React from "react";
import RouteList from '@routes/RouteList';
import { mainboardRoutes, smeRoutes } from  '@utils/routes'

const Home = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <RouteList
        title="Mainboard IPO Routes"
        routes={mainboardRoutes}
      />

      <RouteList
        title="SME IPO Routes"
        routes={smeRoutes}
      />
    </main>
  );
};

export default Home;
