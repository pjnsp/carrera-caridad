import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
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
  title: "Carrera por la Esperanza — Pastoral Juvenil NSP",
  description:
    "Carrera benéfica organizada por la Pastoral Juvenil de Nuestra Señora de la Paz. Corre, camina o acompaña. Cada paso construye un futuro mejor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${anton.variable} ${plusJakarta.variable} font-body text-ink antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
