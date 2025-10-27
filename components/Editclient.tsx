"use client";
import { updateProductByID } from '@/app/api/products';
import { fetchBlogById } from '@/lib/fetchproducts';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Form, useForm } from 'react-hook-form';
const Editclient = ({blog } : { blog : any }) => {
    


   const {  register , reset , handleSubmit   } = useForm()
        
       const router = useRouter()
  
  useEffect(() => {
    if (blog) {
      reset(blog); // Sets default values in form
    }
  }, [blog, reset]);

  const onSubmit = async (data: any) => {
    try {
      await updateProductByID(blog._id, data); // Pass ID and data
      alert('Blog updated successfully!');
      router.push('/dashboard/edit-blog')
      
    } catch (error) {
      console.error(error);
      alert('Failed to update blog.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}  >
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
          
            type="text"
             {...register('title')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
          
             {...register('content')}
            
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows={10}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
    
  )
}

export default Editclient