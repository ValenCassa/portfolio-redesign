import type { NextPage } from 'next'
import HeroContainer from './components/Containers/HeroContainer'
import LayoutVerticalDivider from './components/Miscellaneous/LayoutDivider'
import New from './components/New/New'
import Older from './components/Older/Older'

const Home: NextPage = () => {
  return (
    <div>
      <Older />
      <New />
      <HeroContainer />
    </div>
  )
}

export default Home
