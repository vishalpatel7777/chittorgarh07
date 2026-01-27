import React from "react";
import Chart from "@components/BrokerReviews/Chart";
import { TopDiscountBrokersData as data } from "@data/BrokerReviews/TopDiscountBrokersData";

const TopDiscountBrokersTableCard = () => {
  return (
    <div className="mb-4 w-full rounded-[0.7rem] bg-white px-2 py-3 shadow-sm md:px-4">
      
      {/* Header */}
      <div className="my-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-[#0cbc87]">
          {data.title}
        </h2>

        <div className="flex items-center gap-2">
          <select className="rounded-md border border-[#0cbc87] px-2 py-1 text-sm font-semibold text-[#0cbc87] focus:outline-none">
            {data.years.map((year) => (
              <option key={year}>Year {year}</option>
            ))}
          </select>

          <button className="flex items-center gap-2 rounded-md border border-[#0cbc87] px-3 py-1 text-sm font-medium text-[#0cbc87] hover:bg-[#0cbc87] hover:text-white">
            <i className="fa fa-file-csv text-sm" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Records */}
      <div className="mb-2 text-sm text-[#595d69]">
        <i className="fa fa-database mr-1" />
        Total Records: <span className="font-semibold">{data.totalRecords}</span>
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-md border">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-[#f7f8f9]">
            <tr>
              {["Rank", "Broker", "Active Clients", "Request Callback", "Review", "Compare"].map(
                (head) => (
                  <th key={head} className="border-b px-3 py-2 text-center font-semibold">
                    {head}
                    <div className="mt-1 flex justify-center gap-1 text-xs text-[#a1a1a8]">
                      ▲ ▼
                    </div>
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {data.rows.map((row) => (
              <tr key={row.rank} className="border-t hover:bg-[#f7f8f9]">
                <td className="px-3 py-2 text-right font-semibold">{row.rank}</td>
                <td className="px-3 py-2 text-left">{row.broker}</td>
                <td className="px-3 py-2 text-right">
                  {row.activeClients.toLocaleString("en-IN")}
                </td>
                <td className="px-3 py-2 text-left">
                  {row.ctaLink ? (
                    <a
                      href={row.ctaLink}
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded bg-[#0cbc87] px-2 py-1 text-xs font-semibold text-white"
                    >
                      Open Account
                      <img
                        src="https://www.chittorgarh.net/images/topic.gif"
                        alt=""
                        className="h-3"
                      />
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-3 py-2 text-left">
                  <a href={row.reviewLink} target="_parent">
                    <img
                      src="https://www.chittorgarh.net/images/review-icon.png"
                      alt="Review"
                      className="h-6 w-6"
                    />
                  </a>
                </td>
                <td className="px-3 py-2 text-center">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart */}
      <div className="mt-6">
        <Chart
          type="bar"
          data={data.rows}
          labelKey="broker"
          valueKey="activeClients"
          label="Broker vs Active Clients"
        />
      </div>



       <div className="w-full px-2 md:px-3">
      <div className="text-[15px] leading-7 text-[#29292e]">
        <p className="mb-3">
          Brokers in India are classified into two types based on the services
          they offer and the fee they charge:
        </p>

        <ol className="mb-4 list-decimal pl-5 space-y-1">
          <li>
            Full-service Broker (
            <a
              href="/report/top_10_full_service_brokers_by_clients_at_nse/5/"
              className="text-[#2163e8] hover:underline"
            >
              Top 10 Full-service Brokers
            </a>
            )
          </li>
          <li>Discount Broker</li>
        </ol>

        <p className="mb-3">
          The discount brokers (flat fee brokers or budget brokers) are online
          stock brokers offering low-cost brokerage services. They are
          technology-driven brokers with low operations cost.
        </p>

        <p className="mb-3">
          Most discount brokers do not offer add-ons like research, advisory
          (trading tips), PMS, Wealth Management, dedicated relationship manager
          and local branch support. This allows them to offer trading at a very
          low brokerage charges.
        </p>

        <p className="mb-3">
          The discount brokerage firms charge over{" "}
          <strong>60% lower brokerage fees</strong> in comparison to full-service
          brokers. They offer free online trading software to all the customers.
        </p>

        <p className="mb-3">
          The <strong>most popular discount brokers</strong> include Zerodha,
          5paisa and Upstox.
        </p>

        <p className="mb-3">
          Most discount brokers including Zerodha and Upstox offer{" "}
          <strong>brokerage free equity delivery trading</strong> and{" "}
          <strong>direct mutual funds</strong>. For all other segments, they
          charge a <strong>flat rate brokerage</strong> i.e. Rs 20 per executed
          order irrespective of the size of the trade.
        </p>

        <p className="mb-3">
          A discount broker like 5paisa also offers free research and advisory to
          all customers.
        </p>

        <p className="mb-3">
          Some discount stock brokers like ProStocks also offer fixed monthly{" "}
          <strong>
            <a
              href="/article/unlimited_brokerage_plan_in_india_stock_market/76/"
              className="text-[#2163e8] hover:underline"
            >
              unlimited trading plans
            </a>
          </strong>
          . These plans allow the customer to trade unlimited times in a month
          for a fixed low monthly cost.
        </p>

        <p className="mb-4">
          Zerodha is the <strong>most famous discount broker</strong> with over
          10 lakh customers. They are the most popular broker in India with
          excellent products and services.
        </p>

        <p className="mb-2 font-semibold">Note:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            The data for this report is compiled from BSE and NSE stock exchanges.
          </li>
          <li>
            The <strong>best broker ranking</strong> is updated every month.
          </li>
          <li>Click on the broker name to read broker review.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default TopDiscountBrokersTableCard;
