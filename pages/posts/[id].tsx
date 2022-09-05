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
  const posts = await getAllPosts();

  if (!posts)
    return {
      paths: [],
      fallback: "blocking",
    };

  return {
    paths: posts.map((post: Post) => ({
      params: {
        id: post.id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getOnePost(params?.id as string);

  if (!post)
    return {
      props: {},
      redirect: {
        pathname: "/posts",
      },
    };

  return {
    props: { post },
    revalidate: 1,
  };
};

export default PostView;
