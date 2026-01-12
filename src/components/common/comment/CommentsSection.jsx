import { useState, useMemo } from "react";
import { commentsData as initialData } from "@data/ipo/MainboardIpoInfo/currentIpos/CommentsData";
import { getNextCommentId, getNextReplyId } from "@utils/commentUtils";
import CommentsHeader from "./CommentsHeader";
import CommentItem from "./CommentItem";

export default function CommentsSection() {
  const [comments, setComments] = useState(initialData);
  const [search, setSearch] = useState("");

  /* 🔍 Search logic */
  const filteredComments = useMemo(() => {
    if (!search) return comments;

    return comments
      .map((c) => ({
        ...c,
        replies: c.replies.filter((r) =>
          r.message.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter(
        (c) =>
          c.message.toLowerCase().includes(search.toLowerCase()) ||
          c.replies.length > 0
      );
  }, [search, comments]);

  /* 🔄 Reload */
  const handleReload = () => {
    setComments(initialData);
    setSearch("");
  };

  /* ➕ New Comment */
  const addComment = (message) => {
    const newComment = {
      id: getNextCommentId(comments),
      author: "You",
      message,
      time: new Date().toLocaleString(),
      likes: 0,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  /* 💬 Reply */
  const addReply = (parentId, message) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === parentId
          ? {
              ...c,
              replies: [
                ...c.replies,
                {
                  id: getNextReplyId(c),
                  author: "You",
                  message,
                  time: new Date().toLocaleString(),
                  likes: 0,
                },
              ],
            }
          : c
      )
    );
  };

  /* 👍 Like */
  const toggleLike = (parentId, replyId = null) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id !== parentId) return c;

        if (!replyId) {
          return { ...c, likes: c.likes + 1 };
        }

        return {
          ...c,
          replies: c.replies.map((r) =>
            r.id === replyId ? { ...r, likes: r.likes + 1 } : r
          ),
        };
      })
    );
  };

  return (
    <div className="mt-8">
      <CommentsHeader
        count={comments.length}
        search={search}
        onSearch={setSearch}
        onReload={handleReload}
        onNewMessage={addComment}
      />

      {filteredComments.map((comment) => (
        <div key={comment.id}>
          <CommentItem
            comment={comment}
            onReply={addReply}
            onLike={toggleLike}
          />

          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              parentId={comment.id}
              level={1}
              onLike={toggleLike}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
