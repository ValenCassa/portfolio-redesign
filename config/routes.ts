export interface Route {
    path: string;
    name: string;
}

const Routes: Route[] = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/projects',
        name: 'Projects',
    },
    {
        path: '/posts',
        name: 'Posts',
    }
]

export default Routes