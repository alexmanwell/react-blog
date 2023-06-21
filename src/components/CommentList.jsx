import React from 'react';

const CommentList = ({comments}) => {
  return (
    <div>
      {comments.map((comment) =>
        <div style={{marginTop: '5px', border: '1px solid teal'}}>
          <h3>{comment.email}</h3>
          <h4>{comment.id}. {comment.name}</h4>
          <p style={{padding: '10px'}}>{comment.body}</p>
        </div>)
      }
    </div>
  );
};

export default CommentList;