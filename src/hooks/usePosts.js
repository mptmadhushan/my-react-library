//src/hooks/usePosts.js
import { useGetPostsQuery } from '../api/postsApi';

export const usePosts = () => {
  const { data, error, isLoading } = useGetPostsQuery();
  return { data, error, isLoading };
};
