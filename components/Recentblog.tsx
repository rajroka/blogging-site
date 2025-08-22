import { fetchBlogs } from '@/lib/fetchproducts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Recentblog = async () => {
  const blogs = await fetchBlogs();

  // Take only first 6 blogs
  const recentBlogs = blogs.slice(0, 6);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        Discover Our <span className="text-blue-600">Latest Blogs</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentBlogs.map((blog) => (
          <Link
            href={`/blogs/${blog._id}`}
            key={blog._id}
            className="group block bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={blog.featuredImage || "/placeholder.jpg"}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {blog.content}
              </p>
      
              {/* Meta Info */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>By {blog.authorName || "Unknown"}</span>
                <span>{blog.authorImage}</span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Recentblog;
