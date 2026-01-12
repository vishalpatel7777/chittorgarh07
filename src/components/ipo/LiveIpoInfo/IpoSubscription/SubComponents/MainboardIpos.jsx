
import IpoSubscriptionTable  from "@components/ipo/LiveIpoInfo/IpoSubscription/IpoSubscriptionTable";
import IpoSubscriptionDisclaimer from '../IpoSubscriptionDisclaimer'

export  function MainboardIpos() {
  return (
    <>
      <h1 className="text-lg font-bold mb-3">
        Live IPO Subscription Status from BSE and NSE: 2026
      </h1>

      <div className="bg-white  rounded-lg p-3 shadow-sm flex flex-col md:flex-row gap-4">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_ipo-subscription-status-live-bidding-data-bse-nse_21.png"
          alt="Live IPO Subscription Status"
          className="w-[300px] h-auto rounded shadow-sm"
        />

        {/* Content */}
        <div className="text-sm text-gray-700">
          <p className="mb-2">
            This report provides live IPO subscription data with details on
            total issue size, category-wise demand (QIB, NII, Retail, Employee,
            Others), and total applications received.
          </p>

          <p className="text-green-700 font-medium mb-3">
            IPO Subscription vs Listing Gain || IPO Listing Date, Time and Status
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mt-3">
            <Legend color="bg-green-300" label="Issue open" />
            <Legend color="bg-yellow-200" label="Yet to List" />
            <Legend color="bg-cyan-200" label="Listing today" />
          </div>
        </div>
        
      </div>
      <div className=" mt-3 bg-white  rounded-lg p-3 shadow-sm gap-4">
    <IpoSubscriptionTable />
    <IpoSubscriptionDisclaimer />
      </div>
    </>
  );
}

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span className={`w-4 h-4 rounded-full border ${color}`} />
    <span className="text-xs font-semibold">{label}</span>
  </div>
);
