export default function Services() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <header className="pt-8 md:pt-32 pb-12 md:pb-20 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-low min-h-[300px] md:min-h-[500px] flex flex-col justify-center p-8 md:p-12 lg:p-20">
          <div className="absolute inset-0 opacity-20">
            <img alt="Gym Interior" className="w-full h-full object-cover grayscale" data-alt="industrial minimalist gym interior with concrete walls and high ceilings showcasing premium weightlifting equipment in natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_TEnaWvQ8I8s8Lb4rbwa_j9Py-y1AKD55LEO-DUhbuwTAHv0VrhNs_mltdZMyz_ClWtZ103-1gxvq1ySu0VyxU1_Z3NitsNiprryTKD5vKtmCwxrLP4XPKWYIcS232fw1RIhD8ks_KPmg1Mj5uXFUhCoYZlfqn_p8VPXhx0_4lPtWxVnax_nNo9CFcJTzps5FmrdsXluCXQMSJZkaMZeNqAQSOKIBcZ3oIPUYJa71Zt5ddemD9aeMQxiXpWjWqEuJ4OlT3N81WX2m"/>
          </div>
          <div className="relative z-10 max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container text-[10px] md:text-xs font-black tracking-widest uppercase mb-4 md:mb-6 rounded">The Precision Method</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-6 md:mb-8">
              Programs Designed for <span className="text-primary italic">Every Fitness Goal.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              Engineered performance through architectural precision. We build more than muscle; we construct elite biological foundations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-inverse-surface text-surface px-8 py-4 font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-on-surface transition-colors rounded">
                Explore Membership <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-up">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Our Frameworks</h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-surface-container-lowest overflow-hidden flex flex-col rounded-xl hover:shadow-2xl transition-all duration-300 animate-fade-up delay-100">
            <div className="h-64 overflow-hidden relative">
              <img alt="Hypertrophy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqP-INRqmsmMRf4aEkxyJ29z4BmiHZJGVnWyVDypkkdZ2rpEB9vjs2dVM5zqFfs3sEQFMsOEW8uSyD0wfSX9NXguV2KJGlCFhgGN4oWLA2nlFxk2g6gM2EVPKeoFM3vytlBSiOQqhKfDc_UXgPVSHU3dYbFZb9nMioIepVuDzqb3sv1icZbOGZ-opx4vLBrgi-4HY1LrPoXiNKazu9UzeUV-ecdjfIhnyiooBRC5d9Z6DXpLPGCyACfwuigclLnkM9Br_Plc_KVNpH"/>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-primary-fixed text-on-primary-fixed flex items-center justify-center rounded">
                  <span className="material-symbols-outlined">fitness_center</span>
                </div>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-tighter">Hypertrophy Blueprint</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Focused structural building through progressive overload and calculated volume cycles.</p>
              <button className="w-full py-4 border-2 border-primary-container text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-primary-fixed transition-colors rounded">Select Framework</button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group bg-surface-container-lowest overflow-hidden flex flex-col rounded-xl hover:shadow-2xl transition-all duration-300 animate-fade-up delay-200">
            <div className="h-64 overflow-hidden relative">
              <img alt="Athletic Performance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcmMMTB0RTRP1p0aq3Ukv5zr_SFlJvvoAxKsGLzY6aXMJPNdBWLUBlnsB7tKcGUbnn3mBFba1yAIVNUAS2cE_ohCBzwSnVQ3G9KCe0Bte8SbOfB3noi6qrigiOEpT4akRyffNubhDR1SiDZ7tJF98kEVGe6Zt07DwUQmJQJNvwKWxFJWi5UKd0e3aZOD8zfF1q6W5-wSnBsQkyvekjfkG7k9uvoAUBxw_e6a7Eip-lRjfygJFy4CAqoSIDvxFzzqc9INBqRQ4bgq9x"/>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-primary-fixed text-on-primary-fixed flex items-center justify-center rounded">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-tighter">Kinetic Power</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Enhancing explosive movement and reactive strength for high-level athletic performance.</p>
              <button className="w-full py-4 border-2 border-primary-container text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-primary-fixed transition-colors rounded">Select Framework</button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group bg-surface-container-lowest overflow-hidden flex flex-col rounded-xl hover:shadow-2xl transition-all duration-300 animate-fade-up delay-300">
            <div className="h-64 overflow-hidden relative">
              <img alt="Functional Strength" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsvPUM6IN7WbPLkoVHxo3mSqWecd2XzzywMgISAEjRbXcaz4RzEwqOt41aFY4tmaaZwm4hoPe4hQBIR_8f_CRXRb1YJSfABxnA2pipy8cK0zXopeV7zZSN-5YdCucB3gw3DT_xONn5WbDzdlxnT2rwUZL-9YPAD0vkiXJjdn9LnV53beFObq372KzgddFHlXeBhYuKxYv9GYwjrW3mARmWe9IzvmEyguTmvSGx8PtvHIpdmeWv1MUPz0VcvN7FSUJjnbjMqpSIoS_c"/>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-primary-fixed text-on-primary-fixed flex items-center justify-center rounded">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-tighter">Structural Integrity</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Optimizing biomechanics and functional movement patterns for long-term joint health.</p>
              <button className="w-full py-4 border-2 border-primary-container text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-primary-fixed transition-colors rounded">Select Framework</button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="group bg-surface-container-lowest overflow-hidden flex flex-col rounded-xl hover:shadow-2xl transition-all duration-300 animate-fade-up delay-100">
            <div className="h-64 overflow-hidden relative">
              <img alt="Remote Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD69k_UozrjccNb-2az5osFXM9T9bqtwDCAjWYHXEVRMG034ot8pstvOaM81lsBTQeICE_q_WKjRP_bWvRbpJfnaZYrDbkkIOTrigNxUiebt2Fh7MLGlfKe8SFtiW_9rTqsTS8uyyNVykLXrWtNAV1kQzGSLFDR--yAnuONtmcUL1uUoQMBDlb2wLSOT2N2ITjUey1vIIP3jBrSlRHMXB3NlEV7SRcjyTnlrP2MK_2qgRE9RMIbqj4i-1reMM6SNyhMx0oDcnLTVBon"/>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-primary-fixed text-on-primary-fixed flex items-center justify-center rounded">
                  <span className="material-symbols-outlined">settings_remote</span>
                </div>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-tighter">Remote Architect</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Precision coaching delivered anywhere via our proprietary biometric tracking platform.</p>
              <button className="w-full py-4 border-2 border-primary-container text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-primary-fixed transition-colors rounded">Select Framework</button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="group bg-surface-container-lowest overflow-hidden flex flex-col rounded-xl hover:shadow-2xl transition-all duration-300 animate-fade-up delay-200">
            <div className="h-64 overflow-hidden relative">
              <img alt="Nutrition Coaching" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwnBPQRFoOtc1kvQeoYFKBoOXZPFlESnPcLJb7m86cTiEZVREfEFGDrx_YvTHPo7Y3Ob6Vlz7SOwj68lASYUDZhM-YOp1U_k3L8CMNOlve_Oj0y_8-lsrZfWYLlnTbHsndR9cUv63WX7PlZsZDN7cNwuvsGfGgpLEvGJW6PjZ9k21569EnwdLb_vCkXJIfB9tUk6QIviKnH036xqhiReCRruTW65UZnEU-RCkGzqQhAWORLVsFFDHUHqEG45afMkKifLV3RC7GN-Sd"/>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-primary-fixed text-on-primary-fixed flex items-center justify-center rounded">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-tighter">Metabolic Design</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Evidence-based fueling strategies tailored to your specific hormonal profile.</p>
              <button className="w-full py-4 border-2 border-primary-container text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-primary-fixed transition-colors rounded">Select Framework</button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="group bg-surface-container-lowest overflow-hidden flex flex-col rounded-xl hover:shadow-2xl transition-all duration-300 animate-fade-up delay-300">
            <div className="h-64 overflow-hidden relative">
              <img alt="Restoration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8PEAaepCxHPf6GN32GkAfQGh0_90IngaT4kVhMiiUETKPAHp0X-ia5IX5kFbFnIvR5DNWU_dGbVmO12tvMJa4WNMrRGzAR3sG4tBNAxJy5uWHu5PqVFHBPBhW_RJxsLiQVbzMof4LmdPt5FOqjSg3RmHkufhlIdHQHjTKFQtA0ACF5A2QXrBAyKeoYYl1EnRavpOECS9iZvjbVS0tOcGXO90_29VPhAI91QtGRPRIFshvXUC4pNcKGYUV_tBdrpARqtGmOGfKzvHS"/>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-primary-fixed text-on-primary-fixed flex items-center justify-center rounded">
                  <span className="material-symbols-outlined">self_improvement</span>
                </div>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-tighter">Optimal Recovery</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Advanced restoration protocols including cold exposure and manual therapy integration.</p>
              <button className="w-full py-4 border-2 border-primary-container text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-primary-fixed transition-colors rounded">Select Framework</button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="px-8 max-w-7xl mx-auto py-10">
        <div className="bg-primary text-on-primary p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden animate-fade-up">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">Architect Your Future Today</h2>
            <p className="text-on-primary font-medium text-lg">Claim your exclusive 7-day all-access trial. Limited slots available monthly.</p>
          </div>
          <button className="relative z-10 bg-on-surface text-surface px-10 py-5 rounded font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform active:scale-95 whitespace-nowrap">
            Start 7-Day Trial
          </button>
          {/* Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-full bg-white/10 -skew-x-12"></div>
        </div>
      </section>

      {/* Membership Pricing */}
      <section className="py-24 px-8 max-w-7xl mx-auto bg-surface">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Membership Tiers</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Scalable solutions for dedicated individuals. Select the architectural level that matches your commitment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Tier 1 */}
          <div className="bg-surface-container-low p-10 flex flex-col items-start border-b-4 border-transparent hover:border-primary transition-all rounded-xl animate-fade-up delay-100">
            <h3 className="text-xs font-black tracking-widest uppercase text-on-surface-variant mb-4">Foundation</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black tracking-tighter">$149</span>
              <span className="text-on-surface-variant font-bold">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 text-sm font-medium w-full">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Unlimited Gym Access</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Basic Biometric Onboarding</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Group Technical Clinics</li>
              <li className="flex items-center gap-3 opacity-30"><span className="material-symbols-outlined text-xl">cancel</span> Dedicated Architect</li>
            </ul>
            <button className="mt-auto w-full py-4 bg-on-surface text-surface font-black uppercase tracking-widest text-xs rounded">Join Foundation</button>
          </div>
          {/* Tier 2 */}
          <div className="bg-surface-container-lowest p-10 flex flex-col items-start border-b-4 border-primary relative rounded-xl shadow-xl animate-fade-up delay-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">Most Requested</div>
            <h3 className="text-xs font-black tracking-widest uppercase text-primary mb-4">Performance</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black tracking-tighter">$299</span>
              <span className="text-on-surface-variant font-bold">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 text-sm font-medium w-full">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Foundation Features +</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Semi-Private Coaching (4/mo)</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Advanced Metric Analysis</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Personalized Nutrition Plan</li>
            </ul>
            <button className="mt-auto w-full py-4 bg-primary text-on-primary font-black uppercase tracking-widest text-xs rounded">Join Performance</button>
          </div>
          {/* Tier 3 */}
          <div className="bg-surface-container-low p-10 flex flex-col items-start border-b-4 border-transparent hover:border-primary transition-all rounded-xl animate-fade-up delay-300">
            <h3 className="text-xs font-black tracking-widest uppercase text-on-surface-variant mb-4">Elite</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black tracking-tighter">$599</span>
              <span className="text-on-surface-variant font-bold">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 text-sm font-medium w-full">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> All Performance Features</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> 1-on-1 Master Architect</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Recovery Suite Access</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Monthly Physiological Labs</li>
            </ul>
            <button className="mt-auto w-full py-4 bg-on-surface text-surface font-black uppercase tracking-widest text-xs rounded">Join Elite</button>
          </div>
        </div>
      </section>
    </div>
  );
}
