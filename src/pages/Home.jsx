import heroAthlete from '../assets/hero_athlete.png';

export default function Home() {
  const whatsappNumber = "1234567890";
  const phoneNumber = "1234567890";

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative flex overflow-hidden bg-white lg:min-h-[90vh] lg:items-center">

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center py-6 md:py-10 lg:py-12">

          {/* LEFT: Text content */}
          <div className="z-10 animate-fade-up order-2 lg:order-1 pb-8 lg:pb-0">
            <span className="inline-block px-3 py-1 bg-yellow-300 text-yellow-900 text-xs font-black uppercase tracking-widest mb-6 rounded">
              Precision Performance
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter mb-8 text-neutral-900">
              Transform<br/>Your Body.<br/>
              <span className="text-yellow-500">Transform<br/>Your Life.</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-600 max-w-lg mb-10 font-medium leading-relaxed">
              Experience elite-level architectural training designed for the modern athlete. Precision-engineered programs to sculpt your physique and amplify your power.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-neutral-900 px-8 py-4 rounded font-black uppercase tracking-tight hover:bg-yellow-500 hover:scale-105 transition-all shadow-lg">
                Book Free Trial
              </button>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-100 text-neutral-800 px-8 py-4 rounded font-black uppercase tracking-tight flex items-center gap-2 hover:bg-neutral-200 transition-colors shadow border border-neutral-200"
              >
                <span className="material-symbols-outlined text-green-500 text-base">chat</span>
                WhatsApp
              </a>
              <a
                href={`tel:+${phoneNumber}`}
                className="bg-neutral-900 text-white px-8 py-4 rounded font-black uppercase tracking-tight flex items-center gap-2 hover:bg-neutral-800 transition-colors shadow"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Call Now
              </a>
            </div>
          </div>

          {/* RIGHT: 3D Athlete Character */}
          <div className="relative flex justify-center items-end order-1 lg:order-2 animate-fade-up delay-200 lg:min-h-[480px] pt-4">
            {/* Yellow glow circle BEHIND the character */}
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
            {/* 3D character — mix-blend-multiply on pure white bg removes image border */}
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

      {/* Quick Benefits (Bento Grid) */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-up delay-100">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Engineered for Excellence</h2>
            <div className="w-24 h-1.5 bg-primary mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-8 rounded-xl md:col-span-2 hover:-translate-y-1 transition-transform duration-300 animate-fade-up delay-100">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 p-3 bg-primary/10 rounded-lg inline-block">architecture</span>
              <h3 className="text-2xl font-bold mb-2">Architectural Blueprint</h3>
              <p className="text-on-surface-variant">Precision body scanning and bio-mechanic assessment to build your custom growth roadmap.</p>
            </div>
            <div className="bg-surface-container-highest p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300 animate-fade-up delay-200">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 p-3 bg-primary/10 rounded-lg inline-block" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
              <h3 className="text-2xl font-bold mb-2">24/7 Access</h3>
              <p className="text-on-surface-variant">Train on your schedule with seamless biometric entry systems.</p>
            </div>
            <div className="bg-surface-container-high p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300 animate-fade-up delay-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 p-3 bg-primary/10 rounded-lg inline-block">nutrition</span>
              <h3 className="text-2xl font-bold mb-2">Elite Fueling</h3>
              <p className="text-on-surface-variant">Personalized macro-nutrient planning and on-site recovery lounge.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl md:col-span-2 hover:-translate-y-1 transition-transform duration-300 animate-fade-up delay-400">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 p-3 bg-primary/10 rounded-lg inline-block">groups</span>
              <h3 className="text-2xl font-bold mb-2">Mastermind Community</h3>
              <p className="text-on-surface-variant">Join a network of high-performers dedicated to mutual physical and mental elevation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Choose Your Tier</h2>
          <p className="text-on-surface-variant uppercase tracking-widest font-bold text-sm">Investment in your future self</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="bg-surface-container-lowest p-10 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow animate-fade-up delay-100">
            <div className="text-sm font-black uppercase mb-4 text-outline">Essential</div>
            <div className="text-5xl font-black mb-8">$149<span className="text-sm font-bold text-outline">/mo</span></div>
            <ul className="space-y-4 mb-10 text-on-surface-variant text-sm font-bold uppercase">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 24/7 Access</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Digital Blueprint</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Locker Access</li>
            </ul>
            <button className="w-full py-4 mt-auto bg-surface-container-highest rounded font-bold uppercase hover:bg-neutral-800 hover:text-white transition-colors">Select Tier</button>
          </div>
          {/* Tier 2 - Featured */}
          <div className="bg-surface-container-lowest p-10 rounded-2xl flex flex-col items-center text-center ring-4 ring-primary relative scale-105 shadow-2xl animate-fade-up delay-200">
            <div className="absolute -top-4 bg-primary text-white text-[10px] font-black px-4 py-1 rounded-full uppercase">Most Popular</div>
            <div className="text-sm font-black uppercase mb-4 text-primary">Pro Athlete</div>
            <div className="text-5xl font-black mb-8">$299<span className="text-sm font-bold text-outline">/mo</span></div>
            <ul className="space-y-4 mb-10 text-on-surface-variant text-sm font-bold uppercase">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> All Essential Perks</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 4 Weekly PT Sessions</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Nutrition Dashboard</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Recovery Suite Access</li>
            </ul>
            <button className="w-full py-4 mt-auto bg-primary text-white rounded font-bold uppercase hover:bg-primary-dim transition-colors shadow-lg">Go Pro</button>
          </div>
          {/* Tier 3 */}
          <div className="bg-surface-container-lowest p-10 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow animate-fade-up delay-300">
            <div className="text-sm font-black uppercase mb-4 text-outline">Titan</div>
            <div className="text-5xl font-black mb-8">$499<span className="text-sm font-bold text-outline">/mo</span></div>
            <ul className="space-y-4 mb-10 text-on-surface-variant text-sm font-bold uppercase">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Unlimited PT Access</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Private Locker & Laundry</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Bi-Monthly Blood Panel</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Guest Passes</li>
            </ul>
            <button className="w-full py-4 mt-auto bg-surface-container-highest rounded font-bold uppercase hover:bg-neutral-800 hover:text-white transition-colors">Select Tier</button>
          </div>
        </div>
      </section>

      {/* Transformations Preview */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <h2 className="text-5xl font-black tracking-tighter uppercase leading-none mb-8">Proven <br/><span className="text-primary">Results.</span></h2>
            <p className="text-lg text-on-surface-variant mb-8">Our athletes don't just change their look; they re-architect their entire physical potential. Witness the precision of our methodology.</p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="text-4xl font-black text-on-surface">1,200+</div>
                <div className="text-xs uppercase font-bold text-outline tracking-widest leading-tight">Bodies <br/>Architected</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-4xl font-black text-on-surface">94%</div>
                <div className="text-xs uppercase font-bold text-outline tracking-widest leading-tight">Goal <br/>Success Rate</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-up delay-200">
            <div className="space-y-4 pt-12">
              <img alt="Before and after transformation" className="rounded-xl w-full shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKvDi2ZSciXE7LcdhsuA2lMwMejX0p8ClPZCEw0zXNuJOUwgUGxeBezsNseEotG47WMO46TmqI-7MNSJer26gVxdH_VF0iJR02q_wrP6iiIqGivIQgkcFeNoZrfU2p-SDbMUru2rHC7g9vuukbTXpqShL-tFMhwH0EpbN4dGvhE3E-1CVWpsslkWC301JVtlyvsGpIoa_QZginq_TCh62PjjhEjTJf4R2clyeRo2Eb6O_2TUVqpo-YqMD6boxm_pI1cI9M67bgG5tI"/>
              <img alt="Transformation progress" className="rounded-xl w-full shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDQ0jjAQO6dn7rKN0pPyjR7F0QUE0hfZkrFQdIQtAWNEj04Z7LLkuOK2-szpvQZ3ikEBU57hZrZmbYgzQ3FRdNZ8rIsAh8EsWTzs4yck3vg5XdtksCG4MhFsby6Xy9XzIh_jQ2hwrlwMqgdWQ6LPnp9q0sL_xeUot9hBdbmcTJLR7mUqJBpzToQ6Y4RaohlhJAb6dGrk2ot2vO4cqyYMZGCbHJXVWGgoToqAWucAGdfbyjgJorgQsT1D4RDdRnUR6RgDc5w1XdKRN0"/>
            </div>
            <div className="space-y-4">
              <img alt="Success story" className="rounded-xl w-full shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIZRBo4Y3_E1-xlITsasms0sgBTi2E714gLj9PQ31FQQdYJ7BQ-Dk4WWbdVPb-yoGjqdkbVbnL-jZ1vMj_Qpdgk2KaWFAb8KWsFXqOZTlSm3PC8jaK6-pNtTj9YahKUM_6xi3nwZ6ecNhC2__gOZgPvP_qfhwATHGYoz2W0QBMqEz215nHlzt-eyP8nkkkANoVvUiANIzd2meshxs1QXtka366z5EicXva6m4c1O2z9zZuZMiK6YKkxX0NC7YmOySp8B2TumlyjQ79"/>
              <img alt="Strength results" className="rounded-xl w-full shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmEXOV3aVv5kT_2L47vdipYBU9J50vrgflItVr9wT6ZKNr7LAftCxUN7y7byxaPWNk73LxhtjGBzDQFmoUTeL66AFzFOqJRQ6KOTcs0nccVS6gYvsaDZ7F0Ji5Qw9cgZFP-wIp1SiaXgOS6KUepU0q3ns_SWGvQqA58t8HCL8b09ZcA79ZJAwJloD032Ck8QM9McZqaKYKBt8DurWcHTTU-ppf6ysn8ZtJq9TSvG2pwRjqFK0EFWImyYqpK64UdzxTd0LBcOnamwXh"/>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-fade-up">
            <h2 className="text-4xl font-black tracking-tighter uppercase max-w-md">Voices of the Elite Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-2xl relative shadow-md hover:-translate-y-2 transition-transform duration-300 animate-fade-up delay-100">
              <span className="material-symbols-outlined text-primary-container text-6xl absolute top-4 right-8 opacity-40">format_quote</span>
              <p className="text-lg font-medium italic mb-8 relative z-10">"The systematic approach here is unlike anything I've seen. It's not just working out; it's engineering."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200"></div>
                <div>
                  <div className="font-black text-sm uppercase">Marcus V.</div>
                  <div className="text-[10px] uppercase font-bold text-outline">Software Architect</div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl relative shadow-md hover:-translate-y-2 transition-transform duration-300 animate-fade-up delay-200">
              <span className="material-symbols-outlined text-primary-container text-6xl absolute top-4 right-8 opacity-40">format_quote</span>
              <p className="text-lg font-medium italic mb-8 relative z-10">"Finally a gym that values precision over volume. The trainers are basically movement scientists."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200"></div>
                <div>
                  <div className="font-black text-sm uppercase">Elena S.</div>
                  <div className="text-[10px] uppercase font-bold text-outline">Professional Dancer</div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl relative shadow-md hover:-translate-y-2 transition-transform duration-300 animate-fade-up delay-300">
              <span className="material-symbols-outlined text-primary-container text-6xl absolute top-4 right-8 opacity-40">format_quote</span>
              <p className="text-lg font-medium italic mb-8 relative z-10">"The community is high-caliber. Being around other motivated people makes the 5 AM sessions effortless."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200"></div>
                <div>
                  <div className="font-black text-sm uppercase">Jordan T.</div>
                  <div className="text-[10px] uppercase font-bold text-outline">CEO, Tech Ventures</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-24 px-8 bg-surface-container-high">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-up delay-100">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px]">
              <img alt="Gym location map" className="w-full h-full object-cover grayscale opacity-90 contrast-125 hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPr2FvdSoz4Y0UwMGDfpPiZfay__7ZRLAGB0bTIHH8QaUbTJ_Ak0ZKuMVGcL8ddlo7EyMnZ1_T5F2dshTmSo0WZ_f8aoKTCzNgdbCJh1kgIDj0gYNuUuTF6L1qXvxKqmsNi9Mbrjyh7j33546cjHayVKb9tmVd79zSHtSCGfoElDSWSF4hDhVDXpsiIc-z6Lb9jJ5x-xUASWnTzJHadv8K61wpqPjvN08jC5ObTnQIY0LTUlSA3YeSioN1oNK1_30LIvfu03f4S6-1"/>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-up">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">HQ / Laboratory</h2>
            <div className="space-y-8">
              <div>
                <div className="text-xs font-black uppercase text-primary tracking-widest mb-2">Address</div>
                <p className="text-xl font-bold">101 Precision Plaza, <br/>Architects District, NY 10001</p>
              </div>
              <div>
                <div className="text-xs font-black uppercase text-primary tracking-widest mb-2">Hours</div>
                <p className="text-xl font-bold">Open 24/7 for Members</p>
                <p className="text-on-surface-variant font-medium">Staffed: Mon-Fri 6AM - 10PM</p>
              </div>
              <div className="pt-4">
                <button className="bg-neutral-900 text-white px-8 py-4 rounded font-black uppercase flex items-center gap-2 hover:scale-105 transition-transform shadow-lg">
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
