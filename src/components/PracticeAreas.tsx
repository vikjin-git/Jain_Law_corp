/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Globe, Gavel, Briefcase, Shield, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const icons: Record<string, any> = {
  Globe,
  Gavel,
  Briefcase,
  Shield
};

export default function PracticeAreas() {
  return (
    <section id="services" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] block mb-4">Our Practice Areas</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif">Specialized Legal Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon];
            
            if (service.large) {
              return (
                <motion.div 
                  key={service.id}
                  whileHover={{ y: -5 }}
                  className="bg-white md:col-span-2 lg:row-span-2 shadow-sm border border-zinc-200 overflow-hidden group flex flex-col"
                >
                  <div className="h-64 md:h-80 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <Icon className="text-primary w-10 h-10 mb-6" />
                    <h3 className="text-2xl font-bold font-serif mb-4">{service.title}</h3>
                    <p className="text-secondary leading-relaxed mb-8 text-lg">
                      {service.description}
                    </p>
                    <a href={`#${service.id}`} className="mt-auto flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                      Explore Representation <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={service.id}
                whileHover={{ y: -5 }}
                className={`bg-white p-8 shadow-sm border border-zinc-200 flex flex-col group transition-all hover:shadow-xl ${service.id === 'personal' ? 'bg-zinc-900 text-white border-zinc-800' : ''}`}
              >
                <Icon className={`${service.id === 'personal' ? 'text-primary' : 'text-primary'} w-10 h-10 mb-6`} />
                <h3 className="text-2xl font-bold font-serif mb-4">{service.title}</h3>
                <p className={`${service.id === 'personal' ? 'text-zinc-400' : 'text-secondary'} leading-relaxed mb-8 flex-grow`}>
                  {service.description}
                </p>
                <a href={`#${service.id}`} className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all text-primary">
                   Learn More <ArrowRight size={16} />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
