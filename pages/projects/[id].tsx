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
  const projects = await getAllProjects();

  if (!projects)
    return {
      paths: [],
      fallback: "blocking",
    };

  return {
    paths: projects.map((project: Project) => ({
      params: {
        id: project.id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await getOneProject(params?.id as string);

  if (!project)
    return {
      props: {},
      redirect: {
        pathname: "/projects",
      },
    };

  return {
    props: { project },
    revalidate: 1,
  };
};

export default ProjectView;
