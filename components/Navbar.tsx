'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {ModeToggle} from '@/components/Dark';
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
    <div className="w-full  top-0 left-0 sticky bg-white z-50 dark:bg-gray-900 shadow-sm">
      <NavigationMenu className="w-full top-0 z-50 mx-auto bg-white dark:bg-gray-900">
        <div className="h-16 flex items-center justify-between w-full px-6">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            MySite
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenuList className="hidden md:flex items-center space-x-6">
            {currentNav.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className={`text-sm px-3 py-1 rounded transition-colors ${
                      pathname === href
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:text-blue-600 dark:text-gray-300'
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
              <Button  asChild className=" outline-0 md:inline-flex">
                <ModeToggle  />
               </Button>
               
            <SignedOut>
              <SignInButton>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Login
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600">
                  Sign Up
                </Button>
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
