import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "UT Dallas Purity Test",
  description: "The Official UT Dallas Purity Test",
  icons: {
    icon: '/images/head.png',
    shortcut: '/images/head.png',
    apple: '/images/head.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
