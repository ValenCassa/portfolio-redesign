import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Project } from "types/Project";
import { default as ProjectComponent } from "components/ProjectView/ProjectView";
import { getAllProjects, getOneProject } from "services";
import Animate from "components/Containers/Animate";
import Meta from "components/Miscellaneous/Meta";
import markdownToTxt from "markdown-to-txt";

interface Props {
  project: Project;
}

const ProjectView: NextPage<Props> = ({ project }) => {
  return (
    <>
      <Meta
        title={`${project.title} | Valentin Cassarino`}
        description={markdownToTxt(project.content)}
        image={project.imageURL}
      />
      <Animate>
        <ProjectComponent project={project} />
      </Animate>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const projects = await getAllProjects();
    return {
      paths: projects.map((project: Project) => ({
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
    const project = await getOneProject(params?.id as string);
    return {
      props: { project },
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

export default ProjectView;
