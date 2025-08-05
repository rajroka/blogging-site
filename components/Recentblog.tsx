import { fetchBlogs } from '@/lib/fetchproducts';
import React from 'react';

const Recentblog = async () => {
  const blogs = await fetchBlogs();

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Recentblog;
