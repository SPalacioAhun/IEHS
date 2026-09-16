import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IEHS",
  description: "Instituto de Estudios Histórico-Sociales Prof. Juan Carlos Grosso.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
