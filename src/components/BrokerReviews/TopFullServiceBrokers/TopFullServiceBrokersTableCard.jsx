import React, { useState } from "react";
import BrokerClientsChart from "@/components/BrokerReviews/Chart"; // adjust path if needed

const TopFullServiceBrokersTableCard = ({ title, years, rows }) => {
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white px-2 py-2 shadow-sm md:px-3">
      {/* Header */}
      <div className="my-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="text-lg font-bold text-[#025c41]">
          {title}
        </h2>

        <div className="flex items-center gap-2">
          {/* Year Select */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="
              rounded
              border
              border-[#025c41]
              px-2
              py-[0.3rem]
              text-sm
              font-bold
              text-[#025c41]
              focus:outline-none
            "
          >
            {years.map((year) => (
              <option key={year} value={year}>
                Year {year}
              </option>
            ))}
          </select>

          {/* Export Button */}
          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              rounded
              border
              border-[#025c41]
              px-3
              py-1
              text-sm
              font-semibold
              text-[#025c41]
              hover:bg-[#025c41]
              hover:text-white
            "
          >
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <small className="mb-2 block text-sm text-[#595d69]">
          Total Records: <span className="font-semibold">{rows.length}</span>
        </small>

        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-0 bg-[#f7f8f9]">
            <tr>
              {[
                "Rank",
                "Broker",
                "Active Clients",
                "Request Callback",
                "Review",
                "Compare",
              ].map((head) => (
                <th
                  key={head}
                  className="
                    border
                    border-[#dfe0e5]
                    px-2
                    py-2
                    text-center
                    font-semibold
                    text-[#29292e]
                  "
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.broker}
                className={index === 0 ? "bg-[#ffffcc]" : "hover:bg-[#f7f8f9]"}
              >
                <td className="border border-[#dfe0e5] px-2 py-2 text-right">
                  {row.rank}
                </td>

                <td className="border border-[#dfe0e5] px-2 py-2 text-left">
                  {row.broker}
                </td>

                <td className="border border-[#dfe0e5] px-2 py-2 text-right">
                  {row.activeClients?.toLocaleString() || "-"}
                </td>

                <td className="border border-[#dfe0e5] px-2 py-2 text-left">
                  {row.ctaLink ? (
                    <a
                      href={row.ctaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-block
                        rounded
                        bg-[#0cbc87]
                        px-2
                        py-1
                        text-xs
                        font-semibold
                        text-white
                      "
                    >
                      Open Account
                    </a>
                  ) : (
                    ""
                  )}
                </td>

                <td className="border border-[#dfe0e5] px-2 py-2 text-center">
                  <a href={row.link} target="_parent">
                    <img
                      src="https://www.chittorgarh.net/images/review-icon.png"
                      alt={`${row.broker} Review`}
                      className="mx-auto h-[25px] w-[25px]"
                    />
                  </a>
                </td>

                <td className="border border-[#dfe0e5] px-2 py-2 text-center">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart */}
      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[600px] h-[400px]">
        <BrokerClientsChart
  type="bar"
  data={rows}
  labelKey="broker"
  valueKey="activeClients"
  title="Broker vs Active Clients"
  barColor="#0cbc87"
/>

        </div>
      </div>



      <div className="mt-3 flex w-full flex-wrap px-2">
      <div className="w-full">
        <div className="rounded-lg p-4 text-[0.9375rem] leading-[1.8rem] text-[#1e1e27] ">
          <p className="mb-3">
            There are two types of brokers in India based on the services and
            fees:
          </p>

          <ol className="mb-3 list-decimal pl-6">
            <li className="mb-1">Full-service Broker</li>
            <li className="mb-1">
              Discount Broker{" "}
              <a
                href="/report/top_10_discount_brokers_in_india_by_clients_at_nse/3/"
                className="font-medium text-[#2163e8] hover:text-[#1a4fba]"
              >
                (Top 10 Discount Brokers)
              </a>
            </li>
          </ol>

          <p className="mb-3">
            A full-service broker offers a range of add-ons in addition to
            trading at stock exchanges. This includes research reports,
            advisory and a relationship manager apart from helping you buy and
            sell shares. They also offer a wide range of products including
            Mutual Funds, IPO, Debt, Insurance and Loans.
          </p>

          <p className="mb-3">
            On the other side, a Discount Broker leverages technology to reduce
            the operation cost and offer low-cost online brokerage services.
            Discount brokers do not offer add-ons usually offered by a full
            service broker.
          </p>

          <p className="mb-2 font-medium">
            A full-service broker is good for following investors/traders:
          </p>

          <ol className="mb-3 list-decimal pl-6">
            <li className="mb-1">
              A beginner investors need to have their hand held by some in
              initial days of trading.
            </li>
            <li className="mb-1">
              Traders who are looking for higher margin or margin funding.
            </li>
            <li className="mb-1">
              Traders planning to use Call &amp; Trade a lot or visit the branch
              in person.
            </li>
            <li className="mb-1">
              Investors looking for a verity of financial products for
              investment through the broker i.e. Mutual Funds, IPO, Debt,
              Insurance, FD etc.
            </li>
          </ol>

          <p className="mb-3">
            The <strong>most popular full-service brokers</strong> include
            ICICI, HDFC and Sharekhan.
          </p>

          <p className="mb-3">
            The 3-in-1 account (a combination of bank saving account, a trading
            account and a demat account) is one the best offering by the{" "}
            <strong>top full service brokerage firms</strong>. The 3-in-1
            account helps in the seamless transaction between these 3 accounts.
          </p>

          <p className="mb-3">
            Apart from the standard % based brokerage structure, most
            traditional brokerages also offer volume-based plans where the
            brokerage varies according to the size of transactions.
          </p>

          <p className="mb-3">
            ICICI is the <sup>2nd</sup> largest and{" "}
            <strong>most famous full-service broker</strong> with over 10 lakh
            customers.
          </p>

          <p className="mb-1 font-semibold">Note:</p>
          <ul className="list-disc pl-6 text-sm text-[#595d69]">
            <li>The data for this report is compiled from BSE and NSE.</li>
            <li>The best broker ranking is updated every month.</li>
            <li>Click on the broker name to read broker review.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopFullServiceBrokersTableCard;
