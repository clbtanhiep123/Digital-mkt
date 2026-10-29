/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { UspSection } from './components/UspSection';
import { ProductShowcaseSection, ProductItem } from './components/ProductShowcaseSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FooterTeamSection } from './components/FooterTeamSection';
import { OrderDrawer } from './components/OrderDrawer';
import contentData from './data/contentData.json';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<
    Array<{
      product: ProductItem;
      quantity: number;
      secretMessage?: string;
    }>
  >([
    // Initialize with 1 Standard 200g candle by default for immediate tactile feedback
    {
      product: contentData.products.items[1] as ProductItem,
      quantity: 1,
      secretMessage: 'Bình yên trong từng hơi thở',
    },
  ]);

  const mainContainerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to slide
  const scrollToSlide = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Keyboard navigation across magazine slides
  useEffect(() => {
    const slideIds = contentData.navigation.map((n) => n.id);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOrderDrawerOpen) return;
      
      const currentIndex = slideIds.indexOf(activeSection);
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentIndex < slideIds.length - 1) {
          e.preventDefault();
          scrollToSlide(slideIds[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentIndex > 0) {
          e.preventDefault();
          scrollToSlide(slideIds[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, isOrderDrawerOpen]);

  // GSAP ScrollTrigger Setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup ScrollTrigger for each slide to track active section
      const slides = document.querySelectorAll<HTMLElement>('.magazine-slide');
      
      slides.forEach((slide) => {
        const sectionId = slide.querySelector('section')?.id || slide.id;
        ScrollTrigger.create({
          trigger: slide,
          start: 'top 45%',
          end: 'bottom 45%',
          onEnter: () => sectionId && setActiveSection(sectionId),
          onEnterBack: () => sectionId && setActiveSection(sectionId),
        });

        // Entrance stagger reveal for elements inside each slide
        gsap.fromTo(
          slide.querySelectorAll('h1, h2, h3, .stagger-child'),
          { opacity: 0.3, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: slide,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, mainContainerRef);

    return () => ctx.revert();
  }, []);

  // Cart operations
  const handleAddProduct = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsOrderDrawerOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as Array<{
        product: ProductItem;
        quantity: number;
        secretMessage?: string;
      }>
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Navigate next/prev slide
  const slideIds = contentData.navigation.map((n) => n.id);
  const currentIdx = slideIds.indexOf(activeSection);
  const canGoUp = currentIdx > 0;
  const canGoDown = currentIdx < slideIds.length - 1;

  return (
    <div 
      ref={mainContainerRef}
      className="min-h-screen bg-[#FAF8F5] text-[#23211E] selection:bg-[#FDF4D4] selection:text-[#23211E] font-body relative"
    >
      {/* Fixed Header with Glassmorphism and Scrollspy */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSlide}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        cartItemCount={totalCartCount}
      />

      {/* Floating Side Magazine Dot Navigation (Right Screen) in White & Pastel */}
      <aside 
        aria-label="Magazine Navigation"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 bg-white/90 p-2.5 rounded-full border border-[rgba(218,185,114,0.3)] backdrop-blur-md shadow-pastel-card"
      >
        {/* Quick Prev Button */}
        {canGoUp && (
          <button
            onClick={() => scrollToSlide(slideIds[currentIdx - 1])}
            title="Slide trước"
            className="w-6 h-6 flex items-center justify-center text-[#78716C] hover:text-[#23211E] transition-colors cursor-pointer"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        )}

        {/* 6 Dots */}
        {contentData.navigation.map((nav) => {
          const isActive = activeSection === nav.id;
          return (
            <button
              key={nav.id}
              onClick={() => scrollToSlide(nav.id)}
              title={`${nav.index}. ${nav.label}`}
              className="group relative flex items-center justify-center p-1 cursor-pointer"
            >
              <span
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ECC850] active-led-dot scale-125'
                    : 'bg-[#D4A346]/30 hover:bg-[#23211E]'
                }`}
              />
              {/* Tooltip on hover */}
              <span className="absolute right-7 px-2.5 py-1 rounded bg-white text-[11px] font-mono text-[#B38528] font-bold border border-[rgba(218,185,114,0.35)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                {nav.index}. {nav.label}
              </span>
            </button>
          );
        })}

        {/* Quick Next Button */}
        {canGoDown && (
          <button
            onClick={() => scrollToSlide(slideIds[currentIdx + 1])}
            title="Slide tiếp theo"
            className="w-6 h-6 flex items-center justify-center text-[#78716C] hover:text-[#23211E] transition-colors cursor-pointer"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        )}
      </aside>

      {/* 6 Discrete Magazine Slides Stack */}
      <main className="w-full relative">
        {/* Slide 1: Hero Banner */}
        <div className="magazine-slide">
          <HeroSection onCtaClick={() => scrollToSlide('products')} />
        </div>

        {/* Slide 2: Target Audience Bento Grid */}
        <div className="magazine-slide">
          <TargetAudienceSection onSelectAudience={() => scrollToSlide('products')} />
        </div>

        {/* Slide 3: 3 USPs Split Dashboard */}
        <div className="magazine-slide">
          <UspSection />
        </div>

        {/* Slide 4: Products & Pricing Boutique Showcase */}
        <div className="magazine-slide">
          <ProductShowcaseSection onOrderProduct={handleAddProduct} />
        </div>

        {/* Slide 5: Final CTA Full-Bleed Rest Point */}
        <div className="magazine-slide">
          <FinalCtaSection onCtaClick={() => setIsOrderDrawerOpen(true)} />
        </div>

        {/* Slide 6: Footer & Academic Nhóm 05 Team */}
        <div className="magazine-slide">
          <FooterTeamSection />
        </div>
      </main>

      {/* Instant Order Slide-Over Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
}
