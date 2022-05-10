import SectionContainer from "components/Containers/SectionContainer"
import { HorizontalDivider } from "components/Miscellaneous/Divider"
import LayoutTable from "components/Miscellaneous/LayoutTable"
import SkillsTable from "components/Miscellaneous/SkillsTable"

const Skills = () => {
    return (
        <>
        <SectionContainer delay={0.1}>
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
        </SectionContainer>
        <HorizontalDivider backgroundColor="var(--box-color)"/>
        </>
    )
}

export default Skills