import About from 'components/About/About'
import type { NextPage } from 'next'
import HeroContainer from 'components/Containers/HeroContainer'
import New from 'components/New/New'
import Older from 'components/Older/Older'

const Home: NextPage = () => {
  return (
    <div>
      <Older />
      <New />
      <HeroContainer />
      <About />
    </div>
  )
}

export default Home
