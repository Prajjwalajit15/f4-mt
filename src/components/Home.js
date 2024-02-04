// src/components/Home.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
// const posts = useSelector((state) => state.postReducer.posts);

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
       <div className='nav'>
        <h5>TravelMedia.in</h5>
             <div className='nav1'> 
                 <img src='../assets/home.png' alt='img' />
                 <img src='../assets/bell.png' alt='img' />
                 <img src='../assets/save.png' alt='img' />
                 <img src='../assets/person.png' alt='img' /> 
            </div>
        </div>

      <h1>Home Page</h1>
      {loading && <p>Loading...</p>}
       
       
      {posts?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body.slice(0, 100)}...</p>
          <Link to={`/item/${post.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  );
  
};

export default Home;
