import styles from './styles/LayoutDivider.module.css'

const LayoutVerticalDivider = ({float}: { float?: 'left' | 'right' }) => {
    return (
        
        <div 
            className={styles.divider}
            style={{
                left: float === 'left' ? '0' : undefined,
                right: float === 'right' ? '0' : undefined
            }}
            />
    )
}

export default LayoutVerticalDivider