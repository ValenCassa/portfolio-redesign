import "../styles/globals.css";
import type { AppProps } from "next/app";
import Main from "../components/Containers/Main";
import Older from "components/Older/Older";
import New from "components/New/New";
import HeroContainer from "components/Containers/HeroContainer";
import Nav from "components/Nav/Nav";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import MenuContextProvider from "contexts/MenuContext";
import Head from "next/head";
import { motion } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { useFixAnimations } from "hooks/useFixAnimations";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  useFixAnimations();

  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="icon" href="/img/logo-tab.png" />
      </Head>
      <AnimatePresence initial exitBeforeEnter>
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
      </AnimatePresence>
    </SessionProvider>
  );
}

export default MyApp;
