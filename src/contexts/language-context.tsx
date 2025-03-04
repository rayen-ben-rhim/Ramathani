"use client"

import { createContext, useContext, useEffect, useState } from "react"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState("en")

  useEffect(() => {
    // Load language preference from localStorage on mount
    const storedLanguage = localStorage.getItem("language")
    if (storedLanguage) {
      setLanguageState(storedLanguage)
    }
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}