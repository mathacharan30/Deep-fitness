import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Branding */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-black text-on-surface mb-4 tracking-tighter italic">DEEP FITNESS</div>
          <p className="text-on-surface-variant text-xs font-medium uppercase tracking-wider leading-relaxed">The best gym in Mysuru offering top-notch facilities and expert guidance.</p>
        </div>
        
        {/* Pages */}
        <div>
          <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-primary mb-6">Pages</div>
          <ul className="space-y-4">
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block" to="/">Home</Link></li>
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block" to="/about">About</Link></li>
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform inline-block" to="/services">Services</Link></li>
          </ul>
        </div>
        
        {/* Location */}
        <div>
          <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-primary mb-6">Location</div>
          <ul className="space-y-4">
            <li><a href="https://maps.app.goo.gl/4p9pJ4TEjURc5Ss19" target="_blank" rel="noopener noreferrer" className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-on-surface-variant hover:text-white transition-colors block">208, HUN Complex, Mysuru</a></li>
            <li><p className="font-['Space_Grotesk'] text-[10px] font-medium tracking-widest uppercase text-neutral-600">Shardhadevi nagar circle, New Kantharaj Urs Rd, TK Layout, Mysuru, Karnataka 570009</p></li>
          </ul>
        </div>
        
        {/* Connect */}
        <div>
          <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-primary mb-6">Connect</div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/deep_fitness_mysore/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer text-on-surface">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-200/10 text-center pb-20 md:pb-0">
        <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-400">© 2026 DEEP FITNESS.</div>
        <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-400 mt-2">Developed by <a href="https://www.devlofttech.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 font-bold hover:text-primary transition-colors">Devloft Technologies</a></div>
      </div>
    </footer>
  );
}
