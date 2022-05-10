import { ReactNode } from "react"
import LayoutVerticalDivider from "../Miscellaneous/LayoutDivider"

const Main = ({ children }: { children: ReactNode }) => {
    return (
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
                    marginTop: '4em'
                }}
                className="container"
            >
                <div className='layoutDivider' style={{ height: '100%', position: 'absolute', top: 0, maxWidth: '800px', width: '100%' }}>
                    <LayoutVerticalDivider />
                    <LayoutVerticalDivider float="right"/>
                </div>
                {children}
                
            </div>
        </div>
    )
}

export default Main