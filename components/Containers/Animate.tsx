import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  
  const Animate = ({ children }: { children: ReactNode }) => {
    return (
      <motion.div
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='hidden'
        transition={ { duration: 0.4, ease: 'easeInOut' } }
        key='projects'
      >
        {children}
      </motion.div>
    )
  }

export default Animate