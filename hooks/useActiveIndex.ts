import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const useActiveIndex = () => {
  const [active, setActive] = useState<boolean>(false);
  const [cookie] = useCookies(["indexOpened"]);

  useEffect(() => {
    if (cookie.indexOpened) {
      setActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { active, setActive };
};
