import Link from "next/link";
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import {SignInButton} from "@/shared/components/SignInButton";
import {NavigationLinksList} from "@/features/main-navigation/components/NavigationLinksList";

export const DesktopNavigation = () => {
    return (
        <header className="main-navigation bg-surface-container-highest text-on-surface sticky top-0 z-99 py-2">
            <div className="container w-full h-full min-h-nav-height flex-row-between items-center gap-4">
                <Link href="/">Travel Log</Link>
                <NavigationLinksList />
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
            </div>
        </header>
    );
};