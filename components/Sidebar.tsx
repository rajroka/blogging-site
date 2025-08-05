import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-green-600 bg-green-50 hover:bg-green-100 rounded transition"
            >
              View All Posts
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/edit-blog"
              className="block px-4 py-2 text-green-600 bg-green-50 hover:bg-green-100 rounded transition"
            >
              Edit Blog
            </Link>
          </li>
           <li>
            <Link
              href="/dashboard/all-blogs"
              className="block px-4 py-2 text-green-600 bg-green-50 hover:bg-green-100 rounded transition"
            >
              All blogs 
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/add-blogs"
              className="block px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition"
            >
              Add New Post
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
