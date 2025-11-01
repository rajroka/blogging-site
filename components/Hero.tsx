import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchBlogById, fetchLatestBlog } from '@/lib/fetchproducts';

const Hero = async () => {
  const blogs = await fetchLatestBlog();

  return (
    <div className="relative w-full py-16 px-6 md:px-12 lg:px-20 m-auto bg-[#EDF2F7] dark:bg-gray-900 overflow-hidden font-sans">
      
      {/* Background Objects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Abstract Shapes */}
        {/* <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-100 dark:bg-amber-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
         */}
        {/* Geometric Patterns */}
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-blue-200 dark:border-blue-700 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-purple-200 dark:border-purple-700 rounded-full opacity-25"></div>
        
        {/* Floating Dots Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
          <div className="absolute top-40 left-48 w-1 h-1 bg-amber-400 rounded-full"></div>
        </div>

        {/* Line Elements */}
        <div className="absolute top-20 right-32 w-px h-24 bg-blue-300 dark:bg-blue-600 opacity-30"></div>
        <div className="absolute bottom-32 left-1/3 w-32 h-px bg-purple-300 dark:bg-purple-600 opacity-40"></div>
        
        {/* Animated Floating Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50 delay-500"></div>
      </div>

      {/* Content */}
      {blogs && (
        <div className="relative z-10 h-full w-full transform hover:scale-[1.02] transition-transform duration-300">
          <Link 
            href={`/blogs/${blogs._id}`} 
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[400px] sm:h-[450px] border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-300 group"
          >
            {blogs.featuredImage && (
              <div className="w-full md:w-1/2 h-64 sm:h-full relative group overflow-hidden">
                <Image
                  src={blogs.featuredImage}
                  alt={blogs.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )}
            <div className="p-8 md:w-1/2 flex flex-col justify-center relative">
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
              
              <h3 className="inline-block px-4 py-2 bg-amber-400 text-black text-sm font-semibold rounded-full mb-4 uppercase tracking-wide self-start shadow-lg">
                {blogs.category || 'General'}
              </h3>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {blogs.title}
              </h2>
              
              <div className="flex items-center gap-3 mt-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">{blogs.authorName || 'Unknown Author'}</span>
                </div>
                <span className="text-gray-400">•</span>
                <time 
                  dateTime={blogs.createdAt}
                  className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs"
                >
                  {new Date(blogs.createdAt).toLocaleDateString()}
                </time>
              </div>
              
              {/* Read more indicator */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Read more
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Hero;