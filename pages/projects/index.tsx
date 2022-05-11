import Animate from "components/Containers/Animate"
import SectionContainer from "components/Containers/SectionContainer"
import HiddenNav from "components/Nav/HiddenNav"
import { NextPage } from "next"

const Projects: NextPage = () => {
    return (
        <Animate>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '5em' }}>
                <div>
                    <HiddenNav />
                </div>
            </div>
        </Animate>
    )
}

export default Projects