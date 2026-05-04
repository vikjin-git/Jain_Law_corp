/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Gavel } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Gavel className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold font-serif text-white">Jain Law Corporation</span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
              Providing sophisticated legal counsel for high-net-worth individuals and corporate entities with a focus on precision, integrity, and results.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               {['LinkedIn', 'Twitter', 'Facebook'].map(s => (
                 <a key={s} href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-xs font-bold">
                   {s[0]}
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-primary">Explore</h4>
            <ul className="space-y-4">
              {['About Us', 'Practice Areas', 'Our Team', 'Case Studies', 'Insights'].map(link => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-primary">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer', 'Accessibility'].map(link => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Jain Law Corporation. All Rights Reserved.
          </p>
          <span className="text-zinc-500 text-xs uppercase tracking-widest italic">
            Professional Legal Counsel.
          </span>
        </div>
      </div>
    </footer>
  );
}
