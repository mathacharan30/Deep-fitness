export default function Contact() {
  const WHATSAPP_NUMBER = "1234567890"; // Same placeholder
  const CALL_NUMBER = "+1234567890"; // Same placeholder

  const handleWhatsApp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I would like to initialize a consultation!`, '_blank');
  };

  const handleCall = (e) => {
    e.preventDefault();
    window.location.href = `tel:${CALL_NUMBER}`;
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="pt-12 md:pt-32 pb-12 md:pb-20 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-up delay-100 mt-4 md:mt-0">
            <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full">Precision Performance</span>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-on-surface">
              Let’s Start <br/>Your Fitness <br/><span className="text-primary-fixed bg-on-surface px-4 py-1 mt-2 inline-block">Journey</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
              Designed for high-performance individuals. Our architectural approach to fitness ensures sustainable, elite-level results.
            </p>
          </div>
          <div className="relative group animate-fade-up delay-300">
            <div className="absolute inset-0 bg-primary-fixed/20 blur-[100px] rounded-full group-hover:bg-primary-fixed/30 transition-all duration-700"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-container-high">
              <img alt="3D Athlete Figure" className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-105 transition-transform duration-1000" data-alt="Hyper-realistic 3D render of an athlete in a dynamic sprinting pose, cinematic lighting against a dark industrial background with yellow accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGI1n9AVNBLK3duNLL4z-DEtjPmnTQpG27Sbs7MzG4Y7d6ffCiHYa13S2m4f8912gakbX7f1UUuPQz07WjGoTvFA362VjMJBlKvAs_wEphRVn38cH9daPhSBr3-OZJHZlaCUYFozJTJXNlvkseEecJm_iixXhDn5Jm-ccWTKFdPpFxerIzPMu1Yysi9lUBvZrizh50mXd_ezv8k4JkXp-BuqpD-QwICGyNCH57pQHPWQj8plZsgQfOVfByaN5mRl6WckVI_vyayERi"/>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-surface/80 backdrop-blur-md rounded-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs uppercase font-black tracking-widest text-on-surface-variant">Active Status</p>
                    <p className="text-2xl font-bold">READY TO ARCHITECT</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-primary">dynamic_form</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Core */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 animate-fade-up">
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tighter uppercase">Direct Access</h2>
                <div className="h-1 w-24 bg-primary"></div>
              </div>
              <div className="space-y-8">
                <div className="group flex items-start gap-6 cursor-pointer" onClick={handleCall}>
                  <div className="w-14 h-14 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-primary-fixed transition-colors duration-300 shadow-md">
                    <span className="material-symbols-outlined text-on-surface text-2xl group-hover:text-on-primary-fixed">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">Telephone</p>
                    <p className="text-xl font-bold">+1 (234) 567-8910</p>
                    <p className="text-sm text-on-surface-variant">Mon-Fri 6:00 - 22:00</p>
                  </div>
                </div>
                <div className="group flex items-start gap-6 cursor-pointer" onClick={() => window.open('mailto:performance@arch-athlete.com')}>
                  <div className="w-14 h-14 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-primary-fixed transition-colors duration-300 shadow-md">
                    <span className="material-symbols-outlined text-on-surface text-2xl group-hover:text-on-primary-fixed">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">Electronic Mail</p>
                    <p className="text-xl font-bold">performance@arch-athlete.com</p>
                    <p className="text-sm text-on-surface-variant">24/7 Response Guaranteed</p>
                  </div>
                </div>
                <div className="group flex items-start gap-6 cursor-pointer">
                  <div className="w-14 h-14 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-primary-fixed transition-colors duration-300 shadow-md">
                    <span className="material-symbols-outlined text-on-surface text-2xl group-hover:text-on-primary-fixed">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">HQ Location</p>
                    <p className="text-xl font-bold">445 Precision Avenue</p>
                    <p className="text-sm text-on-surface-variant">Iron District, New York, NY 10001</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-6">Social Integration</p>
                <div className="flex gap-4">
                  <a className="w-12 h-12 bg-on-surface text-surface rounded-lg flex items-center justify-center hover:bg-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">share</span>
                  </a>
                  <a className="w-12 h-12 bg-on-surface text-surface rounded-lg flex items-center justify-center hover:bg-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">public</span>
                  </a>
                  <a className="w-12 h-12 bg-on-surface text-surface rounded-lg flex items-center justify-center hover:bg-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">podcasts</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest p-10 lg:p-16 rounded-xl border-l-[12px] border-primary-fixed shadow-2xl">
                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Form submitted! (Demo)"); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Full Identity</label>
                      <input className="w-full bg-surface-container-low border-none rounded p-4 focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant font-medium outline-none" placeholder="John Doe" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Contact Number</label>
                      <input className="w-full bg-surface-container-low border-none rounded p-4 focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant font-medium outline-none" placeholder="+1 (555) 000-0000" type="tel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Performance Goal</label>
                    <select className="w-full bg-surface-container-low border-none rounded p-4 focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all font-medium appearance-none outline-none">
                      <option>Structural Hypertrophy</option>
                      <option>Architectural Leanness</option>
                      <option>Functional Power</option>
                      <option>Elite Rehabilitation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Manifesto / Inquiry</label>
                    <textarea className="w-full bg-surface-container-low border-none rounded p-4 focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant font-medium outline-none" placeholder="Tell us about your blueprint..." rows="4"></textarea>
                  </div>
                  <button className="w-full bg-on-surface text-primary-fixed hover:bg-primary py-5 rounded font-black uppercase tracking-[0.2em] transition-all transform active:scale-[0.98]">
                    Initialize Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] relative overflow-hidden group">
        <div className="absolute inset-0 bg-neutral-900/40 z-10 transition-opacity group-hover:opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none animate-fade-up">
          <div className="bg-surface p-8 rounded-xl shadow-2xl space-y-4 max-w-sm pointer-events-auto border-b-4 border-primary">
            <h3 className="text-2xl font-black uppercase tracking-tighter">The Laboratory</h3>
            <p className="text-sm text-on-surface-variant">Visit our elite training facility in the heart of the city.</p>
            <button className="w-full bg-primary-fixed text-on-primary-fixed font-black uppercase text-xs py-3 rounded hover:bg-primary transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">near_me</span> Get Directions
            </button>
          </div>
        </div>
        <img alt="Location Map" className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-1000 group-hover:scale-105" data-alt="High-contrast black and white map of Manhattan with yellow highlighted routes and architectural icons representing the gym location" data-location="New York City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5sCxCUnj7cBF6tvgT820NuxcJ5m7-kSGC2W_IWsHsWqLRtiWZ8pCQIXv_FvXGmoEzjIzU3Xt6jYm0OPkxJ6M65p6zxSku-nOv7Is_uurLr79ndoESqhrioqctmwMlYyVgcXwjh0goJj5mW1F1erc2kUxt3v4WBfa1TqOhCseqJM5w9T61eddoZhD7TK6Rk1i1vfNzcUk1wzA-hFcbhtrmvnB_x-b0ZZJFJ9YOyFUZ4-e6Mvhth8X5Kt2etcBzcxa5LLpCh8YZ7GeF"/>
      </section>

      {/* Quick Contact Cards (Bento) */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up">
            <div className="bg-surface-container p-8 rounded-xl flex flex-col justify-between group hover:bg-surface-container-highest transition-colors cursor-pointer" onClick={handleCall}>
              <span className="material-symbols-outlined text-4xl text-primary mb-8" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
              <div>
                <h4 className="text-xl font-black uppercase mb-2">Fast Lane</h4>
                <p className="text-sm text-on-surface-variant mb-6">Immediate inquiries for memberships and trials.</p>
                <a className="text-xs font-black uppercase tracking-widest text-on-surface border-b border-primary-fixed pb-1 group-hover:text-primary transition-colors" href={`tel:${CALL_NUMBER}`}>Dial Now</a>
              </div>
            </div>
            <div className="bg-on-surface p-8 rounded-xl flex flex-col justify-between group cursor-pointer" onClick={handleWhatsApp}>
              <span className="material-symbols-outlined text-4xl text-primary-fixed mb-8">support_agent</span>
              <div>
                <h4 className="text-xl font-black uppercase mb-2 text-surface">24/7 Concierge</h4>
                <p className="text-sm text-tertiary-fixed-dim/60 mb-6">Existing athletes needing schedule adjustments.</p>
                <a className="text-xs font-black uppercase tracking-widest text-primary-fixed border-b border-primary-fixed pb-1" onClick={handleWhatsApp}>Open Chat</a>
              </div>
            </div>
            <div className="bg-primary-container p-8 rounded-xl flex flex-col justify-between group border-2 border-primary-fixed/20 cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-on-primary-container mb-8">corporate_fare</span>
              <div>
                <h4 className="text-xl font-black uppercase mb-2 text-on-primary-container">Corporate</h4>
                <p className="text-sm text-on-primary-container/70 mb-6">Performance programs for executive teams.</p>
                <a className="text-xs font-black uppercase tracking-widest text-on-primary-container border-b border-on-primary-container pb-1" href="mailto:corporate@arch-athlete.com">Email Partnerships</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
