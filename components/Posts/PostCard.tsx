import LayoutTable from "components/Miscellaneous/LayoutTable"
import Link from "next/link"
import { Post } from "types/Post"
import styles from "./styles/PostCard.module.css"
import ArrowIcon from "public/svg/ArrowIcon.svg"
import markdownToTxt from "markdown-to-txt"

const RightContent = ({ post }: { post: Post }) => (
    <div className={styles.rightContainer}>
        <Link href={`/posts/${post.id}`}>
            <a className={styles.title}>{post.title}<ArrowIcon /></a>
        </Link>
        <p className={styles.description}>{markdownToTxt(post.content.substring(0, 140))}...</p>
        <div 
            style={{ 
                backgroundImage: `url(${post.imagePath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '150px',
                filter: 'drop-shadow(0px 4px 58px rgba(0, 0, 0, 0.0))',
                borderRadius: '3px'
                }}/>
    </div>
)

const PostCard = ({ post }: { post: Post }) => {
    return (
        <LayoutTable 
            leftContent={post.date}
            rightContent={
                <RightContent post={post}/>
            }
            secondary
        />
    )
}

export default PostCard