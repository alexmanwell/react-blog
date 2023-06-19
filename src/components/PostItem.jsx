import React from 'react';

export const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.description}</div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};