/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Verified } from 'lucide-react';
import { TEAM } from '../constants';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" 
              alt="Founding Partner"
              referrerPolicy="no-referrer"
              className="w-full aspect-square object-cover shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -right-10 bg-primary p-10 z-20 hidden md:block">
              <span className="text-white text-6xl font-serif font-bold block mb-2">25+</span>
              <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                Years of Legal Mastery
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">Unwavering Reliability</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
              A Legacy Built on Authority and Precision
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              At Jain Law Corporation, we understand that legal challenges require more than just knowledge—they require a strategic partner. Founded on the principles of unwavering integrity and meticulous legal scholarship, we bridge the gap between traditional legal heritage and modern corporate needs.
            </p>
            
            <ul className="space-y-4">
              {[
                'Nationally recognized legal practitioners',
                'Data-driven litigation strategies',
                'Confidential and secure client portals'
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <Verified className="text-primary w-6 h-6 fill-primary/10" />
                  <span className="font-medium text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-32">
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-4">Senior Counsel</h3>
            <p className="text-secondary max-w-xl">
              Led by partners with decades of combined experience in high-stakes corporate and civil litigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TEAM.map((member) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 bg-zinc-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h4 className="text-2xl font-bold font-serif mb-2">{member.name}</h4>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-6">{member.role}</p>
                <p className="text-secondary italic text-lg leading-relaxed border-l-2 border-zinc-200 pl-6">
                  {member.quote}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
