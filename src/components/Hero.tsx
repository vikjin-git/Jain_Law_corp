/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2669&auto=format&fit=crop" 
          alt="Modern Law Office"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="w-16 h-1 bg-primary mb-8 origin-left"
          />
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-8 leading-[1.1]"
          >
            Excellence in <br />
            <span className="text-primary italic">Legal</span> Representation
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-secondary max-w-xl mb-12 leading-relaxed"
          >
            Providing sophisticated legal counsel for high-net-worth individuals and corporate entities with a focus on precision, integrity, and results.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="bg-primary text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-lg">
              Book a Consultation
            </button>
            <button className="border border-outline text-primary px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-surface transition-all transform hover:-translate-y-1">
              Our Expertise
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative side element */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-3/4 border-l border-zinc-200"
      >
        <div className="h-full w-full flex items-center justify-center">
            <span className="rotate-90 text-sm font-bold tracking-[1em] text-zinc-300 uppercase whitespace-nowrap">
                PRESTIGE • INTEGRITY • RESULTS
            </span>
        </div>
      </motion.div>
    </section>
  );
}
