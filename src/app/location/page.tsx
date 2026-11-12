"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Copy, 
  Check, 
  Train, 
  Car, 
  Wifi, 
  Sparkles, 
  Coffee, 
  Umbrella, 
  Camera, 
  HelpCircle,
  Sun,
  Instagram,
  ExternalLink
} from "lucide-react";

export default function LocationPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const address = "서울 마포구 어울마당로 136-10 1층";
  const naverMapUrl = "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%96%B4%EC%9A%B8%EB%A7%88%EB%8B%B9%EB%A1%9C%20136-10";
  const kakaoMapUrl = "https://map.kakao.com/link/search/%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%96%B4%EC%9A%B8%EB%A7%88%EB%8B%B9%EB%A1%9C%20136-10";
  const googleMapUrl = "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8+%EB%A7%88%ED%8F%AC%EA%B5%AC+%EC%96%B4%EC%9A%B8%EB%A7%88%EB%8B%B9%EB%A1%9C+136-10";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* 1. Header (Compact & Clear) */}
      <section className="pt-10 pb-6 sm:pt-14 sm:pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ECE4D8] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#685E55] uppercase">
                <MapPin className="h-3 w-3 text-[#9B4A25]" />
                LOCATION & VISITING GUIDE
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl font-serif text-[#2D2522]">
                오시는 길
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-[#736860]">
                홍대입구역 8번 출구 도보 2분 거리에 위치한 테라스 카페 조블라(Jovular)입니다.
              </p>
            </div>

            <div className="self-start sm:self-auto rounded-xl bg-white/80 border border-[#ECE5DC] py-2 px-3.5 shadow-sm flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-[#2D2522]">
                09:00 – 24:00 (연중무휴)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Location, Maps & Contact Grid */}
      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Address & Visiting Info (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Address Box */}
              <div className="rounded-2xl bg-white p-6 border border-[#ECE5DC] shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9B4A25] uppercase tracking-wider">
                    <MapPin className="h-3.5 w-3.5" />
                    ADDRESS
                  </div>
                  <span className="text-[11px] font-medium text-[#8C8075]">
                    조블라 Jovular 1F
                  </span>
                </div>

                <div className="mt-3 rounded-xl bg-[#FAF7F2] p-4 border border-[#ECE5DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-[#2D2522]">
                      서울 마포구 어울마당로 136-10 1층
                    </p>
                    <p className="text-xs text-[#8C8075] mt-1">
                      홍대입구역 8번 출구 도보 2분 (어울마당로 골목 안쪽)
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#D5C9BC] bg-white px-3 py-1.5 text-xs font-medium text-[#4D423B] hover:bg-stone-50 transition-colors shrink-0 shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-700">복사 완료</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-[#8C8075]" />
                        <span>주소 복사</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 3 Map Links (Google, Naver, Kakao only) */}
                <div className="mt-4">
                  <p className="text-[11px] font-semibold text-[#8C8075] mb-2 uppercase tracking-wider">
                    MAP SERVICES
                  </p>
                  <div className="grid grid-cols-3 gap-2.5">
                    <a
                      href={naverMapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-[#03C75A] py-2.5 text-xs font-semibold text-white hover:bg-[#02b350] transition-colors shadow-sm"
                    >
                      <span>네이버지도</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={kakaoMapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-[#FEE500] py-2.5 text-xs font-semibold text-[#191919] hover:bg-[#f5dc00] transition-colors shadow-sm"
                    >
                      <span>카카오맵</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={googleMapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-[#4285F4] py-2.5 text-xs font-semibold text-white hover:bg-[#3367d6] transition-colors shadow-sm"
                    >
                      <span>구글맵</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Transit Details */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#665D56]">
                  <div className="rounded-xl bg-[#FAF7F2] p-3.5 border border-[#ECE5DC]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#2D2522] mb-1">
                      <Train className="h-3.5 w-3.5 text-[#9B4A25]" />
                      지하철 이용 시
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#736860]">
                      <strong className="text-[#2D2522]">홍대입구역 8번 출구 도보 2분</strong> (약 150m)
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#FAF7F2] p-3.5 border border-[#ECE5DC]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#2D2522] mb-1">
                      <Car className="h-3.5 w-3.5 text-[#9B4A25]" />
                      주차 안내
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#736860]">
                      매장 전용 주차 불가 • 인근 공영주차장 이용 권장
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours & Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Hours */}
                <div className="rounded-2xl bg-white p-5 border border-[#ECE5DC] shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9B4A25] uppercase tracking-wider">
                    <Clock className="h-3.5 w-3.5" />
                    영업 시간
                  </div>
                  <div className="mt-3.5 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#2D2522]">월요일 – 일요일</span>
                      <span className="text-[#665D56] font-medium">09:00 – 24:00</span>
                    </div>
                    <div className="flex justify-between text-[#8C8075]">
                      <span>라스트 오더</span>
                      <span>23:30</span>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-[#A3968B] border-t border-[#F2ECE3] pt-2.5">
                    * 연중무휴 정상 영업합니다.
                  </p>
                </div>

                {/* Contact */}
                <div className="rounded-2xl bg-white p-5 border border-[#ECE5DC] shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9B4A25] uppercase tracking-wider">
                    <Phone className="h-3.5 w-3.5" />
                    문의 & 연락처
                  </div>
                  <div className="mt-3.5 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#8C8075]">전화 문의</span>
                      <a 
                        href="tel:050713559243" 
                        className="font-semibold text-[#2D2522] hover:text-[#9B4A25] transition-colors"
                      >
                        0507-1355-9243
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8C8075]">인스타그램</span>
                      <a 
                        href="https://www.instagram.com/jovular_cafe" 
                        target="_blank" 
                        rel="noreferrer"
                        className="font-semibold text-[#9B4A25] hover:underline inline-flex items-center gap-1"
                      >
                        <Instagram className="h-3 w-3" />
                        @jovular_cafe
                      </a>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-[#A3968B] border-t border-[#F2ECE3] pt-2.5">
                    대관 및 단체 문의는 전화 또는 DM 문의 가능합니다.
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="rounded-2xl bg-white p-5 border border-[#ECE5DC] shadow-sm">
                <p className="text-[11px] font-semibold tracking-wider text-[#8C8075] uppercase mb-3">
                  AMENITIES & FACILITIES
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-[#5E534C]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#ECE5DC] px-3.5 py-1.5">
                    <Sun className="h-3.5 w-3.5 text-[#9B4A25]" />
                    야외 테라스
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#ECE5DC] px-3.5 py-1.5">
                    <Coffee className="h-3.5 w-3.5 text-[#9B4A25]" />
                    실내 라운지 좌석
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#ECE5DC] px-3.5 py-1.5">
                    <Wifi className="h-3.5 w-3.5 text-[#9B4A25]" />
                    고속 Wi-Fi
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#ECE5DC] px-3.5 py-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#9B4A25]" />
                    단체석 완비
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Map Box & Simple Guide (5 Cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-[#ECE5DC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#736860] mb-3">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-[#9B4A25]" />
                    위치 미리보기
                  </span>
                  <span className="text-[11px] text-[#8C8075]">
                    홍대입구역 8번 출구 도보 2분
                  </span>
                </div>

                {/* Map illustration preview */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#E8EFE8] border border-[#DDD3C6]">
                  {/* Subtle map stylized background grid */}
                  <svg className="w-full h-full text-emerald-800/20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="#E3EDE4" />
                    <rect width="100%" height="100%" fill="url(#grid)" opacity="0.6" />
                    {/* Simulated Han River / Line paths */}
                    <path d="M-20 180 Q 80 140 180 190 T 360 210 T 500 230" fill="none" stroke="#B8D6E8" strokeWidth="24" opacity="0.7" />
                    {/* Road paths */}
                    <path d="M 40 -10 L 160 300" stroke="#FFFFFF" strokeWidth="6" />
                    <path d="M -10 130 L 400 110" stroke="#FFFFFF" strokeWidth="8" />
                    <path d="M 120 -10 L 320 280" stroke="#FFFFFF" strokeWidth="5" />
                  </svg>

                  {/* Marker Pin: 조블라 */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="rounded-full bg-[#9B4A25] text-white p-2 shadow-lg border-2 border-white animate-bounce">
                      <Coffee className="h-4 w-4" />
                    </div>
                    <div className="mt-1 rounded-md bg-[#9B4A25] px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
                      조블라 Jovular
                    </div>
                  </div>

                  {/* Neighbor labels */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-[#4A3F38] shadow-sm">
                    홍대입구역 8번 출구
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-[#4A3F38] shadow-sm">
                    어울마당로 136-10 1층
                  </div>
                </div>

                {/* Map Quick Links */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <a
                    href={naverMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 rounded-xl bg-[#03C75A] py-2.5 text-xs font-semibold text-white hover:bg-[#02b350] transition-colors shadow-sm"
                  >
                    네이버지도 ↗
                  </a>
                  <a
                    href={kakaoMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 rounded-xl bg-[#FEE500] py-2.5 text-xs font-semibold text-[#191919] hover:bg-[#f5dc00] transition-colors shadow-sm"
                  >
                    카카오맵 ↗
                  </a>
                  <a
                    href={googleMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 rounded-xl bg-[#4285F4] py-2.5 text-xs font-semibold text-white hover:bg-[#3367d6] transition-colors shadow-sm"
                  >
                    구글맵 ↗
                  </a>
                </div>
              </div>

              {/* Wayfinding Tip */}
              <div className="mt-5 rounded-xl bg-[#FAF7F2] p-4 border border-[#ECE5DC]">
                <p className="text-xs font-semibold text-[#2D2522] flex items-center gap-1.5">
                  <HelpCircle className="h-3.5 w-3.5 text-[#9B4A25]" />
                  찾아오시는 길 안내
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#736860]">
                  홍대입구역 8번 출구로 나와 어울마당로 방향 골목 안쪽으로 약 2분 걸어오시면 1층 조블라 테라스 입구를 찾으실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Patio Etiquette */}
      <section className="py-12 border-t border-[#EAE3D9]/70">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                PATIO ETIQUETTE
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                조블라 매장 이용 안내
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#736860] max-w-md leading-relaxed">
              모든 분들이 편안한 시간을 보내실 수 있도록 아래 내용을 확인해 주세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Rule 1 */}
            <div className="rounded-2xl bg-white p-6 border border-[#ECE5DC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-9 w-9 rounded-xl bg-[#FAF5EE] border border-[#DDD3C6] flex items-center justify-center text-[#9B4A25]">
                  <Coffee className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-serif text-base font-bold text-[#2D2522]">
                  01. 쾌적한 공간 이용
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#736860]">
                  다른 손님들의 편안한 휴식을 위해 지나치게 큰 소리의 대화나 스피커폰 통화는 배려를 부탁드립니다.
                </p>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="rounded-2xl bg-white p-6 border border-[#ECE5DC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-9 w-9 rounded-xl bg-[#FAF5EE] border border-[#DDD3C6] flex items-center justify-center text-[#9B4A25]">
                  <Umbrella className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-serif text-base font-bold text-[#2D2522]">
                  02. 우천 및 강풍 시 안내
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#736860]">
                  비가 오거나 바람이 강한 날에는 안전을 위해 야외 테라스석 이용이 제한되며 실내 좌석으로 안내해 드립니다.
                </p>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="rounded-2xl bg-white p-6 border border-[#ECE5DC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-9 w-9 rounded-xl bg-[#FAF5EE] border border-[#DDD3C6] flex items-center justify-center text-[#9B4A25]">
                  <Camera className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-serif text-base font-bold text-[#2D2522]">
                  03. 상업 촬영 사전 문의
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#736860]">
                  쇼핑몰 룩북, 상업적 영상 촬영 등은 일반 이용객의 편의를 위해 사전 대관 문의 후 진행 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Inquiries & Table Reservation */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-[#ECE4D8]/80 border border-[#DDD3C6] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Info */}
              <div className="lg:col-span-5">
                <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                  QUICK INQUIRIES & RESERVATION
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                  단체 및 공간 대관 문의
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-[#665D56] leading-relaxed">
                  단체 모임, 공간 대관 및 촬영 문의는 아래 양식이나 인스타그램 DM (@jovular_cafe), 전화(0507-1355-9243)로 편하게 연락해 주세요.
                </p>

                <div className="mt-6 space-y-2 text-xs text-[#5E534C]">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9B4A25]" />
                    <span>당일 테라스석은 워크인 우선</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9B4A25]" />
                    <span>평일 단체 예약 및 대관 가능</span>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 sm:p-8 border border-[#DDD3C6] shadow-sm space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#665D56] mb-1">
                        성함 또는 단체명
                      </label>
                      <input
                        type="text"
                        placeholder="홍길동"
                        required
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#DDD3C6] px-3.5 py-2.5 text-xs text-[#2D2522] focus:outline-none focus:ring-1 focus:ring-[#9B4A25]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#665D56] mb-1">
                        연락처
                      </label>
                      <input
                        type="tel"
                        placeholder="010-0000-0000"
                        required
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#DDD3C6] px-3.5 py-2.5 text-xs text-[#2D2522] focus:outline-none focus:ring-1 focus:ring-[#9B4A25]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#665D56] mb-1">
                        방문 예정 일시
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#DDD3C6] px-3.5 py-2.5 text-xs text-[#2D2522] focus:outline-none focus:ring-1 focus:ring-[#9B4A25]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#665D56] mb-1">
                        문의 유형
                      </label>
                      <select
                        className="w-full rounded-xl bg-[#FAF7F2] border border-[#DDD3C6] px-3.5 py-2.5 text-xs text-[#2D2522] focus:outline-none focus:ring-1 focus:ring-[#9B4A25]"
                      >
                        <option>야외 테라스 단체석 문의</option>
                        <option>전체 공간 대관 문의</option>
                        <option>촬영 및 케이터링 문의</option>
                        <option>기타 문의</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#665D56] mb-1">
                      남기실 메시지
                    </label>
                    <textarea
                      rows={3}
                      placeholder="인원수 및 요청사항을 편안하게 적어주세요"
                      required
                      className="w-full rounded-xl bg-[#FAF7F2] border border-[#DDD3C6] px-3.5 py-2.5 text-xs text-[#2D2522] focus:outline-none focus:ring-1 focus:ring-[#9B4A25]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#9B4A25] py-3 text-xs font-semibold text-white hover:bg-[#853C1B] transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  >
                    {submitted ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>문의가 성공적으로 전달되었습니다!</span>
                      </>
                    ) : (
                      <>
                        <span>문의 메시지 보내기</span>
                        <span>▷</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
