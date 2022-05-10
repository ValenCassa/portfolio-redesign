import LayoutTable from 'components/Miscellaneous/LayoutTable'
import Link from 'next/link'
import styles from './styles/Contact.module.css'
import ArrowIcon from "public/svg/ArrowIcon.svg"
import SectionContainer from 'components/Containers/SectionContainer'

const ContactLink = ({ name, href, email }: { name: string, href: string, email?: boolean }) => {
    if (email) {
        return (
            <a href={`mailto:${href}`} className={styles.link}>{name}<ArrowIcon /></a>
        )
    }

    return (
        <Link href={href}>
            <a target={'_blank'} className={styles.link}>{name}<ArrowIcon /></a>
        </Link>
    )
}

const Contact = () => {
    return (
        <>
            <SectionContainer delay={0.4}>
                <LayoutTable 
                    leftContent="Contact"
                    rightContent={
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5em'
                            }}>
                                <ContactLink name="LinkedIn" href='https://www.linkedin.com/in/valentin-cassarino/' />
                                <ContactLink name="Twitter" href='https://twitter.com/devcassa' />
                                <ContactLink name="E-mail" email href='valencassa@gmail.com' />
                            </div>
                        </>
                    }
                />
            </SectionContainer>
        </>
    )
}

export default Contact