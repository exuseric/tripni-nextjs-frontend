import {ReactNode} from "react";
import {ClerkAuthProvider} from "@/app/global-providers/providers/ClerkAuthProvider";

export const GlobalProviders = ({children}: {children: ReactNode}) => {
    return (
        <ClerkAuthProvider>
            {children}
        </ClerkAuthProvider>
    );
};