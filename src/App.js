import React, {useState} from 'react';
import './styles/App.css';
import {PostList} from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", description: "Description"},
    {id: 2, title: "Javascript 2", description: "Description 2"},
    {id: 3, title: "Javascript 3", description: "Description 3"},
    {id: 4, title: "Javascript 4", description: "Description 4"},
    {id: 5, title: "Javascript 5", description: "Description 5"},
    {id: 6, title: "Javascript 6", description: "Description 6"},
  ]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    };

    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={body}
          onChange={event => setBody(event.target.value)}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"Post List #1"}/>
    </div>
  )
}

export default App;