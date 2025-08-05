import {  BlogPost } from '@/lib/modals/Blog'; 
import connect from '@/lib/db';

export const fetchBlogs = async () => {
  await connect();
  const blogs = await BlogPost.find().sort({ createdAt: -1 });

  return blogs.map((blog : any) => ({
    _id: blog._id.toString(),
    title: blog.title,
    content: blog.content,
    author: blog.author,
    authorName: blog.authorName || '',
    authorEmail: blog.authorEmail || '',
    category: blog.category || '',
    tags: blog.tags || [],
    featuredImage: blog.featuredImage || '',
    slug: blog.slug || '',
    comments: blog.comments || [],
    createdAt: blog.createdAt?.toISOString() || '',
    updatedAt: blog.updatedAt?.toISOString() || '',
  }));
};

export const fetchBlogById = async (id: string) => {
  await connect();
  const blog = await BlogPost.findById(id);
  if (!blog) {
    throw new Error('Blog not found');
  }
  return {
    _id: blog._id.toString(),
    title: blog.title,
    content: blog.content,
    author: blog.author,
    authorName: blog.authorName || '',
    authorEmail: blog.authorEmail || '',
    category: blog.category || '',
    tags: blog.tags || [],
    featuredImage: blog.featuredImage || '',
    slug: blog.slug || '',
    comments: blog.comments || [],
    createdAt: blog.createdAt?.toISOString() || '',
    updatedAt: blog.updatedAt?.toISOString() || '',
  };
};
