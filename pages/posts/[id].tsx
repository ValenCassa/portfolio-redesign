import Animate from "components/Containers/Animate";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAllPosts, getOnePost } from "services";
import { Post } from "types/Post";
import { default as PostComponent } from "components/PostView/PostView";
import Meta from "components/Miscellaneous/Meta";
import markdownToTxt from "markdown-to-txt";

interface Props {
  post: Post;
}

const PostView: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Meta
        title={`${post.title} | Valentin Cassarino`}
        description={markdownToTxt(post.content)}
        image={post.imageURL}
      />
      <Animate>
        <PostComponent post={post} />
      </Animate>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await getAllPosts();
    return {
      paths: posts.map((project: Post) => ({
        params: {
          id: project.id,
        },
      })),
      fallback: "blocking",
    };
  } catch (err) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getOnePost(params?.id as string);
    return {
      props: { post },
      revalidate: 1,
    };
  } catch (e) {
    return {
      props: {},
      redirect: {
        pathname: "/projects",
      },
    };
  }
};

export default PostView;
