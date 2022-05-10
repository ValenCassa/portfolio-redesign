import About from 'components/About/About'
import type { NextPage } from 'next'
import HeroContainer from 'components/Containers/HeroContainer'
import New from 'components/New/New'
import Older from 'components/Older/Older'
import Skills from 'components/Skills/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Older />
      <New />
      <HeroContainer />
      <About />
      <Skills />
    </div>
  )
}

export default Home
