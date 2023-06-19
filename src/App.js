import React, {useState} from 'react';
import './styles/App.css';
import {PostList} from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", description: "Description"},
    {id: 2, title: "Javascript 2", description: "Description 2"},
    {id: 3, title: "Javascript 3", description: "Description 3"},
    {id: 4, title: "Javascript 4", description: "Description 4"},
    {id: 5, title: "Javascript 5", description: "Description 5"},
    {id: 6, title: "Javascript 6", description: "Description 6"},
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={"Post List #1"}/>
    </div>
  )
}

export default App;