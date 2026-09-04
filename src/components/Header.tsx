import React from 'react';
import { 
  Laptop, 
  Sparkles, 
  Monitor, 
  Headphones, 
  HardDrive, 
  ShieldCheck, 
  Leaf, 
  ShoppingBag,
  Menu,
  X
} from 'lucide-react';
import { CategoryId } from '../types';

interface HeaderProps {
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
  onOpenBuyModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigateSection,
  onOpenBuyModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'section-hero', label: 'Inspiron 14 Plus', icon: Laptop },
    { id: 'section-security', label: 'Security', icon: ShieldCheck },
    { id: 'section-ai-features', label: 'AI Experiences', icon: Sparkles },
    { id: 'section-sustainability', label: 'Sustainability', icon: Leaf },
    { id: 'section-xps-13', label: 'Dell XPS 13', icon: Monitor },
    { id: 'section-accessories', label: 'Accessories', icon: HardDrive },
    { id: 'section-offers', label: 'Special Offer', icon: Headphones },
  ];

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-sky-500/20 px-4 md:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Group */}
        <div 
          onClick={() => handleNavClick('section-hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="flex flex-col items-center">
            <span className="font-heading text-2xl font-black tracking-widest bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,210,255,0.4)] group-hover:scale-105 transition">
              DELL
            </span>
            <span className="text-[9px] font-bold tracking-widest uppercase text-sky-400 -mt-1">
              Technologies
            </span>
          </div>

          <div className="w-px h-7 bg-slate-800 hidden sm:block" />

          <div className="hidden sm:block">
            <h1 className="font-heading font-bold text-slate-100 text-sm md:text-base leading-tight">
              Retail Media Showcase
            </h1>
            <span className="text-[11px] text-cyan-400 font-semibold block">
              Copilot+ PC & XPS 2025
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-600 to-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBuyModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-heading font-extrabold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition cursor-pointer active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Explore Offers</span>
            <span className="sm:hidden">Offers</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold border transition ${
                  isActive
                    ? 'bg-sky-600/20 border-cyan-500/50 text-cyan-400'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

