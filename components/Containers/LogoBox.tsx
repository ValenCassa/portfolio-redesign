import Link from "next/link"
import { ReactNode } from "react"
import styles from './styles/LogoBox.module.css'
import GithubIcon from 'public/svg/Github.svg'
import LinkedinIcon from 'public/svg/Linkedin.svg'

const LogoBox = ({ children, href, type }: { children: ReactNode, href: string, type: 'github' | 'linkedin' }) => {
    return (
        <Link href={href}>
            <a target={'_blank'}>
                <div className={styles.logoBox} id={type === 'github' ? styles.github : styles.linkedin}>
                    {children}
                </div>
            </a>
        </Link>
    )
}

export const GithubBox = () => {
    return (
        <LogoBox href='https://github.com/ValenCassa/portfolio-redesign' type="github">
            <GithubIcon />
        </LogoBox>
    )
}

export const LinkedinBox = () => {
    return (
        <LogoBox href='https://www.linkedin.com/in/valentin-cassarino/' type="linkedin">
            <LinkedinIcon />
        </LogoBox>
    )
}