"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Camera,
  Loader2,
  BookOpen,
} from "lucide-react";
import { getWordPressPostById, type WordPressPost } from "@/lib/wordpress";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPostDetailPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const { lang } = useLanguage();

  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    async function fetchPost() {
      try {
        const data = await getWordPressPostById(id as string);
        setPost(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl bg-white border border-[#ECE5DC] p-14 text-center shadow-sm">
            <Loader2 className="h-8 w-8 text-[#9B4A25] animate-spin mx-auto mb-3" />
            <p className="text-xs font-medium text-[#736860]">
              {lang === "ko"
                ? "이야기를 불러오는 중입니다..."
                : "Loading story..."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl bg-white border border-[#ECE5DC] p-12 sm:p-16 text-center shadow-sm">
            <div className="h-12 w-12 rounded-full bg-[#FAF5EE] text-[#9B4A25] flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-serif font-bold text-[#2D2522]">
              {lang === "ko"
                ? "포스트를 찾을 수 없습니다"
                : "Post not found"}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#736860]">
              {lang === "ko"
                ? "삭제되었거나 존재하지 않는 게시글입니다."
                : "The requested story may have been removed or does not exist."}
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#9B4A25] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#853C1B] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {lang === "ko" ? "저널 목록으로 돌아가기" : "Back to Journal"}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <article className="pt-10 pb-20 sm:pt-14 sm:pb-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#736860] hover:text-[#9B4A25] transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {lang === "ko" ? "목록으로 돌아가기" : "Back to Journal"}
        </Link>

        {/* Article Header */}
        <header>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#8C8075]">
            <span className="rounded-full bg-[#ECE4D8] px-3 py-1 text-[11px] font-semibold text-[#9B4A25]">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-[#9B4A25]" />
              {post.date}
            </span>
            <span>•</span>
            <span>{post.authorName}</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-[#2D2522] leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#ECE5DC] bg-[#EFE8DF] shadow-sm aspect-[16/10]">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* WordPress HTML Body */}
        <div className="mt-10 rounded-3xl bg-white border border-[#ECE5DC] p-7 sm:p-11 shadow-sm">
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Bottom Footer CTA */}
        <div className="mt-10 rounded-3xl bg-[#ECE4D8]/80 border border-[#DDD3C6] p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold tracking-widest text-[#9B4A25] uppercase">
              CAFE JOVULAR SEOUL
            </p>
            <h2 className="mt-1 text-lg sm:text-xl font-serif font-bold text-[#2D2522]">
              {lang === "ko"
                ? "오늘, 조블라 테라스에서 만나보세요"
                : "Visit Cafe Jovular Today"}
            </h2>
            <p className="mt-1 text-xs text-[#665D56]">
              {lang === "ko"
                ? "서울 마포구 어울마당로 136-10 1층 • 매일 09:00 – 24:00"
                : "1F, 136-10 Eoulmadang-ro, Mapo-gu, Seoul • 09:00 – 24:00"}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <Link
              href="/location"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#9B4A25] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#853C1B] transition-colors shadow-sm"
            >
              <MapPin className="h-3.5 w-3.5" />
              {lang === "ko" ? "오시는 길" : "Location"}
            </Link>
            <a
              href="https://www.instagram.com/jovular_cafe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-[#DDD3C6] px-4 py-2.5 text-xs font-semibold text-[#4D423B] hover:bg-[#FAF5EE] transition-colors shadow-sm"
            >
              <Camera className="h-3.5 w-3.5 text-[#9B4A25]" />
              @jovular_cafe
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
