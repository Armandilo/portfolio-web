"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursorX', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursorY', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background: 'radial-gradient(circle at var(--cursorX, 0) var(--cursorY, 0), rgba(13, 22, 61, 0.7), transparent 30%)',
          zIndex: 0
        }} />

        {children}
      </body>
    </html>
  );
}
