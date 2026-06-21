import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    id: '01',
    title: 'Paid Advertising',
    description: 'We manage campaigns across Meta and Google with one objective: profitable growth.',
    content: 'Before increasing spend, we evaluate account structure, budget allocation, creative testing volume, and overall account health to understand what\'s helping performance and what\'s holding it back.',
    icon: '📊'
  },
  {
    id: '02',
    title: 'Ad Account Structure',
    description: 'Many brands don\'t have a creative problem. They have a structure problem.',
    content: 'We review campaign setup, ad sets, budget distribution, testing processes, and account organisation to ensure the account can support sustainable growth.',
    icon: '🏗️'
  },
  {
    id: '03',
    title: 'Conversion Rate Optimisation',
    description: 'Getting clicks is easy. Turning those clicks into customers is what matters.',
    content: 'We review the entire buying experience to identify friction points that quietly reduce conversions. Weak offers. Low-quality product pages. Trust issues. Checkout friction. Fixing them often creates bigger gains than spending more on ads.',
    icon: '⚡'
  },
  {
    id: '04',
    title: 'Email & SMS Retention',
    description: 'Acquiring customers is expensive. Keeping them shouldn\'t be.',
    content: 'We work with lifecycle marketing specialists to improve customer retention, increase repeat purchases, recover abandoned carts, and improve lifetime value.',
    icon: '🔄'
  },
  {
    id: '05',
    title: 'Organic Content Strategy',
    description: 'Trust matters. That\'s why we focus on authentic content.',
    content: 'We don\'t rely on artificial UGC for growing brands because long-term trust is more valuable than short-term volume. Real customers, real experiences.',
    icon: '🔬'
  }
];

export function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0A0A0F]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden w-full">
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
          <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-4">
            What We Do
          </h2>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight">
            One Team. <span className="text-neutral-500">Every Part Of Growth.</span>
          </h3>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-max pb-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="w-[85vw] md:w-[600px] h-auto md:h-[480px] bg-[#0F0F14] border border-neutral-800 p-8 md:p-12 flex flex-col relative group hover:border-neutral-600 transition-colors"
            >
              <div className="absolute top-0 right-0 p-6 font-mono text-neutral-700 text-6xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40">
                {service.id}
              </div>
              
              <div className="text-3xl mb-8 opacity-50 grayscale group-hover:grayscale-0 transition-all font-mono">
                {service.icon}
              </div>
              
              <h4 className="text-2xl md:text-3xl font-medium text-white mb-4">
                {service.title}
              </h4>
              
              <p className="text-lg text-neutral-300 mb-6 font-medium">
                {service.description}
              </p>
              
              <p className="text-neutral-500 mt-auto leading-relaxed">
                {service.content}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
