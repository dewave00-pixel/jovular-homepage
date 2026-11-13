"use client";

import Link from "next/link";
import { 
  Sun, 
  Sprout, 
  Coffee, 
  Clock, 
  ArrowRight, 
  ChevronDown 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const threePieces = [
    {
      title: "The Terrace",
      badge: lang === "ko" ? "야외 테라스" : "Outdoor Terrace",
      badgeColor: "bg-[#EBF0E6] text-[#486338]",
      desc: lang === "ko" 
        ? "탁 트인 야외에서 바람과 햇살을 즐길 수 있는 조블라의 대표 테라스 공간입니다."
        : "A signature outdoor space where you can unwind in the breeze and gentle sunlight.",
      img: "/images/terrace_02.jpg",
    },
    {
      title: "Indoor Lounge",
      badge: lang === "ko" ? "실내 라운지" : "Indoor Lounge",
      badgeColor: "bg-[#F9ECE7] text-[#9E5336]",
      desc: lang === "ko"
        ? "붉은 벽돌과 편안한 우드톤으로 꾸며진 차분하고 아늑한 실내 좌석입니다."
        : "Warm and cozy indoor seating styled with classic brickwork and comfortable wood accents.",
      img: "/images/indoor_01.jpg",
    },
    {
      title: "Courtyard Patio",
      badge: lang === "ko" ? "안뜰 테라스" : "Courtyard Patio",
      badgeColor: "bg-[#F2ECE3] text-[#7A6B56]",
      desc: lang === "ko"
        ? "골목 안쪽에 자리해 소음 없이 프라이빗하게 머물 수 있는 안뜰 공간입니다."
        : "A peaceful private courtyard patio tucked away from street noise for calm conversations.",
      img: "/images/terrace_03.jpg",
    },
  ];

  return (
    <>
      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ECE4D8] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#685E55] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9B4A25]" />
                {t.hero.badge}
              </div>

              {/* Title */}
              <h1 className="mt-6 text-4xl sm:text-6xl text-[#2D2522] leading-[1.1] font-serif">
                {t.hero.title1} <br />
                <span className="italic font-normal text-[#9B4A25]">{t.hero.title2}</span>
              </h1>

              {/* Sub description */}
              <p className="mt-6 text-base sm:text-lg text-[#665D56] leading-relaxed max-w-md">
                {t.hero.desc}
              </p>

              {/* Feature icons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-[#61564E]">
                <div className="flex items-center gap-1.5">
                  <Sun className="h-4 w-4 text-[#C26B38]" />
                  <span>{t.hero.terrace}</span>
                </div>
                <span className="text-[#C9BFB5]">•</span>
                <div className="flex items-center gap-1.5">
                  <Sprout className="h-4 w-4 text-[#C26B38]" />
                  <span>{t.hero.lounge}</span>
                </div>
                <span className="text-[#C9BFB5]">•</span>
                <div className="flex items-center gap-1.5">
                  <Coffee className="h-4 w-4 text-[#C26B38]" />
                  <span>{t.hero.coffee}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-9 flex items-center gap-4">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full bg-[#9B4A25] px-6 py-3 text-sm font-medium text-white hover:bg-[#853C1B] transition-colors shadow-sm"
                >
                  {lang === "ko" ? "메뉴 보기" : "View Menu"}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/location"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D5C9BC] bg-[#EFE8DF]/70 px-6 py-3 text-sm font-medium text-[#4D423B] hover:bg-[#E8DFD3] transition-colors"
                >
                  {t.hero.viewLocation}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo & Floating Badges */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white/80 aspect-[4/3] sm:aspect-[1.15/1]">
                  <img
                    src="/images/terrace_01.jpg"
                    alt="조블라 야외 테라스 전경"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Floating Card 1: Left Bottom */}
                <div className="absolute -bottom-5 left-4 sm:left-6 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg border border-white/60 flex items-center gap-3">
                  <div className="rounded-lg bg-[#FAF5EE] p-2 text-[#9B4A25]">
                    <Coffee className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-wider text-[#8C8075] uppercase">
                      SPECIALTY COFFEE
                    </p>
                    <p className="font-serif text-xs font-semibold text-[#2D2522]">
                      Cafe Jovular
                    </p>
                  </div>
                </div>

                {/* Floating Card 2: Right Bottom */}
                <div className="absolute -bottom-8 right-2 sm:right-4 max-w-[210px] rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg border border-white/60">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#C26B38] tracking-wider uppercase">
                    <Clock className="h-3.5 w-3.5" />
                    OPEN EVERYDAY
                  </div>
                  <p className="mt-1 text-[11px] leading-tight text-[#665D56]">
                    {t.hero.statusSub}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Space Section */}
      <section id="about" className="py-20 border-t border-[#EAE3D9]/70">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                {t.space.badge}
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold text-[#2D2522]">
                {t.space.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#736860] max-w-md leading-relaxed">
              {t.space.desc1}
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threePieces.map((card, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white p-5 shadow-sm border border-[#ECE5DC] hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="overflow-hidden rounded-xl aspect-[16/11] bg-[#EFE8DF]">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="font-serif text-lg font-semibold text-[#2D2522]">
                    {card.title}
                  </h3>
                  <span className={`rounded px-2 py-0.5 text-[11px] font-medium ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#736860]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Signature Menu Section */}
      <section id="menu" className="py-20 border-t border-[#EAE3D9]/70 bg-[#FAF7F2]">
        <div className="mx-auto max-w-6xl px-6">
          {/* Title Area */}
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
              {t.menu.badge}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-normal text-[#2D2522]">
              {t.menu.title}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#736860]">
              {t.menu.desc}
            </p>
          </div>

          {/* Menu 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.menu.items.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white overflow-hidden border border-[#ECE5DC] shadow-sm flex flex-col justify-between hover:border-[#D5C9BC] hover:shadow-md transition-all group"
              >
                {item.image && (
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#FAF5EE]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-baseline justify-between gap-3 pb-2.5 border-b border-[#F2ECE3]">
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D2522] group-hover:text-[#9B4A25] transition-colors">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <span className="text-[11px] font-sans text-[#8C8075] font-normal block mt-0.5">
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                      <span className="font-serif text-base font-bold text-[#9B4A25] shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-[#736860] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 flex items-center justify-between text-[11px] font-medium text-[#998E84]">
                    <span>{item.tags}</span>
                    <span className="text-[#9B4A25] text-xs">✦</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Opening Hours Banner */}
      <section id="visit" className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-[#ECE4D8]/80 border border-[#DDD3C6] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                <Clock className="h-3.5 w-3.5" />
                OPENING HOURS
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                {t.banner.title}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#665D56] leading-relaxed">
                {t.banner.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center gap-4 shrink-0">
              <div className="flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2.5 text-xs font-medium text-[#5E534C] border border-white/60">
                <Sun className="h-4 w-4 text-[#9B4A25]" />
                <div className="leading-tight">
                  <span className="block font-semibold text-[#2D2522]">{t.banner.terraceInfo}</span>
                  <span className="text-[10px] text-[#8C8075]">{t.banner.stationInfo}</span>
                </div>
              </div>
              <Link
                href="/location"
                className="rounded-xl bg-[#9B4A25] px-6 py-3 text-xs font-semibold text-white tracking-wide hover:bg-[#853C1B] transition-colors shadow-sm flex items-center gap-1.5"
              >
                {t.banner.viewBtn}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
