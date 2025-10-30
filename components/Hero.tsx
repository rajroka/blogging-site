

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchBlogById, fetchLatestBlog } from '@/lib/fetchproducts';
type FormValues = {
  query: string;
};

type Blog = {
  title: string;
  featuredImage?: string;
  category: string;
  authorName?: string;
  authorImage?: string;
  createdAt: string;
};

const Hero = async () => {
  


  const onSubmit = (data: FormValues) => {
    console.log('Search Query:', data.query);
  
  };



    const blogs = await  fetchLatestBlog();

  return (
    <div className="relative w-full py-10  px-6 md:px-12 lg:px-20  m-auto bg-[#EDF2F7]  font-sans">


    
      {blogs && (
        <div className="relative z-10  h-full w-full  ">
          <Link  href={`/blogs/${blogs._id}`} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row h-[400px] sm:h-[450px]">
            {blogs.featuredImage && (
              <div className="w-full md:w-1/2 h-64 sm:h-full relative">
                <Image
                  src={blogs.featuredImage}
                  alt={blogs.title}
                  fill
                  className="object-cover"
                />
                </div>
            )}
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-sm sm:text-base bg-amber-300  text-black dark:text-gray-400 mb-2 uppercase tracking-wide">
                {blogs.category || 'General'}
              </h3>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {blogs.title}
              </h2>
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-500 dark:text-gray-400">
                <span>{blogs.authorName || 'Unknown Author'}</span>
                <span>•</span>
                <time dateTime={blogs.createdAt}>
                  {new Date(blogs.createdAt).toLocaleDateString()}
                </time>
              </div>
            </div>
          </Link>
        </div>
      )}

   
    </div>
  );
};

export default Hero;
