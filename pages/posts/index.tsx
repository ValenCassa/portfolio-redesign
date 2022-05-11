import Animate from "components/Containers/Animate";
import List from "components/Miscellaneous/List";
import Spinner from "components/Miscellaneous/Spinner";
import usePosts from "hooks/usePosts";
import { NextPage } from "next";
import Head from "next/head";

const Posts: NextPage = () => {
    const { posts, isLoading } = usePosts();
    
    if (isLoading || !posts) return <Spinner />

    const sortedPosts = posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())

    return (
        <>
        <Head>
            <title>Posts | Valentin Cassarino</title>
        </Head>
        <Animate>
            <List name="Posts" data={sortedPosts} pathPrefix={'/posts'} />
        </Animate>
        </>
    )
} 

export default Posts