import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface MenuContextProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>
}

export const MenuContext = React.createContext<MenuContextProps>({
    isOpen: false,
    setOpen: () => {},
    show: false,
    setShow: () => {}
})

const MenuContextProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setOpen] = React.useState(false)
    const [show, setShow] = React.useState(false)

    return (
        <MenuContext.Provider value={{ isOpen, setOpen, show, setShow }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider