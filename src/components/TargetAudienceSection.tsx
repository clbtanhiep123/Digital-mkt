import React from 'react';
import contentData from '../data/contentData.json';
import { AssetMedia } from './AssetMedia';

interface TargetAudienceSectionProps {
  onSelectAudience?: (id: string) => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({
  onSelectAudience,
}) => {
  const { targetAudience } = contentData;

  return (
    <section
      id="target"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 px-6 md:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[rgba(218,185,114,0.2)]"
    >
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#23211E] font-display">
            {targetAudience.title}
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Thiết kế mùi hương chuyên biệt cho từng khoảnh khắc và nhịp sống thường nhật.
          </p>
        </div>

        {/* Bento Grid (4 Columns) in Pure White & Soft Gold Hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.items.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectAudience?.(item.id)}
              className="bg-white hover:bg-[#FFFDF7] rounded-2xl border border-[rgba(218,185,114,0.3)] hover:border-[#ECC850] p-5 flex flex-col justify-between transition-all duration-300 shadow-pastel-card hover:shadow-pastel-glow group hover:-translate-y-1 cursor-pointer"
            >
              {/* Top metadata & Category */}
              <div>
                <div className="flex items-center text-xs font-mono text-[#78716C] mb-3">
                  <span className="text-[#B38528] font-bold">{item.index}.</span>
                </div>

                {/* Media Illustration */}
                <div className="mb-4 overflow-hidden rounded-xl h-44 bg-[#FFFDF8]">
                  <AssetMedia
                    src={item.image}
                    alt={item.title}
                    aspectRatio="1:1"
                    className="w-full h-full"
                  />
                </div>

                {/* Title and Category */}
                <span className="text-[10px] font-mono tracking-wider text-[#78716C] uppercase block font-semibold">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-[#23211E] font-display mt-1 group-hover:text-[#B38528] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="pt-4 mt-4 border-t border-[rgba(218,185,114,0.2)]">
                <p className="text-sm text-[#78716C] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
