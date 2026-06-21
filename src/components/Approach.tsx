import { motion } from 'motion/react';

export function Approach() {
  return (
    <section className="relative py-32 bg-[#0A0A0F] overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-16 relative z-10">
        <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-6">
          Our Approach
        </h2>
        <div className="max-w-3xl space-y-6 text-xl md:text-2xl text-neutral-400 font-medium">
          <p className="text-white">The brands dominating their market aren't always spending the most.</p>
          <p>They're learning faster. They're testing faster. And they're making decisions based on data instead of assumptions.</p>
          <p className="text-neutral-500 text-lg">Finding a winning ad isn't the goal. Building a process that consistently finds new winners is.</p>
          <p className="text-neutral-500 text-lg">Creative fatigue happens. Markets change. Customer behaviour changes. What matters is having a system that keeps producing insights, new tests, and new opportunities for growth.</p>
          <p className="text-white pt-6 border-t border-neutral-800">That's the approach we bring to every account we manage.</p>
        </div>
      </div>

      <div className="relative mt-24 py-24 select-none pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {/* Animated background to clip to text */}
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,theme(colors.neutral.400)_0%,theme(colors.neutral.900)_100%)] bg-[length:200%_200%]"
          />
          <h2 className="text-[15vw] leading-[0.8] font-black text-transparent bg-clip-text bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwdjFINDB6TTAgMzBoNDB2MUgwem0xMC0zMHY0MGgxVjB6bTIwIDB2NDBoMVYweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjI1KSIvPjwvc3ZnPg==')] whitespace-nowrap text-center">
            OUT-TEST<br/>COMPETITORS
          </h2>
        </div>
      </div>
    </section>
  );
}
