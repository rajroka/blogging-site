'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '#' },
    ],
    Social: [
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'GitHub', icon: Github, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
    ],
  };

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 text-gray-700 dark:text-zinc-400 border-t border-gray-200 dark:border-white/10 pt-12 md:pt-16 pb-8 transition-colors duration-300">
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* --- Top Section: Branding & Links --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 pb-6 md:pb-16">

          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="bg-gray-200 dark:bg-white p-2 rounded-xl transition-transform duration-300 group-hover:-rotate-3">
                <Globe className="w-5 h-5 text-black dark:text-zinc-900" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tighter">GGBlog</span>
            </Link>
            <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm lg:max-w-xs">
              Latest insights and stories from across the globe, delivered with a modern touch.
            </p>
            <div className="flex flex-wrap gap-3">
              {footerLinks.Social.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  aria-label={social.name}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links Section */}
          <div className="sm:col-span-2 lg:col-span-4  sm:mt-0">
            <div className="space-y-5">
              <h4 className="text-gray-500 dark:text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px]">GGBlog</h4>
              <ul className="space-y-4">
                {footerLinks.Company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium block py-1">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="sm:col-span-2 lg:col-span-4 mt-2 sm:mt-0">
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden group h-full">
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-3">Get in touch</h4>
              <p className="text-gray-600 dark:text-zinc-400 text-xs mb-6 leading-relaxed max-w-[200px]">
                Have a story to share or a question about our platform?
              </p>
              <Link 
                href="mailto:hello@ggblog.com" 
                className="flex items-center gap-3 text-sm text-gray-800 dark:text-zinc-200 font-semibold hover:text-gray-900 dark:hover:text-white transition-colors w-fit"
              >
                <div className="p-2.5 bg-gray-200 dark:bg-white/10 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                   <Mail size={18} className="text-blue-500 dark:text-blue-400 group-hover:text-white" />
                </div>
                <span className="truncate">info@ggblog.com</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className=" pt-1 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-center md:text-left">
          <p className="text-gray-500 dark:text-zinc-500 text-[11px] font-medium tracking-wide">
            © {currentYear}
          </p>
        </div>
    
      </div>
    </footer>
  );
};

export default Footer;
