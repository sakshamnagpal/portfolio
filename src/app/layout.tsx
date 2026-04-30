import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saksham Nagpal | Senior Data Scientist & AI Engineer",
  description:
    "Portfolio of Sak Nagpal — Senior Data Scientist specialising in agentic AI, LLMs, NLP, and production ML systems. Based in Melbourne, Australia.",
  keywords: [
    "data scientist",
    "AI engineer",
    "machine learning",
    "LLMs",
    "RAG",
    "NLP",
    "Melbourne",
    "Jetstar",
    "ANZ",
    "Python",
    "Snowflake",
  ],
  openGraph: {
    title: "Saksham Nagpal | Senior Data Scientist & AI Engineer",
    description:
      "Portfolio of Sak Nagpal — Senior Data Scientist specialising in agentic AI, LLMs, NLP, and production ML systems. Based in Melbourne, Australia.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
