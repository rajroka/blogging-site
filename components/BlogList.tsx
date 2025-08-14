'use client';

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  author: string;
  content: string;
  category: string;
  authorImage?: string;
  authorName?: string;
  tags: string[];
  authorEmail?: string;
  featuredImage?: string;
  createdAt: string;
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  if (blogs.length === 0) {
    return <p className="text-center text-gray-500 py-12">No blogs found.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
          >
            <Image
              src={blog.featuredImage || "/default-image.jpg"}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3 flex-grow line-clamp-3">
                {blog.content}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-4">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {blog.category}
                </span>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-xs text-gray-400 mb-4">

                <div className="flex items-center gap-2">
                  <Image
                    src={blog.authorImage || "/Offer.png"}
                    alt={blog.authorName || "Author"}
                    width={30}
                    height={30}
                    className="rounded-full object-cover"
                  />
                  <span className="text-gray-700">{blog.authorName || 'Unknown Author'}</span>
                </div>
                <time dateTime={blog.createdAt}>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </time>
              </div>

              <div className="flex justify-end items-center gap-3 mt-auto">
                <button className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm">
                  <Trash2 size={16} /> Delete
                </button>
                <Link
                  href={`/dashboard/edit-blog/${blog._id}`}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                >
                  <Pencil size={16} /> Edit
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
