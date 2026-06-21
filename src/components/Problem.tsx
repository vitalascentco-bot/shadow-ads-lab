import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Flow states based on scroll progress
  const trafficOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);
  const trafficY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  
  const leakOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 1]);
  const leakScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  const revenueOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 1]);
  const revenueHeight = useTransform(scrollYProgress, [0.5, 0.7], [100, 40]);

  const retentionOpacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);
  const retentionPathLength = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-[#0A0A0F]">
      <div className="sticky top-0 h-screen flex items-center px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
          
          {/* Left: Copy */}
          <div className="max-w-xl">
            <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-6">
              The Problem
            </h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
              Most brands know something is wrong.
              <br/>
              <span className="text-neutral-500">They just don't know where.</span>
            </h3>
            
            <div className="space-y-6 text-lg text-neutral-400">
              <p>A lot of eCommerce founders come to us after trying the usual fixes.</p>
              <div className="flex flex-col gap-2 font-mono text-sm pl-4 border-l border-neutral-800">
                <span>New campaigns.</span>
                <span>New creatives.</span>
                <span>New audiences.</span>
                <span>Higher budgets.</span>
              </div>
              <p>Sometimes performance improves for a few days. Then it falls back again.</p>
              <p className="text-neutral-200 font-medium">The problem is that growth isn't controlled by one thing.</p>
              <ul className="space-y-2">
                <li>A great ad can't fix a weak offer.</li>
                <li>More traffic can't fix a poor checkout experience.</li>
                <li>Higher budgets can't fix customers who never return.</li>
              </ul>
              <p className="text-white mt-8 pt-6 border-t border-neutral-800">
                When acquisition, conversion, and retention aren't working together, growth becomes unpredictable.
                <br/><br/>
                That's where we start.
              </p>
            </div>
          </div>

          {/* Right: Visualization */}
          <div className="hidden lg:flex justify-center items-center h-full relative">
            <div className="w-full max-w-md aspect-square border border-neutral-800 bg-neutral-950 p-8 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              {/* Top: Traffic Input */}
              <motion.div 
                style={{ opacity: trafficOpacity, y: trafficY }}
                className="relative z-10 w-full bg-neutral-900 border border-neutral-700 p-4 font-mono text-xs text-center text-neutral-400"
              >
                Traffic Volume In
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-px h-6 bg-neutral-700" />
              </motion.div>

              {/* Middle: System with Leaks */}
              <div className="relative z-10 w-full h-32 my-6">
                <div className="absolute inset-x-8 top-0 bottom-0 border border-neutral-800 bg-neutral-900/50 flex items-center justify-center font-mono text-neutral-500">
                  Growth System
                </div>
                
                <motion.div 
                  style={{ opacity: leakOpacity, scale: leakScale }}
                  className="absolute -right-4 top-1/2 -translate-y-1/2"
                >
                  <div className="flex items-center gap-2 text-red-500 font-mono text-xs">
                    <motion.div 
                      animate={{ x: [0, 20], opacity: [1, 0] }} 
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="w-8 h-px bg-red-800" 
                    />
                    Checkout Drop-off
                  </div>
                </motion.div>
                
                <motion.div 
                  style={{ opacity: leakOpacity, scale: leakScale }}
                  className="absolute -left-4 top-1/4"
                >
                  <div className="flex items-center gap-2 text-red-500 font-mono text-xs flex-row-reverse">
                    <motion.div 
                      animate={{ x: [0, -20], opacity: [1, 0] }} 
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0.5 }}
                      className="w-8 h-px bg-red-800" 
                    />
                    Poor Offer Match
                  </div>
                </motion.div>
              </div>

              {/* Bottom: Revenue Output & Retention Loop */}
              <div className="relative z-10 w-full flex justify-between items-end">
                <motion.div 
                  style={{ opacity: revenueOpacity }}
                  className="w-1/2 bg-neutral-900 border border-neutral-700 p-4 font-mono text-xs text-center flex flex-col justify-end"
                >
                  <span className="text-neutral-400 mb-2">Revenue</span>
                  <motion.div 
                    style={{ height: revenueHeight }}
                    className="w-full bg-white/10 mt-auto min-h-[4px]"
                  />
                </motion.div>

                <motion.div 
                  style={{ opacity: retentionOpacity }}
                  className="w-1/3 relative flex justify-end"
                >
                  <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-1/2 right-1/2 -translate-y-4">
                    <motion.path
                      d="M10,120 V40 A30,30 0 0,1 40,10 H80"
                      stroke="#4B5563"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      style={{ pathLength: retentionPathLength }}
                    />
                  </svg>
                  <div className="text-red-500 font-mono text-xs text-right mt-8 pr-2">
                    Broken<br/>Retention
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
