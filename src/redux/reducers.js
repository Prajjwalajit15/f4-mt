// src/redux/reducers.js
const initialState = {
  posts: [], // Initially, posts is an empty array
  loading: true, // Initially, set loading to true
  error: null,
};
 
const postReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, posts: action.payload, loading: false };
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
