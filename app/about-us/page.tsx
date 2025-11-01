import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center flex-1 px-6 sm:px-12 lg:px-24 py-20 gap-12 lg:gap-16 relative">

        {/* Title (Desktop) */}
        <h1 className="absolute top-16 lg:top-20 hidden lg:flex text-4xl lg:text-5xl font-extrabold text-gray-900 bg-white px-6 py-2 rounded shadow-lg z-10">
          ABOUT US
        </h1>

        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-80 sm:w-72 sm:h-90 lg:w-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/me.JPG"
              alt="About"
              loading="lazy"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:pt-24 px-2 sm:px-4 text-center lg:text-left">
          {/* Title (Mobile) */}
          <h1 className="flex lg:hidden text-2xl lg:text-5xl font-extrabold text-gray-900 px-6 py-2 rounded z-10 text-center">
            ABOUT US
          </h1>

          <p className="text-gray-800 text-sm md:text-lg leading-relaxed text-balance">
            This blog is managed by a passionate solo developer dedicated to sharing insights
            on technology, design, and creativity. The aim is to make learning practical,
            simple, and enjoyable for everyone. Whether you’re just starting out or exploring
            new ideas, this space is built to inspire and guide you.
          </p>

          <p className="text-gray-800 text-sm md:text-lg leading-relaxed text-balance">
            Explore tutorials, tips, and resources designed to help you grow your skills and
            stay up-to-date with the latest trends in tech and design.
          </p>

          <div className="mt-4 flex justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
