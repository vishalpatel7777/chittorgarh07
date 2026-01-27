import React from "react";
import RouteList from '@routes/RouteList';
import { mainboardRoutes, smeRoutes , ncdRoutes , mutualFundsRoutes , brokerReviewsRoutes} from  '@utils/routes'

const Home = () => {
  return (
    <main className="max-w-5xl mx-auto p-6">
      {/* <RouteList
        title="Mainboard IPO Routes"
        routes={mainboardRoutes}
      />

      <RouteList
        title="SME IPO Routes"
        routes={smeRoutes}
      /> */}

      <RouteList
        title="NCD Routes"
        routes={ncdRoutes}
      />

      <RouteList
        title="Mutual Funds Routes"
        routes={mutualFundsRoutes}
      />

      <RouteList 
        title="Broker Reviews Routes"
        routes={brokerReviewsRoutes}
      />

    </main>
  );
};

export default Home;
