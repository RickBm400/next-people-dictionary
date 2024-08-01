"use client";
import React from "react";
import "@/sass/global.sass";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// buscar ejemplos en el repo de jest carpeta ejemplos
