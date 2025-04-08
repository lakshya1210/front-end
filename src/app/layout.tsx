import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter, Nunito } from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs"
// import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/common/ProgressBarProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AiResume : Professional ",
  description: "Generate a polished, professional resume in just a few clicks with our AI-powered resume builder",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/"}
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          logoImageUrl: "/icons/logo.svg",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${nunito.variable} font-inter`}>
          <Providers>{children}</Providers>
          {/* <Toaster/> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
