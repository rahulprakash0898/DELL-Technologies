import React, { useState, useEffect } from 'react';
import { slidesData } from './data/slides';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureSlide } from './components/FeatureSlide';
import { ProductSlide } from './components/ProductSlide';
import { AccessoriesSlide } from './components/AccessoriesSlide';
import { OfferSlide } from './components/OfferSlide';
import { Modal } from './components/Modal';
import { 
  ArrowUp, 
  ShoppingBag, 
  Laptop, 
  ShieldCheck, 
  Sparkles, 
  Leaf, 
  Monitor, 
  HardDrive, 
  Headphones,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('section-hero');
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);

  // Representative slides for each section
  const heroSlide = slidesData.find(s => s.id === 1) || slidesData[0];
  const securitySlide = slidesData.find(s => s.id === 2) || slidesData[1];
  const aiFeatureSlide = slidesData.find(s => s.id === 4) || slidesData[3];
  const fourModesSlide = slidesData.find(s => s.id === 16) || slidesData[15];
  const sustainabilitySlide = slidesData.find(s => s.id === 11) || slidesData[10];
  const xps13Slide = slidesData.find(s => s.id === 17) || slidesData[16];
  const accessoriesDA305Slide = slidesData.find(s => s.id === 21) || slidesData[20];
  const accessoriesDA326Slide = slidesData.find(s => s.id === 24) || slidesData[23];
  const jblOfferSlide = slidesData.find(s => s.id === 28) || slidesData[27];

  const sectionsList = [
    { id: 'section-hero', label: 'Inspiron 14 Plus', icon: Laptop },
    { id: 'section-security', label: 'Security', icon: ShieldCheck },
    { id: 'section-ai-features', label: 'AI Experiences', icon: Sparkles },
    { id: 'section-sustainability', label: 'Sustainability', icon: Leaf },
    { id: 'section-xps-13', label: 'Dell XPS 13', icon: Monitor },
    { id: 'section-accessories', label: 'Accessories', icon: HardDrive },
    { id: 'section-offers', label: 'Special Offer', icon: Headphones },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }

      // Check section scroll position
      const scrollPosition = window.scrollY + 200;
      for (const section of sectionsList) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans relative overflow-x-hidden">
      
      {/* Background Ambient Glowing Orbs */}
      <div className="fixed top-20 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/3 right-10 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Header Navigation Navbar */}
      <Header 
        activeSection={activeSection}
        onNavigateSection={scrollToSection}
        onOpenBuyModal={() => setShowBuyModal(true)}
      />

      {/* Side Section Indicator (Right Floating Dots) */}
      <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-full border border-sky-500/20 shadow-xl">
        {sectionsList.map((sec) => {
          const isActive = activeSection === sec.id;
          const Icon = sec.icon;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition ${
                isActive 
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold scale-110 shadow-lg shadow-cyan-500/30' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
              title={sec.label}
            >
              <Icon className="w-4 h-4" />
              {/* Tooltip on hover */}
              <span className="absolute right-10 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none shadow-md">
                {sec.label}
              </span>
            </button>
          );
        })}
      </aside>

      {/* Main Landing Page Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-24 relative z-10">
        
        {/* SECTION 1: HERO OVERVIEW - Inspiron 14 Plus 2-in-1 */}
        <section id="section-hero" className="scroll-mt-28">
          <Hero 
            slide={heroSlide} 
            onNavigateCategory={(catId) => {
              if (catId === 'feature') scrollToSection('section-ai-features');
              else if (catId === 'product') scrollToSection('section-xps-13');
              else scrollToSection('section-hero');
            }} 
          />
        </section>

        {/* SECTION 2: SECURE AND RELIABLE ARCHITECTURE */}
        <section id="section-security" className="scroll-mt-28 pt-8 border-t border-slate-800/80">
          <FeatureSlide 
            slide={securitySlide}
            onNextSlide={() => {}}
            onPrevSlide={() => {}}
          />
        </section>

        {/* SECTION 3: NEW AI EXPERIENCES */}
        <section id="section-ai-features" className="scroll-mt-28 pt-8 border-t border-slate-800/80">
          <FeatureSlide 
            slide={aiFeatureSlide}
            onNextSlide={() => {}}
            onPrevSlide={() => {}}
          />
        </section>

        {/* SECTION 4: POWERED BY FOUR MODES (360 HINGE) */}
        <section id="section-four-modes" className="scroll-mt-28 pt-8 border-t border-slate-800/80">
          <FeatureSlide 
            slide={fourModesSlide}
            onNextSlide={() => {}}
            onPrevSlide={() => {}}
          />
        </section>

        {/* SECTION 5: BUILT-IN SUSTAINABILITY */}
        <section id="section-sustainability" className="scroll-mt-28 pt-8 border-t border-slate-800/80">
          <FeatureSlide 
            slide={sustainabilitySlide}
            onNextSlide={() => {}}
            onPrevSlide={() => {}}
          />
        </section>

        {/* SECTION 6: DELL XPS 13 SHOWCASE */}
        <section id="section-xps-13" className="scroll-mt-28 pt-8 border-t border-slate-800/80">
          <ProductSlide slide={xps13Slide} />
        </section>

        {/* SECTION 7: DELL ACCESSORIES (DA305 & DA326) */}
        <section id="section-accessories" className="scroll-mt-28 pt-8 border-t border-slate-800/80 space-y-16">
          <AccessoriesSlide slide={accessoriesDA305Slide} />
          <div className="pt-8 border-t border-slate-800/50">
            <AccessoriesSlide slide={accessoriesDA326Slide} />
          </div>
        </section>

        {/* SECTION 8: SPECIAL OFFERS (JBL HEADPHONES) */}
        <section id="section-offers" className="scroll-mt-28 pt-8 border-t border-slate-800/80">
          <OfferSlide slide={jblOfferSlide} />
        </section>

      </main>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-slate-950 font-bold shadow-xl shadow-cyan-500/30 flex items-center justify-center transition hover:scale-110 active:scale-95 cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Quick Buy / Offers Checkout Modal */}
      <Modal
        isOpen={showBuyModal}
        title="Dell Retail Media Special Offers Checkout"
        onClose={() => setShowBuyModal(false)}
      >
        <div className="space-y-4 py-2">
          <div className="bg-slate-950 p-4 rounded-2xl border border-sky-500/30 space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Select Product & Bundle</span>
            
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 cursor-pointer transition">
                <div className="flex items-center gap-3">
                  <input type="radio" name="product" defaultChecked className="accent-cyan-400" />
                  <div>
                    <strong className="block text-xs text-white">Dell Inspiron 14 Plus 2-in-1</strong>
                    <span className="text-[11px] text-slate-400">Copilot+ PC, Intel® Core™ Ultra</span>
                  </div>
                </div>
                <span className="font-bold text-xs text-cyan-400">₹56,000*</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 cursor-pointer transition">
                <div className="flex items-center gap-3">
                  <input type="radio" name="product" className="accent-cyan-400" />
                  <div>
                    <strong className="block text-xs text-white">Dell XPS 13 Ultra-portable</strong>
                    <span className="text-[11px] text-slate-400">InfinityEdge OLED display</span>
                  </div>
                </div>
                <span className="font-bold text-xs text-cyan-400">₹53,364*</span>
              </label>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Add Discounted Accessories (Optional)</span>
            
            <div className="space-y-2">
              <label className="flex items-center justify-between text-xs text-slate-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Dell 6-in-1 Adapter DA305 (80% OFF)
                </span>
                <span className="font-bold text-cyan-400">+₹1,999</span>
              </label>

              <label className="flex items-center justify-between text-xs text-slate-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  JBL Tune 770NC ANC Headphones (80% OFF)
                </span>
                <span className="font-bold text-amber-400">+₹1,999</span>
              </label>
            </div>
          </div>

          <button
            onClick={() => setShowBuyModal(false)}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 text-slate-950 font-heading font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:scale-[1.02] transition cursor-pointer flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Proceed to Dell Direct Pre-Order</span>
          </button>
        </div>
      </Modal>

      {/* Dell Single Page Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-10 px-4 md:px-8 text-center space-y-4 text-xs text-slate-500 z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-lg text-white tracking-wider">DELL Technologies</span>
            <span className="text-slate-700">|</span>
            <span className="text-cyan-400 font-semibold">Retail Media Network V1</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <button onClick={() => scrollToSection('section-hero')} className="hover:text-cyan-400 transition">Inspiron 14 Plus</button>
            <button onClick={() => scrollToSection('section-security')} className="hover:text-cyan-400 transition">Security</button>
            <button onClick={() => scrollToSection('section-ai-features')} className="hover:text-cyan-400 transition">AI Experiences</button>
            <button onClick={() => scrollToSection('section-xps-13')} className="hover:text-cyan-400 transition">Dell XPS 13</button>
            <button onClick={() => scrollToSection('section-offers')} className="hover:text-cyan-400 transition">Special Offers</button>
          </div>
        </div>

        <p className="max-w-4xl mx-auto pt-4 border-t border-slate-900 text-[11px] text-slate-600">
          Copyright © 2025 Dell Inc. or its subsidiaries. All rights reserved. *Terms & conditions apply on promotional pricing, accessory bundle discounts, and no-cost EMI offers. Intel, the Intel logo, and Intel Core are trademarks of Intel Corporation or its subsidiaries.
        </p>
      </footer>
    </div>
  );
}

