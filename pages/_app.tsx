import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Main from '../components/Containers/Main'
import Older from 'components/Older/Older'
import New from 'components/New/New'
import HeroContainer from 'components/Containers/HeroContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Main>
      <Older />
      <New />
      <HeroContainer />
      <Component {...pageProps} />
    </Main>
    </>
  )
}

export default MyApp
