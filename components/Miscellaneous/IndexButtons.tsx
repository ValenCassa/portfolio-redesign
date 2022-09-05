import { ReactNode, useState } from "react";
import styles from "./styles/IndexButtons.module.css";
import { AnimatePresence, motion } from "framer-motion";
import PortfolioIcon from "public/svg/PortfolioButton.svg";
import TwitterIcon from "public/svg/TwitterButton.svg";
import LinkedinIcon from "public/svg/LinkedinButton.svg";
import LightButton from "public/svg/ButtonLight.svg";
import GithubIcon from "public/svg/GithubButton.svg";
import { usePortfolio } from "hooks/usePortfolio";
import { useCookies } from "react-cookie";
import { addDays } from "utils/addDate";

const itemVariants = (delay: number | undefined) => ({
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: delay ?? 3, duration: 0.4 },
  },
});

interface IndexButtonProps {
  name: string;
  icon: ReactNode;
  delay?: number;
  onClick?: () => void;
  href?: string;
}

const IndexButton = ({
  name,
  icon,
  delay,
  onClick,
  href,
}: IndexButtonProps) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      variants={itemVariants(delay)}
      animate={"visible"}
      initial="hidden"
      className={styles.buttonContainer}
    >
      <a
        href={href ?? undefined}
        target={"_blank"}
        rel="noreferrer"
        className={styles.link}
      >
        <motion.button
          whileHover={{ translateY: "-15px", transition: { duration: 0.3 } }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={styles.button}
          onClick={onClick}
        >
          {icon}
        </motion.button>
      </a>
      <AnimatePresence initial exitBeforeEnter>
        {hover && (
          <motion.span
            className={styles.light}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            key="light"
          >
            <LightButton />
          </motion.span>
        )}
      </AnimatePresence>
      <label className={styles.name} id={hover ? styles.hover : undefined}>
        {name}
      </label>
    </motion.div>
  );
};

const IndexButtons = () => {
  const { setActive } = usePortfolio();
  const [_, setCookie] = useCookies(["indexOpened"]);
  return (
    <div className={styles.container}>
      <motion.div className={styles.buttonsContainer}>
        <IndexButton
          name={"Portfolio"}
          icon={<PortfolioIcon />}
          delay={3}
          onClick={() => {
            setActive(true);
            setCookie("indexOpened", true, {
              path: "/",
              expires: addDays(new Date(), 15),
            });
          }}
        />
        <IndexButton
          name={"Twitter"}
          icon={<TwitterIcon />}
          delay={3.08}
          href="https://twitter.com/devcassa"
        />
        <IndexButton
          name={"Github"}
          icon={<GithubIcon />}
          delay={3.16}
          href="https://github.com/ValenCassa/portfolio-redesign"
        />
        <IndexButton
          name={"LinkedIn"}
          icon={<LinkedinIcon />}
          delay={3.24}
          href="https://www.linkedin.com/in/valentin-cassarino/"
        />
      </motion.div>
      <motion.div
        className={styles.bottomDescription}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.4 }}
      >
        <span>Valentin Cassarino. Front End dev.</span>
      </motion.div>
    </div>
  );
};

export default IndexButtons;
