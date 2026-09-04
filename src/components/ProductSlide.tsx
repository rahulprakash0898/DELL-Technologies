import React, { useState } from 'react';
import { 
  Monitor, 
  QrCode, 
  Info, 
  CheckCircle, 
  Download 
} from 'lucide-react';
import { SlideItem } from '../types';
import { PriceBadge } from './PriceBadge';
import { Modal } from './Modal';

interface ProductSlideProps {
  slide: SlideItem;
}

export const ProductSlide: React.FC<ProductSlideProps> = ({ slide }) => {
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  if (!slide) return null;

  return (
    <div className="w-full space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Frame */}
        <div className="lg:col-span-6">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-sky-500/30 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 font-bold text-xs">
                <Monitor className="w-3.5 h-3.5" /> Dell XPS Series
              </span>
              <span className="text-xs text-slate-400 font-medium">Page {slide.pdfPage} of 29</span>
            </div>

            <div className="flex items-center justify-center min-h-[260px] py-4">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="max-h-72 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button 
                onClick={() => setShowSpecsModal(true)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 text-slate-950 font-heading font-extrabold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition cursor-pointer"
              >
                <Info className="w-4 h-4" />
                <span>KNOW MORE</span>
              </button>

              <button 
                onClick={() => setShowBrochureModal(true)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 border border-sky-500/30 hover:border-cyan-400 text-white font-semibold text-xs sm:text-sm transition cursor-pointer"
              >
                <QrCode className="w-4 h-4 text-cyan-400" />
                <span>Scan Offer Brochure</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Meta & Specs */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Flagship Ultra-Portable</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
              {slide.title}
            </h2>
            <p className="text-slate-400 text-sm mt-1">{slide.subtitle}</p>
          </div>

          <PriceBadge 
            price={slide.price || '₹53,364'}
            originalPrice={slide.originalPrice || '₹68,990'}
            emi={slide.emi || '₹2,224'}
            badge={slide.badge || 'Premium XPS'}
            savings="Save ₹15,626"
          />

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h3 className="font-heading font-bold text-sm text-white">Highlights & Capabilities</h3>
            <ul className="space-y-2">
              {slide.features?.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
              <span className="block text-[10px] text-slate-500 uppercase font-semibold">Display</span>
              <span className="text-xs font-bold text-cyan-400">13.4" FHD+ InfinityEdge</span>
            </div>
            <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
              <span className="block text-[10px] text-slate-500 uppercase font-semibold">Processor</span>
              <span className="text-xs font-bold text-cyan-400">Intel® Core™ Ultra 7</span>
            </div>
            <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
              <span className="block text-[10px] text-slate-500 uppercase font-semibold">Weight</span>
              <span className="text-xs font-bold text-cyan-400">1.19 kg Ultra-light</span>
            </div>
            <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
              <span className="block text-[10px] text-slate-500 uppercase font-semibold">Battery</span>
              <span className="text-xs font-bold text-cyan-400">Up to 18 Hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Know More Specs Modal */}
      <Modal 
        isOpen={showSpecsModal}
        title="Dell XPS 13 - Specifications & Hardware"
        onClose={() => setShowSpecsModal(false)}
      >
        <div className="space-y-3 text-xs">
          <div className="grid grid-cols-3 py-2 border-b border-slate-800">
            <span className="font-bold text-cyan-400">Processor</span>
            <span className="col-span-2 text-slate-200">Intel® Core™ Ultra 7 Processor 155H (16 cores, up to 4.8 GHz)</span>
          </div>
          <div className="grid grid-cols-3 py-2 border-b border-slate-800">
            <span className="font-bold text-cyan-400">Memory</span>
            <span className="col-span-2 text-slate-200">16GB / 32GB LPDDR5x Dual Channel 7467MHz</span>
          </div>
          <div className="grid grid-cols-3 py-2 border-b border-slate-800">
            <span className="font-bold text-cyan-400">Storage</span>
            <span className="col-span-2 text-slate-200">512GB / 1TB PCIe NVMe M.2 SSD</span>
          </div>
          <div className="grid grid-cols-3 py-2 border-b border-slate-800">
            <span className="font-bold text-cyan-400">Display</span>
            <span className="col-span-2 text-slate-200">13.4" FHD+ (1920 x 1200) InfinityEdge, 500 nits, Anti-glare</span>
          </div>
          <div className="grid grid-cols-3 py-2 border-b border-slate-800">
            <span className="font-bold text-cyan-400">Chassis</span>
            <span className="col-span-2 text-slate-200">CNC Machined Aluminum in Platinum finish</span>
          </div>
        </div>
      </Modal>

      {/* Brochure Modal */}
      <Modal 
        isOpen={showBrochureModal}
        title="Dell XPS 13 - Promotional Brochure & QR Code"
        onClose={() => setShowBrochureModal(false)}
      >
        <div className="text-center space-y-4 py-4">
          <QrCode className="w-28 h-28 text-cyan-400 mx-auto" />
          <p className="text-xs text-slate-300">Scan with your smartphone camera to view the promotional brochure PDF</p>

          <a 
            href="/RMN Website V1.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition"
          >
            <Download className="w-4 h-4" />
            <span>Download RMN Website V1 PDF (194 MB)</span>
          </a>
        </div>
      </Modal>
    </div>
  );
};
