import { useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";

export interface TextIndexProps {
  children: ReactNode;
  delay?: number;
  exit?: boolean;
}

export const useSequence = ({
  delay,
  exit,
}: Omit<TextIndexProps, "children">) => {
  const controls = useAnimation();

  const sequence = async () => {
    await controls.start({
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.4,
        delay: delay ? delay : undefined,
      },
    });
    if (exit) {
      controls.start({
        scale: 0.8,
        opacity: 0,
        transition: {
          duration: 0.3,
          delay: 0.7,
        },
      });
    }
  };

  useEffect(() => {
    sequence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return controls;
};
