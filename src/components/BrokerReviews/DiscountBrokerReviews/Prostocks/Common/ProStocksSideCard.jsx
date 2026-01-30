import { FaArrowDown } from "react-icons/fa";

const ProStocksSideCard = () => {
  return (
    <div className="float-right mb-2 px-2">
      {/* Clients Card */}
      <div className="mx-auto mt-2 mb-3 max-w-[320px] rounded-xl border border-gray-300 bg-white p-3 shadow-sm">
        <p className="mb-0 text-[17px] text-red-600">
          <span className="float-right ml-1 bg-red-600 px-3 text-white flex items-center justify-between gap-2">
                        <span><FaArrowDown /></span>
             -5.32%
          </span>
          6,617 Clients
          <button
            type="button"
            className="ml-2 inline-block p-0"
            title="This field shows the number of active customers with the stockbroker in the last month (clients who traded at least once). The box on the right shows the growth in the number of clients in comparison to the last financial year."
          >
            <img
              alt="Number of Unique Clients"
              width="10"
              height="10"
              loading="lazy"
              title="Number of Unique Clients"
              src="https://www.chittorgarh.net/images/question-mark.gif"
              className="inline-block h-[10px] w-[10px] object-cover"
            />
          </button>
        </p>
      </div>

      {/* Account Opening Box */}
      <div className="mx-auto shadow-gray-400 p-3 text-center shadow-md rounded-3xl bg-[#ffc] border-t-3 border-t-red-600">
        <h5 className="mb-2 font-bold text-red-600">
          🚀 Open Your <span className="uppercase">Prostocks</span> Account Today!
        </h5>
        <div className="text-sm leading-relaxed text-gray-800">
          Pay Rs 899 per month for unlimited trading or flat Rs 15 per Trade +
          Brokerage-Free Equity Delivery + Lifetime Free AMC Demat Account.{" "}
          <a
            href="https://tinyurl.com/broker-prostocks"
            target="_blank"
            rel="noopener noreferrer"
            title="ProStocks - Free Instant Demat Account Opening"
            className="ml-1 inline-block rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white no-underline hover:bg-red-700"
          >
            Open FREE Instant Demat Account
          </a>{" "}
          and start trading today.
        </div>
      </div>
    </div>
  );
};

export default ProStocksSideCard;
