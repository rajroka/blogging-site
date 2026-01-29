import React from 'react';
import { fetchBlogs } from '@/lib/fetchproducts';
import Image from 'next/image';
import Link from 'next/link';

// Using the same date formatter for consistency
const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const Page = async () => {
  const blogs = await fetchBlogs();

  return (
    <section className="w-full pt-32 pb-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-slate-50 dark:bg-[#09090b] transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">
            Discover Our <span className="text-blue-600 italic font-serif">Featured Blogs</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Deep dives, technical tutorials, and stories from our global community of thinkers and creators.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog: any) => (
            <Link
              href={`/blogs/${blog._id}`}
              key={blog._id}
              className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={blog.featuredImage || "/placeholder.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10">
                    {blog.category || 'Story'}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <p className="text-[11px] font-medium text-blue-600 dark:text-blue-400 mb-1">
                    {formatDate(blog.createdAt)}
                  </p>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                    {blog.title}
                  </h3>
                </div>

                <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-3 mb-6 flex-1">
                  {blog.content}
                </p>

                {/* Meta Info Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 relative rounded-full overflow-hidden">
                      <Image
                        src={blog.authorImage || "/default-avatar.png"}
                        alt={blog.authorName || "Author"}
                        fill
                        className="object-cover grayscale"
                      />
                    </div>
                    <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      By {blog.authorName || "Staff"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;