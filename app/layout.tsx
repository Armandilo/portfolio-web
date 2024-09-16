"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";
import { Suspense } from "react";
import LoadingPage from "./loadingPage";
import { useState } from "react";
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

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
  
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  if (!isMounted) {
    return null;
  }


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
          background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(13, 22, 61, 0.7), transparent 30%)`,
          zIndex: 0
        }} />
        <Suspense fallback={<LoadingPage />}>
        {children}
        </Suspense>
        
      </body>
    </html>
  );
}
