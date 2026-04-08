import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Branding */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-black text-neutral-900 dark:text-white mb-4">DEEP FITNESS</div>
          <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider leading-relaxed">The best gym in Mysuru offering top-notch facilities and expert guidance.</p>
        </div>
        
        {/* Pages */}
        <div>
          <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-primary mb-6">Pages</div>
          <ul className="space-y-4">
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-transform inline-block" to="/">Home</Link></li>
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-transform inline-block" to="/about">About</Link></li>
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-transform inline-block" to="/services">Services</Link></li>
          </ul>
        </div>
        
        {/* Location */}
        <div>
          <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-primary mb-6">Location</div>
          <ul className="space-y-4">
            <li><a href="https://maps.app.goo.gl/4p9pJ4TEjURc5Ss19" target="_blank" rel="noopener noreferrer" className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-white transition-colors block">208, HUN Complex, Mysuru</a></li>
            <li><p className="font-['Space_Grotesk'] text-[10px] font-medium tracking-widest uppercase text-neutral-600">Shardhadevi nagar circle, New Kantharaj Urs Rd, TK Layout, Mysuru, Karnataka 570009</p></li>
          </ul>
        </div>
        
        {/* Connect */}
        <div>
          <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-primary mb-6">Connect</div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="material-symbols-outlined text-sm dark:text-white">share</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="material-symbols-outlined text-sm dark:text-white">photo_camera</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-200/10 text-center pb-20 md:pb-0">
        <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-400">© 2026 DEEP FITNESS.</div>
        <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-400 mt-2">Developed by <a href="https://www.devlofttech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Devloft Technologies</a></div>
      </div>
    </footer>
  );
}
