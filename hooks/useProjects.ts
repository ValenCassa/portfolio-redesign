import axios from "axios";
import useSWR from "swr";
import { Project } from "types/Project";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/works`

const fetcher = (url: string) => axios.get<Project[]>(url).then(res => res.data)

const useProjects = () => {
    const { data: projects, error } = useSWR(API_URL, fetcher)

    return {
        isLoading: !error && !projects,
        projects,
        error
    }
}

export default useProjects