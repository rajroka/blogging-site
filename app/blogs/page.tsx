

import React  from 'react';
import axios from 'axios';
import { fetchBlogs } from '@/lib/fetchproducts';
import Image from 'next/image';
import Link from 'next/link';
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

const Page = async() => {




    const blogs = await fetchBlogs();
   



  return (
     <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#EDF2F7]">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 text-center">
        Discover Our <span className="text-blue-600">Featured Blogs </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog._id}`}
            key={blog._id}
            className="group block bg-white  rounded-xl overflow-hidden shadow hover:shadow-lg transition"
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
            <div className="px-4 mt-2  ">
              <div className='flex flex-col  mb-2'>
                <h3 className="text-lg font-semibold text-gray-800  line-clamp-2">
                {blog.title}
              </h3>
               <p  className='text-xs text-gray-400 ' >{new Date(blog.createdAt).toLocaleDateString()}</p>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {blog.content}
              </p>
      
              {/* Meta Info */}
              <div className="flex items-center justify-between text-xs mb-2  text-gray-500">
                <div className='flex items-center gap-2'>
                  <Image  src={blog.authorImage} className='rounded-full'  alt="" height={30} width={30} />
                <span>By {blog.authorName || "Unknown"}</span>
                </div>
             
                <span> 5 min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
