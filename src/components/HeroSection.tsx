import React from 'react';
import { ArrowRight, Sparkles, Flame, ShieldCheck } from 'lucide-react';
import contentData from '../data/contentData.json';
import { AssetMedia } from './AssetMedia';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const { hero } = contentData;

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#FAF8F5] ambient-pastel-glow"
    >
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[radial-gradient(circle,rgba(244,211,108,0.25)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-[radial-gradient(circle,rgba(253,244,212,0.6)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        {/* Left Column (50%): Typography & Intent */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Subtle micro tag */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#927129]">
            <span className="w-2 h-2 rounded-full bg-[#ECC850] active-led-dot" />
            <span className="tracking-widest uppercase font-semibold">NGHỆ THUẬT NẾN THƠM THỦ CÔNG</span>
          </div>

          {/* Primary Display Title */}
          <div>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#23211E] font-display">
              {hero.title}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-[#B38528] font-display mt-2 tracking-tight">
              {hero.subtitle}
            </p>
          </div>

          {/* Body Content */}
          <p className="text-base sm:text-lg text-[#78716C] leading-relaxed max-w-xl font-normal">
            {hero.body}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onCtaClick}
              className="px-7 py-3.5 bg-[#ECC850] hover:bg-[#F4D36C] text-[#23211E] font-bold text-sm rounded-xl shadow-pastel-btn active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer group whitespace-nowrap border border-[#D4A346]/35"
            >
              <span>{hero.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#target"
              className="px-6 py-3.5 bg-white hover:bg-[#FFFDF7] text-[#23211E] font-semibold text-sm rounded-xl border border-[rgba(218,185,114,0.35)] shadow-sm hover:border-[#ECC850] transition-all whitespace-nowrap"
            >
              Khám Phá Bộ Sưu Tập
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-6 border-t border-[rgba(218,185,114,0.25)] grid grid-cols-3 gap-4 max-w-lg">
            {hero.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#23211E] tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#B38528]">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#78716C] leading-tight">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (50%): Visual Asset Showcase */}
        <div className="flex justify-center items-center relative">
          <div className="w-full max-w-md lg:max-w-lg h-[360px] sm:h-[480px] rounded-2xl overflow-hidden shadow-pastel-card border border-[rgba(218,185,114,0.35)] bg-white p-2 relative group">
            <AssetMedia
              src={hero.image}
              alt="Hũ nến thơm TĨNH đang cháy trong phòng ấm cúng"
              aspectRatio="4:5"
              className="w-full h-full rounded-xl overflow-hidden"
            />
            <div className="absolute bottom-5 right-5 bg-white/95 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#B38528] border border-[rgba(218,185,114,0.35)] shadow-sm pointer-events-none">
              NẾN THƠM TĨNH · THẬT 100%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
