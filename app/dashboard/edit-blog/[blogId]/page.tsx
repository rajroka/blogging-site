import { fetchBlogById } from '@/lib/fetchproducts';
import React from 'react'

const page = async({params } : {params : {blogId : string}}) => {
   
  const id  = params.blogId
    const blog = await fetchBlogById(id);
  console.log(id);

  return (
    
    <div>
      {
        blog.title
      }


    </div>
  )
}

export default page