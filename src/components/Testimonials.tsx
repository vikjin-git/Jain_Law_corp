/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-20" />
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Voices of Success</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Reflecting our commitment to legal excellence through the trusted testimonials of those we have served.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-10 border border-zinc-100 shadow-sm flex flex-col">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-lg italic text-secondary leading-relaxed mb-8 flex-grow">
                "{t.content}"
              </p>
              <div>
                <p className="font-bold font-serif text-lg text-on-surface">{t.name}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mt-1">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Success Rate', val: '98%' },
            { label: 'Client Rating', val: '4.9/5' },
            { label: 'Years Experience', val: '25+' },
            { label: 'Cases Closed', val: '1500+' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-4xl md:text-5xl font-serif font-bold text-primary block mb-2">{stat.val}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
