'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, Users, Zap, ShieldCheck, ArrowRight, MessageSquare, Award } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  const values = [
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "Global Perspective",
      description: "We bridge cultural gaps by sharing stories that resonate across borders and languages, fostering a truly international community."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Fast & Modern",
      description: "Our platform is built on a cutting-edge tech stack to ensure a seamless, high-performance reading and writing experience."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Authenticity First",
      description: "We prioritize verified content and journalistic integrity, standing as a reliable beacon in an era of information overload."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
            We’re rewriting the <br className="hidden md:block" />
            <span className="text-blue-600 italic font-serif">Digital Narrative.</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            GlobeBlog is a platform where technology meets storytelling. We empower diverse voices to share deep insights on the world’s most pressing topics through a modern, global lens.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent blur-3xl" />
      </section>

      {/* --- VISION STATEMENT --- */}
      <section className="py-12 px-6 sm:px-12 lg:px-20 border-y border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-4">Our Vision</h2>
          <p className="text-xl sm:text-2xl font-medium italic text-zinc-700 dark:text-zinc-300">
            "To become the world's most trusted sanctuary for long-form thought leadership and cultural exchange."
          </p>
        </div>
      </section>

      {/* --- OUR MISSION (Split Layout) --- */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
              alt="Collaborative Environment" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Empowering the world through shared knowledge and verified truth.
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We provide a high-performance ecosystem for authors to express their ideas and a clean, distraction-free environment for readers. Our mission is to bridge the gap between complex global issues and individual understanding.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Open Dialogue</h4>
                  <p className="text-xs text-zinc-500">Encouraging diverse viewpoints.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Quality Content</h4>
                  <p className="text-xs text-zinc-500">Curated by experts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-zinc-100 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What we stand for</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Our fundamental principles guide every feature we build and every story we promote.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="bg-slate-50 dark:bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default AboutPage;