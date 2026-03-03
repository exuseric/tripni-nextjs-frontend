"use client";

import { createContext, type ReactNode, useContext } from "react";
import { MainNavigationLinksType } from "@/common/types";

type NavigationContextType = {
  links: MainNavigationLinksType;
};

type NavigationProviderProps = {
  initialLinks: MainNavigationLinksType;
  children: ReactNode;
};

const NavigationContext = createContext<NavigationContextType | null>(null);

export const MainNavigationProvider = ({ initialLinks, children }: NavigationProviderProps) => {
  const links = initialLinks ?? [];
  return <NavigationContext.Provider value={{ links }}>{children}</NavigationContext.Provider>;
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error("useNavigation must be used within a NavigationProvider");
  return context;
};
