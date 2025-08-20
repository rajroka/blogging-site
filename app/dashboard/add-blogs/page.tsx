'use client';

import { FiUpload } from 'react-icons/fi';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postBlog } from '@/app/api/blog';
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useUser } from '@clerk/nextjs';

type BlogFormData = {
  title: string;
  content: string;
  category: string;
  tags: string;
  featuredImage: string;
};

export default function AddBlogPage() {
  const { user, isLoaded } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<BlogFormData>();

  const [imageId, setImageId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data: BlogFormData) => {
    if (!user) return alert('You must be logged in to post a blog.');

    setLoading(true);
    setSubmitError('');

    try {
      const tagsArray = data.tags
        ? data.tags.split(',').map((tag) => tag.trim()).filter(Boolean)
        : [];

      const payload = {
        ...data,
        tags: tagsArray,
        featuredImage: imageUrl,
        authorName: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
        authorEmail: user.primaryEmailAddress?.emailAddress || '',
      };

      await postBlog(payload as any);
      alert('Blog post added successfully!');
      reset();
      setImageId('');
      setImageUrl('');
    } catch (error) {
      console.error('Failed to post blog:', error);
      setSubmitError('Failed to add blog post.');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) return <div>Loading user info...</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">
        Add New Blog Post
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block mb-1 font-medium text-gray-700">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            {...register('title', { required: 'Title is required' })}
            className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter blog post title"
          />
          {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>}
        </div>

        {/* Image Preview */}
        {imageId && (
          <div className="mb-4 flex justify-center">
            <CldImage
              src={imageId}
              alt="Uploaded blog featured image"
              width={480}
              height={300}
              className="rounded-md object-contain"
            />
          </div>
        )}

        {/* Image Upload Button */}
        <CldUploadWidget
          uploadPreset="hamburger"
          options={{ resourceType: 'image' }} // only images
          onSuccess={({ event, info }) => {
            if (event === 'success') {
              const uploadInfo = info as { public_id: string; secure_url: string };
              setImageId(uploadInfo.public_id);
              setImageUrl(uploadInfo.secure_url);
              setValue('featuredImage', uploadInfo.secure_url);
            }
          }}
        >
          {({ open }) => (
            <button
              type="button"
              onClick={() => open()}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
            >
              <FiUpload className="text-lg" />
              Upload Featured Image
            </button>
          )}
        </CldUploadWidget>
        <input
          type="hidden"
          {...register('featuredImage', { required: 'Featured image is required' })}
        />
        {errors.featuredImage && (
          <p className="text-red-600 text-sm mt-1">{errors.featuredImage.message}</p>
        )}

        {/* Content */}
        <div>
          <label htmlFor="content" className="block mb-1 font-medium text-gray-700">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            {...register('content', { required: 'Content is required' })}
            className={`w-full rounded border px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.content ? 'border-red-500' : 'border-gray-300'
            }`}
            rows={8}
            placeholder="Write your blog content here"
          />
          {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block mb-1 font-medium text-gray-700">
            Category <span className="text-red-500">*</span>
          </label>
          <input
            id="category"
            {...register('category', { required: 'Category is required' })}
            className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.category ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter blog category"
          />
          {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category.message}</p>}
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block mb-1 font-medium text-gray-700">
            Tags (comma separated)
          </label>
          <input
            id="tags"
            {...register('tags')}
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300"
            placeholder="e.g. technology, webdev, programming"
          />
        </div>

        {submitError && <p className="text-red-600 text-center text-sm mb-2">{submitError}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? 'Posting...' : 'Add Blog Post'}
        </button>
      </form>
    </div>
  );
}
