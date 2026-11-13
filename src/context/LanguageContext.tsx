"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ko" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ko",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ko");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("jovular_lang") as Language | null;
      if (savedLang === "ko" || savedLang === "en") {
        setLangState(savedLang);
      } else {
        // Detect browser language if English
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("en")) {
          setLangState("en");
        }
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("jovular_lang", newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    const nextLang = lang === "ko" ? "en" : "ko";
    setLang(nextLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
