// src/utils/commentUtils.js
export function getNextCommentId(comments) {
  return comments.length + 1;
}

export function getNextReplyId(parent) {
  return `${parent.id}.${parent.replies.length + 1}`;
}
