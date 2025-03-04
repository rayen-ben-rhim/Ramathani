import type { Metadata } from "next"
import type React from "react"
import "./globals.css"
import { ClientLanguageLayout } from "@/components/ClientLanguageLayout"

export const metadata: Metadata = {
  title: "Ramadan Leveling System",
  description: "Track your spiritual progress during Ramadan",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLanguageLayout>{children}</ClientLanguageLayout>
}

