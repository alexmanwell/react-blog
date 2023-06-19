import React from 'react';
import {PostItem} from "./PostItem";

export const PostList = ({posts, title}) => {
  return (
    <div>
      <h1>{title}:</h1>
      {posts.map((post, index) =>
        <PostItem number={index + 1} post={post} key={new Date() + index}/>
      )}
    </div>
  );
};