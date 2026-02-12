import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "HAKX ED TECH | Cyber Security Training & Workshops",
  description:
    "Learn practical, real-world cyber security skills designed for students who want careers — not just certificates. Industry-crafted programs, hands-on training, instant access.",
  keywords: [
    "cyber security training",
    "ethical hacking course",
    "cyber security workshops",
    "cyber security certification",
    "HAKX",
    "cyber security India",
    "penetration testing course",
    "cyber crime awareness",
  ],
  authors: [{ name: "HAKX ED TECH" }],
  openGraph: {
    title: "HAKX ED TECH | Cyber Security Training & Workshops",
    description:
      "Learn practical, real-world cyber security skills designed for students who want careers — not just certificates.",
    url: "https://hakxedtech.com",
    siteName: "HAKX ED TECH",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAKX ED TECH | Cyber Security Training & Workshops",
    description:
      "Learn practical, real-world cyber security skills designed for students who want careers — not just certificates.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
