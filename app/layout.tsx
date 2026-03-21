import type { ReactNode } from 'react';
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}