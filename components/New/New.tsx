import styles from './styles/New.module.css';
import ArrowIcon from 'public/svg/ArrowIcon.svg'
import LightEllipse from 'public/svg/LightEllipse.svg'

const New = () => {
    return (
        <div className={styles.new}>
            <div className={styles.light}>
                <LightEllipse />
            </div>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p><span>Remark Network</span> is out<ArrowIcon /></p>
                </div>
            </div>
        </div>
    )
}

export default New