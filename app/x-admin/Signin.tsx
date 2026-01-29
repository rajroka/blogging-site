'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail, Eye, EyeOff } from "lucide-react";

export default function Signin() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      if (email === "admin@gmail.com" && password === "admin123") {
        router.push("/x-admin/dashboards");
        return;
      } else {
        setError("Invalid email or password.");
        setLoading(false);
      }
    } catch (err) {
      setError("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black flex flex-col items-center justify-center p-4 sm:p-6">
      
      {/* Header */}
      <div className="text-center mb-6 max-w-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium tracking-tight mb-2 text-black dark:text-white">
          Pick up where you <span className="text-blue-500">left off.</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-zinc-400">
          Log in to access your bookmarked articles and personalized feed.
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-sm bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl">
        
        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-2 rounded-xl text-xs mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

          {/* Email */}
          <div className="space-y-1">
            <label className="text-[10px] sm:text-xs font-medium text-gray-700 dark:text-zinc-400 ml-1">
              Email Address
            </label>
            <div className="relative">
              <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-zinc-500" />
              <input
                name="email"
                type="email"
                placeholder="admin@company.com"
                required
                disabled={loading}
                className="w-full rounded-xl bg-white/20 dark:bg-white/5 border border-white/10 pl-9 pr-3 py-2 text-xs sm:text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition disabled:opacity-50"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] sm:text-xs font-medium text-gray-700 dark:text-zinc-400">
                Password
              </label>
              <button type="button" className="text-[9px] sm:text-[10px] text-blue-500 hover:underline">
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-zinc-500" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                disabled={loading}
                className="w-full rounded-xl bg-white/20 dark:bg-white/5 border border-white/10 pl-9 pr-10 py-2 text-xs sm:text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl px-4 py-3 text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center gap-2 text-xs sm:text-sm">
                <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : (
              <>
                Continue Reading
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-[9px] sm:text-xs text-gray-500 dark:text-zinc-400 mt-6">
          New to the journal?{" "}
          <button 
            onClick={() => router.push("/Sign-up")}
            className="text-blue-500 font-medium hover:underline text-[9px] sm:text-xs"
          >
            Create an account
          </button>
        </p>
      </div>
    </main>
  );
}
