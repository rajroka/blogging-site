'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import React from 'react';

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
    ...(isAdmin ? [{ href: '/dashboard', label: 'Dashboard' }] : []),
  ];

  const dashboardNav = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/all-blogs', label: 'All Blogs' },
    { href: '/dashboard/add-blog', label: 'Add Blog' },
  ];

  const currentNav = isDashboard ? dashboardNav : mainNav;

  return (
    <div className='w-full  bg-yellow-200 sticky top-0 left-0  dark:bg-gray-800'>
    <NavigationMenu className="w-full  top-0 z-50 shadow-sm mx-auto bg-green-300 sticky dark:bg-gray-900">
      <div className="h-16 flex items-center justify-between w-full px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[#6c47ff]">
          MySite
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenuList className="hidden md:flex items-center space-x-6">
          {currentNav.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link
                  href={href}
                  className={`text-sm transition-colors hover:text-[#6c47ff] dark:text-gray-300 text-gray-700 ${
                    pathname === href ? 'bg-[#6c47ff] text-white ' : ''
                  }`}
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        {/* Auth Buttons */}
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
    </NavigationMenu>
    </div>
  );
};

export default Navbar;
