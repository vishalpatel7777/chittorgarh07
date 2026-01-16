const ArticleSearchBar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-3">
      <input
        type="text"
        placeholder="Title"
        maxLength={50}
        className="
          w-1/2
          md:w-1/4
          text-sm
          rounded
          border
          border-gray-300
          px-2
          py-1
          focus:outline-none
          focus:ring-1
          focus:ring-green-600
        "
      />

      <div className="flex gap-2">
        <button className="bg-green-600 text-white text-sm px-3 py-1 rounded shadow-sm flex items-center gap-1">
          🔍 <span className="hidden md:inline">Search</span>
        </button>

        <button className="bg-red-600 text-white text-sm px-3 py-1 rounded shadow-sm flex items-center gap-1">
          ✖ <span className="hidden md:inline">Clear</span>
        </button>
      </div>
    </div>
  );
};

export default ArticleSearchBar;
