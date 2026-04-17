import FaqSection from '../components/FaqSection';
import imgHome1 from '../assets/home/IMG20260408193301.jpg';
import imgHome2 from '../assets/home/IMG20260408193607.jpg';
import imgHome3 from '../assets/home/IMG20260408194209.jpg';
import imgHome4 from '../assets/home/IMG20260408194359.jpg';
import imgAbout1 from '../assets/about/IMG20260408190236.jpg';
import imgAbout2 from '../assets/about/IMG20260408193422.jpg';
import imgAbout3 from '../assets/about/IMG20260408193906.jpg';
import imgAbout4 from '../assets/about/IMG20260408194412.jpg';
import imgTrainerSanjay from '../assets/trainers/sanjay.jpeg';
import imgTrainerPramod from '../assets/trainers/pramodh head coach.jpeg';
import imgTrainerVivek from '../assets/trainers/vivek.jpeg';
import imgTrainerArjun from '../assets/trainers/Arjun.jpeg';

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[819px] flex items-center overflow-hidden px-6 md:px-8 py-10 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-on-surface mb-12">
              Meet the Team <br/>Behind Your <br/><span className="text-primary bg-surface-container-high px-4 py-2 mt-4 inline-block rounded-lg">Transformation</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg font-medium leading-relaxed mb-12">
              We are a team of expert trainers dedicated to helping you achieve your ultimate fitness goals through personalized coaching and proven methods.
            </p>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-on-surface">3000+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-outline">Members Moved</span>
              </div>
              <div className="w-px h-12 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-on-surface">10+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-outline">Expert Coaches</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] w-full animate-fade-up delay-200 mt-8 md:mt-0">
            <div className="absolute inset-0 bg-primary-container rounded-[2rem] rotate-3 opacity-10"></div>
            <img className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl z-0 grayscale contrast-125" data-alt="Hyper-realistic 3D render of a muscular athlete in a futuristic architectural setting with cinematic yellow rim lighting and atmospheric smoke" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIvJ07wDSu8xstx26FRbdreHH-f26w2Q4hiR1sRMNJ_Z20owZeuOeNRh6C_6ILSE5fREICMKnVSjVIpdOBTvcWfQCKCAXJe1r9iXZZogG5K8Yy51ZVVZouaehwvZfCp_8-rqkk9dXqMuuwWTmVjcWgClnt1o87EETAGEW2N5syy9RHogy7uIfmP-FwJSEc31e4KSpVu7jAJas-GbBxTS4-2ldVyF1QqRPvmosC9AvFuoVMSlh9CHHHkH4MfNEIUvsORTGxUdKORsAZ"/>
            <div className="absolute bottom-10 -left-10 bg-surface-container-lowest p-6 rounded-xl shadow-xl z-20 max-w-xs border-l-4 border-primary">
              <p className="text-sm font-bold italic">"We don't just train bodies; we help you reach your maximum potential."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Story & Stats */}
      <section className="py-20 px-8 bg-surface-container-low">
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
              <div className="bg-surface-container-highest p-10 rounded-xl flex flex-col justify-end h-48">
                <span className="text-5xl font-black text-primary">12k+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-2">Sessions/Year</span>
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
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Why Choose Us</h2>
            <div className="w-24 h-2 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Guidance", desc: "We provide personalized training plans to help you reach your goals safely and efficiently.", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop", delay: "delay-100" },
              { title: "24/7 Access", desc: "Train on your schedule anytime you want with our round-the-clock access.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop", delay: "delay-200" },
              { title: "Diet Counseling", desc: "Get the right food plan to grow your muscles and lose fat effectively.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=500&auto=format&fit=crop", delay: "delay-300" },
              { title: "Supportive Community", desc: "Train with like-minded friends who motivate and support each other every day.", img: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=500&auto=format&fit=crop", delay: "delay-400" },
            ].map((item, idx) => (
              <div key={idx} className={`overflow-hidden rounded-2xl transition-all hover:-translate-y-2 duration-300 animate-fade-up ${item.delay} flex flex-col group shadow-lg`}>
                <div className="h-56 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 bg-surface-container-high flex-1">
                  <h3 className="text-lg font-black mb-2 uppercase tracking-tight text-on-surface">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Profiles */}
      <section className="py-20 px-8 bg-surface-container-high">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 animate-fade-up">
            <div>
              <span className="text-primary font-black tracking-widest uppercase text-sm mb-4 block">Our Coaches</span>
              <h2 className="text-5xl font-black tracking-tighter uppercase">Training Team</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trainer 1 */}
            <div className="group animate-fade-up delay-100">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-[center_top]" src={imgTrainerArjun}/>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Arjun</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Owner of Deep Fitness</p>
              <div className="space-y-1">
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">EXP:</span> Visionary</p>
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">ROLE:</span> Gym Founder & Owner</p>
              </div>
            </div>
            {/* Trainer 2 */}
            <div className="group animate-fade-up delay-200">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-[center_top]" src={imgTrainerPramod}/>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Pramod</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Head coach of deep fitness</p>
              <div className="space-y-1">
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">EXP:</span> 15+ years experience</p>
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">SPEC:</span> Workout designer & Certified trainer</p>
              </div>
            </div>
            {/* Trainer 3 */}
            <div className="group animate-fade-up delay-300">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-[center_top]" src={imgTrainerSanjay}/>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Sanjay S</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Certified Trainer</p>
              <div className="space-y-1">
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">EXP:</span> 3 Years</p>
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">SPEC:</span> Dance fitness</p>
              </div>
            </div>
            {/* Trainer 4 */}
            <div className="group animate-fade-up delay-400">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-[center_top]" src={imgTrainerVivek}/>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Vivek V</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">HIIT Specialist</p>
              <div className="space-y-1">
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">EXP:</span> Elite Trainer</p>
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">SPEC:</span> HIIT & Conditioning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Photos Grid (Bento Style) */}
      <section className="py-20 px-8 bg-surface">
        <div className="max-w-7xl mx-auto animate-fade-up delay-100">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
            <div className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-xl group hover:shadow-2xl transition-all">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={imgAbout4}/>
              <div className="absolute inset-0 bg-surface/20"></div>
            </div>
            <div className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-xl group hover:shadow-2xl transition-all">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={imgAbout1}/>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-xl group hover:shadow-2xl transition-all">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={imgAbout2}/>
            </div>
            <div className="md:col-span-3 md:row-span-1 relative overflow-hidden rounded-xl group hover:shadow-2xl transition-all">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={imgAbout3}/>
            </div>
          </div>
        </div>
      </section>
      
      <FaqSection />
    </div>
  );
}
