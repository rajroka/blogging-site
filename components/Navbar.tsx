'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

type Props = {
  isAdmin?: boolean;
};

const Navbar = ({ isAdmin = false }: Props) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainNav = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
    ...(isAdmin ? [{ href: '/x-admin/dashboards', label: 'Dashboard' }] : []),
  ];

  return (
    <div className="w-full sticky top-0 left-0 z-50 sm:px-8 md:px-12 lg:px-20 bg-white dark:bg-gray-950  border-b border-gray-200 dark:border-gray-800">
      <NavigationMenu className="w-full mx-auto bg-transparent">
        <div className="h-16 flex items-center justify-between w-full px-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="text-2xl font-semibold text-blue-700 rounded-full dark:text-blue-500 hover:opacity-90 transition"
            />
          </Link>

          {/* Desktop Nav */}
          <NavigationMenuList className="hidden md:flex items-center space-x-6">
            {mainNav.map(({ href, label }) => (
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

          {/* Auth + Theme */}
          <div className="hidden md:flex items-center space-x-3">
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

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </NavigationMenu>

      {/* Mobile Menu Panel (Half Width, Full Height) */}
      {mobileOpen && (
        <div className="fixed inset-y-0 right-0 w-1/2 bg-white dark:bg-gray-950 z-40 shadow-lg flex flex-col p-6 space-y-6 transition-transform">
          {/* Cancel Button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="self-end p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Menu Links */}
          {mainNav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`text-lg font-medium ${
                pathname === href
                  ? 'text-blue-600 dark:text-blue-400 underline'
                  : 'text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Auth Buttons */}
          <div className="flex flex-col items-center space-y-3 mt-6">
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
      )}
    </div>
  );
};

export default Navbar;