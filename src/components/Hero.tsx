import { motion } from 'motion/react';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl"
      >
        <motion.div variants={item} className="mb-4">
          <span className="text-sm font-mono tracking-widest text-neutral-400 uppercase">
            ShadowAdsLab
          </span>
          <span className="mx-3 text-neutral-600">|</span>
          <span className="text-sm font-mono tracking-widest text-neutral-400 uppercase">
            Scale with Precision. Dominate Your Market.
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-tight">
          Most eCommerce brands don't have a traffic problem.
          <br />
          <span className="text-neutral-500">They have a growth problem.</span>
        </motion.h1>

        <motion.div variants={item} className="space-y-4 text-xl md:text-2xl text-neutral-400 max-w-3xl mb-12 leading-relaxed">
          <p>You're already spending money on ads.</p>
          <p>You're already getting visitors.</p>
          <p className="text-neutral-200">But sales are inconsistent.</p>
          <p className="text-lg text-neutral-500 mt-8">
            Some weeks performance looks strong. Other weeks it doesn't make sense.<br />
            ROAS goes up, then drops again.<br />
            Customers buy once and never come back.<br />
            You spend more trying to fix the problem, but you're still not sure what's actually causing it.
          </p>
          <p className="text-lg text-neutral-300 mt-8 font-medium">
            ShadowAdsLab helps 5-figure eCommerce brands identify what's limiting growth across acquisition, conversion, and retention—then fix it before scaling further.
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#audit"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-none overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Book Your Free Audit</span>
            <div className="absolute inset-0 bg-neutral-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          <div className="flex flex-col text-sm font-mono text-neutral-500">
            <span>Built for brands serious about scaling.</span>
            <span>No vanity metrics. No guesswork. No wasted spend.</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Lab aesthetic background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neutral-900/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]" />
    </section>
  );
}
