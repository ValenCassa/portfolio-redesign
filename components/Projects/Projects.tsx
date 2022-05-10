import { HorizontalDivider } from "components/Miscellaneous/Divider"
import LayoutTable from "components/Miscellaneous/LayoutTable"
import Spinner from "components/Miscellaneous/Spinner"
import useProjects from "hooks/useProjects"
import ProjectCard from "./ProjectCard"
import styles from "./styles/Projects.module.css"

const Projects = () => {
    const { projects, isLoading } = useProjects()

    if(isLoading || !projects) {
        return <Spinner />
    }

    const filteredProjects = projects.filter(project => !project.inProgress).sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()).slice(0, 3)


    return (
        <>
        <div className={styles.container}>
            <p className={styles.title}>
                Recent projects
            </p>
            <div className={styles.projects}>
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

        </div>
        <HorizontalDivider backgroundColor="var(--box-color)"/>
        </>
    )
}

export default Projects