import React from 'react';
import {PostItem} from "./PostItem";

export const PostList = ({posts, title, remove}) => {
  return (
    <div>
      <h1>{title}:</h1>
      {posts.map((post, index) =>
        <PostItem remove={remove} number={index + 1} post={post} key={Date.now() + index}/>
      )}
    </div>
  );
};