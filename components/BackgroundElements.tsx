export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-r from-yellow-200 to-pink-200 dark:from-yellow-700 dark:to-pink-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      
      {/* Grid Dots */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-blue-300 dark:border-blue-600 rounded-lg rotate-45 opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-purple-300 dark:border-purple-600 rounded-full opacity-20"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40 delay-500"></div>
    </div>
  );
};

export const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full py-16 px-6 md:px-12 lg:px-20 m-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden font-sans">
      <AnimatedBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};