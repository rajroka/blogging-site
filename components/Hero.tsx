'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormValues = {
  query: string;
};

type Blog = {
  title: string;
  content: string;
  featuredImage?: string;
  category: string;
  authorImage?: string;
  authorName?: string;
  createdAt: string;
};

const Hero: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const onSubmit = (data: FormValues) => {
    console.log('Search Query:', data.query);
    reset();
  };

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await axios.get('/api/blogs');
        setBlogs(res.data.posts?.slice(0, 4) || []); // take only first 4 blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      }
    };
    loadBlogs();
  }, []);

  const featuredBlog = blogs[0];
  const smallBlogs = blogs.slice(1);

  return (
    <div className="relative w-full min-h-screen bg-gray-100 dark:bg-gray-800 px-4 py-12">
      {/* Background Image */}
      <Image
        src="/bgobj.png"
        alt="Background"
        fill
        className="absolute inset-0 z-0 opacity-50 object-cover"
      />

      {/* Search Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Find Your Favorite Blogs
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Search from thousands of items across categories
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg flex items-center bg-white dark:bg-gray-900 rounded-full shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700"
        >
          <input
            {...register('query')}
            type="text"
            placeholder="Search for products..."
            className="flex-grow px-4 py-3 outline-none text-gray-700 dark:text-gray-200 bg-transparent"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Featured Blog */}
      {featuredBlog && (
        <div className="relative z-10 max-w-5xl mx-auto mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl flex overflow-hidden shadow-lg">
            {featuredBlog.featuredImage && (
              <div className="w-1/2 h-80 relative">
                <Image
                  src={featuredBlog.featuredImage}
                  alt={featuredBlog.title}
                  width={1200}
                  height={600}
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6 flex flex-col justify-between w-full">
              <div>
                <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {featuredBlog.category || 'General'}
                </h3>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {featuredBlog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {featuredBlog.content}
                </p>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-400 mt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={featuredBlog.authorImage || "/Offer.png"}
                    alt={featuredBlog.authorName || "Author"}
                    width={30}
                    height={30}
                    className="rounded-full object-cover"
                  />
                  <span className="text-gray-700">{featuredBlog.authorName || 'Unknown Author'}</span>
                </div>
                <time dateTime={featuredBlog.createdAt}>
                  {new Date(featuredBlog.createdAt).toLocaleDateString()}
                </time>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Smaller Blogs */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {smallBlogs.map((blog, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md">
            {blog.featuredImage && (
              <Image
                src={blog.featuredImage}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {blog.category || 'General'}
              </h3>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                {blog.content}
              </p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
