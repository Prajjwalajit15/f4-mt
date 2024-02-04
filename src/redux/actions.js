// src/redux/actions.js
export const fetchPosts = () => async (dispatch) => {

  try {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
  }
};
