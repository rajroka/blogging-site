
import { fetchBlogs } from '@/lib/fetchproducts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MoveUpRight } from 'lucide-react';

const Recentblog = async () => {
  const blogs = await fetchBlogs();
  const recentBlogs = blogs.slice(0, 6);
 

  return (

    <>

 


    {/* <div className="relative w-full bg-[#EDF2F7] dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden font-sans">
      {/* Background Elements - Continuous from Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Blobs - Continuing the same pattern */}
        {/* <div className="absolute -top-24 -left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -top-16 -right-20 w-72 h-72 bg-gradient-to-r from-yellow-200 to-pink-200 dark:from-yellow-700 dark:to-pink-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse delay-1000"></div> */}
        
        {/* Grid Dots - Exact same as Hero */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Shapes - Positioned to continue from Hero */}
        <div className="absolute top-4 right-10 w-32 h-32 border-2 border-blue-300 dark:border-blue-600 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute top-8 left-10 w-24 h-24 border-2 border-purple-300 dark:border-purple-600 rounded-full opacity-20"></div>
        
        {/* Animated Orbs - Continuing the pattern */}
        <div className="absolute top-12 right-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-16 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40 delay-500"></div>
      </div>

      {/* Content */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-12 text-center">
          Discover Our <span className="text-blue-600 dark:text-blue-400">Featured Blogs</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.map((blog) => (
            <Link
              href={`/blogs/${blog._id}`}
              key={blog._id}
              className="group block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/20"
            >
              {/* Image */}
              <div className="relative w-full h-56 sm:h-60 md:h-64 overflow-hidden">
                <Image
                  src={blog.featuredImage || "/placeholder.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>

                <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                  {blog.content}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between mt-auto text-xs">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7">
                      <Image
                        src={blog.authorImage || "/default-avatar.png"}
                        alt={blog.authorName || "Author"}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">By {blog.authorName || "Unknown"}</span>
                  </div>

                  <div className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300">
                    <span className="text-sm font-medium">Read</span>
                    <MoveUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional: View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View All Blogs</span>
            <MoveUpRight size={18} />
          </Link>
        </div>
      </section>
    {/* </div> */}
    </>
  );
};

export default Recentblog;