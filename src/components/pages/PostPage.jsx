import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../api/PostService";
import {Loader} from "../UI/loader/Loader";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);

  return (
    <div>
      <h1>You are open post page with id = {params.id}</h1>
      {isLoading
        ? <Loader/>
        :
        <div>
          <h2>{post.id}. {post.title}</h2>
          <p>{post.body}</p>
        </div>
      }
    </div>
  );
};

export default PostPage;