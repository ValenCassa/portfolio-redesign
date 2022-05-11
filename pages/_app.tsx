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
import Head from 'next/head'
import Router from 'next/router'



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const routeChange = () => {

    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeComplete", routeChange );
  Router.events.on("routeChangeStart", routeChange );
  
  return (
    <>
    <Head>
      <link rel='icon' href='/img/logo-tab.png'/>
    </Head>
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
