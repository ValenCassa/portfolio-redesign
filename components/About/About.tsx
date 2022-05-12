import LayoutTable from "components/Miscellaneous/LayoutTable"
import styles from "./styles/About.module.css"
import ArrowAbout from "public/svg/ArrowAbout.svg"
import { HorizontalDivider } from "components/Miscellaneous/Divider"
import SectionContainer from "components/Containers/SectionContainer"

const Dot = () => {
    return (
        <div>
            <div className={styles.dot} />
            <div className={styles.dotBg}/>
        </div>
    )
}

const List = ({item, year}: { item: string, year: string }) => {
    return (
        <div className={styles.listItem}>
            <Dot/>
            <span>{year}</span>
            <ArrowAbout />
            <p>{item}</p>
        </div>
    )
}

const About = () => {
    return (
        <>
        <SectionContainer>
            <LayoutTable
                leftContent="About"
                rightContent={
                    
                <div>
                    <p>I&apos;m a full stack developer based in Argentina with a passion for designing and coding stuff. I also like solving real life problems through code. When not online, I love hanging out with my friends. Currently, I&apos;m studying Computer Science at UNNOBA!</p>
                    <div style={{ marginTop: '2em', display: "flex", flexDirection: 'column', gap: '1em' }}>
                        <List item="Born in Junin, Argentina" year="2001"/>
                        <List item="Studying Computer Science" year="2021"/>
                        <List item="Working at Selehann" year="2022"/>
                    </div>
                </div>
                    
                }
            />
        </SectionContainer>
        <HorizontalDivider backgroundColor="var(--box-color)"/>
        </>
    )
}

export default About