import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camly",
  description: "A simple service for storing and sharing images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
