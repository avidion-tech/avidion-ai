import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardShell from "@/components/DashboardShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avidion Workspace",
  description: "AI Workforce Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
