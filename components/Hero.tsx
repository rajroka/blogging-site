import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchLatestBlogs } from '@/lib/fetchproducts';

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const Hero = async () => {
  const blogs = await fetchLatestBlogs();
  const blogsArray = Array.isArray(blogs) ? blogs : blogs ? [blogs] : [];
  const latest = blogsArray[0] ?? null;
  const other = blogsArray.slice(1, 4);

  return (
    <section className="w-full py-20  sm:py-16 lg:py-10 px-4 sm:px-8 md:px-12 lg:px-20 bg-slate-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Featured Blog */}
          <div className="lg:w-1/2 w-full">
            {latest && (
              <Link
                href={`/blogs/${latest._id}`}
                className="group relative flex flex-col min-h-[400px] sm:min-h-[500px] lg:h-full rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={latest.featuredImage || '/placeholder.jpg'}
                    alt={latest.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative mt-auto p-6 sm:p-8 md:p-10 flex flex-col justify-end">
                  <span className="inline-block text-[10px] sm:text-xs uppercase tracking-widest font-bold px-3 py-1.5 bg-blue-600 text-white rounded-md w-fit mb-4">
                    {latest.category}
                  </span>
                  <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-white group-hover:text-blue-200 transition-colors mb-4 line-clamp-3">
                    {latest.title}
                  </h2>
                  <div className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                    <span>{latest.authorName || 'Unknown Author'}</span>
                    <span className="opacity-50">•</span>
                    <span>{formatDate(latest.createdAt)}</span>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Other Blogs List */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4 sm:gap-6">
            {other.map((blog: any) => (
              <Link
                href={`/blogs/${blog._id}`}
                key={blog._id}
                className="group flex flex-col sm:flex-row bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 min-h-[140px]"
              >
                {/* Image Section */}
                <div className="relative w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                  <Image
                    src={blog.featuredImage || '/placeholder.jpg'}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-bold uppercase px-2 py-0.5 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-500 dark:text-zinc-400">
                      {blog.category}
                    </span>
                    <h3 className="font-bold text-lg sm:text-xl text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>
                  </div>

                  {/* Author & Date Footer */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6">
                        <Image
                          src={blog.authorImage || '/default-avatar.png'}
                          alt={blog.authorName || 'Staff'}
                          fill
                          className="rounded-full grayscale object-cover"
                        />
                      </div>
                      <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        {blog.authorName || 'Staff'}
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-500">
                      {formatDate(blog.createdAt)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;