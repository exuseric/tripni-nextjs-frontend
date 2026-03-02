import {ReactNode} from "react";
import {ClerkAuthProvider} from "@/app/global-providers/providers/ClerkAuthProvider";
import {ReactAriaProvider} from "@/app/global-providers/providers/ReactAriaProvider";

export const GlobalProviders = ({children}: {children: ReactNode}) => {
    return (
        <ClerkAuthProvider>
            <ReactAriaProvider>
                {children}
            </ReactAriaProvider>
        </ClerkAuthProvider>
    );
};