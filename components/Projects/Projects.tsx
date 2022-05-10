import SectionContainer from "components/Containers/SectionContainer"
import { HorizontalDivider } from "components/Miscellaneous/Divider"
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
        <SectionContainer delay={0.2}>
            <p className={styles.title}>
                Recent projects
            </p>
            <div className={styles.projects}>
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

        </SectionContainer>
        <HorizontalDivider backgroundColor="var(--box-color)"/>
        </>
    )
}

export default Projects