import axios from "axios";
import useSWR from "swr";
import { Project } from "types/Project";

const fetcher = async (url: string) =>
  axios.get<Project[]>(url).then((res) => res.data);

const useProjects = (id?: string) => {
  const url =
    id && id !== "dashboard" ? `/api/projects?id=${id}` : "/api/projects";
  const { data: projects, error, mutate } = useSWR(url, fetcher);

  return {
    isLoading: !error && !projects,
    projects,
    error,
    refetch: mutate,
  };
};

export default useProjects;
