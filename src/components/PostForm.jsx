import React, {useState} from 'react';
import {MyInput} from "./UI/input/MyInput";
import {MyButton} from "./UI/button/MyButton";

export const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', description: ''});

  const addNewPost = (e) => {
    e.preventDefault();

    create({...post, id: Date.now()});
    setPost({title: '', description: ''});
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={event => setPost({...post, title: event.target.value})}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.description}
        onChange={event => setPost({...post, body: event.target.value})}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>

  );
};