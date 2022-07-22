import { motion } from "framer-motion";
import { TextIndexProps, useSequence } from "hooks/useSequence";

const TextIndex = ({ children, delay, exit }: TextIndexProps) => {
  const controls = useSequence({ delay, exit });

  return (
    <div
      style={{
        position: "absolute",
        display: "grid",
        placeContent: "center",
        height: "100%",
        width: "100vw",
      }}
    >
      <motion.p initial={{ opacity: 0, translateY: 20 }} animate={controls}>
        {children}
      </motion.p>
    </div>
  );
};

export default TextIndex;
