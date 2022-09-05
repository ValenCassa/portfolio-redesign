import axios from "axios";
import useSWR from "swr";
import { Post } from "types/Post";

const fetcher = async (url: string) =>
  axios.get<Post[] | Post>(url).then((res) => res.data);

const usePosts = (id?: string) => {
  const url = id && id !== "dashboard" ? `/api/posts?id=${id}` : "/api/posts";
  const { data: posts, error, mutate } = useSWR(url, fetcher);

  return {
    isLoading: !error && !posts,
    posts,
    error,
    refetch: mutate,
  };
};

export default usePosts;
