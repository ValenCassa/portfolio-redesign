import styles from './styles/New.module.css';
import ArrowIcon from 'public/svg/ArrowIcon.svg'
import LightEllipse from 'public/svg/LightEllipse.svg'
import Link from 'next/link';

const New = () => {
    return (
        <div className={styles.new}>
            <div className={styles.light}>
                <LightEllipse />
            </div>
            <div className={styles.container}>
                <div className={styles.text}>
                    <Link href={'https://remark-network-valencassa.vercel.app/'}>
                        <a target={'_blank'}>
                            <p><span>Remark Network</span> is out<ArrowIcon /></p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default New