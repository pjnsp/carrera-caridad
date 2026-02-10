import { Fredoka, Nunito } from "next/font/google";

const fredoka = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

export default function PreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${fredoka.variable} ${nunito.variable} bg-cream font-[family-name:var(--font-body)] text-slate antialiased overflow-x-hidden`}
    >
      {children}
    </div>
  );
}
