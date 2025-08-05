'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';

import React  from 'react';

type Props = {
  isAdmin?: boolean;
};

const Navbar = ({ isAdmin = false }: Props) => {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  


  const mainNav = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    ...(isAdmin ? [{ href: '/dashboard', label: 'dashboard' }] : []),
  ];

  const dashboardNav = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/all-blogs', label: 'All Blogs' },
    { href: '/dashboard/add-blog', label: 'Add Blog' },
    // ...(isAdmin ? [{ href: '/dashboard', label: 'dashboard' }] : []),
  ];

  const currentNav = isDashboard ? dashboardNav : mainNav;

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full top-0 z-50 shadow-sm bg-white sticky dark:bg-gray-900 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#6c47ff]">
          MySite
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {currentNav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-gray-700 dark:text-gray-300 hover:text-[#6c47ff] transition ${
                pathname === href ? 'font-semibold text-[#6c47ff]' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-1 text-[#6c47ff] border border-[#6c47ff] rounded hover:bg-[#f0ecff]">
                Login
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-4 py-1 bg-[#6c47ff] text-white rounded hover:bg-[#5b3ddb]">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
