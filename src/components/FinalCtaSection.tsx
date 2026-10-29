import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import contentData from '../data/contentData.json';

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onCtaClick }) => {
  const { finalCta } = contentData;
  const bgImg = finalCta.bgImage.startsWith('./') ? finalCta.bgImage.replace('./', '/') : finalCta.bgImage;

  return (
    <section
      id="action"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 md:px-12 text-center bg-[#FAF8F5] overflow-hidden"
    >
      {/* Background visual asset in pastel with full bleed */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <img
          src={bgImg}
          alt="Không gian phòng tĩnh lặng buổi chập tối"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Light gradient overlay & pastel glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,211,108,0.25)_0%,transparent_70%)]" />
      </div>

      {/* Floating ambient glow in center */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(236,200,80,0.18)_0%,transparent_70%)] pointer-events-none -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />

      {/* Content centered container */}
      <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center justify-center text-center px-4">
        <div className="w-full bg-white/75 backdrop-blur-md border border-[rgba(218,185,114,0.35)] rounded-3xl p-8 sm:p-12 md:p-16 shadow-pastel-card flex flex-col items-center justify-center text-center space-y-7">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-mono text-[#B38528] uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[rgba(218,185,114,0.4)] shadow-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-[#ECC850]" />
            <span>05. BÌNH YÊN HIỆN DIỆN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#23211E] font-display leading-tight text-center max-w-2xl">
            {finalCta.title}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#78716C] max-w-xl mx-auto leading-relaxed text-center font-normal">
            {finalCta.body}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto px-10 py-4 bg-[#ECC850] hover:bg-[#F4D36C] text-[#23211E] font-bold text-sm sm:text-base tracking-wide rounded-xl shadow-pastel-btn active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group whitespace-nowrap border border-[#D4A346]/40"
            >
              <span>{finalCta.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="pt-3 text-xs font-mono text-[#78716C] flex flex-wrap items-center justify-center gap-3">
            <span>Giao Hàng Toàn Quốc 24-48h</span>
            <span>·</span>
            <span>Kiểm Tra Hàng Trước Khi Thanh Toán</span>
          </div>
        </div>
      </div>
    </section>
  );
};
