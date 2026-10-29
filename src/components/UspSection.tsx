import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Eye, ShieldCheck, Flame } from 'lucide-react';
import contentData from '../data/contentData.json';
import { AssetMedia } from './AssetMedia';

export const UspSection: React.FC = () => {
  const { usp } = contentData;
  const [activeUspIndex, setActiveUspIndex] = useState(1); // Default to Secret Message (Signature USP)
  const [isWaxMelted, setIsWaxMelted] = useState(true); // Default to true so message is immediately visible
  const [customSecretText, setCustomSecretText] = useState('Bình yên trong từng hơi thở');

  const activeItem = usp.items[activeUspIndex];

  return (
    <section
      id="usp"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 px-6 md:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[rgba(218,185,114,0.2)] secondary-pastel-glow"
    >
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B38528] uppercase tracking-wider font-semibold">
            <span>03. ĐỘT PHÁ NGHỆ THUẬT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#23211E] font-display">
            {usp.title}
          </h2>
          <p className="text-sm sm:text-base text-[#78716C] max-w-2xl">
            Sự giao thoa giữa tiêu chuẩn an toàn sức khỏe tuyệt đối và cảm xúc lắng đọng trong từng chi tiết.
          </p>
        </div>

        {/* 60 / 40 Split Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (60% ~ 7 cols): 3 USP Cards with Detailed Specs */}
          <div className="lg:col-span-7 space-y-4">
            {usp.items.map((item, idx) => {
              const isSelected = activeUspIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveUspIndex(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-pastel-card ${
                    isSelected
                      ? 'bg-[#FFFCEB] border-[#ECC850] shadow-pastel-glow'
                      : 'bg-white border-[rgba(218,185,114,0.25)] hover:border-[#ECC850] hover:bg-[#FFFDF7]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#FFF9E6] border border-[#F4D36C] flex items-center justify-center shrink-0 p-2 shadow-sm">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <Sparkles className="w-6 h-6 text-[#ECC850] hidden last:block" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center text-xs font-mono text-[#B38528] font-bold">
                        <span>{item.index}.</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#23211E] font-display">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#78716C] leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Technical specifications pills in mono */}
                      <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                        {item.techSpecs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-white px-2.5 py-1 rounded text-[#78716C] border border-[rgba(218,185,114,0.3)] shadow-xs"
                          >
                            <span className="text-[#23211E] font-semibold">{spec.k}:</span>{' '}
                            <span className="text-[#B38528] font-medium">{spec.v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (40% ~ 5 cols): Visual Deep Dive & Interactive Feature */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[rgba(218,185,114,0.35)] p-6 space-y-6 shadow-pastel-card sticky top-24">
            <div className="flex items-center justify-between border-b border-[rgba(218,185,114,0.25)] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ECC850] active-led-dot" />
                <span className="text-xs font-mono text-[#23211E] uppercase tracking-wider font-bold">
                  TRẢI NGHIỆM TRỰC QUAN
                </span>
              </div>
              <span className="text-xs font-mono text-[#B38528] font-bold">
                {activeItem.index} / 03
              </span>
            </div>

            {/* Media Asset Preview */}
            <div className="rounded-xl overflow-hidden h-56 bg-[#FFFDF8]">
              <AssetMedia
                src={activeItem.image}
                alt={activeItem.title}
                aspectRatio="16:9"
                className="w-full h-full"
              />
            </div>

            {/* Special Interactive Mode for Secret Message */}
            {activeUspIndex === 1 && (
              <div className="space-y-4 pt-2 border-t border-[rgba(218,185,114,0.25)]">
                <div className="flex items-center justify-between text-xs font-mono text-[#78716C]">
                  <span className="font-semibold">MÔ PHỎNG SÁP TAN CHẢY</span>
                  <button
                    type="button"
                    onClick={() => setIsWaxMelted(!isWaxMelted)}
                    className="text-xs font-bold text-[#B38528] hover:text-[#23211E] flex items-center gap-1.5 cursor-pointer transition-colors bg-[#FFF9E6] hover:bg-[#FDF4D4] px-3 py-1.5 rounded-lg border border-[#ECC850] shadow-xs"
                  >
                    <Flame className="w-3.5 h-3.5 text-[#ECC850] animate-pulse" />
                    {isWaxMelted ? 'Đậy sáp lại' : 'Đốt nến & Hiện thông điệp'}
                  </button>
                </div>

                {/* Simulated Wax Dish */}
                <div className="relative min-h-[128px] rounded-xl bg-gradient-to-b from-[#FFFDF8] via-[#FFF9E6] to-[#FFF4D4] border-2 border-[#ECC850] flex flex-col items-center justify-center p-4 overflow-hidden shadow-sm">
                  {/* Wax Layer when solid */}
                  <div
                    className={`absolute inset-0 bg-[#FAF5E8] z-10 flex flex-col items-center justify-center p-4 transition-all duration-500 ${
                      isWaxMelted ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
                    }`}
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-[#8C6D3F] mb-1.5 shadow-sm" />
                    <span className="text-xs text-[#23211E] font-bold font-display">
                      Lớp sáp đậu nành đang che phủ
                    </span>
                    <span className="text-[10px] text-[#78716C] font-mono mt-1">
                      Bấm nút "Đốt nến" phía trên để làm tan sáp
                    </span>
                  </div>

                  {/* Revealed Message Plate */}
                  <div className="relative z-0 text-center space-y-1.5 w-full">
                    <div className="bg-white/95 py-2.5 px-3 rounded-lg border border-[#ECC850] shadow-xs">
                      <p className="text-base sm:text-lg font-bold text-[#23211E] font-display">
                        "{customSecretText || 'Bình yên trong từng hơi thở'}"
                      </p>
                    </div>
                    <span className="text-[10px] text-[#78716C] font-mono block">
                      Độ bền vĩnh cửu · Lời chúc hiện rõ sau 15 phút thắp
                    </span>
                  </div>
                </div>

                {/* Input to test own secret message */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C]">
                    <span className="font-semibold">Thử nhập lời chúc bạn muốn khắc:</span>
                    <span className="text-[#B38528] font-bold">Xem trước tức thì</span>
                  </div>
                  <input
                    type="text"
                    value={customSecretText}
                    maxLength={35}
                    onChange={(e) => {
                      setCustomSecretText(e.target.value);
                      if (!isWaxMelted) setIsWaxMelted(true); // Automatically melt wax when user types to show preview immediately!
                    }}
                    className="w-full bg-[#FAF8F5] border border-[rgba(218,185,114,0.35)] rounded-lg px-3 py-2 text-xs text-[#23211E] focus:border-[#ECC850] focus:outline-none font-mono font-medium shadow-xs"
                    placeholder="Bình yên trong từng hơi thở..."
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
