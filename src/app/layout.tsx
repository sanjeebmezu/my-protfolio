import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AIBackground } from "@/components/layout/ai-background";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MezuStudio | AI Marketing Expert & Consultant",
    template: "%s | MezuStudio",
  },
  description: siteConfig.statement,
  keywords: [
    "Sanjeeb Meju",
    "MezuStudio",
    "AI Marketing Expert",
    "AI Marketing Consultant",
    "AI Marketing Strategy",
    "Marketing Automation",
    "AI Consulting",
  ],
  openGraph: {
    title: "MezuStudio | AI Marketing Expert & Consultant",
    description: siteConfig.statement,
    url: siteConfig.url,
    siteName: "MezuStudio",
    type: "website",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      id="top"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <AIBackground />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
