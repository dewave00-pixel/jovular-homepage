import Link from "next/link";
import { 
  Coffee, 
  Leaf, 
  Heart, 
  Sun, 
  Flower2, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    {
      num: "01",
      title: "자연과 쉼 (Nature & Respite)",
      desc: "붉은 벽돌과 싱그러운 덩굴 식물, 오후의 따스한 자연광이 머무는 야외 좌석에서 계절의 변화와 바람 소리를 그대로 느낍니다.",
      icon: Leaf,
      iconBg: "bg-[#EBF0E6] text-[#486338]",
    },
    {
      num: "02",
      title: "정성스런 핸드크래프트 음료 (Artisanal Craft)",
      desc: "섬세하게 로스팅한 싱글 오리진 커피와 지중해의 청량함을 담은 수제 시트러스 에이드, 계절마다 새롭게 준비되는 티 블렌딩을 선보입니다.",
      icon: Coffee,
      iconBg: "bg-[#F9ECE7] text-[#9E5336]",
    },
    {
      num: "03",
      title: "편안한 휴식과 온기 (Peaceful Retreat)",
      desc: "복잡한 일상에서 벗어나 혼자만의 사색과 소중한 사람들과의 정겨운 대화를 온전히 나눌 수 있는 아늑한 쉼터를 선물합니다.",
      icon: Sparkles,
      iconBg: "bg-[#F2ECE3] text-[#7A6B56]",
    },
  ];

  const threeZones = [
    {
      badge: "Open Courtyard",
      subTag: "SUNSHINE & BREEZE",
      icon: Sun,
      title: "The Terrace",
      desc: "햇빛과 바람을 즐기는 야외 좌석. 목재 벤치와 따뜻한 조명 아래서 편안한 대화를 나누는 시그니처 공간입니다.",
      linkText: "테라스 이용 가이드 →",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      badge: "Citrus Aroma",
      subTag: "FRAGRANT CORNER",
      icon: Flower2,
      title: "The Lemon Garden",
      desc: "시트러스 향기가 감도는 소담한 정원. 아기자기한 레몬 열매와 야생화가 선사하는 싱그러운 생명력을 마주하세요.",
      linkText: "보태니컬 갤러리 →",
      img: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      badge: "Quiet Retreat",
      subTag: "COZY & PEACEFUL",
      icon: Heart,
      title: "The Brick Lounge",
      desc: "붉은 벽돌과 원목 인테리어가 주는 포근함 속에서 조용히 책을 읽거나 잔잔한 음악과 함께 여유를 즐길 수 있는 실내 라운지입니다.",
      linkText: "라운지 공간 둘러보기 →",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      {/* 2. Top Title & Intro (Story & Sanctuary) */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ECE4D8] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#685E55] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9B4A25]" />
            STORY & SANCTUARY
          </div>

          {/* Main Headline */}
          <h1 className="mt-6 text-3xl sm:text-5xl font-serif text-[#2D2522] font-semibold tracking-tight">
            Our Story: Live in a Jovular Mood
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg font-serif italic text-[#9B4A25]">
            도심 속에서 찾은 유럽의 작은 파티오, 계절의 바람과 따사로운 햇살을 머금은 공간
          </p>

          {/* Paragraph */}
          <p className="mt-8 text-sm sm:text-base text-[#665D56] leading-relaxed max-w-2xl mx-auto">
            빌딩 숲을 벗어나 테라코타 벽돌길을 돌아서면 문득 열리는 따스한 유럽식 안뜰. 붉은 벽돌과 포근한 크림색 아이언 트렐리스, 햇살에 반짝이는 레몬 잎사귀 사이로 온전히 자신만의 숨을 고르는 다정한 여유를 전합니다.
          </p>
        </div>
      </section>

      {/* 3. Middle Section: Visual & Core Values */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image with Vignette & Sunlight Flora badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Image Frame */}
                <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white/80 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80"
                    alt="Cream Wrought Trellis & Sunlit Daisy Bloom"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Top-Right Badge: Sunlight & Flora */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col items-center justify-center h-16 w-16 rounded-full bg-[#695D4A]/90 backdrop-blur-sm text-white text-[10px] text-center font-medium leading-tight shadow-md border border-white/20">
                  <span>Sunlight &</span>
                  <span>Flora</span>
                </div>

                {/* Bottom Floating Card: Courtyard Vignette */}
                <div className="absolute -bottom-6 left-4 sm:left-6 right-4 sm:right-6 rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3.5 shadow-lg border border-white/60">
                  <p className="text-[10px] font-semibold tracking-wider text-[#8C8075] uppercase">
                    COURTYARD VIGNETTE
                  </p>
                  <p className="font-serif text-xs sm:text-sm font-semibold text-[#2D2522] mt-0.5">
                    Cream Wrought Trellis & Sunlit Daisy Bloom
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Core Values */}
            <div className="lg:col-span-6 flex flex-col items-start mt-6 lg:mt-0">
              <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                CORE VALUES
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                파티오가 건네는 세 가지 온기
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#736860] leading-relaxed">
                조뷸러가 가꾸는 야외 테라스는 단순한 카페 좌석을 넘어, 바쁜 일상 한편에 쉼표를 찍는 안식처입니다.
              </p>

              {/* 3 Core Value Cards */}
              <div className="mt-8 space-y-4 w-full">
                {coreValues.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white/80 border border-[#ECE5DC] p-5 shadow-sm flex items-start gap-4 transition-all hover:border-[#D5C9BC]"
                    >
                      <div className={`p-2.5 rounded-xl shrink-0 ${val.iconBg}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-serif text-sm sm:text-base font-bold text-[#2D2522]">
                          <span className="text-[#9B4A25] font-sans mr-1.5">{val.num}</span>
                          {val.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-[#736860] leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Atmosphere Section: 조뷸러를 완성하는 세 가지 구역 */}
      <section className="py-20 border-t border-[#EAE3D9]/70">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                ATMOSPHERE
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                조뷸러를 완성하는 세 가지 구역
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#736860] max-w-md leading-relaxed">
              정원 곳곳에 자리 잡은 작은 디테일들이 모여, 지중해 마을의 어느 한적한 오후를 완성합니다.
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threeZones.map((zone, i) => {
              const SubIcon = zone.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl bg-white p-5 shadow-sm border border-[#ECE5DC] hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-xl aspect-[16/11] bg-[#EFE8DF]">
                    <img
                      src={zone.img}
                      alt={zone.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 rounded bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-[#4A3F38] shadow-sm">
                      {zone.badge}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-[10px] font-bold text-[#9B4A25] tracking-wider uppercase">
                    <SubIcon className="h-3 w-3" />
                    {zone.subTag}
                  </div>

                  <h3 className="mt-1 font-serif text-lg font-bold text-[#2D2522]">
                    {zone.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#736860] flex-1">
                    {zone.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F2ECE3]">
                    <span className="inline-flex items-center text-xs font-semibold text-[#8C5338] hover:text-[#68331E] transition-colors cursor-pointer">
                      {zone.linkText}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Quote & Call to Action */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative rounded-3xl bg-[#F4EFEA] border border-[#DDD3C6] p-10 sm:p-14 text-center overflow-hidden">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-white/80 text-[#9B4A25] shadow-sm">
                <Coffee className="h-6 w-6" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#2D2522] tracking-tight">
              &ldquo;잠시 걸음을 멈추고, 깊은 숨을 내쉬어 보세요.&rdquo;
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-[#736860] leading-relaxed max-w-md mx-auto">
              커피 한 잔의 온도, 스쳐 지나가는 바람결, 따사로운 안뜰의 햇빛이<br />
              지친 당신의 하루에 포근한 다정함을 선물합니다.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#visit"
                className="rounded-md bg-[#9B4A25] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#853C1B] transition-colors shadow-sm"
              >
                파티오 방문하기
              </Link>
              <Link
                href="/#menu"
                className="inline-flex items-center gap-1.5 rounded-md border border-[#D5C9BC] bg-white/70 px-5 py-2.5 text-xs font-medium text-[#4D423B] hover:bg-white transition-colors"
              >
                카페 이야기 더보기
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
