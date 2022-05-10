import About from 'components/About/About'
import type { NextPage } from 'next'
import HeroContainer from 'components/Containers/HeroContainer'
import New from 'components/New/New'
import Older from 'components/Older/Older'
import Skills from 'components/Skills/Skills'
import Projects from 'components/Projects/Projects'
import Posts from 'components/Posts/Posts'
import Contact from 'components/Contact/Contact'
import { AnimatePresence } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <div>
      <AnimatePresence initial exitBeforeEnter>
        <About />
        <Skills />
        <Projects />
        <Posts />
        <Contact />
      </AnimatePresence>
    </div>
  )
}

export default Home
