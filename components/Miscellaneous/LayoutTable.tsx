import { ReactNode } from "react"
import styles from './styles/LayoutTable.module.css'

interface LayoutTableProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
    secondary?: boolean;
    center?: boolean;
}

const LayoutTable = ({ leftContent, rightContent, secondary, center }: LayoutTableProps) => {
    return (
        <>
        <div className={styles.layoutTable}>
            <div className={styles.leftContent} style={secondary ? { fontWeight: 300, color: 'var(--project-date-color)' }: undefined}>
                <p>{ leftContent }</p>
            </div>
            <div className={styles.rightContent} id={center ? styles.center : undefined}>
                {rightContent}
            </div>
        </div>
        </>
    )
}

export default LayoutTable