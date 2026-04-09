import FaqSection from '../components/FaqSection';
import imgGallery1 from '../assets/gallery/IMG20260408190421.jpg';
import imgGallery2 from '../assets/gallery/IMG20260408193205.jpg';
import imgGallery3 from '../assets/gallery/IMG20260408194209.jpg';
import imgGallery4 from '../assets/gallery/IMG20260408194412.jpg';
import imgGallery5 from '../assets/gallery/IMG20260408194414.jpg';
import vidGallery6 from '../assets/gallery/VID20260408194844.mp4';

export default function Gallery() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:h-[819px] flex items-center overflow-hidden bg-surface-container-high py-16 lg:py-0">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-30 grayscale" data-alt="dramatic wide shot of a high-end architectural gym interior with industrial concrete walls and sleek yellow accent lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRuCyaeL_cQZf8MA06nBDHSlmXviNbM1zzSBBg8kCYQ50ML2_yUD6Gd0W7Sdhp74BJ8Oh7SW0Ut4GqKlbTSH1VJhaWa0VjQir0hNZ7kpA8OnMrijo4CJGUD0gjeefgInCfgBbcchMbuKcu-Jxa3HjzE-HIpIfSZ39tV2p0rDrag43Ol-1YhybcHG-WKdCzVmsYTmXkdyZQJHLpe2FcDEYqQT0XoNJLXnzTVAQjZSuBDQVrrXhX4wFwJiIFET0r5gAIw7Z8PPGlxHSg"/>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-8 lg:px-20 max-w-4xl animate-fade-up">
          <div className="w-12 h-1 bg-primary mb-6 md:mb-8"></div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black italic tracking-tighter leading-none mb-4 md:mb-6">
            REAL PEOPLE.<br/>
            <span className="text-primary text-[text-shadow:0_0_15px_rgba(243,243,0,0.4)]">REAL RESULTS.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium max-w-2xl">
            See how our members have transformed their lives and health through consistent effort and expert guidance.
          </p>
        </div>
      </section>

      {/* Transformation Cards */}
      <section className="py-16 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-fade-up">
            <h2 className="text-4xl font-black italic tracking-tighter">OUR SUCCESS STORIES</h2>
            <div className="text-sm font-bold tracking-widest uppercase text-outline">Recent Transformations</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 hover-group">
            {/* Transformation 1 */}
            <div className="group bg-surface-container-low overflow-hidden transition-all duration-500 hover:-translate-y-2 rounded-xl animate-fade-up delay-100">
              <div className="grid grid-cols-2 gap-px bg-surface-container">
                <img className="aspect-[4/5] object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCORf0hZWhBlIv8IkYLu5RLzVqcQLIGOS0Tug8J_N3eDk3knqxbhWoL-7s5T87FpC51A6Y8qJVrtxgGw-LeR9xFVrbQfmwNgXzivhXSJsPYsquT1OkB9SuTCGB9FETOwxRxELuj-CjsfRBwIbr0KIbZdQW2Mq43spxx8gTPc7maAXvPQ7im-YSIlUBev9GeCuoT1YI1L0ORlEJo94buIbbEk4W4PVOAm7NzxjADqBF13k3tz2grF7tUGbAr2kiwWa7GCY2WBR4lSwTp"/>
                <img className="aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf6SPWwtXxT-7cZmpsMTb-9asCixgX1pQdbwtUl8JmjR3IjLWpBBN3I1i62h6Gb-SPXyxARU_y3vFNRAZ9HuRCMsQni9fUoRbD-DW9YcEsFTAwQjdR_Fi0gHM7rSkHVTQHSs0yItCEadDEZ7lRhBPoHXm-B2NT54Gd_hJ6ku8MzjiO1rSpY7O77pnjUjKQf0sSrjzwq0a2CEYruOMCf57nNHF2ZnsiLuItvwFzILLdh2HFQpmvC-RHM3PKI01Sl0Ko9wDsaAwf00zu"/>
              </div>
              <div className="p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-black italic mb-4">MARCUS R.</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Duration</span>
                    <span className="text-xl font-bold">16 WEEKS</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Body Fat</span>
                    <span className="text-xl font-bold text-primary">-12.4%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Transformation 2 */}
            <div className="group bg-surface-container-low overflow-hidden transition-all duration-500 hover:-translate-y-2 rounded-xl animate-fade-up delay-200">
              <div className="grid grid-cols-2 gap-px bg-surface-container">
                <img className="aspect-[4/5] object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2qmqyU8BKyY6ft9d0jm-L96HNldRMW-ef3frkREQyzY5-G4DPXQVihN07aVq46IxtIdpR-fuUiipVExV_got6Xl7X1Ge3H2VaJGppGTUp-T2uqfUcQDZp2BCMymgNxhjgdirsV0B_eeJ6_vahV-rpK9LN8PodT5FNbJjCNhQoAh7jafo9GoQKCsV5PytFmyzI6vzGMmY5ei1U13cOOBcDKwAuoI9KquyFKKfCC_g-eVcLYfh9Z1dn86_ZChgC_gKm55_oLcX92c5K"/>
                <img className="aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0ua0ebLz7VjfBJmTFQXV40D_UCpL__UcidatpmrLFyVJdApA_flmR1pD6gvvzS5n7PVFT4K0MLLeW4aqVBIh93le331eG4qUnC1Xj5hGM7uGcpbNf0xEh-n0t9si0GenzJZCMfWrpw5MDWffdUCT-SrDr6ckGA4Xe6g_NsQ5ZMrM8WGp8HfZr7kYEreJhFPdN0N2Et-S7BV4vLbfTxmKn0C2820ONK93y1T2hU6vtJP2saL-3JIOxVlDua5PVyEq_zAWB92OdkYCW"/>
              </div>
              <div className="p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-black italic mb-4">SARAH J.</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Duration</span>
                    <span className="text-xl font-bold">12 WEEKS</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Lean Mass</span>
                    <span className="text-xl font-bold text-primary">+4.2KG</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Transformation 3 */}
            <div className="group bg-surface-container-low overflow-hidden transition-all duration-500 hover:-translate-y-2 rounded-xl animate-fade-up delay-300">
              <div className="grid grid-cols-2 gap-px bg-surface-container">
                <img className="aspect-[4/5] object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT5DQdjOCyido5LNKpN0rZFxZ0AdF-vWSGNP9tXKZ1iSCHmTDjnHuzUvkNIYAHF9jFZu-lu97SJe-O4vBRtb3CfeLOzNFzPwUDeXpm-YR1WVwwXe6F33Zqqm8A0NzX1MGy7SlUP0tBGkAnbdES3iYbCcrQ5TsvplIS2PWNctuLYUCAm8r9StXEpyggzdhwW1OBkc16hNuKN5-rwJuO9IJX0mXA0wwb-T-Zxen0AyjfJ9wxXIbTcIhjpPPiEAnoS3GnVWwZGbmJx5Ne"/>
                <img className="aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_NkZ4nbq3oL2RCa7UL7kRqQxYZyUfwgCCu92bte9lqrkAbCbEc3SssR7iIvarXbmBjf3_vwbjhAmp4RIkyhN6MqheAmqgiAuSNSM8qEq7EnWbM1whpqoWNscO6DAqizWikE3MBXt8DvxwC7hSNxkixeFwUDwqd4KkuIcdcaM4D78HZe-brDDImVpA9R3nqE3-UU10BRoJffcqYuGWWf2quLRcpBMQPzXYW6pKF6gi3YoSeiAJD6pxYg4ey6Nxmz5ENIxS0xdUKDzO"/>
              </div>
              <div className="p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-black italic mb-4">DAVID L.</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Duration</span>
                    <span className="text-xl font-bold">24 WEEKS</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Weight Loss</span>
                    <span className="text-xl font-bold text-primary">-18.5KG</span>
                  </div>
                </div>
              </div>
            </div>
             {/* Transformation 4 */}
             <div className="group bg-surface-container-low overflow-hidden transition-all duration-500 hover:-translate-y-2 rounded-xl animate-fade-up delay-100">
              <div className="grid grid-cols-2 gap-px bg-surface-container">
                <img className="aspect-[4/5] object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaBNbRMt1zMFnDK01V3Eo16-eyGjBpGrbkzL05SANSzA7j3LxShE4RJLJt5x_zB_ZRvPf3ZLzg8wV4ahq74J2wjTwn4vsQeNp6XCfTUzwRPSMrQFYJWIF-gjDu5b5GKnIdmaUl51E8VEexdRa78NyY8zmEjHit-fsC_VmH2VszHV23Z2qWCw39zQdcz7voIMWhvThT1qkb9IJVxYzA6sUYY9H0pjcNnbvg-_iMTrpJLEuo4qMZNFMQpl9V-2Pq-y7mdmjFgJuG6-y3"/>
                <img className="aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgGbX9S2ELHH-HzU6NdDVqRt-5y_CRnA5-mNBdNyEBT1ygrWn4KQN5hsUZ31trXV5rTKyf-GFaSW7t8kusus4SbNLQNiWSSTM_CvGdU6qr3G8bGDGykFlPgmLc5Fe8cBeEdzwaf7e2sfcrgLPqTzOaXXAvSfhmOYmvyICI3AOaaH-vN01B_5BsyTv8nhBQtbNoVAHF-RjYrVV0rE81rBgz4EKD4oPfSw3qOK4TSYwCpQUva5LCn5kTttEQDtlcdfocNUDTxnhpfVXC"/>
              </div>
              <div className="p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-black italic mb-4">ELENA S.</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Duration</span>
                    <span className="text-xl font-bold">20 WEEKS</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Performance</span>
                    <span className="text-xl font-bold text-primary">+40% STR</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Transformation 5 */}
            <div className="group bg-surface-container-low overflow-hidden transition-all duration-500 hover:-translate-y-2 rounded-xl animate-fade-up delay-200">
              <div className="grid grid-cols-2 gap-px bg-surface-container">
                <img className="aspect-[4/5] object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX6RMYGRpmoG04cDiy6JvLCoKjBbZc9mwwWP_BehANrTu-CmiyBwbPIXTUQHf1mLND8ck_pGfFonY9RU0NuBWYxh1V2kKJwdabgoWE_A3zoWy8mYB8FEaVGemxIzPEKvRULD5mQkKVJsMi1WnjaQe0wujOsLdWbDI_eilJnDRPcBjpHWqCbhpSzJLsRL6YcyEy9YvIIwLpVgFjF4zyaQRay6RVXuQ2CsOU6x98exkKVWfROr_qdoN68zOtohb6OkE3C7qBBQxrSx8r"/>
                <img className="aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC8niNw7PyNJPLWK0eQMSSosjNmXj5ANg40OBKBx2rQeh1iZFeynNmXvGRfFmmKxBHg-MsdOXvHaAuYceXTqlrg9LGul8exiySq9JKZ6uWnK7vDjlNcG2G9lK31pxxapZsnFATgiam4D8ZGZeQctANY7u3NzmDn1qrpvPUcjoXhEAVzkm7qKbBn5LDpLcU4ld1WiOPHLCyOPUgNezVggWoScQHh-cVpcaJUEqJyY3uO_4ExojxP1l9qk7bfF63U8NsO8mq-f9PDpRi"/>
              </div>
              <div className="p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-black italic mb-4">TYSON K.</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Duration</span>
                    <span className="text-xl font-bold">14 WEEKS</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Vascularity</span>
                    <span className="text-xl font-bold text-primary">ELITE LVL</span>
                  </div>
                </div>
              </div>
            </div>
             {/* Transformation 6 */}
             <div className="group bg-surface-container-low overflow-hidden transition-all duration-500 hover:-translate-y-2 rounded-xl animate-fade-up delay-300">
              <div className="grid grid-cols-2 gap-px bg-surface-container">
                <img className="aspect-[4/5] object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASHs8hdr31yR5XFzV40UN4UPEiE0cdnR3T6kPdKRiRJCUgYrXhnQlpnq2QJsgBF4RSs_ncDsVNmoFPFFJdZWRPZ5KqfQBjuDmsMXHeHoPo-udZmFOLVe23ZldsI2gv3FUwNwsBqjcSgTLfgKlyFUFsisGc3rIcBQFpRX4nQRvQAv9xaINGxmSsOpI1P3-GXb95ErHASrJt9O5Diiq7q3oJGs_JaEZyUJ_hyNj_vXlun078JnqBwGhFwrBeFGbZrjO2WW63sp2vqlSF"/>
                <img className="aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7FZQ-qJp1yJyrAuFBAOx8uWk1u2DnU7nK5GKhuDR23PeU6tVeeBZYAXt8w6ZFLpvA4CUDi6jYZi15QmeYMInmYEfitHvECAQhviK80dNkXwvAYZHzTtQcti5XQldw3DHi2CmOtt_xU_bjKjpV_9UU8Bjnutp4Uewggy3VbIqxvSvtvLmuKJkcrRAHTtVdPwm6tIgjHeyiIbpU55_URsW42uHJAKi1E7faeM0xVHXZCalXS_gX8KAy-AgpNEjlniLYaf_Sk0JgNQ5E"/>
              </div>
              <div className="p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-black italic mb-4">LISA M.</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Duration</span>
                    <span className="text-xl font-bold">30 WEEKS</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase text-outline tracking-widest">Mobility</span>
                    <span className="text-xl font-bold text-primary">+85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="text-5xl font-black italic tracking-tighter">OUR GYM</h2>
            <div className="w-32 h-1 bg-primary mt-4"></div>
          </div>
          {/* using columns-1 md:columns-2 lg:columns-3 for masonry effect in tailwind */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="break-inside-avoid animate-fade-up delay-100">
              <img className="w-full rounded shadow-xl grayscale hover:grayscale-0 transition-all duration-700" src={imgGallery1}/>
            </div>
            <div className="break-inside-avoid animate-fade-up delay-200">
              <img className="w-full rounded shadow-xl" src={imgGallery2}/>
            </div>
            <div className="break-inside-avoid animate-fade-up delay-300">
              <img className="w-full rounded shadow-xl grayscale hover:grayscale-0 transition-all duration-700" src={imgGallery3}/>
            </div>
            <div className="break-inside-avoid animate-fade-up delay-100">
              <img className="w-full rounded shadow-xl" src={imgGallery4}/>
            </div>
            <div className="break-inside-avoid animate-fade-up delay-200">
              <img className="w-full rounded shadow-xl grayscale hover:grayscale-0 transition-all duration-700" src={imgGallery5}/>
            </div>
            <div className="break-inside-avoid animate-fade-up delay-300">
              <video className="w-full rounded shadow-xl" src={vidGallery6} autoPlay loop muted playsInline />
            </div>
          </div>
        </div>
      </section>
      
      <FaqSection />
    </div>
  );
}
