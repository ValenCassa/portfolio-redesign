import styles from './styles/Divider.module.css'

export const HorizontalDivider = ({ marginTop, backgroundColor }: { marginTop?: string, backgroundColor?: string }) => {
    return (
        <div className={styles.divider} style={{ marginTop, backgroundColor }}/>
    )
}
