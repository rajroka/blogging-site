"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"
import { Menu } from "lucide-react"

const Sidebar = () => {
  const { user } = useUser()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-white shadow-md h-screen transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {isOpen && (
            <h1 className="text-xl font-bold text-gray-800">
              {user ? `${user.fullName}'s Panel` : "Admin Panel"}
            </h1>
          )}
          {/* Toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-gray-200"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href={`/dashboard/${user?.id}/posts`}
                className="block px-4 py-2 text-green-600 bg-green-50 hover:bg-green-100 rounded transition"
              >
                {isOpen ? "View My Posts" : "📄"}
              </Link>
            </li>
            <li>
              <Link
                href={`/dashboard/${user?.id}/edit`}
                className="block px-4 py-2 text-green-600 bg-green-50 hover:bg-green-100 rounded transition"
              >
                {isOpen ? "Edit Blog" : "✏️"}
              </Link>
            </li>
            <li>
              <Link
                href={`/dashboard/${user?.id}/blogs`}
                className="block px-4 py-2 text-green-600 bg-green-50 hover:bg-green-100 rounded transition"
              >
                {isOpen ? "My Blogs" : "📝"}
              </Link>
            </li>
            <li>
              <Link
                href={`/dashboard/${user?.id}/add`}
                className="block px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition"
              >
                {isOpen ? "Add New Post" : "➕"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Placeholder
      <div className="flex-1 p-6">Main content here</div> */}
    </div>
  )
}

export default Sidebar
