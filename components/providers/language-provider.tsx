"use client"

import * as React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { enTranslations } from "./translations/en"
import { esTranslations } from "./translations/es"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: enTranslations,
  es: esTranslations,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language")
      if (savedLanguage === "en" || savedLanguage === "es") {
        setLanguage(savedLanguage)
      }
    } catch {
      // Silently handle localStorage errors in production
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    try {
      localStorage.setItem("language", lang)
    } catch {
      // Silently handle localStorage errors in production
    }
  }

  const t = (key: string): string => {
    try {
      const langObj = translations[language]
      if (!langObj) return key

      const translation = langObj[key as keyof typeof langObj]
      return translation || key
    } catch (error) {
      console.log("Translation error for key:", key, error)
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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