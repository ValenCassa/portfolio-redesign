import SectionContainer from 'components/Containers/SectionContainer'
import { HorizontalDivider } from 'components/Miscellaneous/Divider'
import Spinner from 'components/Miscellaneous/Spinner'
import usePosts from 'hooks/usePosts'
import PostCard from './PostCard'
import styles from './styles/Posts.module.css'

const Posts = () => {
    const { posts, isLoading } = usePosts()

    if (!posts || isLoading) return <Spinner />

    const filteredPosts = posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()).slice(0, 3)

    return (
        <>
        <SectionContainer delay={0.3}>
            <p className={styles.title}>
                Recent posts
            </p>
            <div className={styles.posts}>
                {filteredPosts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))}

            </div>
        </SectionContainer>
        <HorizontalDivider backgroundColor="var(--box-color)"/>
        </>
    )
}

/* */

export default Posts