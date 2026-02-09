import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APNA RASHAN STORE - Premium Ration Packages",
  description: "Premium quality ration packages at unbeatable prices",
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
