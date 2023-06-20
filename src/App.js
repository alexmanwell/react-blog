import React, {useMemo, useState} from 'react';
import './styles/App.css';
import {PostList} from "./components/PostList";
import {PostForm} from "./components/PostForm";
import {MySelect} from "./components/UI/select/MySelect";
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
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    return (selectedSort)
      ? [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
      : posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={'Поиск...'}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'description', name: 'По описанию'}
          ]}
        />
      </div>

      {sortedAndSearchedPosts.length
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Post List #1"}/>
        :
        <h1 style={{textAlign: 'center'}}>
          Posts not found
        </h1>
      }
    </div>
  )
}

export default App;