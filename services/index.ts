import axios from "axios"
import { Post } from "types/Post"
import { Project } from "types/Project"

export const getAllProjects = async () => {
    const data = await axios.get<Project[]>(`${process.env.NEXT_PUBLIC_API_URL}/works`)

    return data.data
}

export const getOneProject = async (id: string) => {
    const data = await axios.get<Project>(`${process.env.NEXT_PUBLIC_API_URL}/works/${id}`)

    return data.data
}

export const getAllPosts = async () => {
    const data = await axios.get<Post[]>(`${process.env.NEXT_PUBLIC_API_URL}/blogs`)

    return data.data
}

export const getOnePost = async (id: string) => {
    const data = await axios.get<Post>(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`)

    return data.data
}


