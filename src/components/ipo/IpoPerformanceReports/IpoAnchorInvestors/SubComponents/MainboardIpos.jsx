import React from "react";
import IpoTableCard from '../IpoAnchorInvestorsTable';
import { ipoAnchorInvestorsData } from "@data/ipo/IpoPerformanceReports/IpoAnchorInvestorsData";

export const MainboardIpos = () => {
  return (
    <div className="w-full">
      <IpoTableCard
        title="Mainboard IPOs – Anchor Investor-wise investments"
        data={ipoAnchorInvestorsData}
      />
    </div>
  );
};



