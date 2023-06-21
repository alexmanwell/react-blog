import React from 'react';

const CommentItem = ({comment}) => {
  return (
    <div style={{marginTop: '5px', border: '1px solid teal'}}>
      <h3>{comment.email}</h3>
      <h4>{comment.id}. {comment.name}</h4>
      <p style={{padding: '10px'}}>{comment.body}</p>
    </div>
  );
};

export default CommentItem;