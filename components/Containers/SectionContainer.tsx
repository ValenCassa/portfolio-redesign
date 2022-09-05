import { ReactNode } from "react";
import styles from "./styles/SectionContainer.module.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const SectionContainer = ({
  children,
  delay = 0,
  animate = true,
}: {
  children: ReactNode;
  delay?: number;
  animate?: boolean;
}) => {
  if (!animate) return <div className={styles.container}>{children}</div>;
  return (
    <motion.div
      className={styles.container}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5, ease: "easeInOut", delay: delay }}
      key="section"
    >
      {children}
    </motion.div>
  );
};

export default SectionContainer;
