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
      <body
        className={`${geistSans.className} antialiased h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]
 bg-[size:6rem_4rem]`}
      >
        <ThemeProvider>
          <Provider>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
