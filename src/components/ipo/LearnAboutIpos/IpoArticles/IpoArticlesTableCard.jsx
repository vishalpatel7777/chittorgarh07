import ArticleFilters from "./ArticleFilters";
import ArticleSearchBar from "./ArticleSearchBar";
import ArticlesTable from "./ArticlesTable";


const IpoArticlesTableCard = () => {
  return (
    <div
      className="
        bg-white
        shadow-sm
        rounded-[0.7rem]
        py-2
        px-2
        md:px-4
        mb-3
        overflow-hidden
      "
    >
      {/* Filters */}
      <ArticleFilters />

      {/* Search Row */}
      <ArticleSearchBar />

      {/* Table Section */}
      <ArticlesTable />
    </div>
  );
};

export default IpoArticlesTableCard;
