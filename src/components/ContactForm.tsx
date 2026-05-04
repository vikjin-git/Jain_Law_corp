/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] block mb-4">Secure Counsel</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8">Schedule Your Strategic Consultation</h2>
            <p className="text-lg text-secondary mb-12 leading-relaxed">
              Experience the precision and authority of Jain Law Corporation. Our expert legal counsel is prepared to guide you through complex legal terrains with unwavering reliability.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Office Headquarters</h4>
                  <p className="text-secondary">1221 Corporate Plaza, Suite 400<br />Financial District, NY 10005</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Direct Counsel</h4>
                  <p className="text-secondary">+1 (212) 555-0198</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Operating Hours</h4>
                  <p className="text-secondary">Mon — Fri: 9:00 AM - 6:00 PM<br />Weekend by appointment only</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 md:p-12 border border-zinc-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-zinc-200 px-4 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white border border-zinc-200 px-4 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Practice Area</label>
                <select className="w-full bg-white border border-zinc-200 px-4 py-4 focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option>Select a service</option>
                  <option>Corporate Law</option>
                  <option>Civil Litigation</option>
                  <option>Immigration Law</option>
                  <option>Estate Planning</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">How can we assist you?</label>
                <textarea 
                  rows={4}
                  placeholder="Briefly describe your legal inquiry..."
                  className="w-full bg-white border border-zinc-200 px-4 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-primary text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-primary-dark transition-all flex justify-center items-center gap-3 group">
                Request Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
