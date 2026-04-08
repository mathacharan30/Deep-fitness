import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const whatsappNumber = "1234567890";
  const phoneNumber = "1234567890";
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Trainers' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Transformations' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ===== TOP NAV ===== */}
      <nav
        className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 md:h-20 md:px-8"
        style={{
          background: 'rgba(18,18,18,0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 -ml-2 z-10" onClick={() => setMenuOpen(false)}>
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
            <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl md:text-2xl font-black italic tracking-tighter text-on-surface uppercase">
            Deep Fitness
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold transition-colors duration-300
                ${pathname === to
                  ? 'text-on-surface border-b-2 border-primary-fixed pb-1'
                  : 'text-on-surface-variant hover:text-primary'}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop Right + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi, am interested in joining your gym`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-primary text-on-primary font-bold uppercase text-xs px-5 py-2.5 rounded hover:bg-primary-dim transition-all shadow whitespace-nowrap"
          >
            Book Free Trial
          </a>
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 items-center rounded-lg hover:bg-surface-container transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-on-surface transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-5 bg-on-surface transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-5 bg-on-surface transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* ===== MOBILE SLIDE-DOWN MENU ===== */}
      <div
        className={`fixed top-16 left-0 w-full z-40 md:hidden transition-all duration-300 overflow-hidden`}
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          background: 'rgba(28,28,28,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: menuOpen ? '1px solid rgba(255,255,255,0.05)' : 'none',
          boxShadow: menuOpen ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-colors
                ${pathname === to
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface hover:bg-surface-container'}`}
            >
              {label}
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </Link>
          ))}
          <div className="pt-3 pb-1 flex gap-3">
            <a
              href={`tel:+${phoneNumber}`}
              className="flex-1 flex items-center justify-center gap-2 bg-surface-container-highest text-on-surface py-3 rounded-xl text-xs font-black uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-base">call</span>Call Now
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-xl text-xs font-black uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-base">chat</span>WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM NAV (Mobile Only) ===== */}
      <nav
        className="fixed bottom-0 left-0 w-full z-50 md:hidden flex justify-around items-center px-4 rounded-t-2xl"
        style={{
          background: 'rgba(18,18,18,0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.3)',
          paddingTop: '10px',
          paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        }}
      >
        <a
          href={`tel:+${phoneNumber}`}
          className="flex flex-col items-center gap-1 text-on-surface-variant active:text-primary transition-colors min-w-[60px] py-1"
        >
          <span className="material-symbols-outlined text-xl">call</span>
          <span className="text-[10px] font-bold uppercase font-['Space_Grotesk']">Call</span>
        </a>

        {/* Menu button removed as requested */}

        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-on-surface-variant active:text-primary transition-colors min-w-[60px] py-1"
        >
          <span className="material-symbols-outlined text-xl">chat</span>
          <span className="text-[10px] font-bold uppercase font-['Space_Grotesk']">WhatsApp</span>
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi, am interested in joining your gym`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 bg-primary text-on-primary rounded-xl px-4 min-w-[70px] py-2 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-xl">calendar_today</span>
          <span className="text-[10px] font-bold uppercase font-['Space_Grotesk']">Book Trial</span>
        </a>
      </nav>
    </>
  );
}
