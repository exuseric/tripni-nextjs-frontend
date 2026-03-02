import type { Metadata } from "next";
import { Inter, Mona_Sans } from "next/font/google";
import "@/styles/globals.css";
import { type ReactNode } from "react";
import { GlobalProviders } from "@/app/global-providers/GlobalProviders";
import { SpeedInsights } from "@vercel/speed-insights/next";

const headingFamily = Mona_Sans({
  variable: "--font-family-heading",
  subsets: ["latin"],
});

const bodyFamily = Inter({
  variable: "--font-family-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripni | The Ultimate Travel Logger & Safari Planner for Kenya",
  description:
    "Log your Kenyan adventures with Tripni. Plan safaris, track M-Pesa expenses, check 2026 KWS fees, and map Matatu routes. Capture every journey across the 254.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headingFamily.variable} ${bodyFamily.variable} antialiased`}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
      <SpeedInsights />
    </html>
  );
}
