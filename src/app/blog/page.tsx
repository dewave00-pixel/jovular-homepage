"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sun, 
  ArrowRight, 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  Camera 
} from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("전체보기 (All)");

  const categories = [
    "전체보기 (All)",
    "Season Special",
    "Coffee & Tea",
    "Terrace Notes",
    "Cafe Life",
  ];

  const articles = [
    {
      id: 1,
      category: "Terrace Notes",
      badgeColor: "bg-[#4A5D4E] text-white",
      date: "2025.05.14",
      title: "테라스 식물 가꾸기: 조뷸러의 올리브나무와 레몬트리",
      desc: "햇빛과 바람이 풍부한 벽돌 안뜰에서 건강하게 자라는 은빛 올리브 잎과 꽃망울을 맺은 레몬 나무들의 초여름 이야기.",
      img: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      category: "Coffee & Tea",
      badgeColor: "bg-[#7A5638] text-white",
      date: "2025.05.08",
      title: "이번 달의 싱글 오리진 필터 커피 이야기",
      desc: "에티오피아 예가체프 게뎁 워시드의 재스민 향과 복숭아 산미, 그리고 테라스에서 마실 때 가장 극대화되는 향미.",
      img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      category: "Cafe Life",
      badgeColor: "bg-[#645853] text-white",
      date: "2025.04.29",
      title: "반려견과 함께 방문하시는 분들을 위한 파티오 이용 안내",
      desc: "모두가 편안한 테라스 시간을 위해 준비된 전용 음수대, 리드줄 고리 벤치와 조뷸러의 펫 프렌들리 가이드라인.",
      img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      category: "Terrace Notes",
      badgeColor: "bg-[#4A5D4E] text-white",
      date: "2025.04.18",
      title: "비 오는 날의 조뷸러, 안뜰 처마 밑의 운치",
      desc: "차양에 부딪히는 빗소리와 젖은 흙내음, 쌀쌀한 날씨에 어울리는 따뜻한 시나몬 플랫화이트와 함께 머무는 고요한 오후.",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      category: "Coffee & Tea",
      badgeColor: "bg-[#7A5638] text-white",
      date: "2025.04.02",
      title: "원두 로스팅 프로파일: 산뜻함과 묵직함의 균형",
      desc: "조뷸러의 시그니처 하우스 블렌드가 탄생하기까지의 로스팅 데이터와 햇살 아래 가장 편안하게 음미할 수 있는 추출 비율.",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      category: "Season Special",
      badgeColor: "bg-[#9B4A25] text-white",
      date: "2025.03.24",
      title: "봄날의 버터 풍미: 수제 피낭시에와 허브티 페어링",
      desc: "헤이즐넛 버터의 깊은 풍미를 끌어올린 세 가지 구움과자와 유기농 카모마일 블렌드의 조화로운 오후 티타임.",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredArticles = activeCategory === "전체보기 (All)"
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <>
      {/* 2. Journal Hero & Header */}
      <section className="pt-14 pb-8 sm:pt-16 sm:pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ECE4D8] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#685E55] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9B4A25]" />
                COURTYARD GAZETTE & ARCHIVE
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-serif text-[#2D2522]">
                Jovular Journal
              </h1>
              <p className="mt-3 text-xs sm:text-sm text-[#736860]">
                카페 조뷸러의 계절 이야기, 새로운 원두와 디저트 소식, 테라스의 일상
              </p>
            </div>

            {/* Sunlight Index Card */}
            <div className="self-start rounded-2xl bg-white/80 border border-[#ECE5DC] p-3.5 px-5 shadow-sm flex items-center gap-3">
              <Sun className="h-5 w-5 text-[#C26B38]" />
              <div>
                <p className="text-[10px] font-bold text-[#8C8075] uppercase tracking-wider">
                  TERRACE SUNLIGHT INDEX
                </p>
                <p className="text-xs font-semibold text-[#2D2522] mt-0.5">
                  24°C • Golden Hour 17:40
                </p>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-2 border-b border-[#EAE3D9]/60 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#9B4A25] text-white shadow-sm"
                    : "text-[#685E55] hover:text-[#2D2522] hover:bg-[#EFE8DF]/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Story Card */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-white border border-[#ECE5DC] shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 hover:shadow-md transition-shadow">
            {/* Left Image */}
            <div className="md:col-span-7 relative min-h-[300px] sm:min-h-[380px] bg-[#EFE8DF]">
              <img
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80"
                alt="초여름 테라스와 시트러스 에이드"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-[#3D342E]/80 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-white">
                  Featured Story
                </span>
                <span className="rounded-full bg-[#E5A83E] px-3 py-1 text-[11px] font-medium text-white shadow-sm">
                  Season Special
                </span>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#8C8075]">
                  <Calendar className="h-3.5 w-3.5 text-[#9B4A25]" />
                  <span>2025.05.20</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <h2 className="mt-4 text-xl sm:text-2xl font-serif font-bold text-[#2D2522] leading-snug">
                  초여름 테라스에 어울리는 새로운 시트러스 에이드와 레몬 타르트
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-[#736860] leading-relaxed line-clamp-4">
                  따사로운 햇살이 파티오 붉은 벽돌과 목재 테이블 위로 길게 드리우는 5월 하순, 안뜰에 만개한 레몬트리의 향취를 담아 상큼한 유자청과 카라카라 오렌지를 블렌딩한 시그니처 음료를 소개합니다.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F2ECE3] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-[#EFE8DF] flex items-center justify-center text-xs font-serif font-bold text-[#9B4A25]">
                    JV
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#2D2522]">Barista Min & Roaster</p>
                    <p className="text-[10px] text-[#8C8075]">Jovular Courtyard</p>
                  </div>
                </div>

                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D2522] hover:text-[#9B4A25] transition-colors">
                  Read Journal
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Archive Grid (최신 기록 & 테라스 노트) */}
      <section className="py-12 border-t border-[#EAE3D9]/70">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-baseline justify-between mb-8">
            <div className="flex items-baseline gap-2">
              <h2 className="text-lg font-serif font-bold text-[#2D2522]">
                최신 기록 & 테라스 노트
              </h2>
              <span className="text-[11px] font-mono tracking-widest text-[#8C8075] uppercase">
                ARCHIVE
              </span>
            </div>
            <span className="text-xs text-[#8C8075]">
              총 {filteredArticles.length}편의 에세이
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArticles.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-white p-5 border border-[#ECE5DC] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-[#EFE8DF]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 rounded bg-black/60 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-medium text-white">
                      {item.category}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-[11px] text-[#8C8075]">
                    <Clock className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="mt-2 text-base font-serif font-bold text-[#2D2522] leading-snug group-hover:text-[#9B4A25] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#736860] line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2ECE3] flex items-center justify-between text-xs text-[#8C5338] font-medium group-hover:text-[#68331E]">
                  <span>더 읽어보기</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mood Quote Banner */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-[#F4EFEA] border border-[#DDD3C6] p-10 text-center">
            <span className="font-serif text-3xl font-bold text-[#9B4A25] leading-none block mb-1">
              &ldquo;&rdquo;
            </span>
            <p className="text-xl sm:text-2xl font-serif text-[#2D2522] font-normal leading-relaxed">
              &ldquo;햇빛과 커피, 그리고 천천히 흘러가는 시간만이 머무는 곳&rdquo;
            </p>
            <p className="mt-3 text-[10px] font-sans font-semibold tracking-widest text-[#8C8075] uppercase">
              JOVULAR TERRACE MOOD & DAILY RITUALS
            </p>
          </div>
        </div>
      </section>

      {/* 6. Instagram & Newsletter Subscription */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-[#ECE4D8]/80 border border-[#DDD3C6] p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                <Camera className="h-3.5 w-3.5" />
                DAILY COURTYARD MOMENTS
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                @cafe_jovular 에서 실시간 일상을 만나보세요
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#665D56] leading-relaxed">
                오늘의 날씨, 테라스 개방 여부, 갓 구운 디저트 라인업 및 이벤트 소식을 가장 먼저 인스타그램과 조뷸러 뉴스레터로 전해드립니다.
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col gap-2">
              <form onSubmit={(e) => { e.preventDefault(); alert("뉴스레터 구독이 신청되었습니다."); }} className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="이메일 주소를 입력해 주세요"
                    required
                    className="w-full sm:w-72 rounded-xl bg-white border border-[#D5C9BC] px-4 py-3 text-xs text-[#2D2522] placeholder-[#A09388] focus:outline-none focus:ring-1 focus:ring-[#9B4A25]"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-[#9B4A25] px-6 py-3 text-xs font-semibold text-white hover:bg-[#853C1B] transition-colors shadow-sm flex items-center justify-center gap-1.5 shrink-0"
                >
                  레터구독
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>

              <div className="flex items-center gap-3 text-[11px] text-[#8C8075] mt-1">
                <span className="flex items-center gap-1">
                  <Camera className="h-3 w-3 text-[#9B4A25]" />
                  Instagram 팔로우
                </span>
                <span>•</span>
                <span>매주 목요일 조뷸러 소식지 발송</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
