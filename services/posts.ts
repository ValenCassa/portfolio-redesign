import axios from "axios";
import { Post } from "types/Post";

export const createPost = async (values: Post) => {
  const data = await axios.post<Post>("/api/posts", values);
  return data.data;
};

export const removePost = async (id: string) => {
  await axios.delete(`/api/posts?id=${id}`);
};

export const updatePost = async (values: Post, id: string) => {
  const data = await axios.put<Post>(`/api/posts?id=${id}`, values);
  return data.data;
};
