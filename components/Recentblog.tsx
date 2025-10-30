import { fetchBlogs } from '@/lib/fetchproducts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MoveUpRight } from 'lucide-react';

const Recentblog = async () => {
  const blogs = await fetchBlogs();
  const recentBlogs = blogs.slice(0, 6);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#EDF2F7]">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 text-center">
        Discover Our <span className="text-blue-600">Featured Blogs</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {recentBlogs.map((blog) => (
          <Link
            href={`/blogs/${blog._id}`}
            key={blog._id}
            className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-56 sm:h-60 md:h-64">
              <Image
                src={blog.featuredImage || "/placeholder.jpg"}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2">
              <p className="text-xs text-gray-400 mb-1">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>

              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                {blog.content}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between mt-auto text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Image
                    src={blog.authorImage || "/default-avatar.png"}
                    alt={blog.authorName || "Author"}
                    height={28}
                    width={28}
                    className="rounded-full object-cover"
                  />
                  <span>By {blog.authorName || "Unknown"}</span>
                </div>

                <Link
                  href={`/blogs/${blog._id}`}
                  className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 py-1 text-gray-600 hover:text-blue-600 hover:border-blue-500 transition-colors"
                >
                  <span className="text-sm font-medium">Read more</span>
                  <MoveUpRight size={14} />
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Recentblog;
