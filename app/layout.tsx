import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-impact",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carrera por la Caridad — Pastoral Juvenil NSP",
  description:
    "Carrera benéfica organizada por la Pastoral Juvenil de Nuestra Señora de la Paz. Corre, camina o trota. ¡Trae a tu mascota!",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3XHXMB8T6J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3XHXMB8T6J');
          `}
        </Script>
      </head>
      <body
        className={`${anton.variable} ${plusJakarta.variable} font-body text-ink antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
