// layout.tsx (Server-side component, no "use client" directive here)
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";

// No "use client" directive here
const inter = Inter({ subsets: ["latin"] });

 export const metadata = {
   title: "Debrup's Portfolio",
   description: "More about me",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/d.png" sizes="any" />
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
