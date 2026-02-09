import type {FC, ReactNode} from "react";
import {ClerkProvider} from "@clerk/nextjs";

type NeonAuthProviderProps = {
    children: ReactNode
}
export const ClerkAuthProvider: FC<NeonAuthProviderProps> = (props) => {
    return (
        <ClerkProvider>
            {props.children}
        </ClerkProvider>
    );
};