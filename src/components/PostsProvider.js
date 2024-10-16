//src/components/PostsProvider.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const PostsProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default PostsProvider;
