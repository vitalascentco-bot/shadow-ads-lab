import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Guarantee() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative py-32 bg-white text-black">
      <div className="px-6 md:px-12 max-w-5xl mx-auto w-full">
        <h2 className="text-sm font-mono tracking-widest text-neutral-400 uppercase mb-16">
          Our Commitment
        </h2>
        
        <div className="space-y-12 mb-20 text-3xl md:text-5xl font-medium tracking-tight leading-tight">
          <p>We believe performance should be measurable.</p>
          <p>If your revenue grows by at least <span className="underline decoration-1 underline-offset-8">10% after month one</span>, we commit to delivering a <span className="underline decoration-1 underline-offset-8">200% increase within six months</span>.</p>
          <p className="text-neutral-400">If we don't achieve that target, we continue working until we do.</p>
        </div>

        <div className="border-t border-black/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-mono tracking-widest uppercase mb-6 text-neutral-500">Requirements</h3>
            <ul className="space-y-4 font-mono text-sm leading-relaxed">
              <li className="flex gap-4">
                <span className="text-neutral-400">•</span>
                Minimum ad spend of $3,000/month
              </li>
              <li className="flex gap-4">
                <span className="text-neutral-400">•</span>
                An account capable of supporting increased spend
              </li>
              <li className="flex gap-4">
                <span className="text-neutral-400">•</span>
                Brands we genuinely believe we can help scale
              </li>
            </ul>
          </div>
          <div className="flex items-end">
            <p className="text-lg font-medium text-neutral-500">
              If we don't think we're the right fit, we'll tell you during the audit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
