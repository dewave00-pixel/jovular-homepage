import Link from "next/link";
import { 
  Sun, 
  Sprout, 
  Coffee, 
  Clock, 
  ArrowRight, 
  ChevronDown 
} from "lucide-react";

export default function Home() {
  const threePieces = [
    {
      title: "Sunlit Patio",
      badge: "야외테라스",
      badgeColor: "bg-[#EBF0E6] text-[#486338]",
      desc: "야외 테라스의 부드러운 바람과 따뜻한 햇살 아래, 느긋하게 흐르는 일상의 휴식.",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Artisanal Coffee & Dessert",
      badge: "수제 디저트",
      badgeColor: "bg-[#F9ECE7] text-[#9E5336]",
      desc: "매일 아침 직접 굽는 디저트와 깊은 풍미를 지닌 시그니처 블렌드의 완벽한 조화.",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Quiet Moments",
      badge: "도심 속 쉼터",
      badgeColor: "bg-[#F2ECE3] text-[#7A6B56]",
      desc: "번잡한 도심 한 켠에서 만나는 감각적인 안식처, 책 한 권과 함께하는 평온한 머무름.",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const signatureMenus = [
    {
      title: "Jovular Cream Latte",
      price: "₩ 6,800",
      desc: "견과류 풍미의 진한 에스프레소 위 부드럽게 얹어낸 아몬드크림 시그니처",
      tags: "Signature • Hot / Iced",
      img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Lemon Herb Ade",
      price: "₩ 6,500",
      desc: "마당에서 채취한 생로즈마리와 직접 담근 레몬청으로 완성한 청량한 에이드",
      tags: "Seasonal • Fresh Herb",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Homemade Citrus Tart",
      price: "₩ 7,200",
      desc: "바삭한 수제 파이 쉘에 상큼한 시트러스 커드를 채워 구워낸 계절 타르트",
      tags: "Daily Baked • Limited",
      img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Honey Butter Scone",
      price: "₩ 5,000",
      desc: "프랑스산 고메 버터와 천연 벌꿀을 곁들여 고소함과 달콤함이 살아있는 스콘",
      tags: "Best Match with Coffee",
      img: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=300&q=80",
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
                COURTYARD SANCTUARY
              </div>

              {/* Title */}
              <h1 className="mt-6 text-4xl sm:text-6xl text-[#2D2522] leading-[1.1] font-serif">
                Live in a <br />
                <span className="italic font-normal text-[#9B4A25]">Jovular Mood</span>
              </h1>

              {/* Sub description */}
              <p className="mt-6 text-base sm:text-lg text-[#665D56] leading-relaxed max-w-md">
                햇살 가득한 테라스와 향긋한 커피, 유럽의 작은 안뜰에서 누리는 여유로운 시간
              </p>

              {/* Feature icons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-[#61564E]">
                <div className="flex items-center gap-1.5">
                  <Sun className="h-4 w-4 text-[#C26B38]" />
                  <span>Sunlit Terraces</span>
                </div>
                <span className="text-[#C9BFB5]">•</span>
                <div className="flex items-center gap-1.5">
                  <Sprout className="h-4 w-4 text-[#C26B38]" />
                  <span>Garden Trellis</span>
                </div>
                <span className="text-[#C9BFB5]">•</span>
                <div className="flex items-center gap-1.5">
                  <Coffee className="h-4 w-4 text-[#C26B38]" />
                  <span>Artisanal Coffee</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-9 flex items-center gap-4">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full bg-[#9B4A25] px-6 py-3 text-sm font-medium text-white hover:bg-[#853C1B] transition-colors shadow-sm"
                >
                  둘러보기
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/location"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D5C9BC] bg-[#EFE8DF]/70 px-6 py-3 text-sm font-medium text-[#4D423B] hover:bg-[#E8DFD3] transition-colors"
                >
                  오시는 길
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo & Floating Badges */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white/80 aspect-[4/3] sm:aspect-[1.15/1]">
                  <img
                    src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80"
                    alt="Jovular Patio and Courtyard"
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
                      COURTYARD ROASTERY
                    </p>
                    <p className="font-serif text-xs font-semibold text-[#2D2522]">
                      jovular patio
                    </p>
                  </div>
                </div>

                {/* Floating Card 2: Right Bottom */}
                <div className="absolute -bottom-8 right-2 sm:right-4 max-w-[210px] rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg border border-white/60">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#C26B38] tracking-wider uppercase">
                    <Sun className="h-3.5 w-3.5" />
                    GOLDEN HOUR
                  </div>
                  <p className="mt-1 text-[11px] leading-tight text-[#665D56]">
                    오후 3시, 붉은 벽돌과 레몬 향이 가장 따스한 순간.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Courtyard Mood Section (여유를 채우는 세 가지 조각) */}
      <section id="about" className="py-20 border-t border-[#EAE3D9]/70">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                COURTYARD MOOD
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold text-[#2D2522]">
                여유를 채우는 세 가지 조각
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#736860] max-w-md leading-relaxed">
              붉은 벽돌길과 등나무 그늘, 유럽 정원의 고요한 리듬 속에서 당신만의 속도를 찾아보세요.
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
              HANDCRAFTED & BREWED
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-normal text-[#2D2522]">
              Signature Menu
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#736860]">
              조뷸러 파티오의 분위기를 잔과 접시에 담아낸 시그니처 라인업
            </p>
          </div>

          {/* Menu 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureMenus.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-5 border border-[#ECE5DC] shadow-sm flex items-center gap-5 hover:border-[#D5C9BC] transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-xl bg-[#EFE8DF]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-base font-semibold text-[#2D2522] truncate">
                      {item.title}
                    </h3>
                    <span className="font-serif text-sm font-bold text-[#9B4A25] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-[#736860] line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="mt-2.5 text-[11px] font-medium text-[#998E84]">
                    {item.tags}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Opening Hours & Hospitality Banner */}
      <section id="visit" className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-[#ECE4D8]/80 border border-[#DDD3C6] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#9B4A25] uppercase">
                <Clock className="h-3.5 w-3.5" />
                OPENING HOURS & HOSPITALITY
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522]">
                매일 11:00 – 21:00, 도심 속 여유로운 휴식
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#665D56] leading-relaxed">
                조뷸러의 야외 테라스는 따스한 햇살과 커피 한 잔의 온기가 가득합니다. 도심 속 숨겨진 햇살 가득한 안뜰로 초대합니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center gap-4 shrink-0">
              <div className="flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2.5 text-xs font-medium text-[#5E534C] border border-white/60">
                <Sun className="h-4 w-4 text-[#9B4A25]" />
                <div className="leading-tight">
                  <span className="block font-semibold text-[#2D2522]">Patio Seating</span>
                  <span className="text-[10px] text-[#8C8075]">Sunlit Courtyard</span>
                </div>
              </div>
              <Link
                href="/location"
                className="rounded-xl bg-[#9B4A25] px-6 py-3 text-xs font-semibold text-white tracking-wide hover:bg-[#853C1B] transition-colors shadow-sm flex items-center gap-1.5"
              >
                위치 및 예약 안내
                <span className="text-[10px]">◊</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

