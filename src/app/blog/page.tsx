"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sun, 
  ArrowRight, 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  Camera,
  Loader2,
  BookOpen
} from "lucide-react";
import { getWordPressPosts, type WordPressPost } from "@/lib/wordpress";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("전체보기 (All)");
  const [wpPosts, setWpPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await getWordPressPosts();
        setWpPosts(posts);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // 워드프레스 포스트에서 동적으로 카테고리 추출
  const dynamicCategories = Array.from(
    new Set(wpPosts.map((wp) => wp.category).filter(Boolean))
  );
  const categories = [
    "전체보기 (All)",
    ...(dynamicCategories.length > 0 ? dynamicCategories : []),
  ];

  // 추천 메인 스토리 (워드프레스 최신 첫 번째 글)
  const featuredArticle = wpPosts.length > 0 ? wpPosts[0] : null;

  // 나머지 그리드 글 (첫 번째 글을 제외한 나머지)
  const gridArticles = wpPosts.length > 1 ? wpPosts.slice(1) : [];

  // 카테고리 필터링
  const filteredArticles = activeCategory === "전체보기 (All)"
    ? gridArticles
    : gridArticles.filter(a => a.category.toLowerCase().includes(activeCategory.toLowerCase().replace(/[^a-zA-Z가-힣0-9]/g, '')));

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
          {categories.length > 1 && (
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
          )}
        </div>
      </section>

      {/* Loading Skeleton */}
      {loading && (
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl bg-white border border-[#ECE5DC] p-12 text-center shadow-sm">
              <Loader2 className="h-8 w-8 text-[#9B4A25] animate-spin mx-auto mb-3" />
              <p className="text-xs font-medium text-[#736860]">
                조뷸러 저널 소식을 불러오는 중입니다...
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {!loading && !featuredArticle && (
        <section className="pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl bg-white border border-[#ECE5DC] p-12 sm:p-16 text-center shadow-sm">
              <div className="h-12 w-12 rounded-full bg-[#FAF5EE] text-[#9B4A25] flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#2D2522]">
                등록된 포스트가 없습니다
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#736860]">
                새로운 테라스 이야기와 카페 소식이 곧 업데이트될 예정입니다.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 3. Featured Story Card */}
      {!loading && featuredArticle && (
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <a
              href={featuredArticle.link || "#"}
              target={featuredArticle.link && featuredArticle.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block group rounded-3xl bg-white border border-[#ECE5DC] shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 hover:shadow-md transition-shadow"
            >
              {/* Left Image */}
              <div className="md:col-span-7 relative min-h-[300px] sm:min-h-[380px] bg-[#EFE8DF] overflow-hidden">
                <img
                  src={featuredArticle.featuredImage}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-[#3D342E]/80 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-white">
                    Featured Story
                  </span>
                  <span className="rounded-full bg-[#E5A83E] px-3 py-1 text-[11px] font-medium text-white shadow-sm">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              {/* Right Content */}
              <div className="md:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#8C8075]">
                    <Calendar className="h-3.5 w-3.5 text-[#9B4A25]" />
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  <h2 className="mt-4 text-xl sm:text-2xl font-serif font-bold text-[#2D2522] leading-snug group-hover:text-[#9B4A25] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm text-[#736860] leading-relaxed line-clamp-4">
                    {featuredArticle.excerpt || "조뷸러의 새로운 소식입니다."}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F2ECE3] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-[#EFE8DF] flex items-center justify-center text-xs font-serif font-bold text-[#9B4A25]">
                      JV
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#2D2522]">{featuredArticle.authorName || "Jovular Barista"}</p>
                      <p className="text-[10px] text-[#8C8075]">Jovular Courtyard</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D2522] group-hover:text-[#9B4A25] transition-colors">
                    Read Journal
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* 4. Archive Grid (최신 기록 & 테라스 노트) */}
      {!loading && gridArticles.length > 0 && (
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

            {filteredArticles.length === 0 ? (
              <div className="py-12 text-center text-xs text-[#736860]">
                해당 카테고리에 등록된 포스트가 없습니다.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredArticles.map((item) => (
                  <a
                    key={item.id}
                    href={item.link || "#"}
                    target={item.link && item.link !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group rounded-2xl bg-white p-5 border border-[#ECE5DC] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-[#EFE8DF]">
                        <img
                          src={item.featuredImage}
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
                        {item.excerpt || "조뷸러의 새로운 소식입니다."}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#F2ECE3] flex items-center justify-between text-xs text-[#8C5338] font-medium group-hover:text-[#68331E]">
                      <span>더 읽어보기</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

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
