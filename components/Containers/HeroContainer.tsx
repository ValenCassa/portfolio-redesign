/* eslint-disable @next/next/no-img-element */
import TwitterCard from '../Cards/TwitterCard'
import styles from './styles/HeroContainer.module.css'
import { HorizontalDivider } from '../Miscellaneous/Divider'
import { GithubBox, LinkedinBox } from './LogoBox'

const VerticalDivider = ({ marginRight }: { marginRight: string }) => {
    return (
        <div className={styles.verticalDivider} style={{ marginRight }}  />
    )
}

const LeftSection = () => (
    <div className={styles.left}>
    <div className={styles.dataContainer}>
        <p className={styles.hello}>Hello, I&apos;m Valen</p>
        <div>
            <p className={styles.main}>Full Stack Dev</p>
        </div>
        <p className={styles.main}>Based in Argentina</p>
    </div>
    <div className={styles.logo}>
        <img src='/Frame.png' alt='Logo'/>
    </div>
</div>
)

const RightSection = () => (
    <div className={styles.right}>
        <GithubBox />
        <TwitterCard />
        <LinkedinBox />
    </div>
)

const HeroContainer = () => {
    return (
        <>
        <HorizontalDivider marginTop='calc(3.5em - 6px)' backgroundColor='var(--box-color)' />
        <div className={styles.container}>
            <div className={styles.fade} />
                <LeftSection />
                <RightSection />
                <VerticalDivider marginRight='19.75em'/>
                <VerticalDivider marginRight='5.25em'/>
                <VerticalDivider marginRight='1.6em' />
                <VerticalDivider marginRight='23.55em'/>
                <HorizontalDivider marginTop='3.2em'/>
                <HorizontalDivider marginTop='5.2em'/>
        </div>
        <HorizontalDivider marginTop='-0.6em' backgroundColor='var(--box-color)' />
        </>
    )
}

export default HeroContainer