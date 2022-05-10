import LayoutTable from "components/Miscellaneous/LayoutTable"
import { Project } from "types/Project"
import styles from "./styles/ProjectCard.module.css"
import markdownToTxt from "markdown-to-txt"
import Link from "next/link"
import ArrowIcon from "public/svg/ArrowIcon.svg"

const RightContent = ({ project }: { project: Project }) => (
    <div className={styles.rightContainer}>
        <Link href={`/projects/${project.id}`}>
            <a className={styles.title}>{project.title}<ArrowIcon /></a>
        </Link>
        <p className={styles.description}>{markdownToTxt(project.content.substring(0, 140))}...</p>
        <div 
            style={{ 
                backgroundImage: `url(${project.imagePath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '150px',
                filter: 'drop-shadow(0px 4px 58px rgba(0, 0, 0, 0.0))',
                borderRadius: '3px'
                }}/>
    </div>
)

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <LayoutTable 
            leftContent={project.date}
            rightContent={
                <RightContent project={project}/>
            }
            secondary
        />
    )
}

export default ProjectCard