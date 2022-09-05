import Link from "next/link";
import styles from "./styles/PostView.module.css";
import OlderArrow from "public/svg/OlderArrow.svg";
import Markdown from "components/Miscellaneous/Markdown";
import { Post } from "types/Post";

const PostView = ({ post, preview }: { post: Post; preview?: boolean }) => {
  return (
    <div className={styles.container} id={preview ? styles.preview : undefined}>
      <Link href={"/posts"}>
        <a className={`${styles.posts} link`}>
          <OlderArrow />
          Posts
        </a>
      </Link>
      <div className={styles.top}>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.date}>
          {new Date(post.date).toLocaleDateString()}
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${post.imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "200px",
          margin: "1em 0 2em 0",
          borderRadius: "3px",
        }}
      />
      <div className={styles.content}>
        <Markdown value={post.content} />
      </div>
    </div>
  );
};

export default PostView;
