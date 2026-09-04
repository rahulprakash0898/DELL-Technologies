import React, { useState } from 'react';
import { Info, ShieldCheck, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';
import { PriceBadgeProps } from '../types';
import { Modal } from './Modal';

export const PriceBadge: React.FC<PriceBadgeProps> = ({ 
  price, 
  originalPrice, 
  emi, 
  badge, 
  savings, 
  compact = false 
}) => {
  const [showTnC, setShowTnC] = useState(false);

  return (
    <div className={`bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-sky-500/30 rounded-2xl shadow-xl shadow-sky-950/40 p-5 ${compact ? 'p-3' : ''}`}>
      <div className="flex items-center justify-between gap-2 mb-2">
        {badge && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-600 text-white font-bold text-xs uppercase tracking-wider animate-pulse-glow">
            <Sparkles className="w-3.5 h-3.5" />
            {badge}
          </span>
        )}
        {savings && (
          <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold text-xs px-2.5 py-0.5 rounded-lg">
            {savings}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <span className="text-xs uppercase text-slate-400 tracking-wider">Starting from</span>
        <div className="flex items-baseline gap-3">
          <span className="font-heading font-extrabold text-3xl text-white tracking-tight">{price}</span>
          {originalPrice && (
            <span className="text-sm text-slate-500 line-through font-medium">{originalPrice}</span>
          )}
        </div>

        {emi && (
          <div className="flex items-center gap-1.5 text-xs text-sky-400 font-medium pt-1">
            <CreditCard className="w-3.5 h-3.5" />
            <span>EMI starting at <strong className="text-white">{emi}</strong>/month</span>
          </div>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-slate-800/80">
        <button 
          onClick={() => setShowTnC(true)}
          className="text-[11px] text-slate-400 hover:text-sky-400 transition flex items-center gap-1 cursor-pointer"
        >
          <Info className="w-3 h-3" />
          *T&Cs apply
        </button>
      </div>

      <Modal 
        isOpen={showTnC} 
        title="Terms & Conditions - Dell Promotional Offer"
        onClose={() => setShowTnC(false)}
      >
        <div className="space-y-3 text-sm text-slate-300">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Prices are inclusive of all applicable GST taxes in India.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Special bundle pricing (DA305 / DA326 / JBL Tune 770NC @ ₹1,999) valid only with selected Dell laptop purchases.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>No Cost EMI available on major credit cards up to 12 months.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Offers valid till stocks last or 2025 promotional period end.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Copyright © 2025 Dell Inc. or its subsidiaries. All rights reserved.</span>
          </div>

          <div className="pt-4 flex justify-end">
            <button 
              onClick={() => setShowTnC(false)}
              className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl text-xs transition"
            >
              Understood
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
