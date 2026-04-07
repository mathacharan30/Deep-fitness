import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-black text-neutral-900 dark:text-white mb-4">ARCHITECTURAL ATHLETE</div>
          <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider leading-relaxed">Precision performance engineering for those who demand more from their physique.</p>
        </div>
        <div>
          <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-primary mb-6">Company</div>
          <ul className="space-y-4">
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-transform inline-block" to="/about">About</Link></li>
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-transform inline-block" to="#">Careers</Link></li>
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-transform inline-block" to="/contact">Support</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-primary mb-6">Legal</div>
          <ul className="space-y-4">
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-transform inline-block" to="#">Privacy</Link></li>
            <li><Link className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-transform inline-block" to="#">Terms</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-primary mb-6">Connect</div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="material-symbols-outlined text-sm">share</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-200/10 text-center pb-20 md:pb-0">
        <div className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-neutral-400">© 2024 ARCHITECTURAL ATHLETE. PRECISION PERFORMANCE.</div>
      </div>
    </footer>
  );
}
