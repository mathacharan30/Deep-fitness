import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your approach different?",
      answer: "We treat fitness like architectural design. We analyze your biomechanics, structural integrity, and metabolic profile before designing a customized blueprint for your body. No generic workouts."
    },
    {
      question: "Is the facility open 24/7?",
      answer: "Yes, our facility is equipped with biometric access, allowing our members to train on their own schedule 24/7. Staffed hours are Mon-Fri 6AM to 10PM."
    },
    {
      question: "Do I need to be an elite athlete to join?",
      answer: "Not entirely. You need an elite mindset. We work with beginners to pros, provided you are dedicated to structural and metabolic transformation."
    },
    {
      question: "What is included in the free trial?",
      answer: "The 7-day trial includes full facility access, one consultation session to assess your mechanics, and access to our recovery lounge."
    }
  ];

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
