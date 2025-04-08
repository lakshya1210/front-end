"use-client"

import {ReactNode} from "react"
import {AppProgressBar as ProgressBar} from "next-nprogress-bar"

interface ProviderProps {
    children: ReactNode
}

const Providers: React.FC<ProviderProps> = ({children}) => {
    return (
        <>
            <ProgressBar
                height="4px"
                color="#2e90fa"
                options={{showSpinner : false}}
                shallowRouting
            />
            {children}
        </>
    );
};

export default Providers;