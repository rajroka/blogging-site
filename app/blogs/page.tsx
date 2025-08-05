'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Blog {
  _id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage: string;
  createdAt: string;
   author: string;
}

const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('/api/blogs');
        setBlogs(res.data);
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog._id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.category}</p>
              <img src={blog.featuredImage} alt="featured" className="w-full h-48 object-cover mt-2 rounded" />
              <p className="mt-2 text-sm text-gray-700">{blog.content.slice(0, 100)}...</p>
              {blog.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
