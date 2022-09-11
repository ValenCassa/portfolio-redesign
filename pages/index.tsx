import About from "components/About/About";
import type { NextPage } from "next";
import Skills from "components/Skills/Skills";
import Projects from "components/Projects/Projects";
import Posts from "components/Posts/Posts";
import Contact from "components/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import Animate from "components/Containers/Animate";
import Meta from "components/Miscellaneous/Meta";
import { PortfolioContext } from "contexts/PortfolioContext";
import Certificates from "components/Certificates/Certificates";
import { useActiveIndex } from "hooks/useActiveIndex";
import IndexPage from "components/Index";

const Home: NextPage = () => {
  const { active, setActive } = useActiveIndex();
  return (
    <>
      <Meta
        title="Homepage | Valentin Cassarino"
        description="Go have a look at my portfolio!"
        image={"https://i.imgur.com/JQOu13Z.png"}
      />
      <PortfolioContext.Provider value={{ active, setActive }}>
        {active ? (
          <Animate>
            <AnimatePresence exitBeforeEnter>
              <div key={"home"}>
                <About />
                <Skills />
                <Projects />
                <Posts />
                <Certificates />
                <Contact />
              </div>
            </AnimatePresence>
          </Animate>
        ) : (
          <IndexPage />
        )}
      </PortfolioContext.Provider>
    </>
  );
};

export default Home;
