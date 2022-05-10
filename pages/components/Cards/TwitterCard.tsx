import useTwitter from 'hooks/useTwitter'
import styles from './styles/TwitterCard.module.css'
import TwitterLogo from 'public/svg/TwitterLogo.svg'
import Link from 'next/link'

const TwitterCard = () => {
    const { twitter, error, isLoading } = useTwitter()

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.profile}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.profilePic} />
                    </div>
                    <div className={styles.userContainer}>
                        <p className={styles.name}>ValenCassa</p>
                        <p className={styles.handle}>@devCassa</p>
                    </div>
                </div>
                <div className={styles.followButton}>
                    <Link href={'https://twitter.com/devcassa'}>
                        <a>Follow</a>
                    </Link>
                </div>
            </div>
            <div className={styles.middle}>
                <p>Full-stack developer. Love making and designing things 🎉</p>
            </div>
            <div className={styles.userData}>
                <div className={styles.data}>
                    <div>
                        <p>{twitter?.following} <span>Following</span></p>
                    </div>
                    <div>
                        <p>{twitter?.followers} <span>Followers</span></p>
                    </div>

                </div>
                <div className={styles.logo}>
                    <TwitterLogo />
                </div>
            </div>
        </div>
    )
}

export default TwitterCard