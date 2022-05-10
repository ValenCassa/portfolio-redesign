import { ReactNode } from "react"
import styles from './styles/LayoutTable.module.css'

interface LayoutTableProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
}

const LayoutTable = ({ leftContent, rightContent }: LayoutTableProps) => {
    return (
        <>
        <div className={styles.layoutTable}>
            <div className={styles.leftContent}>
                <p>{ leftContent }</p>
            </div>
            <div className={styles.rightContent}>
                {rightContent}
            </div>
        </div>
        </>
    )
}

export default LayoutTable