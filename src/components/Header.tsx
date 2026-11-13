"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, setLang } = useLanguage();
  const t = translations[lang];

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.location, href: "/location" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-sm border-b border-[#EAE3D9]/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFE8DF] border border-[#DDD3C6] text-[9px] font-serif font-bold text-[#9B4A25]">
            jovular
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tight text-[#2D2522] leading-none">
              jovular
            </span>
            <span className="text-[9px] font-sans tracking-widest text-[#8A7E75] font-semibold mt-0.5">
              MOOD & COFFEE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-[#2D2522] font-semibold underline underline-offset-8 decoration-1 decoration-[#9B4A25]"
                    : "text-[#5E534C] hover:text-[#9B4A25]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher Pill */}
          <div className="flex items-center rounded-full border border-[#DDD3C6] bg-white/90 p-0.5 shadow-sm text-[11px] font-semibold">
            <button
              onClick={() => setLang("ko")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                lang === "ko"
                  ? "bg-[#9B4A25] text-white shadow-xs"
                  : "text-[#736860] hover:text-[#2D2522]"
              }`}
            >
              KO
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                lang === "en"
                  ? "bg-[#9B4A25] text-white shadow-xs"
                  : "text-[#736860] hover:text-[#2D2522]"
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/location"
            className="rounded-full bg-[#9B4A25] px-4 sm:px-5 py-2 text-xs font-semibold text-white tracking-wide hover:bg-[#853C1B] transition-colors shadow-sm whitespace-nowrap"
          >
            {t.nav.reserve}
          </Link>
          <Link
            href="/location"
            aria-label="User profile"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9B4A25] text-white hover:bg-[#853C1B] transition-colors shadow-sm shrink-0"
          >
            <User className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-[#5E534C] hover:bg-[#EFE8DF] transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#EAE3D9] px-6 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive
                    ? "text-[#9B4A25] font-semibold"
                    : "text-[#5E534C] hover:text-[#9B4A25]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
