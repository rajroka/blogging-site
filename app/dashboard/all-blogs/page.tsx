import { fetchBlogs } from '@/lib/fetchproducts'
import React from 'react'
import Image from 'next/image'
const page = async() => {


    const blogs = await fetchBlogs()
 return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog._id}>
           <Image src={blog.featuredImage} alt={blog.title}  height={100} width={100} />
           <h2>{blog.title}</h2>
            
          </div>
        )
      })}
    </div>
  )
}

export default page