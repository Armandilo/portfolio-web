"use client";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const ClientSideLayout = dynamic(() => import('./ClientSideLayout'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ClientSideLayout>{children}</ClientSideLayout>;
}