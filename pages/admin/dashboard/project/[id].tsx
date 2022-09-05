import CreateProjectPage from "components/CreateProject/CreateProject";
import Spinner from "components/Miscellaneous/Spinner";
import useProjects from "hooks/useProjects";
import { NextPage } from "next";
import { useRouter } from "next/router";

const UpdateProject: NextPage = () => {
  const { asPath } = useRouter();
  const id = asPath.split("/").pop();
  const { projects: project, isLoading } = useProjects(id);

  if (isLoading || !project) return <Spinner />;

  return <CreateProjectPage defaultValues={project} />;
};

export default UpdateProject;
