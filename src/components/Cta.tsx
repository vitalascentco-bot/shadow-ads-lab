import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const checklist = [
  "Ad Account",
  "Store",
  "Offer",
  "Checkout",
  "Retention"
];

export function Cta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="audit" className="relative min-h-screen bg-[#050508] border-t border-neutral-900 flex flex-col items-center justify-center py-32 px-6">
      
      {/* Background Lab Accents */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full text-center" ref={containerRef}>
        <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-8">
          Free Audit
        </h2>
        
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
          Most audits are designed to sell you something.<br/>
          <span className="text-neutral-500">This one is designed to find what's limiting growth.</span>
        </h3>

        <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
          We'll identify the biggest bottlenecks. We'll show you what we'd fix first. And if we don't believe we can help, we'll tell you that too.
        </p>

        {/* Checklist Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 font-mono text-sm"
        >
          {checklist.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex items-center gap-2 bg-[#0F0F14] border border-neutral-800 px-4 py-2"
            >
              <span className="text-green-500">✓</span>
              <span className="text-neutral-300">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="mailto:contact@shadowadslab.com"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-semibold rounded-none overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] text-lg"
          >
            <span className="relative z-10 w-full text-center">BOOK YOUR FREE AUDIT</span>
            <div className="absolute inset-0 bg-neutral-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050508] py-12 px-6 border-t border-neutral-900 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-sm tracking-widest text-neutral-600 uppercase mb-4">
          ShadowAdsLab
        </div>
        <p className="text-neutral-400">
          Scale with Precision. Dominate Your Market.
        </p>
        <p className="text-neutral-700 text-xs mt-8 font-mono">
          © {new Date().getFullYear()} ShadowAdsLab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
