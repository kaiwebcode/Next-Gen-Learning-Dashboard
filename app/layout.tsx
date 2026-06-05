import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning-Hub Dashboard",
  description: "Next generation learning dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
