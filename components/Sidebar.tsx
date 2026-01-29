'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, House } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { CirclePlus } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()

  const links = [
    { href: '/x-admin/dashboards', label: 'Dashboard', icon: <House /> },
    { href: '/x-admin/dashboards/all-blogs', label: 'View Posts', icon: '📄' },
    { href: '/x-admin/dashboards/edit-blogs', label: 'Edit Blog', icon: '✏️' },
    { href: '/x-admin/dashboards/add-blogs', label: 'New Post', icon: <CirclePlus /> },
  ]

  return (
    <div className="flex fixed ">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-16'
        } bg-white shadow-md h-screen transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 font-medium">
          {isOpen && <h1 className="text-xl text-gray-800">Admin Panel</h1>}

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
            {links.map(({ href, label, icon }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 px-4 py-2 rounded transition ${
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{icon}</span>
                    {isOpen && <span>{label}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
