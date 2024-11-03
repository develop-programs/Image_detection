import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import SessionProviderClient from "@/providers/SessionProvider";
import ReduxSessionProvider from "@/providers/ReduxSessionProvider";
import UserSession from "@/function/userSession";

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

export const metadata: Metadata = {
  title: "Photocess",
  description: "A simple photo processing app that can do some cool stuff.",
  icons: {
    icon: "./icon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProviderClient>
          <ReduxSessionProvider>
            {children}
            <UserSession />
          </ReduxSessionProvider>
        </SessionProviderClient>
        <Toaster richColors position="top-right" />

      </body>
    </html>
  );
}
