/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Quote ribbon */}
        <div className="bg-zinc-950 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white font-serif italic text-2xl md:text-3xl leading-relaxed">
              "To provide definitive legal clarity and strategic counsel that empowers our clients to navigate complexity with absolute confidence."
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">The Firm's Mission</span>
              <div className="h-px w-8 bg-primary" />
            </div>
          </div>
        </div>

        <AboutSection />
        <PracticeAreas />

        {/* CTA Banner */}
        <section className="bg-primary-container py-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="text-white text-3xl md:text-4xl font-serif font-bold">
              Secure Your Professional Future Today
            </h2>
            <button className="bg-white text-primary px-10 py-5 font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-zinc-100 active:scale-95 transition-all">
              Schedule Consultation
            </button>
          </div>
        </section>

        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

