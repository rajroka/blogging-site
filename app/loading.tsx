import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center dark:bg-black bg-white   text-white">
      {/* Background Glow - Simplified to one div for speed */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* The Loader - Optimized with standard CSS */}
        <div className="w-12 h-12 relative mb-6">
          <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin"></div>
          <div className="absolute inset-0 rounded-full border-2 border-white/5"></div>
        </div>

        {/* Minimalist Text */}
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-400 animate-pulse">
            Loading Perspective
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;