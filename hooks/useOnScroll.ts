import { useEffect, useState } from "react";
import React from "react";

export const useOnScroll = (
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  inView: boolean
) => {
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const menuControl = () => {
    if (typeof window !== undefined && window.innerWidth < 1300) {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    if (window.innerWidth > 1300) {
      if (inView) {
        setShow(false);
      }

      if (!inView) {
        setShow(true);
      }
    }

    if (typeof window !== undefined && window.innerWidth < 1300) {
      window.addEventListener("scroll", menuControl);

      return () => {
        window.removeEventListener("scroll", menuControl);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY, inView]);
};
