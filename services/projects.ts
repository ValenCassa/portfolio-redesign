import axios from "axios";
import { Project } from "types/Project";

export const createProject = async (values: Project) => {
  const data = await axios.post<Project>("/api/projects", values);
  return data.data;
};

export const removeProject = async (id: string) => {
  await axios.delete(`/api/projects?id=${id}`);
};

export const updateProject = async (values: Project, id: string) => {
  const data = await axios.put<Project>(`/api/projects?id=${id}`, values);
  return data.data;
};
