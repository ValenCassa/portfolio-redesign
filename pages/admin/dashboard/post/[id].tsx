import CreatePost from "components/CreatePost/CreatePost";
import Spinner from "components/Miscellaneous/Spinner";
import usePosts from "hooks/usePosts";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const UpdatePost: NextPage = () => {
  const { asPath } = useRouter();
  const id = asPath.split("/").pop();

  const { posts: post, isLoading } = usePosts(id);

  if (!post || isLoading) return <Spinner />;

  return (
    <>
      <Head>
        <title>Update Post | Valentin Cassarino</title>
      </Head>
      <CreatePost defaultValues={post} />
    </>
  );
};

export default UpdatePost;
