import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Three js with Next14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
