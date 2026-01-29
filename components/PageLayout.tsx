"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GitHubIcon from "./GitHubIcon";
import ScrollToTop from "./ScrollToTop";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <GitHubIcon />
      <Navbar />
      <main className="min-h-screen bg-paper overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
