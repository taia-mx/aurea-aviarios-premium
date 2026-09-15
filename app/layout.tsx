import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Aurea Aviarios | Diseño para vivir con ellos", template: "%s | Aurea Aviarios" },
  description: "Jaulas para aves diseñadas para combinar bienestar, funcionalidad y hogar.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
