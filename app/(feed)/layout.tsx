import { ReactNode } from "react";
import { FeedMobileNavigation } from "./components/navigation/FeedMobileNavigation";

export default function FeedLayout({ children }: { children: ReactNode }) {
  return <>
    <main className="min-h-dvh pb-[calc(var(--spacing-nav-height)+var(--spacing-safe-bottom))]">
      {children}
    </main>
    <FeedMobileNavigation />
  </>
}
