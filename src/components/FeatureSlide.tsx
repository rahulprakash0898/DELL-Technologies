import React, { useState } from 'react';
import { 
  Sparkles, 
  Leaf, 
  RotateCw, 
  CheckCircle, 
  Laptop, 
  Tv, 
  Smartphone, 
  Zap
} from 'lucide-react';
import { SlideItem } from '../types';
import { PriceBadge } from './PriceBadge';

interface FeatureSlideProps {
  slide: SlideItem;
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

export const FeatureSlide: React.FC<FeatureSlideProps> = ({ slide }) => {
  const [activeMode, setActiveMode] = useState(0);

  if (!slide) return null;

  const isFourModes = slide.title.includes('Four Modes') || slide.pdfPage === 16;
  const isSustainability = slide.categoryName === 'Sustainability' || slide.title.includes('Sustainability');

  const modesList = [
    {
      id: 'laptop',
      title: 'Laptop Mode',
      icon: Laptop,
      desc: 'Ergonomic typing with backlit keyboard and precision glass touchpad for maximum productivity.',
      useCase: 'Work, Coding, Document Editing'
    },
    {
      id: 'tent',
      title: 'Tent Mode',
      icon: RotateCw,
      desc: 'Sturdy inverted-V layout for tight spaces like airplane trays, counter tops, and recipe viewing.',
      useCase: 'Touch Navigation, Cooking, Presentations'
    },
    {
      id: 'stand',
      title: 'Stand Mode',
      icon: Tv,
      desc: 'Brings the crisp 14-inch display forward while concealing the keyboard for hands-free entertainment.',
      useCase: 'Movie Streaming, Video Calls, Web Seminars'
    },
    {
      id: 'tablet',
      title: 'Tablet Mode',
      icon: Smartphone,
      desc: 'Folds flat 360° into a natural canvas for digital pen sketching, reading ebooks, and markups.',
      useCase: 'Stylus Drawing, Reading, Taking Notes'
    }
  ];

  return (
    <div className="w-full space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
          {isSustainability ? (
            <>
              <Leaf className="w-3.5 h-3.5 text-emerald-400" /> Built-in Sustainability
            </>
          ) : isFourModes ? (
            <>
              <RotateCw className="w-3.5 h-3.5 text-cyan-400" /> 360° Convertible Hinge
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Next-Gen AI Experiences
            </>
          )}
        </div>

        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
          {slide.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          {slide.subtitle}
        </p>
      </div>

      {isFourModes ? (
        /* Four Modes Interactive Mode Switcher */
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {modesList.map((mode, index) => {
              const IconComp = mode.icon;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(index)}
                  className={`p-4 rounded-2xl border text-center transition flex flex-col items-center gap-2 cursor-pointer ${
                    activeMode === index
                      ? 'bg-gradient-to-br from-sky-600/30 to-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <IconComp className="w-7 h-7 text-cyan-400" />
                  <span className="font-heading font-bold text-sm">{mode.title}</span>
                  <span className="text-[10px] text-cyan-400 font-semibold uppercase">Mode {index + 1}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/80 backdrop-blur-xl border border-sky-500/30 rounded-3xl p-6 shadow-2xl">
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[260px]">
              <img 
                src={slide.image} 
                alt={modesList[activeMode].title} 
                className="max-h-72 object-contain"
              />
              <span className="absolute top-2 left-2 bg-sky-600 text-white font-bold text-xs px-3 py-1 rounded-lg">
                Active: {modesList[activeMode].title}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
              <h3 className="font-heading font-extrabold text-2xl text-white">
                {modesList[activeMode].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {modesList[activeMode].desc}
              </p>

              <div className="bg-slate-950/60 p-3.5 rounded-xl border-l-4 border-cyan-400">
                <strong className="block text-xs font-bold text-cyan-400 uppercase">Best Suited For:</strong>
                <p className="text-xs text-slate-200 mt-0.5">{modesList[activeMode].useCase}</p>
              </div>

              <div className="flex gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300">
                  <RotateCw className="w-3.5 h-3.5 text-sky-400" />
                  <span>360° Hinge</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Touch Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Standard Feature View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 bg-slate-900/80 backdrop-blur-xl border border-sky-500/30 rounded-3xl p-6 shadow-2xl relative flex items-center justify-center">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="max-h-80 object-contain rounded-xl"
            />
            <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 text-xs text-cyan-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PDF Page {slide.pdfPage}</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-heading font-bold text-lg text-white">Key Highlights & Specs</h3>
              
              <ul className="space-y-3">
                {slide.features?.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                {slide.description}
              </div>
            </div>

            <PriceBadge 
              price={slide.price || '₹56,000*'}
              badge={slide.badge || 'Copilot+ PC'}
              compact={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};
