export default function CommentsHeader({
  count,
  search,
  onSearch,
  onReload,
  onNewMessage,
}) {
  return (
    <div className="bg-white border rounded-lg p-3 mb-4">
      <h2 className="text-lg font-bold mb-3">{count} Comments</h2>

      <div className="flex justify-between items-center gap-3 flex-wrap">
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search Message"
          className="border rounded px-3 py-1.5 text-sm"
        />

        <div className="flex gap-2">
          <button onClick={onReload} className="text-sm text-blue-600">
            Reload
          </button>

          <button
            onClick={() => {
              const msg = prompt("Enter your comment");
              if (msg) onNewMessage(msg);
            }}
            className="bg-[#0cbc87] text-white px-4 py-2 rounded text-sm"
          >
            New Message
          </button>
        </div>
      </div>
    </div>
  );
}
