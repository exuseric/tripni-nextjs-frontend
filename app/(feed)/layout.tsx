import { ReactNode } from "react";
import { FeedMobileNavigation } from "./components/navigation/FeedMobileNavigation";

export default function FeedLayout({ children }: { children: ReactNode }) {
  return <>
    <main className="container min-h-[1000px]">{children}</main>
    <FeedMobileNavigation />
  </>
}
