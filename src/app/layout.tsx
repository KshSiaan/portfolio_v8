import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Provider from "@/provider/provider";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Raven",
  description: "Raven's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider>
          <Provider>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
