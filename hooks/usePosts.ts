import axios from "axios";
import useSWR from "swr";
import { Post } from "types/Post";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/blogs`

const fetcher = (url: string) => axios.get<Post[]>(url).then(res => res.data)

const usePosts = () => {
    const { data: posts, error } = useSWR(API_URL, fetcher)

    return {
        isLoading: !error && !posts,
        posts,
        error
    }
}

export default usePosts