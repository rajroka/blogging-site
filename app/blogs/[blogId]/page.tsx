// app/blog/[id]/page.tsx

import { fetchBlogById, fetchBlogs } from '@/lib/fetchproducts';
import Image from 'next/image';
import React from 'react';

interface Blog {
  _id: string;
  title: string;
  content: string;
  featuredImage?: string;
  author?: string;
  createdAt?: string;
}

interface PageProps {
  params: {
    blogId: string;
  };
}



export default async function BlogPage({ params } : any )
 {

    const id = params.blogId
      const blog = await fetchBlogById(id)
   

  if (!blog) {
    return <div className="p-6 text-center text-red-500">Blog not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-12">
      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="mb-6">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Meta info */}
      <div className="text-sm text-gray-500 mb-6">
        {blog.author && <span>✍️ {blog.author}</span>}
        {blog.createdAt && (
          <span className="ml-4">📅 {new Date(blog.createdAt).toDateString()}</span>
        )}
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
