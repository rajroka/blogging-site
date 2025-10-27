// app/blog/page.tsx
import { fetchBlogs } from "@/lib/fetchproducts";
import Barchart from "@/components/Barchart";
import { NotepadText } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
export default async function Page() {
  const blogs = await fetchBlogs();
  const blognumber = blogs.length;

  const stats = [
    { label: "Total Posts", value: blognumber },
    { label: "Published Posts", value: blognumber - 2 },
    { label: "Drafts", value: 2 },
    { label: "Archived", value: 1 },
  ];

  return (
    <div className="flex flex-col gap-8 min-h-screen dark:bg-gray-950 text-gray-100">
      {/* Header */}
      <h1 className="text-3xl font-bold text-black"> Blog Dashboard</h1>
       <div>
       <Breadcrumb className="text-black" >
  <BreadcrumbList>
    {/* <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator /> */}
    <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard">dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
  
  </BreadcrumbList>
</Breadcrumb>
       </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="group bg-gray-900 shadow-lg hover:shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-800 transition-all duration-200 hover:-translate-y-1 hover:bg-gray-800/80"
          >
            <div className="bg-emerald-900/40 p-3 rounded-full mb-4 group-hover:bg-emerald-700/40 transition-colors">
              <NotepadText className="text-emerald-400" size={36} />
            </div>
            <h2 className="text-lg font-medium text-gray-300 mb-1">{item.label}</h2>
             <p className="text-3xl font-bold text-emerald-400">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-800 overflow-x-auto">
        <h2 className="text-xl font-semibold text-white mb-4">Blog Statistics</h2>
        {/* Wrap chart in min width for small screens */}
        <div className="min-w-[600px]">
          <Barchart />
        </div>
      </div>
    </div>
  );
}
