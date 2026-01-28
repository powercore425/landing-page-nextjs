import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Modern landing page built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-paper">
        {children}
      </body>
    </html>
  );
}
