import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND, CITY } from "@/lib/data";

export const metadata: Metadata = {
  title: `${BRAND} | Hamburgueria artesanal em ${CITY}`,
  description: `Hambúrgueres artesanais, combos e porções em ${CITY}. Peça pelo WhatsApp.`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Syne:wght@600;700;800&family=Instrument+Serif:ital@1&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
