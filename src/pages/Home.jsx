import heroAthlete from '../assets/hero_athlete.png';
import FaqSection from '../components/FaqSection';
import imgHome1 from '../assets/home/IMG20260408193423.jpg';
import imgHome2 from '../assets/home/IMG20260408193607.jpg';
import imgHome3 from '../assets/home/IMG20260408194051.jpg';
import imgHome4 from '../assets/home/IMG20260408194209.jpg';

export default function Home() {
  const whatsappNumber = "919019550010";
  const phoneNumber = "+919019550010";

  return (
    <div className="pt-16 md:pt-20">
      {/* 1. Intro (Hero Section) */}
      <section className="relative flex overflow-hidden bg-white lg:min-h-[90vh] lg:items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center py-6 md:py-10 lg:py-12">
          {/* LEFT: Text content */}
          <div className="z-10 animate-fade-up order-2 lg:order-1 pb-8 lg:pb-0">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter mb-8 text-neutral-900">
              Transform Your Health <br />
              <span className="text-yellow-500">Transform Your Life</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-600 max-w-lg mb-10 font-medium leading-relaxed">
              Join the best gym to build your dream body. We offer expert guidance to make you stronger and healthier every single day.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:+919019550010`}
                className="bg-neutral-900 text-white px-8 py-4 rounded font-black uppercase tracking-tight flex items-center gap-2 hover:bg-neutral-800 transition-colors shadow"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Call Now
              </a>
              <a
                href={`https://wa.me/919019550010?text=Hi`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-100 text-neutral-800 px-8 py-4 rounded font-black uppercase tracking-tight flex items-center gap-2 hover:bg-neutral-200 transition-colors shadow border border-neutral-200"
              >
                <span className="material-symbols-outlined text-green-500 text-base">chat</span>
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT: 3D Athlete Character */}
          <div className="relative flex justify-center items-end order-1 lg:order-2 animate-fade-up delay-200 lg:min-h-[480px] pt-4">
            <div
              className="absolute animate-float"
              style={{
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #fde047 0%, #facc1580 50%, transparent 70%)',
                filter: 'blur(30px)',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1,
              }}
            ></div>
            <img
              alt="3D Elite Athlete"
              src={heroAthlete}
              className="relative animate-float object-contain w-full max-w-[260px] md:max-w-[380px] lg:max-w-[500px]"
              style={{
                mixBlendMode: 'multiply',
                height: 'auto',
                zIndex: 2,
                filter: 'contrast(1.02) brightness(1.0)',
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us (Engineered for Excellence) */}
      <section className="py-16 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-up delay-100 flex flex-col items-center text-center">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Why Choose Us</h2>
            <div className="w-24 h-1.5 bg-primary mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-low overflow-hidden rounded-xl group hover:-translate-y-1 transition-transform duration-300 animate-fade-up delay-100 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop" alt="Expert Guidance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                <p className="text-sm text-on-surface-variant">We provide personalized training plans to help you reach your goals safely and efficiently.</p>
              </div>
            </div>
            <div className="bg-surface-container-highest overflow-hidden rounded-xl group hover:-translate-y-1 transition-transform duration-300 animate-fade-up delay-200 flex flex-col">
               <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop" alt="24/7 Access" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-2">24/7 Access</h3>
                <p className="text-sm text-on-surface-variant">Train on your schedule anytime you want with our round-the-clock access.</p>
              </div>
            </div>
            <div className="bg-surface-container-high overflow-hidden rounded-xl group hover:-translate-y-1 transition-transform duration-300 animate-fade-up delay-300 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=500&auto=format&fit=crop" alt="Diet Counseling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-2">Diet Counseling</h3>
                <p className="text-sm text-on-surface-variant">Get the right food plan to grow your muscles and lose fat effectively.</p>
              </div>
            </div>
            <div className="bg-surface-container-low overflow-hidden rounded-xl group hover:-translate-y-1 transition-transform duration-300 animate-fade-up delay-400 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=500&auto=format&fit=crop" alt="Supportive Community" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-2">Supportive Community</h3>
                <p className="text-sm text-on-surface-variant">Train with like-minded friends who motivate and support each other every day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Us (Gym Story & Stats from About.jsx) */}
      <section className="py-16 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 animate-fade-up">
              <span className="text-primary font-black tracking-widest uppercase text-sm mb-4 block">About Us</span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-8">Dedicated to Your Fitness Journey.</h2>
              <div className="space-y-6 text-on-surface-variant text-lg">
                <p>Deep Fitness is all about helping you become the best version of yourself, carefully and safely.</p>
                <p>We don't believe in "one size fits all". We create plans that fit your body and your goals perfectly.</p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full animate-fade-up delay-200">
              <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-end h-48">
                <span className="text-5xl font-black text-on-surface">98%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mt-2">Success Rate</span>
              </div>
              <div className="bg-on-surface p-10 rounded-xl flex flex-col justify-end h-48">
                <span className="text-5xl font-black text-primary-container">12k+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-surface-variant mt-2">Sessions/Year</span>
              </div>
              <div className="bg-primary p-10 rounded-xl flex flex-col justify-end h-48">
                <span className="text-5xl font-black text-white">4.9</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-container mt-2">Google Rating</span>
              </div>
              <div className="bg-surface-container-highest p-10 rounded-xl flex flex-col justify-end h-48">
                <span className="text-5xl font-black text-on-surface">24h</span>
                <span className="text-xs font-bold uppercase tracking-widest text-outline mt-2">Pro Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid (Top 3 from Services.jsx) */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-up flex flex-col items-center text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-2">Our Services</h2>
          <div className="h-1 w-24 bg-primary mt-2"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { tag: "Strength Training", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=500&auto=format&fit=crop" },
            { tag: "Cardio", img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=500&auto=format&fit=crop" },
            { tag: "Cross fit", img: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=500&auto=format&fit=crop" },
            { tag: "Zumba", img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=500&auto=format&fit=crop" },
            { tag: "Dance fitness", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=500&auto=format&fit=crop" },
            { tag: "Kids dance", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=500&auto=format&fit=crop" },
            { tag: "Yoga", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500&auto=format&fit=crop" },
            { tag: "Nutrition and diet", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500&auto=format&fit=crop" }
          ].map((service, idx) => (
            <div key={idx} className="group overflow-hidden bg-surface-container-lowest rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="h-32 overflow-hidden relative">
                <img alt={service.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={service.img} />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm md:text-base font-bold uppercase tracking-tighter">{service.tag}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4.5 Transformations Preview (Proven Results) */}
      <section className="py-16 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none mb-8">Proven <span className="text-primary">Results.</span></h2>
            <p className="text-lg text-on-surface-variant mb-4">Our athletes don't just change their look; they re-architect their entire physical potential. Witness the precision of our methodology.</p>
            <p className="text-base text-on-surface-variant font-medium mb-8">We take pride in guiding our members towards a healthier and much stronger lifestyle through consistent workouts and tailored nutritional advice. It's more than fitness; it's a way of living.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="text-6xl font-black text-on-surface">3000+</div>
                <div className="text-xs uppercase font-bold text-outline tracking-widest leading-tight">Bodies Transformed</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-6xl font-black text-on-surface">94%</div>
                <div className="text-xs uppercase font-bold text-outline tracking-widest leading-tight">Goal Success Rate</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-up delay-200">
            <div className="space-y-4 pt-12">
              <img alt="Before and after transformation" className="rounded-xl w-full shadow-lg" src={imgHome1} />
              <img alt="Transformation progress" className="rounded-xl w-full shadow-lg" src={imgHome2} />
            </div>
            <div className="space-y-4">
              <img alt="Success story" className="rounded-xl w-full shadow-lg" src={imgHome3} />
              <img alt="Strength results" className="rounded-xl w-full shadow-lg" src={imgHome4} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-16 px-8 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-fade-up">
            <h2 className="text-4xl font-black tracking-tighter uppercase max-w-md">Voices of the Elite Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-2xl relative shadow-md hover:-translate-y-2 transition-transform duration-300 animate-fade-up delay-100">
              <span className="material-symbols-outlined text-primary-container text-6xl absolute top-4 right-8 opacity-40">format_quote</span>
              <div className="flex text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                ))}
              </div>
              <p className="text-lg font-medium italic mb-8 relative z-10">"I joined this institute a year ago and have seen great results in Zumba. They recently added a gym area, and the ambiance is both elegant and welcoming. Please join us!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-bold text-on-surface-variant">S</div>
                <div>
                  <div className="font-black text-sm uppercase">Sinchana Rajesh</div>
                  <div className="text-[10px] uppercase font-bold text-outline">4 weeks ago</div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl relative shadow-md hover:-translate-y-2 transition-transform duration-300 animate-fade-up delay-200">
              <span className="material-symbols-outlined text-primary-container text-6xl absolute top-4 right-8 opacity-40">format_quote</span>
              <div className="flex text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                ))}
              </div>
              <p className="text-lg font-medium italic mb-8 relative z-10">"You can expect a complete fitness transformation here if you stay focused while on the gym floor."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-bold text-on-surface-variant">M</div>
                <div>
                  <div className="font-black text-sm uppercase">Mithun Shravan</div>
                  <div className="text-[10px] uppercase font-bold text-outline">2 years ago</div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl relative shadow-md hover:-translate-y-2 transition-transform duration-300 animate-fade-up delay-300">
              <span className="material-symbols-outlined text-primary-container text-6xl absolute top-4 right-8 opacity-40">format_quote</span>
              <div className="flex text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                ))}
              </div>
              <p className="text-lg font-medium italic mb-8 relative z-10">"Deep Fitness is warm and welcoming to all. Despite my initial nerves about dancing in public, Arjun Sir's amazing instruction put me completely at ease. I'm so glad I started dance classes here!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center font-bold text-white">B</div>
                <div>
                  <div className="font-black text-sm uppercase">BHANU BHAVATH RAO</div>
                  <div className="text-[10px] uppercase font-bold text-outline">2 years ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 FAQs */}
      <FaqSection />

      <section className="py-16 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Deep Fitness Exclusive Offer</h2>
          <p className="text-on-surface-variant uppercase tracking-widest font-bold text-sm">Valid for a limited time</p>
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
           <div className="inline-block bg-primary text-on-primary px-6 py-3 rounded-xl shadow font-black uppercase tracking-tight text-lg border-2 border-yellow-300">
              🔥 SPECIAL: BUY 2 ANNUAL PACKS & GET 1 FREE MEMBERSHIP! 🔥
           </div>
        </div>
      </section>

      {/* 7. Location Map */}
      <section className="py-16 px-8 bg-surface-container-high">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-up delay-100 w-full md:w-[90%] mx-auto lg:w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px]">
              <iframe 
                title="Gym Google Map"
                src="https://maps.google.com/maps?q=Deep%20Fitness,%20Mysuru&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-up">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">Our Facility</h2>
            <div className="space-y-8">
              <div>
                <div className="text-xs font-black uppercase text-primary tracking-widest mb-2">Location</div>
                <p className="text-xl font-bold">208, HUN Complex, TK Layout, <br />New Kantharaj Urs Rd, Mysuru 570009</p>
              </div>
              <div>
                <div className="text-xs font-black uppercase text-primary tracking-widest mb-2">Hours</div>
                <p className="text-xl font-bold">All day 5.30am to 10pm</p>
              </div>
              <div className="pt-4">
                <button 
                  onClick={() => window.open('https://maps.app.goo.gl/4p9pJ4TEjURc5Ss19')}
                  className="bg-surface-container-highest text-on-surface px-8 py-4 rounded font-black uppercase flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                >
                  <span className="material-symbols-outlined">directions</span>
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
