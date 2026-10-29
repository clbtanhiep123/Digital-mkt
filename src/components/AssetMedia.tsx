import React, { useState } from 'react';
import { Flame, Sparkles, BookOpen, Briefcase, Leaf, Gift, Mail, User } from 'lucide-react';

interface AssetMediaProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '1:1' | '16:9' | '4:5' | 'auto';
  priority?: boolean;
}

export const AssetMedia: React.FC<AssetMediaProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
}) => {
  const [hasError, setHasError] = useState(false);
  const filename = src.replace('./assets/', '').replace('/assets/', '');
  const normalizedSrc = src.startsWith('./') ? src.replace('./', '/') : src;

  // Custom white & pastel yellow visual fallback renderer
  const renderVisual = () => {
    switch (filename) {
      case 's1_02.jpg':
        return (
          <div className="relative w-full h-full min-h-[380px] lg:min-h-[480px] bg-gradient-to-br from-[#FFFFFF] via-[#FFFDF8] to-[#FDF4D4]/50 rounded-2xl overflow-hidden border border-[rgba(218,185,114,0.3)] flex flex-col items-center justify-center p-8 group shadow-pastel-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(244,211,108,0.25)_0%,transparent_65%)] animate-pulse" />
            <div className="absolute top-4 right-4 text-[10px] font-mono tracking-wider text-[#927129] border border-[rgba(218,185,114,0.4)] px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm">
              THỦ CÔNG TỰ NHIÊN
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex flex-col items-center mb-1">
                <div className="w-6 h-10 bg-gradient-to-t from-[#ECC850] via-[#F7E49A] to-[#FFFDF0] rounded-full blur-[0.6px] animate-bounce duration-1000 shadow-[0_0_20px_rgba(236,200,80,0.7)]" />
                <div className="w-1.5 h-3 bg-[#694825] rounded-sm -mt-1" />
              </div>

              <div className="w-52 sm:w-60 h-60 sm:h-68 rounded-2xl bg-gradient-to-b from-[#FFFFFF] via-[#FAF7F0] to-[#F5EEDD] border border-[rgba(218,185,114,0.35)] shadow-[0_16px_35px_rgba(180,140,75,0.12)] flex flex-col items-center justify-between p-4 relative overflow-hidden">
                <div className="w-full h-5 bg-[#FFFCE8] rounded-full shadow-inner flex items-center justify-center border border-[rgba(218,185,114,0.2)]">
                  <div className="w-9 h-1.5 bg-[#8C6D3F] rounded-full" />
                </div>

                <div className="w-40 h-32 bg-[#FFFFFF]/95 border border-[rgba(218,185,114,0.4)] rounded-xl p-3.5 flex flex-col items-center justify-center text-center shadow-sm">
                  <span className="text-[10px] font-mono tracking-widest text-[#B38528] uppercase font-bold">NẾN THƠM TĨNH</span>
                  <span className="text-base font-display font-extrabold text-[#23211E] mt-0.5">CHẠM BÌNH YÊN</span>
                  <div className="w-10 h-[1.5px] bg-[#ECC850] my-1.5 rounded-full" />
                  <span className="text-[10px] font-mono text-[#78716C]">200G · SÁP ĐẬU NÀNH</span>
                  <span className="text-[9px] text-[#927129] font-medium mt-1">100% ORGANIC BLEND</span>
                </div>

                <div className="w-3/4 h-1 bg-gradient-to-r from-transparent via-[#ECC850]/40 to-transparent" />
              </div>
            </div>

            <div className="mt-6 z-10 flex items-center gap-4 text-xs font-mono text-[#78716C] bg-white/80 px-4 py-2 rounded-full border border-[rgba(218,185,114,0.25)] shadow-sm">
              <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-[#ECC850]" /> 55h Đốt Liên Tục</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#D4A346]" /> Bấc Gỗ Tự Nhiên</span>
            </div>
          </div>
        );

      case 's3_04.jpg':
        return (
          <div className="w-full h-56 bg-gradient-to-b from-[#FFFFFF] to-[#FFF9E6] rounded-xl border border-[rgba(218,185,114,0.35)] p-5 flex flex-col justify-between relative overflow-hidden shadow-pastel-card">
            <div className="flex items-center text-xs font-mono text-[#78716C]">
              <span>THÔNG ĐIỆP ẨN ĐỘC BẢN</span>
            </div>
            <div className="my-auto text-center p-3.5 rounded-xl bg-white border border-[#ECC850] shadow-sm">
              <span className="text-[11px] font-mono text-[#78716C] block mb-1">DÒNG CHỮ DƯỚI LỚP SÁP:</span>
              <p className="text-base font-display font-extrabold text-[#927129] tracking-wide">
                "Bình yên trong từng hơi thở"
              </p>
              <span className="text-[10px] text-[#78716C] mt-1 block">Tùy biến lời chúc theo yêu cầu riêng của bạn</span>
            </div>
            <div className="text-[11px] font-mono text-[#78716C] text-center">
              Lớp sáp tan sau 15 phút thắp nến để lộ thông điệp
            </div>
          </div>
        );

      case 's6_02.jpg':
      case 's6_03.jpg':
      case 's6_04.jpg':
        return (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFF9E6] to-[#FDF4D4] border-2 border-[#ECC850] flex items-center justify-center text-[#B38528] font-bold text-sm shadow-sm">
            <User className="w-5 h-5" />
          </div>
        );

      default:
        return (
          <div className="w-full h-full min-h-[160px] bg-[#FFFFFF] rounded-xl border border-[rgba(218,185,114,0.3)] flex flex-col items-center justify-center p-4">
            <Sparkles className="w-6 h-6 text-[#ECC850] mb-2" />
            <span className="text-xs text-[#78716C] font-mono">{alt || filename}</span>
          </div>
        );
    }
  };

  // If this is the secret message slot, prioritize the message reveal card
  if (filename === 's3_04.jpg') {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {renderVisual()}
      </div>
    );
  }

  const isAbsolute = className.includes('absolute');
  const positionClass = isAbsolute ? '' : 'relative';

  return (
    <div className={`${positionClass} overflow-hidden ${className}`}>
      {!hasError ? (
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <img
            src={normalizedSrc}
            alt={alt}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle soft gradient scrim on bottom for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#23211E]/20 via-transparent to-transparent pointer-events-none opacity-60" />
        </div>
      ) : (
        renderVisual()
      )}
    </div>
  );
};
