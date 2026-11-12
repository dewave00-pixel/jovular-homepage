import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#EAE3D9] pt-14 pb-12 text-[#736860] mt-auto">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
          <div>
            <p className="font-medium text-sm text-[#2D2522]">
              조블라 (Cafe Jovular) <span className="text-[#B3A79C]">•</span> Terrace & Indoor Lounge
            </p>
            <p className="mt-1 text-xs text-[#8C8075]">
              Mon - Sun: 09:00 - 24:00 (연중무휴)
            </p>
            <p className="mt-0.5 text-xs text-[#8C8075]">
              서울 마포구 와우산로 29마길
            </p>
          </div>

          <div className="flex items-center gap-8 text-xs font-medium text-[#5E534C]">
            <Link href="/location" className="hover:text-[#9B4A25] transition-colors">
              매장 위치 보기
            </Link>
          </div>
        </div>

        <div className="border-t border-[#EAE3D9]/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#998E84]">
          <p>© 2025 Cafe Jovular. All rights reserved.</p>
          <p className="tracking-wider uppercase text-[10px]">
            TERRACE & SPECIALTY COFFEE
          </p>
        </div>
      </div>
    </footer>
  );
}
