"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft, Ghost } from 'lucide-react';

const NotFound = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black pt-20   lg:pt-30 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Ambient Glow - Matching your Loading/SignUp design */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        
        {/* Modern Animated Icon Section */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full group-hover:bg-blue-500/30 transition-all duration-500" />
          <div className="relative w-24 h-24 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center">
            <Ghost size={48} className="text-blue-500 animate-pulse" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4 mb-10">
          <h1 className="text-7xl md:text-8xl font-serif font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif font-medium tracking-tight">
            Lost in the <span className="text-blue-500">perspective.</span>
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            The page you requested has vanished into the digital void. 
            Check the URL or return to the main dashboard.
          </p>
        </div>

        {/* Action Buttons - Matching your SignUp button styles */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button 
            onClick={() => router.back()}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.05] border border-white/10 rounded-xl font-medium hover:bg-white/[0.1] transition-all text-sm"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
          
          <Link 
            href="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] text-sm"
          >
            <Home size={18} />
            Home
          </Link>
        </div>

        {/* Playful status tag */}
        <div className="mt-12 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          Error: Route_Not_Defined
        </div>
      </div>

      {/* Subtle Bottom Branding */}
      <p className="absolute bottom-10 text-[10px] text-zinc-800 tracking-widest uppercase">
        Perspective Framework v1.0
      </p>
    </main>
  );
};

export default NotFound;