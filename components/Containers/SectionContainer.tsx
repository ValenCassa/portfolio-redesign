import { ReactNode } from 'react'
import styles from './styles/SectionContainer.module.css'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
}

const SectionContainer = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
    return (
        <motion.div 
            className={styles.container}
            variants={variants}
            key='section'
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={ { duration: 0.5, ease: 'easeInOut', delay: delay } }
            >
            {children}
        </motion.div>
    )
}

export default SectionContainer