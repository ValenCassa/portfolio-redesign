export interface Project {
  id?: string;
  title: string;
  content: string;
  imageURL: string;
  date: string;
  stack: string[];
  platform: string[];
  repository?: string;
  website?: string;
}
