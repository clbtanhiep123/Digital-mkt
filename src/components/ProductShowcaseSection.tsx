import React from 'react';
import { ShoppingCart, Check, Clock, Flame, Sparkles } from 'lucide-react';
import contentData from '../data/contentData.json';
import { AssetMedia } from './AssetMedia';

export interface ProductItem {
  id: string;
  name: string;
  weight: string;
  fragrance: string;
  price: number;
  priceFormatted: string;
  burnTime: string;
  wick: string;
  ctaText: string;
  image: string;
  isFeatured: boolean;
  tag: string;
}

interface ProductShowcaseSectionProps {
  onOrderProduct: (product: ProductItem) => void;
}

export const ProductShowcaseSection: React.FC<ProductShowcaseSectionProps> = ({
  onOrderProduct,
}) => {
  const { products } = contentData;

  return (
    <section
      id="products"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 px-6 md:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[rgba(218,185,114,0.2)]"
    >
      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B38528] uppercase tracking-wider font-semibold">
            <span>04. BỘ SƯU TẬP & BÁO GIÁ</span>
            <span>·</span>
            <span>CATALOG & PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#23211E] font-display">
            {products.title}
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Định lượng chuẩn xác, quy trình thủ công trọn vẹn, minh bạch bảng giá và dịch vụ hậu mãi.
          </p>
        </div>

        {/* 3-Column Luxury Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {products.items.map((prod) => (
            <div
              key={prod.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-pastel-card group ${
                prod.isFeatured
                  ? 'bg-[#FFFDF4] border-2 border-[#ECC850] shadow-pastel-glow -translate-y-2'
                  : 'bg-white border-[rgba(218,185,114,0.3)] hover:border-[#ECC850] hover:shadow-pastel-glow'
              }`}
            >
              {/* Featured Badge */}
              {prod.isFeatured && (
                <div className="absolute top-0 right-0 bg-[#ECC850] text-[#23211E] font-mono text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider uppercase z-20 shadow-xs">
                  {prod.tag}
                </div>
              )}

              {/* Card Half Top: Visual Showcase */}
              <div className="relative border-b border-[rgba(218,185,114,0.25)] bg-[#FFFDF8] h-56 sm:h-64 overflow-hidden">
                {!prod.isFeatured && (
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-[#78716C] z-10 bg-white/90 px-2 py-0.5 rounded border border-[rgba(218,185,114,0.3)] shadow-xs">
                    {prod.tag}
                  </div>
                )}
                <AssetMedia
                  src={prod.image}
                  alt={prod.name}
                  aspectRatio="1:1"
                  className="w-full h-full"
                />
              </div>

              {/* Card Half Bottom: Typography & Price */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#B38528] font-bold">
                      {prod.weight}
                    </span>
                    <span className="text-xs font-mono text-[#78716C] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#ECC850]" />
                      {prod.burnTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#23211E] font-display">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-[#78716C] leading-relaxed line-clamp-2">
                    {prod.fragrance}
                  </p>

                  <div className="pt-2 text-[11px] font-mono text-[#78716C] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ECC850]" />
                    <span>Quy cách: {prod.wick}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-[rgba(218,185,114,0.2)] space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-[#78716C] font-mono">Đơn giá niêm yết</span>
                    <span className="text-2xl font-extrabold font-mono text-[#23211E] tabular-nums tracking-tight">
                      {prod.priceFormatted}
                    </span>
                  </div>

                  <button
                    onClick={() => onOrderProduct(prod)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      prod.isFeatured
                        ? 'bg-[#ECC850] hover:bg-[#F4D36C] text-[#23211E] shadow-pastel-btn active:scale-95 border border-[#D4A346]/40'
                        : 'bg-[#FFF9E6] hover:bg-[#ECC850] text-[#23211E] border border-[#ECC850] active:scale-95 shadow-sm'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{prod.ctaText}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
