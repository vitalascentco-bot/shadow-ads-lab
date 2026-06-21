import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "How does the free audit work?",
    answer: "We'll review your ad account, store, offer, funnel, and retention setup to identify the biggest bottlenecks affecting growth. You'll receive a clear breakdown of what we believe should be fixed first and where the biggest opportunities exist."
  },
  {
    question: "Do I have to work with you after the audit?",
    answer: "No. The audit is designed to give you clarity on what's happening inside your business. If we believe we're a good fit to work together, we'll explain why. If we don't, we'll tell you that too."
  },
  {
    question: "What types of brands do you work with?",
    answer: "We primarily work with 5-figure eCommerce brands that are already investing in growth and want a more structured approach to scaling. If you're running paid traffic, generating sales, and looking to improve consistency, you're likely a good fit."
  },
  {
    question: "Do you only manage ads?",
    answer: "No. Paid advertising is only one part of the equation. We also look at account structure, conversion rate optimisation, retention systems, creative testing, customer experience, and the areas that influence profitability beyond ad performance."
  },
  {
    question: "What platforms do you work with?",
    answer: "We currently focus on Meta and Google for paid acquisition and Shopify-based eCommerce businesses."
  },
  {
    question: "What makes ShadowAdsLab different from a traditional agency?",
    answer: "Most agencies focus on individual channels. We look at the entire growth system. Instead of asking, \"How do we improve this campaign?\", we ask, \"What's preventing this business from growing?\" That often leads to very different decisions."
  },
  {
    question: "What is required for the performance commitment?",
    answer: "To qualify, brands must meet our minimum requirements, including a monthly ad spend of at least $3,000 and an account capable of supporting additional growth. We only make commitments when we genuinely believe we can help the business scale."
  },
  {
    question: "What happens if we're not a good fit?",
    answer: "We'll tell you. Not every brand is ready to scale, and not every brand needs our help. If we don't believe we can create meaningful impact, we'll be honest about it during the audit."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 bg-[#0A0A0F] border-t border-neutral-900">
      <div className="px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-16 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-neutral-800 bg-[#0F0F14]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-lg text-white">{faq.question}</span>
                <span className="ml-6 flex-shrink-0 text-xl font-mono text-neutral-500">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-neutral-400 leading-relaxed border-t border-neutral-900 mx-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
