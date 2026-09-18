import type { Metadata } from "next";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";
import { BackgroundRain } from "@/components/background-rain";

export const metadata: Metadata = {
  metadataBase: new URL("https://code-with-nuel-portfolio.vercel.app"),
  title: "Emmanuel Okon - Full-Stack Developer",
  description:
    "Emmanuel Okon (P) - full-stack developer building VerseID, UptownLogs, and production web apps across React, Next.js, Django and FastAPI.",
  openGraph: {
    title: "Emmanuel Okon - Full-Stack Developer",
    description: "Full-stack developer. Currently building VerseID and production apps at Hoste Technology.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BackgroundRain />
        {children}
      </body>
    </html>
  );
}
