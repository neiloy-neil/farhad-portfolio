import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Farhad Hossain | SEO Specialist & Digital Marketing Strategist",
  description:
    "Portfolio website for Farhad Hossain featuring SEO, digital marketing, social campaigns, and growth-focused projects."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-midnight font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
