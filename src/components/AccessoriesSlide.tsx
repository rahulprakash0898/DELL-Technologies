import React, { useState } from 'react';
import { 
  HardDrive, 
  Sparkles, 
  ShoppingBag, 
  ShieldCheck 
} from 'lucide-react';
import { SlideItem } from '../types';
import { Modal } from './Modal';

interface AccessoriesSlideProps {
  slide: SlideItem;
}

export const AccessoriesSlide: React.FC<AccessoriesSlideProps> = ({ slide }) => {
  const [showOfferModal, setShowOfferModal] = useState(false);

  if (!slide) return null;

  const isDA326 = slide.title.includes('DA326') || slide.pdfPage >= 24;

  const activeData = isDA326 ? {
    name: 'Dell Pro 7-in-1 USB-C Travel Hub DA326',
    price: '₹1,999/-*',
    mrp: '₹9,999/-*',
    savings: 'Save ₹8,000 (80% OFF)',
    ports: [
      { name: '1x HDMI 2.0 (4K)', desc: 'Crystal clear 4K video projection' },
      { name: '1x VGA Video Port', desc: 'Legacy projector & monitor output' },
      { name: '1x USB-C Pass-through PD 100W', desc: 'Maximum speed charging pass-through' },
      { name: '2x USB-A 3.2 Gen 2', desc: '10Gbps high speed peripheral transfer' },
      { name: '1x SD & MicroSD Reader', desc: 'Instant photography file transfer' },
      { name: '1x Gigabit Ethernet', desc: 'Enterprise network security & speed' }
    ]
  } : {
    name: 'Dell 6-in-1 USB-C Multiport Adapter DA305',
    price: '₹1,999/-*',
    mrp: '₹9,999/-*',
    savings: 'Save ₹8,000 (80% OFF)',
    ports: [
      { name: '1x HDMI 4K @ 60Hz', desc: 'Ultra High Definition external display output' },
      { name: '1x DisplayPort 1.4', desc: 'Pro monitor connection' },
      { name: '1x USB-C Pass-through Power', desc: 'Up to 90W PD charging & 10Gbps data' },
      { name: '2x USB-A 3.2 Gen 2', desc: 'SuperSpeed 10Gbps keyboard/flash drive connection' },
      { name: '1x Gigabit Ethernet RJ45', desc: 'Ultra-fast wired internet stability' }
    ]
  };

  return (
    <div className="w-full space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold text-xs">
          <HardDrive className="w-3.5 h-3.5" /> Dell Genuine Accessories Offer
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
          {slide.title}
        </h2>
        <p className="text-slate-400 text-sm">{slide.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Visual & Deal */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-sky-500/30 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-rose-600 text-white font-extrabold text-[11px] px-3 py-1 rounded-md uppercase tracking-wider animate-pulse-glow flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> SPECIAL ACCESSORY OFFER
              </span>
              <span className="text-cyan-400 font-extrabold text-xs">80% DISCOUNT</span>
            </div>

            <div className="flex items-center justify-center min-h-[220px]">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="max-h-64 object-contain"
              />
            </div>

            <div className="bg-slate-950/80 border border-sky-500/30 rounded-2xl p-4 text-center space-y-1">
              <span className="text-xs text-slate-500 line-through">MRP {activeData.mrp}</span>
              <div className="font-heading font-extrabold text-2xl text-white">
                Offer Price: <span className="text-cyan-400">{activeData.price}</span>
              </div>
              <span className="inline-block bg-emerald-500/20 text-emerald-400 font-bold text-xs px-2.5 py-0.5 rounded-md">
                {activeData.savings}
              </span>
            </div>

            <button 
              onClick={() => setShowOfferModal(true)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 text-slate-950 font-heading font-extrabold text-sm shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Claim Bundle Offer @ {activeData.price}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Ports Diagram */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="font-heading font-bold text-base text-white">
              Included Connectivity Ports ({activeData.ports.length} Expansion Ports)
            </h3>

            <div className="space-y-2.5">
              {activeData.ports.map((port, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-950/60 border border-slate-800/80 p-3 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <strong className="block text-xs font-bold text-white">{port.name}</strong>
                    <span className="text-xs text-slate-400">{port.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 bg-sky-500/10 border border-sky-500/30 p-4 rounded-xl text-xs">
            <ShieldCheck className="w-6 h-6 text-sky-400 shrink-0" />
            <div>
              <strong className="block text-white font-bold">3-Year Dell Advanced Exchange Service</strong>
              <span className="text-slate-300">Includes direct replacement warranty by Dell India</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showOfferModal}
        title={`Claim Bundle Offer: ${activeData.name}`}
        onClose={() => setShowOfferModal(false)}
      >
        <div className="space-y-4 text-center py-2">
          <div className="bg-slate-950 p-4 rounded-xl border border-sky-500/30">
            <span className="text-xs text-rose-400 font-bold uppercase tracking-wider">80% OFF SPECIAL DISCOUNT</span>
            <div className="flex items-center justify-center gap-3 my-2">
              <span className="text-sm text-slate-500 line-through">{activeData.mrp}</span>
              <span className="font-heading text-3xl font-extrabold text-cyan-400">{activeData.price}</span>
            </div>
            <p className="text-xs text-slate-300">Valid when added during purchase of Dell Inspiron 14 Plus 2-in-1 or Dell XPS 13.</p>
          </div>

          <div className="p-3 bg-slate-800/60 rounded-xl border border-dashed border-cyan-400 flex items-center justify-between">
            <span className="text-xs text-slate-400">Bundle Coupon Code:</span>
            <strong className="font-mono text-sm text-cyan-400">DELL-ACC-80OFF</strong>
          </div>

          <button 
            onClick={() => setShowOfferModal(false)}
            className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition"
          >
            Apply Code to Checkout
          </button>
        </div>
      </Modal>
    </div>
  );
};
