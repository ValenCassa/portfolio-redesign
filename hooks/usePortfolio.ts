import { PortfolioContext } from "contexts/PortfolioContext";
import { useContext } from "react";

export const usePortfolio = () => useContext(PortfolioContext)