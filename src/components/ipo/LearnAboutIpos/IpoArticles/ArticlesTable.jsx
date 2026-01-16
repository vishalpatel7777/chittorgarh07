import { IpoArticlesData } from '@data/ipo/LearnAboutIpos/IpoArticlesData';

const ArticlesTable = () => {
  return (
    <div className="mt-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h2 className="text-green-700 font-bold text-lg">
          Mainboard IPO Reviews, Tutorials and News Articles
        </h2>

        <button className="border border-green-600 text-green-700 text-sm px-3 py-1 rounded flex items-center gap-1">
          📄 <span className="hidden sm:inline">Export</span>
        </button>
      </div>

      <p className="text-xs text-gray-500 mb-2">
        🗄 Total Records: <span className="font-semibold">{IpoArticlesData.length}</span>
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-max text-sm border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="px-3 py-2 text-right">S No</th>
              <th className="px-3 py-2 text-left">Title</th>
              <th className="px-3 py-2 text-right">Feedback Count</th>
            </tr>
          </thead>

          <tbody>
            {IpoArticlesData.map((row, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-3 py-2 text-right">{idx + 1}</td>

                <td className="px-3 py-2 text-left">
                  <a
                    href={row.url}
                    className="text-blue-600 hover:underline"
                    target="_parent"
                    rel="noreferrer"
                  >
                    {row.highlight ? (
                      <mark className="bg-yellow-200 px-1">
                        {row.title}
                      </mark>
                    ) : (
                      row.title
                    )}
                  </a>
                </td>

                <td className="px-3 py-2 text-right">{row.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticlesTable;
