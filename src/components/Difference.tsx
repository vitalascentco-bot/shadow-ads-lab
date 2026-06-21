import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Difference() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const opacityDisconnected = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.2]);
  const opacityConnected = useTransform(scrollYProgress, [0.5, 0.7], [0.2, 1]);
  const scaleCenter = useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[250vh] bg-[#0A0A0F]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-12 w-full max-w-7xl mx-auto">
        
        <div className="text-center mb-24 max-w-3xl">
          <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-6">
            The ShadowAdsLab Difference
          </h2>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
            Most agencies manage channels.
            <br />
            <span className="text-neutral-500">We focus on the entire growth system.</span>
          </h3>
          <p className="text-lg text-neutral-400">
            Ads. Store. Offer. Checkout. Retention. Customers experience all of them together.
            That's why we don't look at one metric in isolation.
          </p>
        </div>

        <div className="relative w-full max-w-4xl aspect-[2/1] flex items-center justify-center">
          
          {/* Central Hub */}
          <motion.div 
            style={{ scale: scaleCenter }}
            className="absolute z-20 w-32 h-32 rounded-full border border-neutral-700 bg-[#0A0A0F] flex items-center justify-center font-mono text-xs text-white"
          >
            <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse" />
            Revenue
          </motion.div>

          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
            {/* Top Left */}
            <motion.path 
              d="M20,20 Q 250,50 450,200" 
              stroke="url(#gradient)" 
              strokeWidth="2" 
              fill="none" 
              style={{ pathLength }} 
            />
            {/* Top Right */}
            <motion.path 
              d="M800,20 Q 600,50 450,200" 
              stroke="url(#gradient)" 
              strokeWidth="2" 
              fill="none" 
              style={{ pathLength }} 
            />
            {/* Bottom Left */}
            <motion.path 
              d="M20,380 Q 250,350 450,200" 
              stroke="url(#gradient)" 
              strokeWidth="2" 
              fill="none" 
              style={{ pathLength }} 
            />
            {/* Bottom Right */}
            <motion.path 
              d="M800,380 Q 600,350 450,200" 
              stroke="url(#gradient)" 
              strokeWidth="2" 
              fill="none" 
              style={{ pathLength }} 
            />

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#333" />
                <stop offset="100%" stopColor="#fafafa" />
              </linearGradient>
            </defs>
          </svg>

          {/* Nodes */}
          <div className="absolute inset-0 z-10 w-full h-full hidden md:block">
            {/* Top Left */}
            <motion.div style={{ opacity: opacityDisconnected }} className="absolute top-0 left-0 w-32 h-12 border border-neutral-800 bg-[#0F0F14] flex flex-col items-center justify-center font-mono text-xs text-neutral-500">
              Ads
            </motion.div>
            {/* Top Right */}
            <motion.div style={{ opacity: opacityDisconnected }} className="absolute top-0 right-0 w-32 h-12 border border-neutral-800 bg-[#0F0F14] flex flex-col items-center justify-center font-mono text-xs text-neutral-500">
              Store
            </motion.div>
            {/* Bottom Left */}
            <motion.div style={{ opacity: opacityDisconnected }} className="absolute -bottom-10 left-0 w-32 h-12 border border-neutral-800 bg-[#0F0F14] flex flex-col items-center justify-center font-mono text-xs text-neutral-500">
              Offer / Checkout
            </motion.div>
            {/* Bottom Right */}
            <motion.div style={{ opacity: opacityDisconnected }} className="absolute -bottom-10 right-0 w-32 h-12 border border-neutral-800 bg-[#0F0F14] flex flex-col items-center justify-center font-mono text-xs text-neutral-500">
              Retention
            </motion.div>
          </div>
          
          <div className="absolute inset-0 z-10 w-full h-full hidden md:block">
            {/* Connected Nodes */}
            <motion.div style={{ opacity: opacityConnected }} className="absolute top-0 left-0 w-32 h-12 border border-white/20 bg-[#0F0F14] flex flex-col items-center justify-center font-mono text-xs text-white">
              Ads
            </motion.div>
            <motion.div style={{ opacity: opacityConnected }} className="absolute top-0 right-0 w-32 h-12 border border-white/20 bg-[#0F0F14] flex flex-col items-center justify-center font-mono text-xs text-white">
              Store
            </motion.div>
            <motion.div style={{ opacity: opacityConnected }} className="absolute -bottom-10 left-0 w-32 h-12 border border-white/20 bg-[#0F0F14] flex flex-col items-center justify-center font-mono text-xs text-white">
              Offer / Checkout
            </motion.div>
            <motion.div style={{ opacity: opacityConnected }} className="absolute -bottom-10 right-0 w-32 h-12 border border-white/20 bg-[#0F0F14] flex flex-col items-center justify-center font-mono text-xs text-white">
              Retention
            </motion.div>
          </div>

        </div>

        <motion.div style={{ opacity: opacityConnected }} className="mt-24 max-w-2xl text-center text-neutral-400">
          <p>
            We want to understand what's actually driving revenue and what's preventing more of it.
            Before making recommendations, we look at the complete picture.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
