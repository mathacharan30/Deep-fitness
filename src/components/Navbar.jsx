import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const whatsappNumber = "919019550010";
  const phoneNumber = "919019550010";
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Trainers' },
    { to: '/services', label: 'Programs' },
    { to: '/gallery', label: 'Transformations' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ===== TOP NAV ===== */}
      <nav
        className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 md:h-20 md:px-8"
        style={{
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center z-10" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>
          <div className="bg-neutral-900 px-3 py-2 md:px-4 md:py-2 rounded-xl flex items-center justify-center gap-2 md:gap-3 shadow-md">
             <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 bg-neutral-900 rounded-md p-0.5">
               <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
             </div>
             <span className="text-lg md:text-2xl font-black tracking-tighter uppercase italic text-neutral-400 pr-1">Deep Fitness</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => window.scrollTo(0, 0)}
              className={`font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold transition-colors duration-300
                ${pathname === to
                  ? 'text-neutral-900 border-b-2 border-yellow-400 pb-1'
                  : 'text-neutral-500 hover:text-yellow-500'}`}
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
            className="hidden md:block bg-yellow-400 text-neutral-900 font-bold uppercase text-xs px-5 py-2.5 rounded hover:bg-yellow-500 transition-all shadow whitespace-nowrap"
          >
            Book Free Trial
          </a>
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 items-center rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-neutral-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-5 bg-neutral-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-5 bg-neutral-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* ===== MOBILE SLIDE-DOWN MENU ===== */}
      <div
        className={`fixed top-16 left-0 w-full z-40 md:hidden transition-all duration-300 overflow-hidden`}
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: menuOpen ? '1px solid rgba(0,0,0,0.08)' : 'none',
          boxShadow: menuOpen ? '0 8px 32px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-black uppercase tracking-wider transition-colors
                ${pathname === to
                  ? 'bg-yellow-400 text-neutral-900'
                  : 'text-neutral-700 hover:bg-neutral-100'}`}
            >
              {label}
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </Link>
          ))}
          <div className="pt-3 pb-1 flex gap-3">
            <a
              href={`tel:+${phoneNumber}`}
              className="flex-1 flex items-center justify-center gap-2 bg-neutral-900 text-white py-3 rounded-xl text-xs font-black uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-base">call</span>Call Now
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 text-neutral-900 py-3 rounded-xl text-xs font-black uppercase tracking-wider"
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
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
          paddingTop: '10px',
          paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        }}
      >
        <a
          href={`tel:+${phoneNumber}`}
          className="flex flex-col items-center gap-1 text-neutral-500 active:text-yellow-500 transition-colors min-w-[60px] py-1"
        >
          <span className="material-symbols-outlined text-xl">call</span>
          <span className="text-[10px] font-bold uppercase font-['Space_Grotesk']">Call</span>
        </a>

        {/* Menu button removed as requested */}

        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-neutral-500 active:text-yellow-500 transition-colors min-w-[60px] py-1"
        >
          <span className="material-symbols-outlined text-xl">chat</span>
          <span className="text-[10px] font-bold uppercase font-['Space_Grotesk']">WhatsApp</span>
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi, am interested in joining your gym`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 bg-yellow-400 text-neutral-900 rounded-xl px-4 min-w-[70px] py-2 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-xl">calendar_today</span>
          <span className="text-[10px] font-bold uppercase font-['Space_Grotesk']">Book Trial</span>
        </a>
      </nav>
    </>
  );
}
