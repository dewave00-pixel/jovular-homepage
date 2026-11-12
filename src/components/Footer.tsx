import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#EAE3D9] pt-14 pb-12 text-[#736860] mt-auto">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
          <div>
            <p className="font-medium text-sm text-[#2D2522]">
              조블라 (Cafe Jovular) <span className="text-[#B3A79C]">•</span> Terrace & Coffee
            </p>
            <p className="mt-1 text-xs text-[#8C8075]">
              Mon - Sun: 09:00 - 24:00 (연중무휴)
            </p>
            <p className="mt-0.5 text-xs text-[#8C8075]">
              서울 마포구 어울마당로 136-10 1층 (홍대입구역 8번 출구 도보 2분)
            </p>
            <div className="mt-1.5 flex items-center gap-3 text-xs text-[#736860]">
              <a href="tel:050713559243" className="hover:text-[#9B4A25] transition-colors">
                Tel: 0507-1355-9243
              </a>
              <span>•</span>
              <a 
                href="https://www.instagram.com/jovular_cafe" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#9B4A25] transition-colors"
              >
                Instagram: @jovular_cafe
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium text-[#5E534C]">
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
