

import React from 'react';
import Image from 'next/image';

import { fetchLatestBlog } from '@/lib/fetchproducts';
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
      {/* Background Image */}
      {/* <Image
        src="/bgobj.png"
        alt="Background"
        fill
        className="absolute inset-0 z-0 opacity-50 object-cover"
      /> */}


      {/* Featured Blog (slightly smaller) */}
      {blogs && (
        <div className="relative z-10  h-full w-full  ">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row h-[400px] sm:h-[450px]">
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
              <h3 className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
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
          </div>
        </div>
      )}

      {/* Smaller Blogs (fit in one row, full width each) */}
      {/* <div className="relative z-10 max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {smallBlogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800  rounded-xl overflow-hidden shadow-md flex flex-row w-full h-32"
          >
            {blog.featuredImage && (
              <div className=" h-full relative">
                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  height={130}
                  width={130}
                  className="object-cover  h-auto w-full "
                />
              </div>
            )}
            <div className="p-4 flex flex-col justify-center w-2/3">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {blog.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{blog.authorName || 'Unknown Author'}</span>
                <span>•</span>
                <time dateTime={blog.createdAt}>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </time>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Hero;
