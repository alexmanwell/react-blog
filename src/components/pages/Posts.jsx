import React, {useEffect, useState} from 'react';
import {usePosts} from "../../hooks/usePosts";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../api/PostService";
import {getCountPage} from "../../utils/pages";
import {MyButton} from "../UI/button/MyButton";
import {PostForm} from "../PostForm";
import {PostFilter} from "../PostFilter";
import {Loader} from "../UI/loader/Loader";
import {PostList} from "../PostList";
import Pagination from "../UI/pagination/Pagination";
import MyModal from "../UI/modal/MyModal";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getCountPage(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
      {postError &&
      <h1>Произошла ошибка <span style={{color: 'red'}}>{postError}</span></h1>
      }
      {isPostsLoading
        ?
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Loader/>
        </div>
        :
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Post List #1"}/>
      }
      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  )
};