"use client";

import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function SubscriptionForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API Call
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-500 font-bold animate-in fade-in zoom-in duration-300">
        <FaCheckCircle /> <span>You're on the list! Check your inbox soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative group w-full max-w-md">
      <div className="flex items-center p-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl shadow-xl focus-within:ring-2 focus-within:ring-blue-500 transition-all">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="flex-grow bg-transparent px-4 py-3 outline-none text-sm text-zinc-900 dark:text-zinc-100"
        />
        <button
          disabled={status === 'loading'}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : (
            <>
              Join <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </div>
      <p className="mt-3 text-[10px] text-zinc-500 dark:text-zinc-500 text-center uppercase tracking-widest font-medium">
        No spam. Just high-quality updates once a week.
      </p>
    </form>
  );
}