'use client';

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

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

export default function BlogList({ blogs: initialBlogs }: { blogs: Blog[] }) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete blog");

      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  if (blogs.length === 0) {
    return <p className="text-center text-gray-400 py-12">No blogs found.</p>;
  }

  return (
    <section className="flex flex-col gap-8  min-h-screen dark:bg-gray-950 text-gray-100">
      
      <h1 className="text-3xl font-bold text-black">Edit blog</h1>{/* Breadcrumb */}
     <div className="text-black"> <Breadcrumb className="">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/edit-blog">edit blog</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb></div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
          >
            {/* Featured Image */}
            <div className="relative w-full h-52 overflow-hidden group">
              <Image
                src={blog.featuredImage || "/default-image.jpg"}
                alt={blog.title}
                fill
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-gray-800/70 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                {blog.category}
              </span>
            </div>

            {/* Blog Info */}
            <div className="p-6 flex flex-col flex-grow gap-4">
              <h2 className="text-lg font-bold text-gray-100 line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-gray-300 text-sm flex-grow line-clamp-3">
                {blog.content}
              </p>

              {/* Author & Date */}
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <Image
                    src={blog.authorImage || "/Offer.png"}
                    alt={blog.authorName || "Author"}
                    width={30}
                    height={30}
                    className="rounded-full object-cover border border-gray-700"
                  />
                  <span className="text-gray-300">{blog.authorName || "Unknown"}</span>
                </div>
                <time className="text-gray-400">{new Date(blog.createdAt).toLocaleDateString()}</time>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-auto">
                <button
                  onClick={() => handleDelete(blog._id)}
                  disabled={deletingId === blog._id}
                  className="text-red-400 hover:text-red-600 flex items-center gap-1 text-sm disabled:opacity-50"
                >
                  <Trash2 size={16} /> {deletingId === blog._id ? "Deleting..." : "Delete"}
                </button>

                <Link
                  href={`/x-admin/dashboards/edit-blogs/${blog._id}`}
                  className="text-cyan-400 hover:text-cyan-500 flex items-center gap-1 text-sm"
                >
                  <Pencil size={16} /> Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
