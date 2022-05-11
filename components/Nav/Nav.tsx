import Routes, { Route } from 'config/routes'
import { useRouter } from 'next/router'
import styles from './styles/Nav.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'
import useMenu from 'hooks/useMenu'
import HiddenNav from './HiddenNav'
import { useOnScroll } from 'hooks/useOnScroll'

const Tab = ({ route }: { route: Route }) => {
    const { asPath } = useRouter()
    const active = asPath.split('/')[1] === route.path.split('/')[1]

    return (
        <div className={styles.tabContainer}>
            <Link href={route.path}>
                <a>
                    <div style={{ display: 'flex', gap: '3em' }}>
                        <div>
                            <div className={styles.inactive} />
                            {active ?
                                <motion.div className={styles.active} layoutId='active' />
                                : null
                            }
                        </div>
                        <p className={styles.tabName}>{ route.name }</p>
                    </div>
                </a>
            </Link>
        </div>
    )

}

const Nav = () => {
    const { inView, ref } = useInView()
    const [show, setShow ] = useState<boolean>(false)

    useOnScroll(setShow, inView)


    return (
        <>
        <div className={styles.nav} ref={ref}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
                {Routes.map(route => (
                    <Tab key={route.path} route={route} />
                ))}
            </div>
        </div>
        <AnimatePresence>
            {show &&
                <motion.div 
                    className={styles.hiddenNav}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    transition={ { duration: 0.4, ease: 'easeInOut' } }
                    key='hiddenNav'
                    >
                    <HiddenNav />
                </motion.div>
            }

        </AnimatePresence>
        </>
    )
}

export default Nav