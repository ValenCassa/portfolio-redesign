import Animate from "components/Containers/Animate"
import List from "components/Miscellaneous/List"
import Spinner from "components/Miscellaneous/Spinner"
import useProjects from "hooks/useProjects"
import { NextPage } from "next"

const Projects: NextPage = () => {
    const { projects, isLoading } = useProjects()

    if (isLoading || !projects) return <Spinner />

    const sortedProjects = projects.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())

    return (
        <Animate>
            <List data={sortedProjects} pathPrefix={'/projects'} />
        </Animate>
    )
}

export default Projects