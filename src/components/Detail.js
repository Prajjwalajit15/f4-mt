// src/components/Detail.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === Number(id))
  );
   

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    // You can fetch additional details for a single post if needed
    // Example: dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Detail Page</h1>
      {loading && <p>Loading...</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>User ID: {post.userId}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
