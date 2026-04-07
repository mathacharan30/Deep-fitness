import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Branding */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-black text-neutral-900 dark:text-white mb-4">ARCHITECTURAL ATHLETE</div>
          <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider leading-relaxed">Precision performance engineering for those who demand more from their physique.</p>
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
            <li><p className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-500">101 Precision Plaza, NY 10001</p></li>
            <li><a className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-primary hover:text-primary-dim transition-colors inline-block" href="https://maps.google.com/?q=New+York" target="_blank" rel="noopener noreferrer">View on Map</a></li>
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
        <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-400">© 2026 ARCHITECTURAL ATHLETE. PRECISION PERFORMANCE.</div>
      </div>
    </footer>
  );
}
