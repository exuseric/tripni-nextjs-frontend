"use client";

import { Link } from "@/common/ui/button/Link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Grid } from "../../Grid";
import { bottomBarStyles } from "./bottom-bar-styles";

// --- Styles ---
const { root, actionBar, navigationBar, navigationBarGrid, navigationItem, navigationItemIcon, navigationItemLabel } = bottomBarStyles();

// --- BottomBar (Root) ---
type BottomBarProps = {
    children: ReactNode;
    className?: string;
};

const BottomBarRoot = ({ children, className }: BottomBarProps) => {
    return (
        <header className={root({ className })}>
            {children}
        </header>
    );
};

// --- ActionBar ---
type ActionBarProps = {
    children: ReactNode;
    className?: string;
};

export function ActionBar({ children, className }: ActionBarProps) {
    return (
        <div className={actionBar({ className })}>
            {children}
        </div>
    );
}

// --- NavigationBar ---
type NavigationBarProps = {
    children: ReactNode;
    className?: string;
};

export function NavigationBar({ children, className }: NavigationBarProps) {
    return (
        <nav className={navigationBar({ className })}>
            <Grid variant="list" minItemWidth="4.7rem" align="center" gap="sm" className={navigationBarGrid()}>
                {children}
            </Grid>
        </nav>
    );
}

// --- NavigationBarItem ---
type NavigationBarItemProps = {
    href: string;
    icon: ReactNode | ((isActive: boolean) => ReactNode);
    activeIcon?: ReactNode;
    label?: string;
    className?: string;
    onClick?: () => void;
};

export function NavigationBarItem({ href, icon, activeIcon, label, className, onClick }: NavigationBarItemProps) {
    const pathname = usePathname();
    // Simple check: active if pathname starts with href, or exact match if href is root.
    const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);

    const styles = bottomBarStyles({ isActive });

    const renderIcon = () => {
        if (isActive && activeIcon) return activeIcon;
        if (typeof icon === "function") return icon(isActive);
        return icon;
    };

    return (
        <Link
            href={href}
            onPress={onClick}
            className={styles.navigationItem({ className })}
            variant="quiet"
        >
            <span className={styles.navigationItemIcon()}>
                {renderIcon()}
            </span>
            {label && <span className={styles.navigationItemLabel()}>{label}</span>}
        </Link>
    );
}

// --- Compound Component Assignment ---
export const BottomBar = Object.assign(BottomBarRoot, {
    ActionBar,
    Navigation: NavigationBar,
    Item: NavigationBarItem,
});

export type { ActionBarProps, BottomBarProps, NavigationBarItemProps, NavigationBarProps };

