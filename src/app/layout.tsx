import type { Metadata, Viewport } from "next";
import { Manrope, Russo_One } from "next/font/google";

import { PwaBootstrap } from "@/components/pwa-bootstrap";
import { SessionProvider } from "@/components/session-provider";

import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

const displayFont = Russo_One({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export const metadata: Metadata = {
  applicationName: "Padel Next Point",
  title: {
    default: "Padel Next Point",
    template: "%s | Padel Next Point",
  },
  description:
    "Mobile-first PWA для падела: профили игроков, матчи, турниры и рейтинг.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Padel Next Point",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#e3643d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <SessionProvider>
          <PwaBootstrap />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
