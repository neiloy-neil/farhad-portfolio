import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const AnimatedCursor = dynamic(
  () => import("@/components/system/animated-cursor").then((mod) => mod.AnimatedCursor),
  { ssr: false }
);

const PageLoader = dynamic(
  () => import("@/components/system/page-loader").then((mod) => mod.PageLoader),
  { ssr: false }
);

const SmoothScroll = dynamic(
  () => import("@/components/system/smooth-scroll").then((mod) => mod.SmoothScroll),
  { ssr: false }
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Farhad Hossain | SEO Specialist & Digital Marketing Expert",
  description:
    "Premium portfolio for Farhad Hossain showcasing SEO, CRM, eCommerce strategy, marketing systems, and agency-led digital execution."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-[var(--bg)] font-sans text-[var(--foreground)] antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScroll />
          <PageLoader />
          <AnimatedCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
