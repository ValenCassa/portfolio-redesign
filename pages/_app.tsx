import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Main from '../components/Containers/Main'
import Older from 'components/Older/Older'
import New from 'components/New/New'
import HeroContainer from 'components/Containers/HeroContainer'
import Nav from 'components/Nav/Nav'

import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import MenuContextProvider from 'contexts/MenuContext'



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
    <MenuContextProvider>
      <Nav />
      <Main>
        <Older />
        <New />
        <HeroContainer />
        <AnimatePresence initial exitBeforeEnter>
            <Component {...pageProps} key={router.asPath}/>
        </AnimatePresence>
      </Main>
    </MenuContextProvider>
    </>
  )
}

export default MyApp
