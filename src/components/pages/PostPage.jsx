import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../api/PostService";
import {Loader} from "../UI/loader/Loader";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchCommentsByPostId, isCoomentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsByPostId(params.id);
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
      <h2>Comments</h2>
      {isCoomentsLoading
        ? <Loader/>
        :
        <div>
          {comments.map((comment) =>
            <div style={{marginTop: '5px', border: '1px solid teal'}}>
              <h3>{comment.email}</h3>
              <h4>{comment.id}. {comment.name}</h4>
              <p style={{padding: '10px'}}>{comment.body}</p>
            </div>)
          }
        </div>
      }

    </div>
  );
};

export default PostPage;