import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react"; // Import useState and useEffect

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Debrup's Portfolio",
  description: "More about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures code inside is executed only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server side to prevent SSR errors
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
