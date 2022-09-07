import Animate from "components/Containers/Animate";
import SectionContainer from "components/Containers/SectionContainer";
import Link from "next/link";
import { ReactNode } from "react";
import OlderArrow from "public/svg/OlderArrow.svg";
import styles from "./styles/FormLayout.module.css";
import PostView from "components/PostView/PostView";
import ProjectView from "components/ProjectView/ProjectView";
import { Post } from "types/Post";
import { Project } from "types/Project";
import Head from "next/head";

export const Preview = ({
  type,
  data,
}: {
  type: "post" | "project";
  data: Post | Project;
}) => {
  return (
    <>
      <Head>
        <title>
          {type === "post"
            ? "Post | Valentin Cassarino"
            : "Project | Valentin Cassarino"}
        </title>
      </Head>
      <p className={styles.title} id={styles.preview}>
        Preview
      </p>
      {type === "post" ? (
        <PostView post={data as Post} preview />
      ) : (
        <ProjectView project={data as Project} preview />
      )}
    </>
  );
};

const FormLayout = ({
  children,
  type,
  edit,
}: {
  children: ReactNode;
  type: "project" | "post";
  edit?: boolean;
}) => {
  const typeText = type === "project" ? "Project" : "Post";

  return (
    <Animate>
      <SectionContainer animate={false}>
        <Link href={"/admin/dashboard"}>
          <a className={`arrowLink`}>
            <OlderArrow />
            <p className="link">Dashboard</p>
          </a>
        </Link>
        <p className={styles.title}>
          {edit ? `Update ${typeText}` : `Create ${typeText}`}
        </p>
        {children}
      </SectionContainer>
    </Animate>
  );
};

export default FormLayout;
