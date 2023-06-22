import React, {useEffect, useRef, useState} from 'react';
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
import {useObserver} from "../../hooks/useObserver";
import {MySelect} from "../UI/select/MySelect";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getCountPage(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () =>{
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
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
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Amount elements in page'
        options={[
          {value: 5, name:'5'},
          {value: 10, name:'10'},
          {value: 25, name:'25'},
          {value: -1, name:'all'}
        ]}
      />
      {postError &&
      <h1>Произошла ошибка <span style={{color: 'red'}}>{postError}</span></h1>
      }

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Post List #1"}/>
      <div style={{height: '20px', backgroundColor: 'red'}} ref={lastElement} />
      {isPostsLoading &&
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Loader/>
        </div>
      }
      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  )
};