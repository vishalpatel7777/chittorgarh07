import React from "react";
import IpoMerchantBankerTable from '@components/ipo/IpoPerformanceReports/IpoMerchantBanker/IpoMerchantBankerTable'
import { ipoMerchantBankerData } from '@data/ipo/IpoPerformanceReports/IpoMerchantBankerData'

export const SmeIpos = () => {
  return (
    <div className="w-full">
      <IpoMerchantBankerTable
        title="Lead Manager Performance – By No. of Mainboard & SME IPOs managed: 2026"
        data={ipoMerchantBankerData}
      />
    </div>
  );
};

