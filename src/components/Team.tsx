import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 bg-[#0A0A0F] border-t border-neutral-900">
      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-6">
          Who You Work With
        </h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-16">
          ShadowAdsLab operates with a <span className="text-neutral-500">specialist team model.</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual: Node Tree */}
          <div className="relative h-[400px] w-full border border-neutral-800 bg-[#0F0F14] overflow-hidden flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              <motion.path 
                d="M 50 100 C 150 100, 200 200, 300 200" 
                stroke="#333" strokeWidth="2" fill="none" style={{ pathLength }} 
                className="hidden md:block"
              />
              <motion.path 
                d="M 50 200 C 150 200, 200 200, 300 200" 
                stroke="#333" strokeWidth="2" fill="none" style={{ pathLength }} 
                className="hidden md:block"
              />
              <motion.path 
                d="M 50 300 C 150 300, 200 200, 300 200" 
                stroke="#333" strokeWidth="2" fill="none" style={{ pathLength }} 
                className="hidden md:block"
              />
            </svg>

            <div className="relative z-10 w-full h-full flex items-center justify-between px-8 md:px-12 py-8">
              <div className="flex flex-col justify-between h-full w-48">
                <div className="bg-[#1A1A24] border border-neutral-700 p-4 text-xs font-mono text-neutral-300 shadow-xl">
                  Media Buying
                </div>
                <div className="bg-[#1A1A24] border border-neutral-700 p-4 text-xs font-mono text-neutral-300 shadow-xl">
                  Retention
                </div>
                <div className="bg-[#1A1A24] border border-neutral-700 p-4 text-xs font-mono text-neutral-300 shadow-xl">
                  Automation
                </div>
              </div>

              <div className="bg-white text-black border border-neutral-300 p-6 text-sm font-mono font-bold shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                Revenue
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-8 text-lg text-neutral-400">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-white">01</span>
                One specialist focuses on paid acquisition and media buying.
              </li>
              <li className="flex gap-4">
                <span className="text-white">02</span>
                One specialist focuses on lifecycle marketing and retention.
              </li>
              <li className="flex gap-4">
                <span className="text-white">03</span>
                One specialist focuses on creative systems, automation, and operational execution.
              </li>
            </ul>
            
            <div className="pt-8 border-t border-neutral-800 font-mono text-sm space-y-2">
              <p className="text-red-400">× No unnecessary layers.</p>
              <p className="text-red-400">× No communication through multiple departments.</p>
              <p className="text-red-400">× No account managers sitting between strategy and execution.</p>
            </div>

            <p className="text-white font-medium text-xl">
              You work directly with the people responsible for growing the account.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
