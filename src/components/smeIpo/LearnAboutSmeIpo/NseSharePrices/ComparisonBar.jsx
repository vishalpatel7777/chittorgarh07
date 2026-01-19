const brokers = [
  "5paisa",
  "Aditya Birla Money",
  "Alice Blue",
  "Anand Rathi",
  "Angel One",
  "AxisDirect",
  "Bajaj Broking",
  "BlinkX",
  "Dhan",
  "Firstock",
  "Fyers",
  "Geojit",
  "Groww",
  "HDFC Securities",
  "ICICIdirect",
  "INDmoney",
  "Kotak Securities",
  "m.Stock",
  "Mirae Asset Sharekhan",
  "Motilal Oswal",
  "Nuvama (Edelweiss)",
  "Paytm Money",
  "Prostocks",
  "SAMCO",
  "SBI Securities",
  "Upstox",
  "Zerodha",
];

const ComparisonBar = () => {
  return (
    <form
      className="
        mt-4 mb-2  gap-4
        rounded-2xl p-4 text-white
        lg:flex-row lg:items-center
        bg-[url('https://www.chittorgarh.com/images/compare_bg_mobile.png')]
        bg-cover bg-no-repeat bg-bottom
      "
    >
      {/* Heading */}
      <div className="mb-4 ">
        <h2 className="flex items-start gap-2 text-xl font-bold">
          Side-by-Side Comparison of Broker
        </h2>
      </div>

      {/* Inputs */}
      <div className="grid w-fit grid-cols-3 gap-3 md:grid-cols-3">
        {/* Broker 1 */}
        <div className="flex">
          <span className="flex items-center rounded-l-md bg-white px-3 text-green-700">
            📊
          </span>
          <select
            className="
              w-full rounded-r-md border-0
              bg-white px-3 py-2 text-sm text-gray-800
              focus:outline-none focus:ring-2 focus:ring-green-600
            "
          >
            <option value="">Choose Broker 1</option>
            {brokers.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Broker 2 */}
        <div className="flex">
          <span className="flex items-center rounded-l-md bg-white px-3 text-green-700">
            📊
          </span>
          <select
            className="
              w-full rounded-r-md border-0
              bg-white px-3 py-2 text-sm text-gray-800
              focus:outline-none focus:ring-2 focus:ring-green-600
            "
          >
            <option value="">Choose Broker 2</option>
            {brokers.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Button */}
        <button
          type="button"
          className="
            w-full rounded-md border border-white
            px-4 py-2 text-sm font-semibold
            text-white transition
            hover:bg-white hover:text-green-700
          "
        >
          Compare Broker
        </button>
      </div>
    </form>
  );
};

export default ComparisonBar;
