export interface Project {
    id: string;
    title: string;
    website: string;
    platform: string[];
    stack: string[];
    date: string;
    imagePath: string;
    content: string;
    featured: boolean;
    featuredTech: string;
    filename: string;
    inProgress: boolean;
}