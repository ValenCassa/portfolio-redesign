import React, { Dispatch, ReactNode, SetStateAction } from "react"

interface ListContextProps {
    selected: number | null;
    setSelected: Dispatch<SetStateAction<number | null>>;
}

export const ListContext = React.createContext<ListContextProps>({
    selected: null,
    setSelected: () => {},
})

const ListContextProvider = ({ children }: { children: ReactNode }) => {
    const [selected, setSelected] = React.useState<number | null>(null)

    return (
        <ListContext.Provider value={{ selected, setSelected }}>
            {children}
        </ListContext.Provider>
    )
}

export default ListContextProvider