import Editclient from '@/components/Editclient';
import { fetchBlogById } from '@/lib/fetchproducts';
import React from 'react'

const page = async({params } : {params : {blogId : string}}) => {
   
  const id  = params.blogId
    const blog = await fetchBlogById(id);
  console.log(id);

  return (
    
       <Editclient blog={blog} />
  )
}

export default page