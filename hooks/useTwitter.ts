import axios from "axios";
import useSWR from "swr";
import { Twitter } from "types/Twitter";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/twitter`

const fetcher = (url: string) => axios.get<Twitter>(url).then(res => res.data)

const useTwitter = () => {
    const { data: twitter, error } = useSWR(API_URL, fetcher)

    return {
        twitter,
        error,
        isLoading: !twitter && !error
    }
}

export default useTwitter