import React from 'react';
import CommentItem from "./CommentItem";

const CommentList = ({comments}) => {
  return (
    <div>
      {comments.map((comment) =>
        <CommentItem comment={comment} key={comment.id}/>
      )}
    </div>
  );
};

export default CommentList;