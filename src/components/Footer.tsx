import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#EAE3D9] pt-14 pb-12 text-[#736860] mt-auto">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
          <div>
            <p className="font-medium text-sm text-[#2D2522]">
              jovular patio cafe <span className="text-[#B3A79C]">•</span> European courtyard roastery
            </p>
            <p className="mt-1 text-xs text-[#8C8075]">
              Mon - Sun: 7:30 AM - 7:00 PM • Sunset Spritz & Patio Hours till 9:00 PM
            </p>
            <p className="mt-0.5 text-xs text-[#8C8075]">
              428 Trellis Courtyard Way, Sunlit Walkway
            </p>
          </div>

          <div className="flex items-center gap-8 text-xs font-medium text-[#5E534C]">
            <Link href="/blog" className="hover:text-[#9B4A25] transition-colors">
              Stories & Notes
            </Link>
            <Link href="/location" className="hover:text-[#9B4A25] transition-colors">
              Find Courtyard
            </Link>
            <Link href="/about" className="hover:text-[#9B4A25] transition-colors">
              Our Philosophy
            </Link>
          </div>
        </div>

        <div className="border-t border-[#EAE3D9]/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#998E84]">
          <p>© 2025 jovular. live in a jovular mood.</p>
          <p className="tracking-wider uppercase text-[10px]">
            CRAFTED WITH WARMTH & TERRACOTTA CALM
          </p>
        </div>
      </div>
    </footer>
  );
}
