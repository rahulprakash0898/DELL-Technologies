import React, { useState } from 'react';
import { 
  Headphones, 
  Sparkles, 
  BatteryCharging, 
  Volume2, 
  CheckCircle, 
  Gift 
} from 'lucide-react';
import { SlideItem } from '../types';
import { Modal } from './Modal';

interface OfferSlideProps {
  slide: SlideItem;
}

export const OfferSlide: React.FC<OfferSlideProps> = ({ slide }) => {
  const [showOfferForm, setShowOfferForm] = useState(false);

  if (!slide) return null;

  return (
    <div className="w-full space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold text-xs">
          <Gift className="w-3.5 h-3.5" /> Exclusive Retail Media Promotion 2025
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
          {slide.title}
        </h2>
        <p className="text-slate-400 text-sm">{slide.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Offer Showcase */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-6 shadow-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> JBL AUDIO SPECIAL
            </span>

            <div className="flex items-center justify-center min-h-[220px]">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="max-h-64 object-contain"
              />
            </div>

            <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-4 text-center space-y-1">
              <span className="text-xs text-slate-500 line-through">MRP ₹9,999/-*</span>
              <div className="font-heading font-extrabold text-2xl text-white">
                Special Offer: <span className="text-amber-400">₹1,999/-*</span>
              </div>
              <span className="inline-block bg-emerald-500/20 text-emerald-400 font-bold text-xs px-2.5 py-0.5 rounded-md">
                Save ₹8,000 (80% OFF)
              </span>
            </div>

            <button 
              onClick={() => setShowOfferForm(true)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-heading font-extrabold text-sm shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition cursor-pointer"
            >
              <Gift className="w-4 h-4" />
              <span>Claim JBL Headphones @ ₹1,999</span>
            </button>
          </div>
        </div>

        {/* Right Column: JBL Specs & Summary */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="font-heading font-bold text-base text-white">
              JBL Tune 770NC Adaptive Noise Cancelling Highlights
            </h3>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <Volume2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-white">Adaptive Noise Cancelling with Smart Ambient</strong>
                  <p className="text-xs text-slate-400">Zero distractions during work or travel, with instant talk-thru mode</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BatteryCharging className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-white">Up to 70 Hours Battery Life</strong>
                  <p className="text-xs text-slate-400">Speed charge gives 3 extra hours playback in just 5 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-white">Bluetooth 5.3 with Multi-Point Connection</strong>
                  <p className="text-xs text-slate-400">Switch seamlessly between your laptop video call and mobile phone</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-white">Lightweight & Foldable Design</strong>
                  <p className="text-xs text-slate-400">Soft ear cushions engineered for all-day wearing comfort</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Dell RMN Website V1 Promotional Summary</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] bg-slate-950 px-2.5 py-1 rounded-md text-slate-300 border border-slate-800">Inspiron 14 Plus @ ₹56,000*</span>
              <span className="text-[11px] bg-slate-950 px-2.5 py-1 rounded-md text-slate-300 border border-slate-800">Dell XPS 13 @ ₹53,364</span>
              <span className="text-[11px] bg-slate-950 px-2.5 py-1 rounded-md text-slate-300 border border-slate-800">Adapter DA305 @ ₹1,999</span>
              <span className="text-[11px] bg-slate-950 px-2.5 py-1 rounded-md text-slate-300 border border-slate-800">Travel Hub DA326 @ ₹1,999</span>
              <span className="text-[11px] bg-slate-950 px-2.5 py-1 rounded-md text-slate-300 border border-slate-800">JBL 770NC @ ₹1,999</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showOfferForm}
        title="Reserve JBL Tune 770NC Bundle Voucher"
        onClose={() => setShowOfferForm(false)}
      >
        <div className="space-y-3 text-xs">
          <p className="text-slate-300">Enter your details to reserve your JBL Tune 770NC Headphones bundle voucher:</p>
          
          <div className="space-y-1">
            <label className="text-slate-400">Full Name</label>
            <input type="text" placeholder="e.g. Rahul Prakash" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-amber-400" />
          </div>

          <div className="space-y-1">
            <label className="text-slate-400">Email Address</label>
            <input type="email" placeholder="e.g. rahul@example.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-amber-400" />
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-dashed border-amber-400 flex items-center justify-between">
            <span className="text-slate-400">Reserved Voucher Code:</span>
            <strong className="font-mono text-sm text-amber-400">JBL-DELL-2025-V1</strong>
          </div>

          <button 
            onClick={() => setShowOfferForm(false)}
            className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition mt-2"
          >
            Reserve Voucher Now
          </button>
        </div>
      </Modal>
    </div>
  );
};
