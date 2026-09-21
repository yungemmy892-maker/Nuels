import type { Metadata } from "next";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";
import { BackgroundRain } from "@/components/background-rain";
import { SITE_URL } from "@/lib/site";

const title = "Emmanuel Okon - Full-Stack Developer";
const description =
  "Emmanuel Okon (P) - full-stack developer building VerseID, UptownLogs, and production web apps across React, Next.js, Django and FastAPI.";
const ogDescription =
  "Full-stack developer. Currently building VerseID and production apps at Hoste Technology.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Emmanuel Okon",
  },
  description,
  keywords: [
    "Emmanuel Okon",
    "full-stack developer",
    "frontend engineer",
    "React developer",
    "Next.js developer",
    "Django developer",
    "FastAPI developer",
    "web developer Nigeria",
    "software engineer portfolio",
  ],
  authors: [{ name: "Emmanuel Okon", url: SITE_URL }],
  creator: "Emmanuel Okon",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title,
    description: ogDescription,
    url: SITE_URL,
    siteName: "Emmanuel Okon - Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Okon - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: ogDescription,
    creator: "@CTRL_guy",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "3s1OWmIvzQtopZsJN54v3YHruh-VzS0UwLEZD5pC28c",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emmanuel Okon",
  alternateName: "P",
  url: SITE_URL,
  image: `${SITE_URL}/emmanuel-okon-full-stack-developer.jpg`,
  jobTitle: "Full-Stack Developer",
  description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  worksFor: {
    "@type": "Organization",
    name: "Hoste Technology Limited",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "SvelteKit",
    "Vue",
    "TypeScript",
    "Python",
    "Django",
    "FastAPI",
    "Node.js",
    "Express",
  ],
  sameAs: [
    "https://github.com/yungemmy892-maker",
    "https://twitter.com/CTRL_guy",
    "https://tiktok.com/in/CTRL_guy",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <BackgroundRain />
        {children}
      </body>
    </html>
  );
}