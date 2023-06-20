import React, {useState} from 'react';
import './styles/App.css';
import {PostList} from "./components/PostList";
import {PostForm} from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", description: "Description"},
    {id: 2, title: "Javascript 2", description: "Description 2"},
    {id: 3, title: "Javascript 3", description: "Description 3"},
    {id: 4, title: "Javascript 4", description: "Description 4"},
    {id: 5, title: "Javascript 5", description: "Description 5"},
    {id: 6, title: "Javascript 6", description: "Description 6"},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title={"Post List #1"}/>
        :
        <h1 style={{textAlign: 'center'}}>
          Posts not found
        </h1>
      }
    </div>
  )
}

export default App;