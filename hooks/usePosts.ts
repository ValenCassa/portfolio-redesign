import axios from "axios";
import useSWR from "swr";
import { Post } from "types/Post";

const fetcher = (url: string) =>
  axios.get<Post[] | Post>(url).then((res) => res.data);

const usePosts = (id?: string) => {
  const url = id ? `/api/posts?id=${id}` : "/api/posts";
  const { data: posts, error, mutate } = useSWR(url, fetcher);

  return {
    isLoading: !error && !posts,
    posts,
    error,
    refetch: mutate,
  };
};

export default usePosts;
