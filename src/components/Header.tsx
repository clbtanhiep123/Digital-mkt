import React from 'react';
import { ShoppingBag } from 'lucide-react';
import contentData from '../data/contentData.json';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenOrderDrawer: () => void;
  cartItemCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenOrderDrawer,
  cartItemCount,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 px-4 md:px-10 flex items-center justify-between gap-8 glass-header">
      {/* Zone 1: Brand lockup with new TĨNH emblem logo */}
      <div 
        onClick={() => onNavigate('hero')}
        className="flex items-center gap-3 cursor-pointer group shrink-0"
      >
        <div className="w-10 h-10 rounded-full bg-[#FFFDF8] border border-[rgba(218,185,114,0.35)] flex items-center justify-center overflow-hidden group-hover:shadow-pastel-glow transition-all shadow-xs shrink-0">
          <img
            src="./assets/s1_01.svg"
            alt="Logo Nến Thơm TĨNH"
            className="w-full h-full object-contain p-0.5 group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-extrabold tracking-tight text-[#334833] font-display whitespace-nowrap leading-none">
            {contentData.brand.name}
          </span>
          <span className="text-[9px] font-mono tracking-widest text-[#78716C] mt-0.5">
            be still, be within
          </span>
        </div>
      </div>

      {/* Zone 2: 6 Scrollspy Nav Links */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono">
        {contentData.navigation.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-2 transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'text-[#B38528] font-bold'
                  : 'text-[#78716C] hover:text-[#23211E]'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-[#ECC850] active-led-dot scale-125' : 'bg-transparent'
                }`}
              />
              <span className="text-[11px] opacity-70">{item.index}.</span>
              <span className="tracking-wide text-[13px]">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Zone 3: 1 Primary Action (Quick Order with Cart badge) */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onOpenOrderDrawer}
          className="flex items-center gap-2 px-4 py-2 bg-[#ECC850] hover:bg-[#F4D36C] text-[#23211E] font-bold text-xs rounded-lg shadow-pastel-btn active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0 border border-[#D4A346]/40"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Đặt Hàng</span>
          {cartItemCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-[#23211E] text-[#FFFCE8] text-[10px] font-mono flex items-center justify-center font-bold">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
