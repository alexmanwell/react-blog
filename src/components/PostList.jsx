import React from 'react';
import {PostItem} from "./PostItem";
import TransitionGroup from "react-transition-group/esm/TransitionGroup";
import CSSTransition from "react-transition-group/esm/CSSTransition";

export const PostList = ({posts, title, remove}) => {
  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>
        Posts not found
      </h1>)
  }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}:</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={300}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post} key={Date.now() + index}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};