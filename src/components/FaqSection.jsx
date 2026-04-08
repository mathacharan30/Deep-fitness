import { useState } from 'react';

export default function FaqSection({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 px-8 bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Frequently Asked Questions</h2>
          <p className="text-sm font-bold tracking-widest text-primary uppercase">Knowledge is Structural Integrity</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-surface border ${openIndex === index ? 'border-primary' : 'border-transparent'} rounded-xl overflow-hidden transition-all duration-300 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button 
                className="w-full text-left px-6 py-5 flex justify-between items-center font-bold uppercase tracking-tight"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`px-6 text-on-surface-variant text-sm transition-all duration-300 will-change-[max-height,opacity] overflow-hidden`}
                style={{ 
                  maxHeight: openIndex === index ? '200px' : '0px',
                  opacity: openIndex === index ? 1 : 0,
                  paddingBottom: openIndex === index ? '1.25rem' : '0' 
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
