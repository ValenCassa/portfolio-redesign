import LayoutTable from "components/Miscellaneous/LayoutTable"
import SkillsTable from "components/Miscellaneous/SkillsTable"
import styles from "./styles/Skills.module.css"

const Skills = () => {
    return (
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
            />
        </div>
    )
}

export default Skills