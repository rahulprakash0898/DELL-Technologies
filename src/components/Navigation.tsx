import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Minimize2, 
  Grid 
} from 'lucide-react';
import { SlideItem, ViewMode } from '../types';

interface NavigationProps {
  slides: SlideItem[];
  currentIndex: number;
  onSlideChange: (index: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  viewMode: ViewMode;
  onToggleViewMode: (mode: ViewMode) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  slides,
  currentIndex,
  onSlideChange,
  isPlaying,
  onTogglePlay,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const [showThumbnails, setShowThumbnails] = useState(true);
  const currentSlide = slides[currentIndex] || slides[0];

  const handlePrev = () => {
    onSlideChange(currentIndex > 0 ? currentIndex - 1 : slides.length - 1);
  };

  const handleNext = () => {
    onSlideChange(currentIndex < slides.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className="sticky bottom-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-sky-500/20">
      {/* Progress Track */}
      <div className="w-full h-1 bg-slate-900 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-300 shadow-[0_0_12px_rgba(0,210,255,0.8)]"
          style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
        />
      </div>

      <div className="px-4 md:px-8 py-2.5 flex items-center justify-between gap-4">
        {/* Left Meta */}
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-heading font-extrabold text-lg text-cyan-400">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-xs text-slate-500">/ {slides.length}</span>
          <div className="w-px h-4 bg-slate-800 hidden sm:block" />
          <span className="text-xs font-semibold text-white truncate hidden sm:block">
            {currentSlide?.title}
          </span>
        </div>

        {/* Center Controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrev}
            className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500 text-white flex items-center justify-center transition active:scale-95"
            title="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button 
            onClick={onTogglePlay}
            className={`flex items-center gap-2 px-4 h-9 rounded-xl text-xs font-bold transition active:scale-95 ${
              isPlaying 
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' 
                : 'bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/30'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
          </button>

          <button 
            onClick={handleNext}
            className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500 text-white flex items-center justify-center transition active:scale-95"
            title="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowThumbnails(!showThumbnails)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
              showThumbnails 
                ? 'bg-sky-500/20 text-sky-400 border-sky-500/40' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Thumbnails</span>
          </button>

          <button 
            onClick={onToggleFullscreen}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
          </button>
        </div>
      </div>

      {/* Thumbnails Drawer */}
      {showThumbnails && (
        <div className="bg-slate-950 border-t border-slate-900 p-3">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-800">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => onSlideChange(idx)}
                className={`flex-shrink-0 w-32 bg-slate-900 border rounded-xl p-1.5 text-left transition group ${
                  idx === currentIndex 
                    ? 'border-cyan-400 shadow-md shadow-cyan-500/20 bg-slate-800' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="relative h-16 rounded-lg overflow-hidden bg-black mb-1.5">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                  <span className="absolute bottom-1 right-1 bg-slate-950/90 text-cyan-400 font-bold text-[9px] px-1.5 py-0.5 rounded">
                    {idx + 1}
                  </span>
                </div>
                <div className="truncate text-[10px] text-cyan-400 font-semibold uppercase">{slide.categoryName}</div>
                <div className="truncate text-[11px] text-white font-medium">{slide.title}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
