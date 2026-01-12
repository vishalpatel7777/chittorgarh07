import { FaThumbsUp } from "react-icons/fa";
import { useState } from "react";

export default function CommentItem({
  comment,
  level = 0,
  parentId,
  onReply,
  onLike,
}) {
  const [replying, setReplying] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className={`bg-white border rounded-lg mb-4 ${level ? "ml-12" : ""}`}>
      <div className="flex justify-between items-center border-b px-4 py-2">
        <strong className="text-sm">
          {comment.id}. {comment.author}
        </strong>

        {!level && (
          <button
            onClick={() => setReplying(!replying)}
            className="text-xs bg-[#0cbc87] text-white px-3 py-1 rounded"
          >
            Reply
          </button>
        )}
      </div>

      <div className="px-4 py-3 text-sm whitespace-pre-line">
        {comment.message}
      </div>

      <div className="flex items-center gap-4 border-t px-4 py-2 text-xs text-gray-500">
        <button
          onClick={() => onLike(parentId || comment.id, parentId && comment.id)}
          className="flex items-center gap-1"
        >
          <FaThumbsUp className="text-green-600" />
          {comment.likes}
        </button>

        <span>{comment.time}</span>
      </div>

      {replying && (
        <div className="px-4 pb-3">
          <textarea
            className="w-full border rounded p-2 text-sm"
            rows={2}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              onReply(comment.id, text);
              setText("");
              setReplying(false);
            }}
            className="mt-2 text-xs bg-[#0cbc87] text-white px-3 py-1 rounded"
          >
            Submit Reply
          </button>
        </div>
      )}
    </div>
  );
}
