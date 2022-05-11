import { ListContext } from "contexts/ListContext";
import { useContext } from "react";

const useList = () => useContext(ListContext);

export default useList