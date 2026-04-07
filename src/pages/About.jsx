import FaqSection from '../components/FaqSection';

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[819px] flex items-center overflow-hidden px-6 md:px-8 py-10 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-on-surface mb-6">
              Meet the Team <br/>Behind Your <br/><span className="text-primary-container bg-on-surface px-4">Transformation</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg font-medium leading-relaxed mb-8">
              Precision-engineered performance. Our elite roster of architectural athletes combines structural science with raw power to rebuild your potential from the ground up.
            </p>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-on-surface">1000+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-outline">Members Moved</span>
              </div>
              <div className="w-px h-12 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-on-surface">15+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-outline">Elite Architects</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] w-full animate-fade-up delay-200 mt-8 md:mt-0">
            <div className="absolute inset-0 bg-primary-container rounded-[2rem] rotate-3 opacity-10"></div>
            <img className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-0 grayscale contrast-125" data-alt="Hyper-realistic 3D render of a muscular athlete in a futuristic architectural setting with cinematic yellow rim lighting and atmospheric smoke" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIvJ07wDSu8xstx26FRbdreHH-f26w2Q4hiR1sRMNJ_Z20owZeuOeNRh6C_6ILSE5fREICMKnVSjVIpdOBTvcWfQCKCAXJe1r9iXZZogG5K8Yy51ZVVZouaehwvZfCp_8-rqkk9dXqMuuwWTmVjcWgClnt1o87EETAGEW2N5syy9RHogy7uIfmP-FwJSEc31e4KSpVu7jAJas-GbBxTS4-2ldVyF1QqRPvmosC9AvFuoVMSlh9CHHHkH4MfNEIUvsORTGxUdKORsAZ"/>
            <div className="absolute bottom-10 -left-10 bg-surface-container-lowest p-6 rounded-xl shadow-xl z-20 max-w-xs border-l-4 border-primary">
              <p className="text-sm font-bold italic">"We don't just train bodies; we architect human performance."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Story & Stats */}
      <section className="py-20 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 animate-fade-up">
              <span className="text-primary font-black tracking-widest uppercase text-sm mb-4 block">Our Foundation</span>
              <h2 className="text-5xl font-black tracking-tighter leading-tight mb-8">Built on the Principles of <br/>Structural Integrity.</h2>
              <div className="space-y-6 text-on-surface-variant text-lg">
                <p>Founded in 2018, Architectural Athlete was born from a singular vision: to treat the human body with the same reverence and scientific precision as a master architect treats a skyscraper.</p>
                <p>Our methodology discards the "one size fits all" fitness culture in favor of a biomechanical assessment that respects your unique skeletal structure and performance goals.</p>
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

      {/* Why Choose Us */}
      <section className="py-20 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">The Precision Edge</h2>
            <div className="w-24 h-2 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 hover-group">
            <div className="bg-surface-container-lowest p-8 rounded-xl transition-transform hover:-translate-y-2 duration-300 animate-fade-up delay-100">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">architecture</span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Biomechanical Focus</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Every movement is analyzed for optimal leverage and structural safety.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl transition-transform hover:-translate-y-2 duration-300 animate-fade-up delay-200">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">monitoring</span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Data Integration</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Real-time performance tracking that dictates your daily training load.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl transition-transform hover:-translate-y-2 duration-300 animate-fade-up delay-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">diamond</span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Elite Environment</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">A distraction-free, premium space designed for deep focus work.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl transition-transform hover:-translate-y-2 duration-300 animate-fade-up delay-400">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">nutrition</span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Systemic Support</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Integrated recovery and nutritional blueprints tailored to your DNA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Profiles */}
      <section className="py-20 px-8 bg-surface-container-high">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 animate-fade-up">
            <div>
              <span className="text-primary font-black tracking-widest uppercase text-sm mb-4 block">The Architects</span>
              <h2 className="text-5xl font-black tracking-tighter uppercase">Senior Performance Team</h2>
            </div>
            <button className="hidden md:block border-2 border-on-surface px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-on-surface hover:text-white transition-colors">View All Coaches</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trainer 1 */}
            <div className="group animate-fade-up delay-100">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWc1qM_IpkAq0_wEREz7SYuUQecnj_x0-cSRd1lqAyTMgBI74pGxdsZIXnJ6SrVqWkghw4opKdElfcBwd2tnOibLR-MXjHDz3TzKAXAE61otjkQxkoj2DjBj1ApMYvFmalyYkXQ5pu-tHHeS72kQuFXJqmpnHuj2DXJx4jEu9LVh_8bGDp1CzbRI_gYpnWynTgjhT9f7TcTi_bWFVJvN5kwvwLqYYihXUw4MXKPve9P91I7UEFDcNQfgQFHT3dkFHKtxtItlJbGKJD"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary-container">share</span>
                    <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary-container">info</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Marcus Thorne</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Head of Structural Strength</p>
              <div className="space-y-1">
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">EXP:</span> 12 Years Elite Performance</p>
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">SPEC:</span> Powerlifting & Biomechanics</p>
              </div>
            </div>
            {/* Trainer 2 */}
            <div className="group animate-fade-up delay-200">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMQN7448kIWAgJZQWytnZyUkt9ykWw8yYpQIUm-WIgbdlVp4xcDyS1kBU8M14seBogUkGVdB2e9wuvQbVuKRrYh2xAz6s9UC8zWY3ZKdkaqDPk9B1XHnFeQ_8r6i_4dcqu2y-UQBULifqy_djfAtD6vK09JL-duQTjgFj6clHxyMh6Q6Pw7Dfl3nsTfTYWafP92Lpam7bmhsJB7r46pUG4KeniMDUcUYg8BoImtNqhky5HvabSJkASZJuMtGdyKUMADw-CL4Yw5l3E"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary-container">share</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Elena Vance</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Director of Mobility</p>
              <div className="space-y-1">
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">EXP:</span> 9 Years Clinical Kinesiology</p>
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">SPEC:</span> Dynamic Flex & Flow</p>
              </div>
            </div>
            {/* Trainer 3 */}
            <div className="group animate-fade-up delay-300">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq7BeCMYQ04byStiEn0oXF_RohasuYC0KRvk_P3Wn5K82G7eelCJ75Kz1W2E8BS-FpPvvDzrBhBg0gI4M6DnU1VO0-8ijGacewq1awi1L4vZq3l009lzEkj766dI0p-gyWt1hOZmVVfSKKisQyrjiImyF5lAEIDOa9ZFvwvnMqd2SwiTWIpApI7nd0a149bptsVwoe2dl493CaHJ381bMANcch33S2zXU7YY5k0NNNvtYPqv7Erp761tLwxYrLv1uRuf4VUdO_vH2Q"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary-container">share</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Julian Kross</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Hypertrophy Architect</p>
              <div className="space-y-1">
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">EXP:</span> 15 Years Body Recomp</p>
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">SPEC:</span> Aesthetic Engineering</p>
              </div>
            </div>
            {/* Trainer 4 */}
            <div className="group animate-fade-up delay-400">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2zH6UP5jVlxjJ90im2d0eIDXVp4sETWdN0SMRmoOZTxpj4c9-LtTG72d5HU9NzhkkDio95jeKCe7CDrP_ZtgHSjV5P2BkrGYm8OKShINts_wDcBeooq86NzBo9IrnuJGvaJw9HFNXrsPOr5xTefhihaCCcPVg3CuMMXBRe1Ysah5APh0K45IL3U2haaH9CY2HOQNn-ZKBYDAKNKq9d-3AVJIpMwCUcGsJzOFQFDfm_V_GTPx6iQ7PhjVeU9pSbPcSGHIfx4Sz3_xl"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary-container">share</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Sasha Reed</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Lead Metabolic Coach</p>
              <div className="space-y-1">
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">EXP:</span> 7 Years Sports Nutrition</p>
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">SPEC:</span> Fat Loss & Endurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Photos Grid (Bento Style) */}
      <section className="py-20 px-8 bg-surface">
        <div className="max-w-7xl mx-auto animate-fade-up delay-100">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl group hover:shadow-2xl transition-all">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr5itwoxGIoe5AUOnYz5EFK24IsBP1nxyMpWOL4CjNl7l5eyiMqjyWR6Cv9jlU3FuoQD06GkOJ2bnBv6EYxLvbyNiGssB6qi_A_L14agK05XSjdwimYrmeLN4rNFA_oNpliSWhmwKYN982bRfPYjmEHUnaruKh99xiHx1LMMMvym3sR2Z7Qrsbz8cSoFYZ7BpYlTfVGHSGCzc59f1vECwFVFoWwd8Vbz3C5H4S577r4ejk0jMSqRUpb3g7BVo-gJ6tUD1n2CEVsIlK"/>
              <div className="absolute inset-0 bg-on-surface/20"></div>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-xl group hover:shadow-2xl transition-all">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoTA5SyTzPyQw8SqGZbTbdcl6-M2Tv0fhy0bJf-gQ56mDqWsbzL-jm4y5llQ5_JHRx4VqWZm5KCwCCv6PeKpZW8I7PVj0fq4D-VHjIT9ymBh84aIR1UlVkqSjUPVSX-WogbKx1XezTSrXbUZRVX2tesGKizbMjKwGtEEdcCUxVACgVHAs-_52Yi6rTzkIM8RapY_umE0r6fp5vnueqVkVKCPkz3IOj6NMdvNgVF_bAEd85lbZomIU0HxQkn1p8udMc5vP0q2fu-BtN"/>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-xl group hover:shadow-2xl transition-all">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM2hJqLFZQF2IVfdzgICuX1JKShz9B9mK7xUA1TRjn_ouUvjwsHvTbp8HynvpHuZiCEvJNIeVfWsefEb4KM2HP7bcR3uNOHQF5pGpO5iuVYJ0eFWXNSEjOXXWktSyOK-mSt0cVU7HZSGlbBnuIM1vjUDoAEbiGG8ed1miHjwto-iG3UO4Nlr82bhLgq9en3owyX5cxHijBBhkNWlNZ5ATs7H7zeb1eg5kxPFxWlVPI__rxBgyWQsMdfMEZGc1Ub1b2A5q7gMFFYNem"/>
            </div>
            <div className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-xl group hover:shadow-2xl transition-all">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAswcvirZ7FRvQFhlutyMzFA9L09PG1lMYpdHL5vvHsHwfqPIUu09ThV6aUnJt4jBxTMXbe_61nhOmbTSCRgzDS_wQfzLl0AsmeRxIb8T_TEKeI5Rts2BPuNsNNLrEgFnLOLxX7O8DwmuPmXI1LI2pDWGhJrSYVCMaWxjkRkjtlmyRk72fpTBYvhHMtESlivZdGLJT4yttT9UnGvbof6Ih2fyogzgFEJYo5Co8xaLvHxcgHlrENq7v0NZ4X8YFY4kumpWFb-bNy6vn"/>
            </div>
          </div>
        </div>
      </section>
      
      <FaqSection />
    </div>
  );
}
