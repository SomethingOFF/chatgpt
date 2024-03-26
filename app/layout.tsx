import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const Poppins = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI",
  description: "Ai app for image,video,music etc geenration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(Poppins)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
