import { HorizontalDivider } from "components/Miscellaneous/Divider"
import LayoutTable from "components/Miscellaneous/LayoutTable"
import SkillsTable from "components/Miscellaneous/SkillsTable"
import styles from "./styles/Skills.module.css"

const Skills = () => {
    return (
        <>
        <div className={styles.container}>
            <LayoutTable 
                leftContent="Skills"
                rightContent={
                    <>
                    <div>
                        <SkillsTable />
                    </div>
                    </>
                }
                center
            />
        </div>
        <HorizontalDivider backgroundColor="var(--box-color)"/>
        </>
    )
}

export default Skills