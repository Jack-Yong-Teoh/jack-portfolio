import "../styles/globals.scss";
import { TolgeeNextProvider } from "@/tolgee/client";
import { getTolgee } from "@/tolgee/server";
import { getLanguage } from "@/tolgee/language";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Teoh Jack Yong",
    default: "Teoh Jack Yong",
  },
  description: "Portfolio of Teoh Jack Yong - Software Engineer",
  applicationName: "Teoh Jack Yong Portfolio",
  authors: [{ name: "Teoh Jack Yong" }],
  keywords: [
    "Teoh Jack Yong",
    "Portfolio",
    "Software Engineer",
    "Developer",
    "Web Development",
    "React",
    "Next.js",
  ],
  creator: "Teoh Jack Yong",
  publisher: "Teoh Jack Yong",
  openGraph: {
    title: "Teoh Jack Yong",
    description: "Portfolio of Teoh Jack Yong - Software Engineer",
    siteName: "Teoh Jack Yong",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Teoh Jack Yong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teoh Jack Yong",
    description: "Portfolio of Teoh Jack Yong - Software Engineer",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLanguage();
  const tolgee = await getTolgee();
  const staticData = await tolgee.loadRequired();

  return (
    <html lang={locale}>
      <body>
        <TolgeeNextProvider language={locale} staticData={staticData}>
          {children}
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
