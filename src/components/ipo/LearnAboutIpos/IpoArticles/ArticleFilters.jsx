const ArticleFilters = () => {
  return (
    <div className="hidden md:flex items-center gap-4 mt-3">
      <label className="text-sm font-semibold whitespace-nowrap">
        Choose Option:
      </label>

      <select
        className="
          w-64
          text-sm
          rounded
          border
          border-gray-300
          px-2
          py-1.5
          shadow-sm
          focus:outline-none
          focus:ring-1
          focus:ring-green-600
        "
      >
        <option>Mainboard IPO</option>
        <option>SME IPO</option>
        <option>Stock Brokers</option>
        <option>Sponsored Articles</option>
        <option>NRI Trading</option>
        <option>NCD & Bonds</option>
        <option>Options Trading</option>
        <option>Miscellaneous</option>
        <option>History & Tourism</option>
        <option>City Info</option>
      </select>
    </div>
  );
};

export default ArticleFilters;
