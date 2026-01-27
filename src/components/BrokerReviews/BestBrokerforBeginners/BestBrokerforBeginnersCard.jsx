import React from "react";

const BestBrokerforBeginnersCard = () => {
  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white px-2 py-3 shadow-sm md:px-3">
      <div className="mt-2 clearfix">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/best-online-stock-brokers-for-beginners.jpg"
          alt="Best Stock Broker for Beginners in India 2026"
          width={300}
          className="
            mx-auto mb-3 block
            rounded
            border-0
            shadow-sm
            md:float-left
            md:mr-4
            md:mb-2
          "
        />

        {/* Content */}
        <div className="text-sm leading-relaxed text-[#22222f]">
          <p className="mb-3">
            A stockbroker account enables you to invest in stocks, mutual funds,
            IPO, and bonds. There are hundreds of stockbrokers in India. We can
            help you find the{" "}
            <strong>best brokerage firm in India for beginners.</strong>
          </p>

          <p className="mb-2">
            As a beginner, you should look for the following factors when
            choosing a stockbroker:
          </p>

          <ul className="mb-3 list-disc pl-6">
            <li>An investor education program by the broker</li>
            <li>Low cost of trading</li>
            <li>A simple trading platform</li>
            <li>Availability of Direct Mutual Funds and IPOs</li>
          </ul>

          <p className="mb-2">A beginner should consider two charges:</p>

          <ol className="mb-3 list-decimal pl-6">
            <li className="mb-2">
              <strong>Demat AMC</strong>
              <p className="mt-1">
                A recurring yearly charge to maintain the demat account. The
                Demat account maintenance charge (AMC) is charged even if you do
                not use the account.
              </p>
            </li>

            <li>
              <strong>Brokerage for Equity Delivery</strong>
              <p className="mt-1">
                The fee you pay to the broker when you buy or sell shares in a
                cash transaction. The equity shares in these transactions are
                deposited or withdrawn from the demat account.
              </p>
            </li>
          </ol>

          <p>
            Below is the list of{" "}
            <strong>
              the best discount brokers in India for beginners
            </strong>
            . This list compares the top stockbrokers who charge less and
            provide excellent online stock trading services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestBrokerforBeginnersCard;
