import FaqSection from '../components/FaqSection';

export default function Services() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <header className="pt-8 md:pt-16 pb-8 md:pb-12 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-low min-h-[300px] md:min-h-[500px] flex flex-col justify-center p-8 md:p-12 lg:p-20">
          <div className="absolute inset-0 opacity-20">
            <img alt="Gym Interior" className="w-full h-full object-cover grayscale" data-alt="industrial minimalist gym interior with concrete walls and high ceilings showcasing premium weightlifting equipment in natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_TEnaWvQ8I8s8Lb4rbwa_j9Py-y1AKD55LEO-DUhbuwTAHv0VrhNs_mltdZMyz_ClWtZ103-1gxvq1ySu0VyxU1_Z3NitsNiprryTKD5vKtmCwxrLP4XPKWYIcS232fw1RIhD8ks_KPmg1Mj5uXFUhCoYZlfqn_p8VPXhx0_4lPtWxVnax_nNo9CFcJTzps5FmrdsXluCXQMSJZkaMZeNqAQSOKIBcZ3oIPUYJa71Zt5ddemD9aeMQxiXpWjWqEuJ4OlT3N81WX2m"/>
          </div>
          <div className="relative z-10 max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-6 md:mb-8">
              Our <span className="text-primary italic">programs.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              We offer a wide variety of fitness formats to keep you engaged and moving towards your best self.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Button Removed */}
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-up">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Programs offered</h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Strength Training', icon: 'fitness_center', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop' },
            { title: 'Cardio', icon: 'monitor_heart', img: 'https://images.unsplash.com/photo-1723117418780-1b74b25af9bc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyZGlvfGVufDB8fDB8fHww' },
            { title: 'Cross Fit', icon: 'run_circle', img: 'https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { title: 'Zumba', icon: 'music_note', img: 'https://images.unsplash.com/photo-1619107372089-9b05ed524774?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8enVtYmElMjBmaXRuZXNzfGVufDB8fDB8fHww' },
            { title: 'Dance Fitness', icon: 'star', img: 'https://images.pexels.com/photos/7894541/pexels-photo-7894541.jpeg?cs=srgb&dl=pexels-mart-production-7894541.jpg&fm=jpg' },
            { title: 'Kids Dance', icon: 'child_care', img: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGRhbmNpbmd8ZW58MHx8MHx8fDA%3D' },
            { title: 'Yoga', icon: 'self_improvement', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500&auto=format&fit=crop' },
            { title: 'Nutrition & Diet', icon: 'restaurant', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500&auto=format&fit=crop' }
          ].map((service, index) => (
            <div key={index} className="group bg-surface-container-lowest overflow-hidden flex flex-col rounded-xl hover:shadow-2xl transition-all duration-300 animate-fade-up" style={{animationDelay: `${index * 50}ms`}}>
              <div className="h-48 overflow-hidden relative">
                <img alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={service.img}/>
              </div>
              <div className="p-6 flex-1 flex flex-col items-center justify-center text-center relative z-10 bg-surface-container-lowest">
                <h3 className="text-xl font-bold uppercase tracking-tighter">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="px-8 max-w-7xl mx-auto py-10">
        <div className="bg-primary text-on-primary p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden animate-fade-up">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">Start Your Journey Today</h2>
          </div>
          <a href="https://wa.me/919019550010?text=hi, would like to try your gym on a 3 day trial basis" target="_blank" rel="noopener noreferrer" className="relative z-10 bg-surface-container-highest text-on-surface px-10 py-5 rounded font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform active:scale-95 whitespace-nowrap inline-flex items-center gap-2">
            START 3 DAY TRIAL <span className="material-symbols-outlined text-green-600">chat</span>
          </a>
          {/* Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-full bg-white/10 -skew-x-12"></div>
        </div>
      </section>

      {/* Membership Pricing */}
      <section className="py-16 px-8 max-w-7xl mx-auto bg-surface">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Deep Fitness Exclusive Offer</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Select the plan that matches your commitment to your fitness journey.</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Annual Tier */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col items-center text-center ring-4 ring-primary relative scale-105 shadow-2xl animate-fade-up delay-100 z-10 w-full">
            <div className="absolute -top-4 bg-primary text-white text-[10px] font-black px-4 py-1 rounded-full uppercase">All-Inclusive Bonus</div>
            <div className="text-sm font-black uppercase mb-4 text-primary">Annual Membership</div>
            <div className="text-5xl font-black mb-2">₹9,600</div>
            <div className="text-sm font-black uppercase text-on-surface mb-6">+ 3 MONTHS FREE</div>
            <div className="mb-8 w-full border-t border-outline-variant/30 pt-6">
              <p className="text-sm font-bold text-on-surface mb-3 flex items-center justify-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span>Includes Zumba</p>
              <p className="text-sm font-bold text-on-surface mb-3 flex items-center justify-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span>Includes Kids Dance</p>
            </div>
            <a href={`https://wa.me/919019550010?text=Hi, I want the Annual Membership offer with 3 months free!`} target="_blank" rel="noopener noreferrer" className="w-full py-4 mt-auto bg-primary text-white rounded font-bold uppercase hover:bg-primary-dim transition-colors shadow-lg block">Join Now</a>
          </div>
          
          {/* 6 Months Tier */}
          <div className="bg-surface-container-highest p-8 rounded-2xl flex flex-col items-center text-center relative shadow-lg animate-fade-up delay-200 mt-0 lg:mt-8 mb-0 lg:mb-8 w-full">
            <div className="text-sm font-black uppercase mb-4 text-on-surface-variant">6 Months Plan</div>
            <div className="text-3xl font-black mb-2">Get 6 Months</div>
            <div className="text-sm font-black uppercase text-primary mb-6">+ 2 M FREE</div>
            <div className="mb-8 w-full border-t border-outline-variant/30 pt-6">
              <p className="text-sm font-bold text-on-surface mb-3 flex items-center justify-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span>Full Gym Access</p>
            </div>
            <a href={`https://wa.me/919019550010?text=Hi, I want the 6 Months offer!`} target="_blank" rel="noopener noreferrer" className="w-full py-4 mt-auto bg-surface-container-lowest border border-outline-variant text-on-surface rounded font-bold uppercase hover:bg-surface-container transition-colors block">Select Plan</a>
          </div>

          {/* 3 Months Tier */}
          <div className="bg-surface-container-highest p-8 rounded-2xl flex flex-col items-center text-center relative shadow-lg animate-fade-up delay-300 mt-0 lg:mt-8 mb-0 lg:mb-8 w-full">
            <div className="text-sm font-black uppercase mb-4 text-on-surface-variant">3 Months Plan</div>
            <div className="text-3xl font-black mb-2">Get 3 Months</div>
            <div className="text-sm font-black uppercase text-primary mb-6">+ 1 M FREE</div>
            <div className="mb-8 w-full border-t border-outline-variant/30 pt-6">
              <p className="text-sm font-bold text-on-surface mb-3 flex items-center justify-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span>Full Gym Access</p>
            </div>
            <a href={`https://wa.me/919019550010?text=Hi, I want the 3 Months offer!`} target="_blank" rel="noopener noreferrer" className="w-full py-4 mt-auto bg-surface-container-lowest border border-outline-variant text-on-surface rounded font-bold uppercase hover:bg-surface-container transition-colors block">Select Plan</a>
          </div>
        </div>
        <div className="text-center mt-12 animate-fade-up delay-400">
           <a href="https://wa.me/919019550010?text=Hi,%20I%20am%20interested%20in%20the%20Buy%202%20Annual%20Packs%20and%20Get%201%20Free%20offer!" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-on-primary px-6 py-3 rounded-xl shadow font-black uppercase tracking-tight text-lg border-2 border-yellow-300 hover:scale-105 transition-transform cursor-pointer">
              🔥 SPECIAL: BUY 2 ANNUAL PACKS & GET 1 FREE MEMBERSHIP! 🔥
           </a>
        </div>
      </section>
      
      <FaqSection />
    </div>
  );
}
