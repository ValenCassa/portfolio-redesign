import About from 'components/About/About'
import type { NextPage } from 'next'
import HeroContainer from 'components/Containers/HeroContainer'
import New from 'components/New/New'
import Older from 'components/Older/Older'
import Skills from 'components/Skills/Skills'
import Projects from 'components/Projects/Projects'
import Posts from 'components/Posts/Posts'

const Home: NextPage = () => {
  return (
    <div>
      <Older />
      <New />
      <HeroContainer />
      <About />
      <Skills />
      <Projects />
      <Posts />
    </div>
  )
}

export default Home
