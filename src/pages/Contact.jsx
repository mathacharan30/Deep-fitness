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
            <h2 className="text-4xl font-black tracking-tighter uppercase">Reach us out</h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-up delay-100">
            <div className="group flex flex-col items-center text-center gap-6 cursor-pointer" onClick={handleCall}>
              <div className="w-16 h-16 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-primary-fixed transition-colors duration-300 shadow-md">
                <span className="material-symbols-outlined text-on-surface text-2xl group-hover:text-on-primary-fixed">call</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">Call us</p>
                <p className="text-xl font-bold">+91 90195 50010</p>
                <p className="text-sm text-on-surface-variant">Mon-Sun 6am to 11pm</p>
              </div>
            </div>
            <div className="group flex flex-col items-center text-center gap-6 cursor-pointer" onClick={() => window.open('mailto:deepfitnessgym2025@gmail.com')}>
              <div className="w-16 h-16 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-primary-fixed transition-colors duration-300 shadow-md">
                <span className="material-symbols-outlined text-on-surface text-2xl group-hover:text-on-primary-fixed">mail</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">Mail us @</p>
                <p className="text-xl font-bold">deepfitnessgym2025@gmail.com</p>
                <p className="text-sm text-on-surface-variant">24/7 Response Guaranteed</p>
              </div>
            </div>
            <div className="group flex flex-col items-center text-center gap-6 cursor-pointer" onClick={() => window.open('https://maps.app.goo.gl/4p9pJ4TEjURc5Ss19')}>
              <div className="w-16 h-16 bg-surface-container-lowest rounded-xl flex items-center justify-center group-hover:bg-primary-fixed transition-colors duration-300 shadow-md">
                <span className="material-symbols-outlined text-on-surface text-2xl group-hover:text-on-primary-fixed">location_on</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-1">Our Location</p>
                <p className="text-xl font-bold">208, HUN Complex</p>
                <p className="text-sm text-on-surface-variant leading-tight">Shardhadevi nagar circle, TK Layout,<br/> New Kantharaj Urs Rd, Mysuru - 570009</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] relative overflow-hidden group">
        <a href="https://maps.app.goo.gl/4p9pJ4TEjURc5Ss19" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-30 cursor-pointer block"></a>
        <div className="absolute inset-0 bg-[#121212]/40 z-10 transition-opacity group-hover:opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none animate-fade-up">
          <div className="bg-surface p-8 rounded-xl shadow-2xl space-y-4 max-w-sm border-b-4 border-primary">
            <h3 className="text-2xl font-black uppercase tracking-tighter">Our Facility</h3>
            <p className="text-sm text-on-surface-variant">Visit our elite training facility in the heart of the city.</p>
            <button className="w-full bg-primary-fixed text-on-primary-fixed font-black uppercase text-xs py-3 rounded hover:bg-primary transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">near_me</span> Click Map for Directions
            </button>
          </div>
        </div>
        <img alt="Location Map" className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-1000 group-hover:scale-105" data-alt="High-contrast grey map of Mysuru location" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5sCxCUnj7cBF6tvgT820NuxcJ5m7-kSGC2W_IWsHsWqLRtiWZ8pCQIXv_FvXGmoEzjIzU3Xt6jYm0OPkxJ6M65p6zxSku-nOv7Is_uurLr79ndoESqhrioqctmwMlYyVgcXwjh0goJj5mW1F1erc2kUxt3v4WBfa1TqOhCseqJM5w9T61eddoZhD7TK6Rk1i1vfNzcUk1wzA-hFcbhtrmvnB_x-b0ZZJFJ9YOyFUZ4-e6Mvhth8X5Kt2etcBzcxa5LLpCh8YZ7GeF"/>
      </section>

      {/* Simple Contact Banner */}
      <section className="py-16 px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center animate-fade-up border border-surface-container-highest p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-black uppercase mb-4">Still have questions?</h3>
          <p className="text-on-surface-variant mb-6">We're always here to help you get started on your fitness journey.</p>
          <div className="flex flex-col justify-center gap-4 w-full max-w-xs mx-auto">
            <button className="w-full bg-primary text-on-primary font-bold uppercase px-6 py-4 rounded shadow hover:bg-primary-dim transition-colors flex items-center justify-center gap-2" onClick={handleCall}>
              <span className="material-symbols-outlined">call</span> Call Now
            </button>
            <button className="w-full bg-surface-container-highest font-bold uppercase px-6 py-4 rounded shadow hover:bg-surface-container transition-colors flex items-center justify-center gap-2" onClick={handleWhatsApp}>
              <span className="material-symbols-outlined text-green-500">chat</span> WhatsApp Us
            </button>
          </div>
        </div>
      </section>
      
      <FaqSection />
    </div>
  );
}
