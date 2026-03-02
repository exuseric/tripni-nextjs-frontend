import { MainNavigation } from "@/features/main-navigation/MainNavigation";
import { type ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/*<MainNavigation />*/}
      <main>{children}</main>
    </>
  );
}
