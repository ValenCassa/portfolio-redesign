import About from 'components/About/About'
import type { NextPage } from 'next'
import Skills from 'components/Skills/Skills'
import Projects from 'components/Projects/Projects'
import Posts from 'components/Posts/Posts'
import Contact from 'components/Contact/Contact'
import { AnimatePresence } from 'framer-motion'
import Animate from 'components/Containers/Animate'

const Home: NextPage = () => {
  return (
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
  )
}

export default Home
