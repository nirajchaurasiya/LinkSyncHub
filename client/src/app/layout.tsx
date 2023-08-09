import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkSyncHub - An All-In-One-Social-Hub",
  description:
    "LinkSynHub is the ultimate social media fusion app that brings together the power of video watching, news posting, and chatting in one seamless platform. Say goodbye to switching between apps – with LinkSynHub, you can enjoy all your favorite social media experiences in a single, convenient hub.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
