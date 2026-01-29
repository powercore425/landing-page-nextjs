import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maslin Academy - Peak Performance Through Personalized Education",
  description: "Maslin Academy combines scientific gap analysis, elite instructors, and mental performance coaching to guarantee measurable results.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="antialiased bg-paper overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
