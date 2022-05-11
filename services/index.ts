import axios from "axios"
import { Project } from "types/Project"

export const getAllProjects = async () => {
    const data = await axios.get<Project[]>(`${process.env.NEXT_PUBLIC_API_URL}/works`)

    return data.data
}

export const getOneProject = async (id: string) => {
    const data = await axios.get<Project>(`${process.env.NEXT_PUBLIC_API_URL}/works/${id}`)

    return data.data
}

