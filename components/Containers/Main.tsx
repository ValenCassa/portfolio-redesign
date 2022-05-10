import { ReactNode } from "react"
import LayoutVerticalDivider from "../Miscellaneous/LayoutDivider"

const Main = ({ children }: { children: ReactNode }) => {
    return (
        <>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    maxWidth: '800px',
                    width: '100%',
                    
                    border: '1px solid var(--box-color)',
                }}
                className="container"
            >
                <div style={{ marginTop: '4em' }}>
                {children}
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Main