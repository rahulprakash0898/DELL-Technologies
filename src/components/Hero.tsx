import React from 'react';
import { 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Leaf, 
  ArrowRight, 
  Laptop, 
  Zap 
} from 'lucide-react';
import { SlideItem, CategoryId } from '../types';
import { PriceBadge } from './PriceBadge';

interface HeroProps {
  slide: SlideItem;
  onNavigateCategory: (id: CategoryId) => void;
}

export const Hero: React.FC<HeroProps> = ({ slide, onNavigateCategory }) => {
  if (!slide) return null;

  return (
    <div className="w-full animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Title & Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/40 text-white font-bold text-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Copilot+ PC
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-semibold text-xs">
              <Cpu className="w-3.5 h-3.5" /> Powered by Intel® Core™ Ultra
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Dell Inspiron <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 drop-shadow-[0_0_25px_rgba(0,210,255,0.4)]">14 Plus 2-in-1</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {slide.subtitle || 'Sleek 14-inch 2-in-1 with on-device Copilot+ powered by Intel® Core™ Ultra processors, with stunning performance that powers the newest AI experiences.'}
          </p>

          {/* Features Bullets */}
          <div className="space-y-3">
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-white">New AI experiences</strong>
                <p className="text-xs text-slate-400">On-device NPU compute for live translation, image generation & background effects</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition">
              <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-white">Secure and reliable</strong>
                <p className="text-xs text-slate-400">Hardware-level BIOS defense, Windows Hello biometrics & data privacy</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition">
              <Leaf className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-white">Built-in sustainability</strong>
                <p className="text-xs text-slate-400">100% recycled aluminum chassis & FSC eco-certified packaging</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => onNavigateCategory('feature')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 text-slate-950 font-heading font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition cursor-pointer"
            >
              <span>Explore AI Features</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => onNavigateCategory('product')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-sky-500/30 text-white font-semibold text-sm hover:bg-sky-500/10 hover:border-cyan-400 transition cursor-pointer"
            >
              <Laptop className="w-4 h-4 text-cyan-400" />
              <span>View Specs & Options</span>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Showcase & Price Card */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-sky-500/30 rounded-3xl p-6 shadow-2xl shadow-sky-950/60 relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-center min-h-[260px] py-4">
              <img 
                src={slide.image} 
                alt="Dell Inspiron 14 Plus 2-in-1 Laptop" 
                className="max-h-72 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] hover:scale-105 transition duration-500"
              />
            </div>

            <div className="relative z-10 mt-4">
              <PriceBadge 
                price={slide.price || '₹56,000*'}
                originalPrice={slide.originalPrice}
                badge="Copilot+ PC Edition"
                savings="Offer Included"
              />
            </div>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Tech Badges Strip */}
          <div className="grid grid-cols-3 gap-2 mt-4 p-3 bg-slate-950/60 border border-slate-800 rounded-2xl text-center">
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] font-bold text-slate-300">40+ TOPS NPU</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Laptop className="w-4 h-4 text-sky-400" />
              <span className="text-[11px] font-bold text-slate-300">360° Touch Hinge</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-bold text-slate-300">Energy Star 8.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
