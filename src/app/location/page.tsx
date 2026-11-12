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
  Sun
} from "lucide-react";

export default function LocationPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const address = "서울 마포구 와우산로 29마길 (조블라 Jovular)";

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
      {/* 2. Top Title Header */}
      <section className="pt-14 pb-8 sm:pt-16 sm:pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ECE4D8] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#685E55] uppercase">
                <Sun className="h-3 w-3 text-[#9B4A25]" />
                COURTYARD • SUNLIT PATIO • SEOUL
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-serif text-[#2D2522]">
                Visit Jovular
              </h1>
              <p className="mt-3 text-xs sm:text-sm text-[#736860]">
                햇살 가득한 조블라의 테라스로 당신을 초대합니다
              </p>
            </div>

            {/* Operating status badge */}
            <div className="self-start md:self-end rounded-2xl bg-white/80 border border-[#ECE5DC] p-3 px-4 shadow-sm flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-xs font-semibold text-[#2D2522]">
                  현재 야외 테라스 운영 중
                </p>
                <p className="text-[10px] text-[#8C8075]">
                  햇살 좋은 남향 코트야드 좌석
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hero Visual Section (2 Columns) */}
      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Big Terrace Image */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[420px] shadow-md border border-[#ECE5DC]">
              <img
                src="/images/terrace_01.jpg"
                alt="따스한 햇살과 허브 향이 머무는 조블라 정원"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[10px] font-bold tracking-widest text-[#E5A83E] uppercase mb-1.5">
                  THE OUTDOOR TERRACE
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                  따스한 햇살과 허브 향이 머무는 조블라 정원
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-200 max-w-xl leading-relaxed">
                  붉은 벽돌 벤치와 내추럴한 원목 테이블이 만들어내는 이국적인 야외테라스 공간입니다.
                </p>
              </div>
            </div>

            {/* Right Vignette Card */}
            <div className="lg:col-span-4 rounded-3xl bg-[#FAF5EE] border border-[#DDD3C6] p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-9 w-9 rounded-full bg-white border border-[#DDD3C6] flex items-center justify-center text-[#9B4A25] shadow-sm">
                    <Coffee className="h-4 w-4" />
                  </div>
                  <span className="rounded-full bg-[#EFE8DF] px-3 py-1 text-[11px] font-medium text-[#736860]">
                    Courtyard & Coffee
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-serif font-bold text-[#2D2522]">
                  자연스러운 쉼이 있는 곳
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#736860]">
                  프렌치풍 크림 트렐리스와 싱그러운 레몬 장식이 반겨주는 공간. 안뜰 테라스에서 따뜻한 커피 한 잔의 여유를 즐겨보세요.
                </p>
              </div>

              <div className="pt-6 border-t border-[#ECE5DC] mt-6 flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-[#8C8075] uppercase">
                <span>✦</span>
                <span>Seoul Courtyard Roastery Mood</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Location & Map Section */}
      <section className="py-12 border-t border-[#EAE3D9]/70">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Info Cards */}
            <div className="lg:col-span-7 space-y-6">
              {/* Address Box */}
              <div className="rounded-2xl bg-white p-6 border border-[#ECE5DC] shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9B4A25] uppercase tracking-wider">
                    <MapPin className="h-3.5 w-3.5" />
                    LOCATION
                  </div>
                  <a
                    href="https://map.naver.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded bg-[#03C75A] px-3 py-1 text-[11px] font-semibold text-white hover:bg-[#02b350] transition-colors"
                  >
                    N 네이버 지도 열기 ↗
                  </a>
                </div>

                <h2 className="mt-3 text-2xl font-serif font-bold text-[#2D2522]">
                  오시는 길
                </h2>

                <div className="mt-4 rounded-xl bg-[#FAF7F2] p-4 border border-[#ECE5DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#2D2522]">
                      서울 마포구 와우산로 29마길 (조블라 Jovular)
                    </p>
                    <p className="text-xs text-[#8C8075] mt-1">
                      햇살이 들어오는 골목 안쪽, 유럽풍 벽돌 테라스와 아이보리 철제 게이트
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

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#665D56]">
                  <div className="rounded-xl bg-[#FAF7F2] p-3.5 border border-[#ECE5DC]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#2D2522] mb-1">
                      <Train className="h-3.5 w-3.5 text-[#9B4A25]" />
                      지하철 이용 시
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#736860]">
                      홍대입구역 7번 출구 또는 서강대역 도보 6~8분 거리
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#FAF7F2] p-3.5 border border-[#ECE5DC]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#2D2522] mb-1">
                      <Car className="h-3.5 w-3.5 text-[#9B4A25]" />
                      주차 안내
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#736860]">
                      매장 전용 주차 불가 • 인근 동교동 공영주차장 이용 권장
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours & Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Hours */}
                <div className="rounded-2xl bg-white p-6 border border-[#ECE5DC] shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9B4A25] uppercase tracking-wider">
                    <Clock className="h-3.5 w-3.5" />
                    영업 시간
                  </div>
                  <div className="mt-4 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#2D2522]">월요일 – 일요일</span>
                      <span className="text-[#665D56]">09:00 – 24:00</span>
                    </div>
                    <div className="flex justify-between text-[#8C8075]">
                      <span>라스트 오더</span>
                      <span>23:30</span>
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] text-[#A3968B] border-t border-[#F2ECE3] pt-3">
                    * 연중무휴 (휴무 변동 시 인스타그램 공지)
                  </p>
                </div>

                {/* Contact */}
                <div className="rounded-2xl bg-white p-6 border border-[#ECE5DC] shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9B4A25] uppercase tracking-wider">
                    <Phone className="h-3.5 w-3.5" />
                    문의 & 연락처
                  </div>
                  <div className="mt-4 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#8C8075]">유선 문의</span>
                      <span className="font-semibold text-[#2D2522]">02-332-4280</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C8075]">인스타그램</span>
                      <span className="font-semibold text-[#9B4A25]">@jovular.mood</span>
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] text-[#A3968B] border-t border-[#F2ECE3] pt-3">
                    대관 및 단체 예약은 DM으로 문의 가능합니다.
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="rounded-2xl bg-white p-6 border border-[#ECE5DC] shadow-sm">
                <p className="text-[11px] font-semibold tracking-wider text-[#8C8075] uppercase mb-3">
                  COURTYARD AMENITIES
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-[#5E534C]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#ECE5DC] px-3.5 py-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#9B4A25]" />
                    포토존 & 가든 뷰
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#ECE5DC] px-3.5 py-1.5">
                    <Sun className="h-3.5 w-3.5 text-[#9B4A25]" />
                    단독 야외테라스
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#ECE5DC] px-3.5 py-1.5">
                    <Wifi className="h-3.5 w-3.5 text-[#9B4A25]" />
                    고속 무선 인터넷 (Wi-Fi)
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#ECE5DC] px-3.5 py-1.5">
                    <Coffee className="h-3.5 w-3.5 text-[#9B4A25]" />
                    테라스 단체석 마련
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#ECE5DC] px-3.5 py-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#9B4A25]" />
                    콘센트 완비 (실내석)
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Map Graphic Box */}
            <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-[#ECE5DC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#736860] mb-3">
                  <span className="flex items-center gap-1 font-medium">
                    <Sun className="h-3.5 w-3.5 text-[#C26B38]" />
                    햇살 채광 우수 • 서향 테라스
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
                    {/* Simulated Han River line */}
                    <path d="M-20 180 Q 80 140 180 190 T 360 210 T 500 230" fill="none" stroke="#B8D6E8" strokeWidth="24" opacity="0.7" />
                    {/* Road paths */}
                    <path d="M 40 -10 L 160 300" stroke="#FFFFFF" strokeWidth="6" />
                    <path d="M -10 130 L 400 110" stroke="#FFFFFF" strokeWidth="8" />
                    <path d="M 120 -10 L 320 280" stroke="#FFFFFF" strokeWidth="5" />
                  </svg>

                  {/* Marker Pin: jovular patio */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="rounded-full bg-[#9B4A25] text-white p-2 shadow-lg border-2 border-white animate-bounce">
                      <Coffee className="h-4 w-4" />
                    </div>
                    <div className="mt-1 rounded-md bg-[#9B4A25] px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
                      jovular patio
                    </div>
                  </div>

                  {/* Neighbor labels */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-[#4A3F38]">
                    연남동 • 경의선숲길
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-[#4A3F38]">
                    와우산로 29마길
                  </div>
                </div>

                {/* Map App Links */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a
                    href="https://map.naver.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-[#03C75A] py-3 text-xs font-semibold text-white hover:bg-[#02b350] transition-colors shadow-sm"
                  >
                    <span className="font-bold">N</span> 네이버지도
                  </a>
                  <a
                    href="https://map.kakao.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-[#FEE500] py-3 text-xs font-semibold text-[#191919] hover:bg-[#f5dc00] transition-colors shadow-sm"
                  >
                    <span className="font-bold">kakaomap</span> 카카오맵 길찾기
                  </a>
                </div>
              </div>

              {/* Little tip */}
              <div className="mt-5 rounded-xl bg-[#FAF7F2] p-4 border border-[#ECE5DC]">
                <p className="text-xs font-semibold text-[#2D2522] flex items-center gap-1.5">
                  <HelpCircle className="h-3.5 w-3.5 text-[#9B4A25]" />
                  찾아오시는 작은 팁
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#736860]">
                  골목 초입에서 연노란색 크림 톤 외벽과 적벽돌 담장이 보이는 안쪽 마당으로 걸어 들어오시면 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Patio Etiquette (조블라 테라스 이용 안내) */}
      <section className="py-16 border-t border-[#EAE3D9]/70">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                PATIO ETIQUETTE
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                조블라 테라스 이용 안내
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#736860] max-w-md leading-relaxed">
              모든 고객님이 평화롭고 쾌적한 시간을 보낼 수 있도록 세 가지 약속을 지켜주세요.
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
                  01. 쾌적한 휴식 에티켓
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#736860]">
                  모두를 위한 고요하고 편안한 안식처를 위해 큰 소리의 대화나 통화는 자제해 주시고, 서로를 배려하는 따뜻한 매너를 부탁드립니다.
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
                  02. 우천 & 강풍 시 실내 이용
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#736860]">
                  비가 내리거나 바람이 강한 날에는 테라스 좌석 이용이 제한되며, 따뜻한 조명의 실내 테이블 자리로 편안하게 안내해 드립니다.
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
                  03. 상업적 촬영 사전 문의
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#736860]">
                  마켓, 룩북, 유튜브 등 상업용 목적의 카메라 촬영은 다른 방문객의 휴식을 위해 영업 전 사전 대관 문의 후 진행이 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quick Inquiries & Table Reservation */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-[#ECE4D8]/80 border border-[#DDD3C6] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Info */}
              <div className="lg:col-span-5">
                <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                  QUICK INQUIRIES & TABLE
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                  테라스 예약 및 단체 문의
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-[#665D56] leading-relaxed">
                  소규모 모임, 테라스 지정석, 원두 납품이나 공간 대관에 대해 궁금한 점이 있으시다면 간편하게 메시지를 남겨주세요.
                </p>

                <div className="mt-6 space-y-2 text-xs text-[#5E534C]">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9B4A25]" />
                    <span>당일 테라스석은 워크인 우선</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9B4A25]" />
                    <span>평일 단체 예약 가능</span>
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
                        <option>평일 전체 공간 대관</option>
                        <option>원두 납품 및 케이터링</option>
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
