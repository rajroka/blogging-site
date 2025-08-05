// app/blog/page.tsx  (Server Component by default, no 'use client')
import BlogList from "@/components/BlogList"
import { fetchBlogs } from "@/lib/fetchproducts";

export default async function Page() {



    const blogs = await fetchBlogs();
 

  return <BlogList blogs={blogs} />;
}

