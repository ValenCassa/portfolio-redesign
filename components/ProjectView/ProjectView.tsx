import { Project } from "types/Project";
import styles from "./styles/ProjectView.module.css";
import OlderArrow from "public/svg/OlderArrow.svg";
import Link from "next/link";
import Markdown from "components/Miscellaneous/Markdown";

const Tab = ({ name }: { name: string }) => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div className={styles.tab}>
        <p className={styles.tabName}>{name}</p>
      </div>
    </div>
  );
};

const ProjectView = ({
  project,
  preview,
}: {
  project: Project;
  preview?: boolean;
}) => {
  return (
    <div className={styles.container} id={preview ? styles.preview : undefined}>
      <Link href={"/projects"}>
        <a className={`${styles.projects} link`}>
          <OlderArrow />
          Projects
        </a>
      </Link>
      <div className={styles.top}>
        <h1 className={styles.projectTitle}>{project.title}</h1>
        <p className={styles.date}>
          {new Date(project.date).toLocaleDateString()}
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${project.imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "200px",
          margin: "1em 0 2em 0",
          borderRadius: "3px",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.7em" }}>
        <div>
          <Tab name="Stack" />
          <p className={styles.stack}>{project.stack.join(", ")}</p>
        </div>
        <div>
          <Tab name="Platform" />
          <p className={styles.stack}>{project.platform.join(", ")}</p>
        </div>
        {project.website && (
          <div>
            <Tab name="Website" />
            <p className={styles.stack}>
              <Link href={project.website}>
                <a target={"_blank"}>{project.website}</a>
              </Link>
            </p>
          </div>
        )}
        {project.repository && (
          <div>
            <Tab name="Repository" />
            <p className={styles.stack}>
              <Link href={project.repository}>
                <a target={"_blank"}>{project.repository}</a>
              </Link>
            </p>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <Markdown value={project.content} />
      </div>
    </div>
  );
};

export default ProjectView;
