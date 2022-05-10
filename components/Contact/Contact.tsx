import LayoutTable from 'components/Miscellaneous/LayoutTable'
import Link from 'next/link'
import styles from './styles/Contact.module.css'
import ArrowIcon from "public/svg/ArrowIcon.svg"

const ContactLink = ({ name, href, email }: { name: string, href: string, email?: boolean }) => {
    if (email) {
        return (
            <a href={`mailto:${href}`}>{name}<ArrowIcon /></a>
        )
    }

    return (
        <Link href={href}>
            <a target={'_blank'}>{name}<ArrowIcon /></a>
        </Link>
    )
}

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
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
            </div>
        </>
    )
}

export default Contact