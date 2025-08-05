// app/blog/page.tsx  (Server Component by default, no 'use client')
import BlogList from "@/components/BlogList"
import { fetchBlogs } from "@/lib/fetchproducts";

export default async function Page() {



    const blogs = await fetchBlogs();
   const blognumber = blogs.length;


  return (

    <>
      <div>
        <h1>no of blogs : {blognumber}</h1>
      </div>
    </>
  )
}

{/* <BlogList blogs={blogs} />; */}
