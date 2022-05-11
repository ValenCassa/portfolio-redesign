import styles from './styles/HiddenNav.module.css'
import { Home, Document, Folder, IconProps } from 'react-iconly'
import React, { FC, ReactNode, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
const popoverVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5 }},
}

const lightVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const Tab = ({ icon, popoverText, href }: { href: string, icon: FC<IconProps>, popoverText: string }) => {
    const [light, setLight] = useState<boolean>(false)
    const [popover, setPopover] = useState<boolean>(false)
    const { push } = useRouter()

    const onHover = () => {
        setLight(true)

        setTimeout(() => {

        })
        setPopover(true)


    }

    const onLeave = () => {
        setLight(false)
        setPopover(false)
    }

    return (
        <div className={styles.tab} onClick={() => push(href)}>
            <AnimatePresence initial>
            {popover &&
            <>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '-6.5em'  }}>
                <motion.div 
                    className={styles.popover}
                    variants={popoverVariants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    transition={ { duration: 0.2, ease: 'easeInOut'} }
                    key='popover'
                    >
                    <p>{popoverText}</p>
                </motion.div>
                </div>
            </>
            }


                {light &&
                    <motion.div 
                        className={styles.light} 
                        variants={lightVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        transition={ { duration: 0.3, ease: 'easeInOut' } }
                        key='light'
                        />
                }
            </AnimatePresence>
            <div onMouseEnter={onHover} onMouseLeave={onLeave}>
                {React.createElement(icon, { primaryColor: light ? '#EFA68C' : 'white', size: 22  }, null)}
            </div>
        </div>
    )
}

const HiddenNav = () => {
    return (
        <div className={styles.nav}>
            <Tab icon={Home} popoverText='Home' href='/' />
            <Tab icon={Folder} popoverText='Projects' href='/projects' />
            <Tab icon={Document} popoverText='Posts' href='/posts' />
        </div>
    )
}

export default HiddenNav