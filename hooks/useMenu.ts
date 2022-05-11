import { MenuContext } from "contexts/MenuContext";
import { useContext } from "react";

const useMenu = () => useContext(MenuContext);

export default useMenu