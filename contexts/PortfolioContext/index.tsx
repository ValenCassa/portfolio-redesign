import { createContext, Dispatch,SetStateAction } from "react";

interface PortfolioContextProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>
}


export const PortfolioContext = createContext<PortfolioContextProps>({
    active: false,
    setActive: () => {}
})
