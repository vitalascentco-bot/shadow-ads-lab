/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ContactModal } from './ContactModal';

function FaqItem({ question, answer, delayClass }: { question: string, answer: string, delayClass: string }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div 
      className={`faq-item border-b border-deep-charcoal cursor-pointer reveal-up ${delayClass} ${open ? 'open' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="py-6 flex justify-between items-center pr-4">
        <h3 className="font-headline-sub text-[20px] font-bold">{question}</h3>
        <span className="faq-icon text-2xl font-light text-coral-orange">+</span>
      </div>
      <div className="faq-answer px-4 pb-6">
        <p className="font-body-main text-[16px] text-deep-charcoal/80">{answer}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const reveals = entry.target.querySelectorAll('.reveal-up, .fade-in');
                reveals.forEach(el => el.classList.add('active'));
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-section').forEach(section => {
        observer.observe(section);
    });
    
    // Trigger for elements above fold
    const timeout = setTimeout(() => {
        document.querySelectorAll('.scroll-section').forEach(section => {
            const rect = section.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                const reveals = section.querySelectorAll('.reveal-up, .fade-in');
                reveals.forEach(el => el.classList.add('active'));
            }
        });
    }, 100);

    return () => {
        observer.disconnect();
        clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="font-body-main text-body-main antialiased relative bg-pure-white text-[#1A1A1A] overflow-x-hidden min-h-screen">
      <div className="shader-bg"></div>
      <div className="scan-line"></div>
      
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-deep-charcoal flex justify-between items-center h-16 px-4 md:px-margin-desktop max-w-full">
        <div className="text-headline-sub font-headline-sub font-black tracking-tighter text-primary">SHADOWADSLAB</div>
        <button onClick={() => setIsContactModalOpen(true)} className="cursor-pointer border border-deep-charcoal px-6 py-2 font-label-mono text-label-mono uppercase hover:bg-coral-orange hover:text-pure-white transition-colors duration-200 inline-block rounded-full">Free Audit →</button>
      </nav>

      {/* Ticker */}
      <div className="w-full bg-deep-charcoal text-pure-white py-2 border-b border-deep-charcoal mt-16 overflow-hidden">
        <div className="ticker-wrap font-label-mono text-label-mono tracking-widest font-bold">
          <div className="ticker-move">
            META ROAS 4.2x — REVENUE +200% — CAC -38% — LTV +91% — SHOPIFY CVR 3.1% — PERFORMANCE OR NOTHING — META ROAS 4.2x — REVENUE +200% — CAC -38% — LTV +91% — SHOPIFY CVR 3.1% — PERFORMANCE OR NOTHING —
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="scroll-section relative w-full min-h-[90vh] flex items-center px-4 md:px-margin-desktop py-20 overflow-hidden">
        <div className="floating absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center font-metric-lg text-[30vw] leading-none text-deep-charcoal font-bold transform -rotate-6 select-none z-0">
            200%
        </div>
        <div className="relative z-10 max-w-5xl bg-pure-white/90 p-8 border border-deep-charcoal backdrop-blur-sm rounded-3xl">
          <h1 className="reveal-up font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-deep-charcoal mb-6 leading-tight">Performance or<br/>Nothing.</h1>
          <p className="reveal-up stagger-1 font-headline-sub text-[20px] md:text-headline-sub text-deep-charcoal/90 mb-10 max-w-2xl font-medium">
            They get clicks, but not enough buyers. They have sales, but their margins are shrinking. They have a marketing agency, but no growth strategy. We strip away the fluff to deliver raw, undeniable results.
          </p>
          <button onClick={() => setIsContactModalOpen(true)} className="cursor-pointer reveal-up stagger-2 outline-none inline-block bg-coral-orange text-pure-white px-8 py-4 font-label-mono text-label-mono uppercase hover:bg-deep-charcoal transition-colors duration-200 border-2 border-coral-orange hover:border-deep-charcoal rounded-full">
            Book Your Free Audit →
          </button>
        </div>
      </section>

      {/* Problem */}
      <section className="scroll-section relative w-full px-4 md:px-margin-desktop py-20 bg-pure-white border-y border-deep-charcoal">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal-up font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-deep-charcoal mb-8 leading-tight tracking-tighter">Most brands know something is wrong. They just don't know where.</h2>
          <p className="reveal-up stagger-1 font-headline-sub text-[20px] md:text-headline-sub text-deep-charcoal/90 font-medium">Is it the ads? The offer? The landing page? The emails? Most agencies operate in silos. They only care about "ROAS" or "Clicks", completely ignoring the rest of your funnel. If your current agency is talking about "impressions" while your margins shrink, you have a problem. We are the solution.</p>
        </div>
      </section>

      {/* Services */}
      <section className="scroll-section relative w-full px-4 md:px-margin-desktop py-24 bg-surface-container-low border-b border-deep-charcoal overflow-hidden bg-dot-pattern bg-dot-size">
        <div className="max-w-7xl mx-auto">
          <h2 className="reveal-up font-display-hero-mobile md:font-[800] text-display-hero-mobile md:text-7xl text-deep-charcoal mb-12 tracking-tighter">One Team. Every Part Of Growth.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent">
            {/* Service 1 */}
            <div className="service-card relative bg-pure-white border border-deep-charcoal rounded-2xl p-10 overflow-hidden h-[350px] flex flex-col justify-end group shadow-sm hover:shadow-md">
              <div className="bg-num absolute top-4 right-4 font-metric-lg text-6xl text-deep-charcoal opacity-10 select-none z-0 scramble-hover font-bold">01</div>
              <div className="relative z-10">
                <h3 className="font-metric-lg text-3xl mb-4 font-bold tracking-tight">Paid Ads</h3>
                <p className="font-body-main text-[16px] font-medium">Facebook, Instagram, TikTok, Google. We find where your best customers are and put the perfect message in front of them.</p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="service-card relative bg-pure-white border border-deep-charcoal rounded-2xl p-10 overflow-hidden h-[350px] flex flex-col justify-end group shadow-sm hover:shadow-md">
              <div className="bg-num absolute top-4 right-4 font-metric-lg text-6xl text-deep-charcoal opacity-10 select-none z-0 scramble-hover font-bold">02</div>
              <div className="relative z-10">
                <h3 className="font-metric-lg text-3xl mb-4 font-bold tracking-tight">Ad Account Structure</h3>
                <p className="font-body-main text-[16px] font-medium">We don't guess. We deploy rigorous A/B testing frameworks that let the math dictate our next move and scale what works.</p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="service-card relative bg-pure-white border border-deep-charcoal rounded-2xl p-10 overflow-hidden h-[350px] flex flex-col justify-end group shadow-sm hover:shadow-md">
              <div className="bg-num absolute top-4 right-4 font-metric-lg text-6xl text-deep-charcoal opacity-10 select-none z-0 scramble-hover font-bold">03</div>
              <div className="relative z-10">
                <h3 className="font-metric-lg text-3xl mb-4 font-bold tracking-tight">CRO</h3>
                <p className="font-body-main text-[16px] font-medium">Turning clicks into cash. We optimize your landing pages, offers, and checkout flow until they convert at maximum velocity.</p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="service-card relative bg-pure-white border border-deep-charcoal rounded-2xl p-10 overflow-hidden h-[350px] flex flex-col justify-end group shadow-sm hover:shadow-md">
              <div className="bg-num absolute top-4 right-4 font-metric-lg text-6xl text-deep-charcoal opacity-10 select-none z-0 scramble-hover font-bold">04</div>
              <div className="relative z-10">
                <h3 className="font-metric-lg text-3xl mb-4 font-bold tracking-tight">Email/SMS</h3>
                <p className="font-body-main text-[16px] font-medium">Extracting maximum lifetime value from every acquired customer through automated flows and targeted campaigns.</p>
              </div>
            </div>
            {/* Service 5 */}
            <div className="service-card relative bg-pure-white border border-deep-charcoal rounded-2xl p-10 overflow-hidden h-[350px] flex flex-col justify-end group shadow-sm hover:shadow-md">
              <div className="bg-num absolute top-4 right-4 font-metric-lg text-6xl text-deep-charcoal opacity-10 select-none z-0 scramble-hover font-bold">05</div>
              <div className="relative z-10">
                <h3 className="font-metric-lg text-3xl mb-4 font-bold tracking-tight">Organic</h3>
                <p className="font-body-main text-[16px] font-medium">Building long-term brand authority and a consistent flow of zero-CAC traffic that compounds over time.</p>
              </div>
            </div>
            {/* Service 6 */}
            <div className="service-card relative bg-pure-white border border-deep-charcoal rounded-2xl p-10 overflow-hidden h-[350px] flex flex-col justify-end group shadow-sm hover:shadow-md">
              <div className="bg-num absolute top-4 right-4 font-metric-lg text-6xl text-deep-charcoal opacity-10 select-none z-0 scramble-hover font-bold">06</div>
              <div className="relative z-10">
                <h3 className="font-metric-lg text-3xl mb-4 font-bold tracking-tight">SEO/Growth System</h3>
                <p className="font-body-main text-[16px] font-medium">The holistic strategy that ties it all together, ensuring every channel is working in perfect synergy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators / Approach */}
      <section className="scroll-section relative w-full px-4 md:px-margin-desktop py-24 bg-deep-charcoal text-pure-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal-up font-display-hero-mobile md:font-[800] text-display-hero-mobile md:text-7xl mb-12 text-pure-white tracking-tighter">The brands dominating their market aren't always spending the most.</h2>
          <div className="space-y-12">
            <div className="reveal-up stagger-1 border-l-2 border-coral-orange pl-8 py-2">
              <p className="font-headline-sub text-[24px] opacity-90 leading-relaxed">They are learning the fastest. They test faster. They iterate faster. They scale what works faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / Who You Work With */}
      <section className="scroll-section relative w-full px-4 md:px-margin-desktop py-24 bg-pure-white border-b border-deep-charcoal bg-dot-pattern bg-dot-size">
        <div className="max-w-6xl mx-auto">
          <h2 className="reveal-up font-display-hero-mobile md:font-[800] text-display-hero-mobile md:text-7xl text-deep-charcoal mb-16 tracking-tighter">WHO YOU WORK WITH.</h2>
          <p className="reveal-up font-headline-sub text-[20px] text-deep-charcoal/90 mb-12">No interns managing your account. You get a dedicated specialist team model.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="reveal-up stagger-1 bg-pure-white border-2 border-deep-charcoal p-8 rounded-2xl">
              <h3 className="font-metric-lg text-2xl mb-4 font-bold text-coral-orange">MEDIA BUYER</h3>
              <p className="font-body-main text-[16px] text-deep-charcoal/80">Battle-tested veterans driving acquisition efficiently.</p>
            </div>
            <div className="reveal-up stagger-2 bg-pure-white border-2 border-deep-charcoal p-8 rounded-2xl">
              <h3 className="font-metric-lg text-2xl mb-4 font-bold text-coral-orange">RETENTION</h3>
              <p className="font-body-main text-[16px] text-deep-charcoal/80">Maximizing LTV and turning one-time buyers into loyalists.</p>
            </div>
            <div className="reveal-up stagger-3 bg-pure-white border-2 border-deep-charcoal p-8 rounded-2xl">
              <h3 className="font-metric-lg text-2xl mb-4 font-bold text-coral-orange">CREATIVE/OPS</h3>
              <p className="font-body-main text-[16px] text-deep-charcoal/80">Fueling the engine with high-converting assets and seamless execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="scroll-section relative w-full px-4 md:px-margin-desktop py-32 bg-surface-container-low border-b border-deep-charcoal flex flex-col items-center justify-center text-center">
        <div className="contract-border bg-pure-white p-8 md:p-16 max-w-4xl relative z-10">
          <div className="absolute top-4 left-4 font-label-mono text-[10px] text-deep-charcoal/40 font-bold">SEC. 04 // GUARANTEE</div>
          <h2 className="reveal-up font-display-hero-mobile md:font-[900] text-display-hero-mobile md:text-6xl mb-8 text-deep-charcoal leading-none tracking-tighter mt-6">200% GROWTH IN 6 MONTHS,<br/>OR WE DON'T GET PAID.</h2>
          <div className="w-full h-px bg-deep-charcoal/20 my-8"></div>
          <p className="reveal-up stagger-1 font-headline-sub text-[20px] md:text-headline-sub text-deep-charcoal/90 font-medium mb-4">Our performance-based model means our incentives are perfectly aligned. Your success is our success.</p>
          <p className="reveal-up stagger-2 font-label-mono text-[12px] text-deep-charcoal/60 uppercase">*Requires minimum $3,000 monthly ad spend.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="scroll-section relative w-full px-4 md:px-margin-desktop py-24 bg-pure-white border-b border-deep-charcoal">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal-up font-display-hero-mobile md:font-[800] text-display-hero-mobile md:text-7xl text-deep-charcoal mb-16 tracking-tighter">FAQ.</h2>
          <div className="border border-deep-charcoal rounded-2xl divide-y divide-deep-charcoal overflow-hidden bg-pure-white">
            <FaqItem 
              question="Do you work with startups?" 
              answer="Yes, provided you meet our minimum monthly ad spend requirement to ensure we have enough data velocity to drive meaningful results." 
              delayClass="stagger-1" 
            />
            <FaqItem 
              question="How long does the audit take?" 
              answer="Our comprehensive audits typically take 3-5 business days from the moment we receive access to your accounts." 
              delayClass="stagger-2" 
            />
            <FaqItem 
              question="Do you create the ad creatives?" 
              answer="Yes. Our creative team handles ideation, scripting, editing, and design for all performance assets required for testing." 
              delayClass="stagger-3" 
            />
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="scroll-section relative w-full px-4 md:px-margin-desktop py-32 bg-deep-charcoal text-pure-white flex flex-col items-center text-center">
        <h2 className="reveal-up font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero mb-10 leading-tight tracking-tighter max-w-4xl">READY FOR RAW PERFORMANCE?</h2>
        <button onClick={() => setIsContactModalOpen(true)} className="cursor-pointer reveal-up stagger-1 outline-none inline-block bg-coral-orange text-pure-white px-12 py-6 font-label-mono text-[16px] font-bold uppercase hover:bg-pure-white hover:text-deep-charcoal transition-colors duration-200 border-2 border-coral-orange rounded-full">
            CLAIM YOUR FREE AUDIT
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-deep-charcoal text-pure-white py-16 px-4 md:px-margin-desktop w-full border-t-4 border-coral-orange flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative overflow-hidden">
        <div className="absolute top-4 left-4 font-label-mono text-[10px] text-pure-white/30 font-bold">SYS.FOOTER.INITIALIZED</div>
        <div>
            <div className="text-headline-sub font-headline-sub font-black text-pure-white mb-4 tracking-tighter">SHADOWADSLAB</div>
            <p className="font-label-mono text-[11px] font-bold text-pure-white/60">©2024 SHADOWADSLAB. SCALE WITH PRECISION. DOMINATE YOUR MARKET.</p>
        </div>
        <div className="flex flex-wrap gap-6 font-label-mono text-[12px] font-bold">
            <a className="text-pure-white/80 hover:text-coral-orange transition-colors duration-200 uppercase tracking-widest" href="#">STRATEGY</a>
            <a className="text-pure-white/80 hover:text-coral-orange transition-colors duration-200 uppercase tracking-widest" href="#">EXECUTION</a>
            <a className="text-pure-white/80 hover:text-coral-orange transition-colors duration-200 uppercase tracking-widest" href="#">RESULTS</a>
            <a className="text-pure-white/80 hover:text-coral-orange transition-colors duration-200 uppercase tracking-widest" href="https://wa.me/96879581789" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
            <a className="text-pure-white/80 hover:text-coral-orange transition-colors duration-200 uppercase tracking-widest" href="mailto:Shadowadslab@gmail.com">EMAIL</a>
        </div>
      </footer>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
