interface Comment {
  id: string;
  content: string;
  status: string;
}

function CommentList({ comments }: { comments: Comment[] }) {
  const renderedComments = comments.map((comment) => {
    let content;
    switch (comment.status) {
      case 'approved':
        content = comment.content;
        break;
      case 'rejected':
        content = 'Comment being rejected';
        break;
      default:
        content = 'Pending checking';
        break;
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

export default CommentList;
