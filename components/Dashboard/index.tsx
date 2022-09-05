import Animate from "components/Containers/Animate";
import List from "components/Miscellaneous/List";
import Spinner from "components/Miscellaneous/Spinner";
import usePosts from "hooks/usePosts";
import useProjects from "hooks/useProjects";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Post } from "types/Post";
import styles from "./styles/DashboardPage.module.css";

const DashboardPage = () => {
  const { posts, isLoading: isLoadingPosts } = usePosts();
  const { projects, isLoading: isLoadingProjects } = useProjects();
  const { push } = useRouter();
  useSession({ required: true, onUnauthenticated: () => push("/") });

  if (isLoadingPosts || isLoadingProjects || !posts || !projects)
    return <Spinner />;

  const sortedPosts = (posts as Post[]).sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  const onCreate = (type: "post" | "project") => {
    push(`/admin/dashboard/${type}/create`);
  };

  return (
    <>
      <Head>
        <title>Dashboard | Valentin Cassarino</title>
      </Head>
      <Animate>
        <p className={styles.title}>Dashboard</p>

        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => onCreate("post")}>
            Create Post
          </button>
          <button className={styles.button} onClick={() => onCreate("project")}>
            Create Project
          </button>
        </div>

        <div
          style={{
            marginBottom: "2em",
          }}
        >
          <List
            data={sortedPosts}
            pathPrefix="/admin/dashboard/post"
            name="Posts"
            remove
            type="post"
          />
        </div>
        <div
          style={{
            marginBottom: "2em",
          }}
        >
          <List
            data={sortedProjects}
            pathPrefix="/admin/dashboard/project"
            name="Projects"
            remove
            type="project"
          />
        </div>
      </Animate>
    </>
  );
};

export default DashboardPage;
