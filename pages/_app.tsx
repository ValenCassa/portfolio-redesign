import "../styles/globals.css";
import type { AppProps } from "next/app";
import Main from "../components/Containers/Main";
import Older from "components/Older/Older";
import New from "components/New/New";
import HeroContainer from "components/Containers/HeroContainer";
import Nav from "components/Nav/Nav";
import { PortfolioContext } from "contexts/PortfolioContext";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import MenuContextProvider from "contexts/MenuContext";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import IndexPage from "components/Index";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [active, setActive] = useState<boolean>(false);

  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeComplete", routeChange);
  Router.events.on("routeChangeStart", routeChange);

  return (
    <>
      <Head>
        <link rel="icon" href="/img/logo-tab.png" />
      </Head>
      <PortfolioContext.Provider value={{ active, setActive }}>
        <AnimatePresence initial exitBeforeEnter>
          {active ? (
            <MenuContextProvider>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                key={"main"}
                transition={{ duration: 0.4 }}
                style={{ overflow: "hidden" }}
              >
                <>
                  <Nav />
                  <Main>
                    <Older />
                    <New />
                    <HeroContainer />
                    <AnimatePresence initial exitBeforeEnter>
                      <Component {...pageProps} key={router.asPath} />
                    </AnimatePresence>
                  </Main>
                </>
              </motion.div>
            </MenuContextProvider>
          ) : (
            <IndexPage />
          )}
        </AnimatePresence>
      </PortfolioContext.Provider>
    </>
  );
}

export default MyApp;
