import React from 'react';
import { X } from 'lucide-react';
import { ModalProps } from '../types';

export const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-slate-900 border border-sky-500/30 rounded-2xl p-6 shadow-2xl shadow-sky-500/10 text-slate-100 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
          <h3 className="font-heading font-bold text-lg text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-rose-600 transition flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="overflow-y-auto flex-1 pr-2">
          {children}
        </div>
      </div>
    </div>
  );
};
