import { redirect } from "next/navigation";

export default function AboutPage() {
  // 임시 비활성화: About 페이지 hide 처리 (추후 재오픈)
  redirect("/");
}

/*
// [추후 재오픈 시 복원 코드]
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

export function AboutPageContent() {
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
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ECE4D8] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#685E55] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9B4A25]" />
            STORY & SANCTUARY
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D2522] tracking-tight">
            Our Story: Live in a Jovular Mood
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#685E55] leading-relaxed max-w-2xl mx-auto font-sans font-light">
            조블라는 유럽의 작은 마을 안뜰에서 영감을 받아 탄생한 파티오 카페입니다. 
            붉은 벽돌과 포근한 햇살, 올리브 나무와 레몬 향기가 깃든 이곳에서 계절의 흐름을 느끼며 
            한 잔의 스페셜티 커피와 함께 여유로운 시간을 음미해 보세요.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-[#EAE3D9]/70">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-[#EFE8DF]">
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80"
                  alt="조블라 정원 테라스"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col items-center justify-center h-16 w-16 rounded-full bg-[#695D4A]/90 backdrop-blur-sm text-white text-[10px] text-center font-medium leading-tight shadow-md border border-white/20">
                  <span>Sunlight &</span>
                  <span>Flora</span>
                </div>
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

            <div className="lg:col-span-6 flex flex-col items-start mt-6 lg:mt-0">
              <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                CORE VALUES
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                파티오가 건네는 세 가지 온기
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#736860] leading-relaxed">
                조블라가 가꾸는 야외 테라스는 단순한 카페 좌석을 넘어, 바쁜 일상 한편에 쉼표를 찍는 안식처입니다.
              </p>

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

      <section className="py-20 border-t border-[#EAE3D9]/70">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                ATMOSPHERE
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                조블라를 완성하는 세 가지 구역
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#736860] max-w-md leading-relaxed">
              정원 곳곳에 자리 잡은 작은 디테일들이 모여, 지중해 마을의 어느 한적한 오후를 완성합니다.
            </p>
          </div>

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
    </>
  );
}
*/
