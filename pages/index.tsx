import About from 'components/About/About'
import type { NextPage } from 'next'
import Skills from 'components/Skills/Skills'
import Projects from 'components/Projects/Projects'
import Posts from 'components/Posts/Posts'
import Contact from 'components/Contact/Contact'
import { AnimatePresence } from 'framer-motion'
import Animate from 'components/Containers/Animate'
import Meta from 'components/Miscellaneous/Meta'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Homepage | Valentin Cassarino</title>
    </Head>
    <Meta title='Homepage | Valentin Cassarino' description='Go have a look at my portfolio!' image={'https://i.imgur.com/JQOu13Z.png'} />
    <Animate>
       <AnimatePresence exitBeforeEnter>
         <div key={'home'}>
            <About />
            <Skills />
            <Projects />
            <Posts />
            <Contact />
          </div>
        </AnimatePresence>
      </Animate>
      </>
  )
}

export default Home
