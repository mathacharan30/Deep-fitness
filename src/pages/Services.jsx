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
            <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container text-[10px] md:text-xs font-black tracking-widest uppercase mb-4 md:mb-6 rounded">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-6 md:mb-8">
              Programs Designed for <span className="text-primary italic">Every Fitness Goal.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              We offer a wide variety of fitness formats to keep you engaged and moving towards your best self.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="bg-primary text-on-primary px-8 py-4 font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-primary-dim transition-colors rounded shadow-lg">
                Explore Membership <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-up">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Our Services</h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Strength Training', icon: 'fitness_center', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop' },
            { title: 'Cardio', icon: 'monitor_heart', img: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=500&auto=format&fit=crop' },
            { title: 'Cross Fit', icon: 'run_circle', img: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=500&auto=format&fit=crop' },
            { title: 'Zumba', icon: 'music_note', img: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=500&auto=format&fit=crop' },
            { title: 'Dance Fitness', icon: 'star', img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=500&auto=format&fit=crop' },
            { title: 'Kids Dance', icon: 'child_care', img: 'https://images.unsplash.com/photo-1538561845115-38dbbcbea826?q=80&w=500&auto=format&fit=crop' },
            { title: 'Yoga', icon: 'self_improvement', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500&auto=format&fit=crop' },
            { title: 'Nutrition & Diet', icon: 'restaurant', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba810b6?q=80&w=500&auto=format&fit=crop' }
          ].map((service, index) => (
            <div key={index} className="group bg-surface-container-lowest overflow-hidden flex flex-col rounded-xl hover:shadow-2xl transition-all duration-300 animate-fade-up" style={{animationDelay: `${index * 50}ms`}}>
              <div className="h-48 overflow-hidden relative">
                <img alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={service.img}/>
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-primary-fixed text-on-primary-fixed flex items-center justify-center rounded shadow-md">
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                </div>
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
            <p className="text-on-primary font-medium text-lg">Claim your exclusive free trial. Limited slots available monthly.</p>
          </div>
          <button className="relative z-10 bg-surface-container-highest text-on-surface px-10 py-5 rounded font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform active:scale-95 whitespace-nowrap">
            Start 7-Day Trial
          </button>
          {/* Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-full bg-white/10 -skew-x-12"></div>
        </div>
      </section>

      {/* Membership Pricing */}
      <section className="py-16 px-8 max-w-7xl mx-auto bg-surface">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Membership</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Select the plan that matches your commitment to your fitness journey.</p>
        </div>
        <div className="max-w-md mx-auto mb-20">
          <div className="bg-surface-container-lowest p-10 flex flex-col items-center text-center border-t-8 border-primary relative rounded-xl shadow-2xl animate-fade-up delay-200">
            <div className="absolute -top-4 bg-primary text-white text-[10px] font-black px-4 py-1 rounded-full uppercase">All-Inclusive</div>
            <div className="text-sm font-black uppercase mb-4 text-primary">Annual Membership</div>
            <div className="text-5xl font-black mb-8">₹9,600<span className="text-sm font-bold text-outline">/year</span></div>
            <div className="mb-10"></div>
            <a href={`https://wa.me/919019550010?text=Hi`} target="_blank" rel="noopener noreferrer" className="w-full py-4 mt-auto bg-primary text-white rounded font-bold uppercase hover:bg-primary-dim transition-colors shadow-lg block">Join Now</a>
          </div>
        </div>
      </section>
      
      <FaqSection />
    </div>
  );
}
