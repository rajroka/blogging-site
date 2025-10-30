'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import React from 'react';
import ThemeToggle from './ThemeToggle';

type Props = {
  isAdmin?: boolean;
};

const Navbar = ({ isAdmin = false }: Props) => {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  const mainNav = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
    ...(isAdmin ? [{ href: '/dashboard', label: 'Dashboard' }] : []),
  ];

  const dashboardNav = [
    { href: '/dashboard/add-blog', label: 'Add Blog' },
  ];

  const currentNav = isDashboard ? dashboardNav : mainNav;

  return (
    <div className="w-full sticky top-0 left-0 z-50 bg-white dark:bg-gray-950 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <NavigationMenu className="w-full mx-auto bg-transparent">
        <div className="h-16 flex items-center justify-between w-full px-6">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-semibold text-blue-700 dark:text-blue-500 hover:opacity-90 transition"
          >
            MySite
          </Link>

          {/* Navigation Links */}
          <NavigationMenuList className="hidden md:flex items-center space-x-6">
            {currentNav.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className={`text-sm font-medium px-3 py-1 rounded-md transition-all duration-200 ${
                      pathname === href
                        ? 'bg-blue-600 text-white dark:bg-blue-600'
                        : 'text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                    }`}
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            <SignedOut>
              <SignInButton>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-gray-800"
                >
                  Login
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button
                  variant="outline"
                  className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 border border-transparent"
                >
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
