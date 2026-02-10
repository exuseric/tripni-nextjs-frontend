"use client"

import {useNavigation} from "@/features/main-navigation/MainNavigationContext";
import Link from "next/link";

export const NavigationLinksList = () => {
    const {links} = useNavigation();
    return (
        <ul className="flex-center flex-gap-4">
            {links.map(link => <li key={link.href}>
                <Link href={link.href} className="btn-text">
                    {link.label}
                </Link>
            </li>)}
        </ul>
    );
};