"use client";

import type React from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/Sidebar";
import { LanguageProvider } from "@/contexts/language-context";

const inter = Inter({ subsets: ["latin"] });

export function ClientLanguageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background")}>
        <LanguageProvider>
          <Sidebar />
          <div className="flex flex-col md:pl-64">
            <main className="flex-1">{children}</main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
