import React, {useState} from 'react';
import './styles/App.css';
import {PostList} from "./components/PostList";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import {MyButton} from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", description: "Description"},
    {id: 2, title: "Javascript 2", description: "Description 2"},
    {id: 3, title: "Javascript 3", description: "Description 3"},
    {id: 4, title: "Javascript 4", description: "Description 4"},
    {id: 5, title: "Javascript 5", description: "Description 5"},
    {id: 6, title: "Javascript 6", description: "Description 6"},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Post List #1"}/>
    </div>
  )
}

export default App;