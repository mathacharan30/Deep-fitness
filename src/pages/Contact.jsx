import FaqSection from '../components/FaqSection';

export default function Contact() {
  const WHATSAPP_NUMBER = "919019550010"; // Updated number
  const CALL_NUMBER = "+919019550010"; // Updated number

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
      <section className="pt-12 md:pt-20 pb-8 md:pb-16 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-up delay-100 mt-4 md:mt-0">
            <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full">Precision Performance</span>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-on-surface">
              Let’s Start <br/>Your Fitness <br/><span className="text-primary bg-surface-container-high px-4 py-1 mt-2 inline-block rounded-lg">Journey</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
              Designed for everyone. Our structured approach to fitness ensures you get visible and lasting results.
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
                    <p className="text-2xl font-bold">READY TO START</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-primary">dynamic_form</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Core */}
      <section className="bg-surface-container-low py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Direct Access</h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-up delay-100">
            <div className="group flex flex-col items-center text-center gap-6 cursor-pointer" onClick={handleCall}>
              <div className="w-16 h-16 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-primary-fixed transition-colors duration-300 shadow-md">
                <span className="material-symbols-outlined text-on-surface text-2xl group-hover:text-on-primary-fixed">call</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">Telephone</p>
                <p className="text-xl font-bold">+91 90195 50010</p>
                <p className="text-sm text-on-surface-variant">Mon-Fri 6:00 - 22:00</p>
              </div>
            </div>
            <div className="group flex flex-col items-center text-center gap-6 cursor-pointer" onClick={() => window.open('mailto:deepfitnessgym2025@gmail.com')}>
              <div className="w-16 h-16 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-primary-fixed transition-colors duration-300 shadow-md">
                <span className="material-symbols-outlined text-on-surface text-2xl group-hover:text-on-primary-fixed">mail</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">Electronic Mail</p>
                <p className="text-xl font-bold">deepfitnessgym2025@gmail.com</p>
                <p className="text-sm text-on-surface-variant">24/7 Response Guaranteed</p>
              </div>
            </div>
                  <div className="w-16 h-16 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-primary-fixed transition-colors duration-300 shadow-md">
                    <span className="material-symbols-outlined text-on-surface text-2xl group-hover:text-on-primary-fixed">location_on</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">Our Location</p>
                    <p className="text-xl font-bold">208, HUN Complex</p>
                    <p className="text-sm text-on-surface-variant leading-tight">Shardhadevi nagar circle, TK Layout,<br/> New Kantharaj Urs Rd, Mysuru - 570009</p>
                  </div>
          </div>
          <div className="pt-8 text-center animate-fade-up delay-200">
            <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-6">Social Integration</p>
            <div className="flex gap-4 justify-center">
              <a className="w-12 h-12 bg-surface-container-highest text-on-surface rounded-lg flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a className="w-12 h-12 bg-surface-container-highest text-on-surface rounded-lg flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="w-12 h-12 bg-surface-container-highest text-on-surface rounded-lg flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined">podcasts</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#121212]/40 z-10 transition-opacity group-hover:opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none animate-fade-up">
          <div className="bg-surface p-8 rounded-xl shadow-2xl space-y-4 max-w-sm pointer-events-auto border-b-4 border-primary">
            <h3 className="text-2xl font-black uppercase tracking-tighter">Our Facility</h3>
            <p className="text-sm text-on-surface-variant">Visit our elite training facility in the heart of the city.</p>
            <button className="w-full bg-primary-fixed text-on-primary-fixed font-black uppercase text-xs py-3 rounded hover:bg-primary transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">near_me</span> Get Directions
            </button>
          </div>
        </div>
        <img alt="Location Map" className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-1000 group-hover:scale-105" data-alt="High-contrast grey map of Mysuru location" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5sCxCUnj7cBF6tvgT820NuxcJ5m7-kSGC2W_IWsHsWqLRtiWZ8pCQIXv_FvXGmoEzjIzU3Xt6jYm0OPkxJ6M65p6zxSku-nOv7Is_uurLr79ndoESqhrioqctmwMlYyVgcXwjh0goJj5mW1F1erc2kUxt3v4WBfa1TqOhCseqJM5w9T61eddoZhD7TK6Rk1i1vfNzcUk1wzA-hFcbhtrmvnB_x-b0ZZJFJ9YOyFUZ4-e6Mvhth8X5Kt2etcBzcxa5LLpCh8YZ7GeF"/>
      </section>

      {/* Quick Contact Cards (Bento) */}
      <section className="py-16 px-8 bg-surface">
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
            <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between group cursor-pointer" onClick={handleWhatsApp}>
              <span className="material-symbols-outlined text-4xl text-primary mb-8">support_agent</span>
              <div>
                <h4 className="text-xl font-black uppercase mb-2 text-on-surface">24/7 Concierge</h4>
                <p className="text-sm text-on-surface-variant mb-6">Existing athletes needing schedule adjustments.</p>
                <a className="text-xs font-black uppercase tracking-widest text-primary border-b border-primary pb-1 font-bold" onClick={handleWhatsApp}>Open Chat</a>
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
      
      <FaqSection />
    </div>
  );
}
