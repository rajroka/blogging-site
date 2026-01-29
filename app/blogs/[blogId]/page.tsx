// app/blog/[id]/page.tsx

import { fetchBlogById } from '@/lib/fetchproducts';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowLeft, Mail, Twitter, Linkedin, Facebook } from 'lucide-react';

export default async function BlogPage({ params }:  { params : Promise<{ blogId: string}> } ) {
  // Logic remains exactly as you provided
  const  blogId = (await params).blogId
  const blog = await fetchBlogById(blogId);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Blog not found</h2>
        <Link href="/" className="text-blue-500 hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 dark:bg-[#09090b] min-h-screen transition-colors pt-8  duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to feed
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content: 2/3 Width */}
          <article className="lg:w-2/3">
            {/* Header Meta */}
            <div className="space-y-6 mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tighter">
                {blog.title}
              </h1>

              <div className="flex items-center justify-between py-6 border-y border-zinc-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                    <Image 
                      src={blog.authorImage || '/placeholder-user.jpg'} 
                      alt={blog.authorName || 'Author'} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white">{blog.authorName || 'Staff Writer'}</p>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                      <Calendar size={12} />
                      <span>{blog.createdAt ? new Date(blog.createdAt).toDateString() : 'Dec 2025'}</span>
                    </div>
                  </div>
                </div>
                
                {/* Simple Social Share UI */}
                <div className="hidden sm:flex items-center gap-2">
                  <button className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-blue-500 transition-colors border border-zinc-200 dark:border-white/10">
                    <Twitter size={16} />
                  </button>
                  <button className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-blue-500 transition-colors border border-zinc-200 dark:border-white/10">
                    <Linkedin size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image - rounded-xl radius */}
            {blog.featuredImage && (
              <div className="relative aspect-video mb-10 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 shadow-2xl">
                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Content Body */}
            <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
              <p className="whitespace-pre-wrap">{blog.content}</p>
            </div>
          </article>

          {/* Sticky Sidebar: 1/3 Width */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              
              {/* Promotion/Newsletter Box */}
              <div className="bg-zinc-900 dark:bg-zinc-900/50 border border-white/10 rounded-xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 blur-3xl rounded-full" />
                <Mail className="text-blue-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
                <p className="text-zinc-400 text-sm mb-6">Get the latest technical insights and stories delivered to your inbox.</p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors"
                  />
                  <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-all text-sm uppercase tracking-widest">
                    Join Now
                  </button>
                </div>
              </div>

              {/* Sidebar Promotion Image */}
              <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/10 rounded-xl p-5 group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                    alt="Promo" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <h4 className="text-zinc-900 dark:text-white font-bold mb-1">Modern Web Toolkit</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-3">Master the art of building fast, scalable applications.</p>
                <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">Learn More &rarr;</span>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}